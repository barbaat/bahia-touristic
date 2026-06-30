import Header from './Header';
import Footer from './Footer';

function LegalLayout({ title, updated, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-site-gradient">
      <Header />
      <main className="flex-grow pb-20 pt-32 md:pt-40">
        <div className="container-shell max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
          {updated ? <p className="mt-2 text-sm text-slate-500">Última actualización: {updated}</p> : null}
          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-slate-700 md:text-base">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LegalLayout;
