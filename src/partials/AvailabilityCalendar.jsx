import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_APARTMENT_ID, fetchApartmentAvailability } from '../services/availabilityService';
import { siteConfig } from '../config/site';

const WEEKDAY_LABELS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const MONTH_FORMATTER = new Intl.DateTimeFormat('es-ES', {
  month: 'long',
  year: 'numeric',
});

/**
 * @param {Date} date
 * @returns {Date}
 */
function getStartOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * @param {Date} date
 * @returns {string}
 */
function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * @param {string} rawDate
 * @returns {Date | null}
 */
function parseDateKey(rawDate) {
  const parts = rawDate.split('-').map((part) => Number(part));

  if (parts.length !== 3 || parts.some((part) => !Number.isInteger(part))) {
    return null;
  }

  const [year, month, day] = parts;
  const parsedDate = new Date(year, month - 1, day);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}

/**
 * @param {Date} date
 * @returns {Date}
 */
function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * @param {Date} date
 * @param {number} monthOffset
 * @returns {Date}
 */
function addMonths(date, monthOffset) {
  return new Date(date.getFullYear(), date.getMonth() + monthOffset, 1);
}

/**
 * @param {Date} monthStart
 * @param {Set<string>} reservedDateKeys
 * @returns {{ key: string; day: number; isReserved: boolean; isPast: boolean }[]}
 */
function buildMonthDays(monthStart, reservedDateKeys) {
  const year = monthStart.getFullYear();
  const monthIndex = monthStart.getMonth();
  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOffset = (firstDayOfMonth.getDay() + 6) % 7;
  const today = getStartOfDay(new Date());

  /** @type {{ key: string; day: number; isReserved: boolean; isPast: boolean }[]} */
  const days = [];

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    const currentDate = new Date(year, monthIndex, dayNumber);
    const key = toDateKey(currentDate);

    days.push({
      key,
      day: dayNumber,
      isReserved: reservedDateKeys.has(key),
      isPast: currentDate.getTime() < today.getTime(),
    });
  }

  if (firstDayOffset === 0) {
    return days;
  }

  return [
    ...Array.from({ length: firstDayOffset }, (_, index) => ({
      key: `empty-${monthIndex}-${index}`,
      day: 0,
      isReserved: false,
      isPast: true,
    })),
    ...days,
  ];
}

/**
 * @param {{ apartmentId?: string }} props
 * @returns {JSX.Element}
 */
function AvailabilityCalendar({ apartmentId = DEFAULT_APARTMENT_ID }) {
  const [status, setStatus] = useState('loading');
  const [reservedDates, setReservedDates] = useState(/** @type {string[]} */ ([]));
  const [updatedAt, setUpdatedAt] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [visibleMonthOffset, setVisibleMonthOffset] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setStatus('loading');
    setErrorMessage('');

    fetchApartmentAvailability(apartmentId, controller.signal)
      .then((payload) => {
        setReservedDates(payload.reservedDates);
        setUpdatedAt(payload.updatedAt);
        setSelectedDate('');
        setStatus('success');
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return;
        }

        console.error(error);
        setErrorMessage('No pudimos cargar la disponibilidad en este momento.');
        setStatus('error');
      });

    return () => {
      controller.abort();
    };
  }, [apartmentId]);

  const normalizedReservedDates = useMemo(
    () =>
      reservedDates
        .map((item) => parseDateKey(item))
        .filter((item) => item instanceof Date)
        .map((item) => /** @type {Date} */ (item)),
    [reservedDates],
  );

  const reservedDateKeys = useMemo(() => new Set(normalizedReservedDates.map((item) => toDateKey(item))), [normalizedReservedDates]);

  const currentMonthStart = useMemo(() => getMonthStart(new Date()), []);
  const visibleMonthStart = useMemo(() => addMonths(currentMonthStart, visibleMonthOffset), [currentMonthStart, visibleMonthOffset]);

  const formattedUpdatedAt = useMemo(() => {
    if (updatedAt.length === 0) {
      return '';
    }

    const date = new Date(updatedAt);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }, [updatedAt]);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="mt-1 text-xl font-bold text-slate-900">Calendario de reserva</h3>
          <p>
            Llama a{' '}
            <a href={siteConfig.phoneHref} className="font-semibold text-teal-700 hover:text-teal-800">
              {siteConfig.phoneDisplay}
            </a>{' '}
            para reservar
          </p>
        </div>
      </div>

      {status === 'loading' ? (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">Cargando reservas...</div>
      ) : null}

      {status === 'error' ? (
        <div className="mt-5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{errorMessage}</div>
      ) : null}

      {status === 'success' ? (
        <div className="mt-5 space-y-4">
          <section className="rounded-xl border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setVisibleMonthOffset((previousOffset) => previousOffset - 1)}
                className="h-9 w-9 rounded-full border border-slate-200 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                aria-label="Mes anterior"
              >
                {'<'}
              </button>
              <h4 className="text-center text-sm font-semibold capitalize text-slate-900">{MONTH_FORMATTER.format(visibleMonthStart)}</h4>
              <button
                type="button"
                onClick={() => setVisibleMonthOffset((previousOffset) => previousOffset + 1)}
                className="h-9 w-9 rounded-full border border-slate-200 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                aria-label="Mes siguiente"
              >
                {'>'}
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase text-slate-400">
              {WEEKDAY_LABELS.map((label) => (
                <span key={`${visibleMonthStart.toISOString()}-${label}`}>{label}</span>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-7 gap-1">
              {buildMonthDays(visibleMonthStart, reservedDateKeys).map((day) => {
                if (day.day === 0) {
                  return <span key={day.key} className="h-11" aria-hidden="true" />;
                }

                const isSelected = selectedDate === day.key;
                const isEnabled = !day.isReserved && !day.isPast;

                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => {
                      if (isEnabled) {
                        setSelectedDate(day.key);
                      }
                    }}
                    className={
                      day.isReserved
                        ? 'h-11 rounded-lg border border-rose-200 bg-rose-100 text-rose-800'
                        : isSelected
                          ? 'h-11 rounded-lg bg-teal-700 text-white'
                          : isEnabled
                            ? 'h-11 rounded-lg bg-emerald-100 text-emerald-900 transition hover:bg-emerald-200'
                            : 'h-11 rounded-lg bg-slate-100 text-slate-400'
                    }
                    disabled={!isEnabled}
                    aria-label={`Dia ${day.day} ${day.isReserved ? 'reservado' : 'disponible'}`}
                  >
                    {day.isReserved ? (
                      <span className="flex flex-col items-center justify-center text-[10px] font-semibold leading-tight">
                        <span className="text-xs">{day.day}</span>
                        <span>Reservado</span>
                      </span>
                    ) : (
                      <span className="text-xs font-semibold">{day.day}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-emerald-200" aria-hidden="true" />
                Disponible
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-rose-200" aria-hidden="true" />
                Reservado
              </span>
              {selectedDate.length > 0 ? <span className="font-semibold text-teal-800">Dia seleccionado: {selectedDate}</span> : null}
            </div>
            {reservedDateKeys.size === 0 ? <p className="mt-2 text-sm text-slate-600">No hay dias reservados en el Google Sheet.</p> : null}
            {formattedUpdatedAt.length > 0 ? <p className="mt-2 text-xs text-slate-500">Actualizado: {formattedUpdatedAt}</p> : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default AvailabilityCalendar;
