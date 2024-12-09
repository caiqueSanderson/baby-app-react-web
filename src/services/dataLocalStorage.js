function getStoredDataLocalStorage() {
  const storedItems = JSON.parse(localStorage.getItem("@items")) || [];
  return storedItems;
}

export { getStoredDataLocalStorage };
