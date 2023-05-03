export function formatDate(dateString, options) {
  const { format } = new Intl.DateTimeFormat("pt-BR", options);
  return format(new Date(dateString));
}
