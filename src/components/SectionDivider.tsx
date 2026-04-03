const SectionDivider = ({ fromDark = false }: { fromDark?: boolean }) => {
  return (
    <div
      className={`relative h-20 overflow-hidden bg-background md:h-28 ${
        fromDark
          ? "bg-[linear-gradient(180deg,rgba(10,10,12,1)_0%,rgba(12,12,14,0.94)_35%,rgba(18,18,20,0.65)_70%,rgba(26,26,28,0.22)_100%)]"
          : "bg-[linear-gradient(180deg,rgba(26,26,28,0.22)_0%,rgba(18,18,20,0.65)_30%,rgba(12,12,14,0.94)_65%,rgba(10,10,12,1)_100%)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,0.05),_transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background/85" />
    </div>
  );
};

export default SectionDivider;
