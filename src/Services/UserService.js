export async function userLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let u = {
        username, password
      };
      resolve(u);
    }, 1000);
  });
};

export async function userLogout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};