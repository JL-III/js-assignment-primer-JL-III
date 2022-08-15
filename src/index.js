export function calculateTotal (items, tax) {
  let total = 0
  tax = Math.abs(tax)
  for (let item of items) {
    const {taxable, price} = item
    if (taxable) {
      total += price * (1 + tax)
    } else {
      total += price
    }
  }
  return total
}