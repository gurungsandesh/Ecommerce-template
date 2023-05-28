export const fetchAllData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (res) {
      return res.json();
    }
  } catch (error) {
    return error;
  }
};

export const fetchDataById = async (id: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (res) {
      return res.json();
    }
  } catch (error) {
    return error;
  }
};

export const fetchDataByCategories = async (category: string) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    if (res) {
      return res.json();
    }
  } catch (error) {
    return error;
  }
};

export const fetchAllCategories = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/categories`);
    if (res) {
      return res.json();
    }
  } catch (error) {
    return error;
  }
};
