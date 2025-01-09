export const debounce = (fn: () => void, wait: number) => {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(), wait);
  };
};
