export const decodeHtml = (unsafe) => {
  return unsafe
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&ocirc;/g, "ô")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
