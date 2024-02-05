export function calculateLastPage(totalRows: number, limit: number): number {
  return Math.ceil(totalRows / limit);
}
