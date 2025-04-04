export function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

export function formatDate(dateStr: string): string {
  const dateObject = new Date(dateStr);
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  };

  return new Intl.DateTimeFormat("es-MX", options).format(dateObject);
}
