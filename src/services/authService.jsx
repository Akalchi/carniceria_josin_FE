export const adminCredentials = { username: "admin", password: "password123" };

export const authenticateUser = (username, password) => {
  if (username === adminCredentials.username && password === adminCredentials.password) {
    return true; 
  }
  return false; 
};