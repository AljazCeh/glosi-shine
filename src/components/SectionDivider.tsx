const SectionDivider = ({ fromDark = false }: { fromDark?: boolean }) => {
  return (
    <div
      className={`h-16 md:h-24 relative ${
        fromDark
          ? "bg-gradient-to-b from-secondary/50 to-background"
          : "bg-gradient-to-b from-background to-secondary/50"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
    </div>
  );
};

export default SectionDivider;
