export function setStorage(label, value) {
  if (!sessionStorage) return;

  try {
    sessionStorage.setItem(label, JSON.stringify(value));
  } catch {
    sessionStorage.setItem(label, value);
  }
}
export function getStorage(label) {
  if (!sessionStorage) return;

  try {
    return JSON.parse(sessionStorage.getItem(label) ?? "");
  } catch {
    return sessionStorage.getItem(label);
  }
}
