export function truncateText(str, length = 55) {
  return str.length > length ? str.slice(0, length).trim() + '...' : str;
}
