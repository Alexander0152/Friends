export default {
  set(name: string, value: string): void {
    localStorage.setItem(name, value);
  },

  get(name: string): string {
    return localStorage.getItem(name) || '';
  },

  delete(name: string): void {
    localStorage.removeItem(name);
  },
};