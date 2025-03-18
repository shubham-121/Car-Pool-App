export default function formatDate(isostring) {
  const date = new Date(isostring);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
