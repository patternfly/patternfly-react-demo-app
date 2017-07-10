export const localApi = {
  setIntoLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
};
