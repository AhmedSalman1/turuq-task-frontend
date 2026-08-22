/**
 * Deterministic bar widths (px) so the barcode strip never shifts between
 * server and client renders.
 */
const BARCODE_BARS = [3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 4, 1, 2, 1, 3, 1, 1, 2, 4, 2, 1, 3];

interface BarcodeProps {
  className?: string;
}

/**
 * Decorative barcode strip — the app's warehouse-tag signature, shared by
 * the profile and product cards.
 */
export default function Barcode({ className = '' }: BarcodeProps) {
  return (
    <div className={`flex h-8 w-full items-end justify-between ${className}`} aria-hidden="true">
      {BARCODE_BARS.map((width, i) => (
        <span key={i} className="h-full shrink-0 rounded-[1px] bg-foreground/30" style={{ width }} />
      ))}
    </div>
  );
}
