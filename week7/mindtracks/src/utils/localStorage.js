const STORAGE_KEY = "mindtrack_entries";

export const getEntries = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveEntry = (entry) => {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};
