export const setStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getStorage = (key) => window.localStorage.getItem(key);

export const deleteItemStorage = (key) => {
  window.localStorage.removeItem(key);
};

export const deleteStorage = () => {
  window.localStorage.clear();
};
