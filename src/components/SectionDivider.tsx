const SectionDivider = ({ fromDark = false }: { fromDark?: boolean }) => {
  return (
    <div
      className={`h-16 md:h-24 relative overflow-hidden ${
        fromDark
          ? "bg-gradient-to-b from-secondary/30 via-background/20 to-background"
          : "bg-gradient-to-b from-background via-background/10 to-secondary/30"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background/70 pointer-events-none" />
    </div>
  );
};

export default SectionDivider;
