const getItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Cannot load storage data: ${error}`);
  }
};

const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // TODO: Implement logging
    console.error(`Cannot save storage data: ${error}`);
  }
};

export const getJsonItem = (key: string) => JSON.parse(getItem(key) as string);

export const setJsonItem = (key: string, value: any) => setItem(key, JSON.stringify(value));

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Cannot remove storage data: ${error}`);
  }
};
