const SectionDivider = () => {
  return (
    <div className="relative h-12 md:h-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[60%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
};

export default SectionDivider;
