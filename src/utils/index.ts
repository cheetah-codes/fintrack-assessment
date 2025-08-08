export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debounced.cancel = () => clearTimeout(timeoutId);

  return debounced;
}
