export const UNIT_PRICE = 149.99;
export const ORIGINAL_UNIT_PRICE = 199.90;
export const PROMO_PRICE = 279.99;
export const PROMO_ORIGINAL_PRICE = 349.97;

export function calculateCartPrice(quantity: number): {
  total: number;
  originalTotal: number;
  discount: number;
  isPromoApplied: boolean;
} {
  if (quantity === 0) {
    return { total: 0, originalTotal: 0, discount: 0, isPromoApplied: false };
  }

  if (quantity === 1) {
    return {
      total: UNIT_PRICE,
      originalTotal: ORIGINAL_UNIT_PRICE,
      discount: ORIGINAL_UNIT_PRICE - UNIT_PRICE,
      isPromoApplied: false,
    };
  }

  if (quantity === 2) {
    return {
      total: PROMO_PRICE,
      originalTotal: PROMO_ORIGINAL_PRICE,
      discount: PROMO_ORIGINAL_PRICE - PROMO_PRICE,
      isPromoApplied: true,
    };
  }

  // 3 or more shirts
  const total = quantity * UNIT_PRICE;
  const originalTotal = quantity * ORIGINAL_UNIT_PRICE;
  return {
    total,
    originalTotal,
    discount: originalTotal - total,
    isPromoApplied: false,
  };
}
