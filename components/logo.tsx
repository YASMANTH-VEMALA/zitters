import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="Zitters home">
      <span className="brand-mark">
        <Image src="/brand-mark.png" alt="" width={44} height={44} priority />
      </span>
      {!compact && <span className="brand-name">Zitters</span>}
    </span>
  );
}
