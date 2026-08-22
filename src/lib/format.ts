/** Shared price formatter — one place to change currency/locale. */
const PRICE_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(price: number): string {
  return PRICE_FORMATTER.format(price);
}
