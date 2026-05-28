export default function Loading() {
  return (
    <div className="bg-dots fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-rose-light" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-rose-burnt" />
      </div>
      <p className="mt-6 font-display text-xl text-rose-burnt">Doce Manifesto</p>
      <p className="mt-1 text-sm text-chocolate/50">Preparando algo delicioso...</p>
    </div>
  );
}
