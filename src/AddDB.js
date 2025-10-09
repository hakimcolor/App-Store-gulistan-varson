
export const getApp = () => {
  const storedApp = localStorage.getItem('instal');
  if (storedApp) {
    return JSON.parse(storedApp);
  }
  return [];
};


export const addToDB = (id) => {
  const data = getApp();
  if (data.includes(id)) {
    alert('Data already exists!');
  } else {
    data.push(id);
    localStorage.setItem('instal', JSON.stringify(data));
  }
  return data;
};

export const removeFromDB = (id) => {
  const storedApps = getApp();

const remaining = storedApps.filter((appId) => appId !== id.toString());

 
  localStorage.setItem('instal', JSON.stringify(remaining));
  return remaining;
};
