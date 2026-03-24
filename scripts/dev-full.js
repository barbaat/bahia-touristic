const { spawn } = require('node:child_process');

/**
 * @typedef {Object} ManagedProcess
 * @property {string} name
 * @property {import('node:child_process').ChildProcess} childProcess
 */

/**
 * @returns {string}
 */
function resolveNpmCommand() {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

/**
 * @param {Buffer | string} chunk
 * @returns {string}
 */
function normalizeChunk(chunk) {
  return chunk.toString().trimEnd();
}

/**
 * @param {ManagedProcess} processConfig
 * @param {NodeJS.WriteStream} stream
 * @param {Buffer | string} chunk
 * @returns {void}
 */
function writeProcessOutput(processConfig, stream, chunk) {
  const normalizedChunk = normalizeChunk(chunk);

  if (normalizedChunk.length === 0) {
    return;
  }

  const lines = normalizedChunk.split('\n');
  lines.forEach((line) => {
    stream.write(`[${processConfig.name}] ${line}\n`);
  });
}

const npmCommand = resolveNpmCommand();

/** @type {ManagedProcess[]} */
const managedProcesses = [
  {
    name: 'server',
    childProcess: spawn(npmCommand, ['run', 'dev:server'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    }),
  },
  {
    name: 'frontend',
    childProcess: spawn(npmCommand, ['run', 'dev'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    }),
  },
];

let isShuttingDown = false;
let processExitCode = 0;

/**
 * @param {number} exitCode
 * @returns {void}
 */
function shutdownAll(exitCode) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;
  processExitCode = processExitCode === 0 ? exitCode : processExitCode;

  managedProcesses.forEach(({ childProcess }) => {
    if (!childProcess.killed) {
      childProcess.kill('SIGTERM');
    }
  });
}

/**
 * @returns {void}
 */
function maybeExit() {
  const hasRunningProcess = managedProcesses.some(({ childProcess }) => childProcess.exitCode === null);

  if (!hasRunningProcess) {
    process.exit(processExitCode);
  }
}

managedProcesses.forEach((processConfig) => {
  processConfig.childProcess.stdout?.on('data', (chunk) => {
    writeProcessOutput(processConfig, process.stdout, chunk);
  });

  processConfig.childProcess.stderr?.on('data', (chunk) => {
    writeProcessOutput(processConfig, process.stderr, chunk);
  });

  processConfig.childProcess.on('exit', (code) => {
    const childExitCode = code ?? 1;

    if (!isShuttingDown && childExitCode !== 0) {
      shutdownAll(childExitCode);
    } else if (!isShuttingDown && childExitCode === 0) {
      shutdownAll(0);
    }

    maybeExit();
  });

  processConfig.childProcess.on('error', (error) => {
    writeProcessOutput(
      processConfig,
      process.stderr,
      `No se pudo arrancar el proceso: ${error.message}`,
    );
    shutdownAll(1);
    maybeExit();
  });
});

process.on('SIGINT', () => {
  shutdownAll(0);
  maybeExit();
});

process.on('SIGTERM', () => {
  shutdownAll(0);
  maybeExit();
});
