/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;

  let discount = 0;

  if (days >= LONG_TERM) {
    discount = DISCOUNT_LONG_TERM;
  } else if (days >= SHORT_TERM) {
    discount = DISCOUNT_SHORT_TERM;
  }

  return days * DAY_COST - discount;
}

module.exports = calculateRentalCost;
