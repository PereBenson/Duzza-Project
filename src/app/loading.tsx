export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="bg-canvas py-24">
      <div className="mx-auto w-full max-w-[80rem] px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Loading</p>
        <p className="mt-3 text-base text-muted">Preparing the page.</p>
      </div>
    </div>
  );
}
