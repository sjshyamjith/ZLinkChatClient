const BASE_URL = process.env.API_URL;
const AUTH_URL = "/api/User/login";
const REGISTER_URL = "/api/User";
const ALL_USERS_API = "/api/User/all";

const allUsers = async (userId) => {
  const url = BASE_URL + ALL_USERS_API + "/" + userId;

  //connect api
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const login = async (email, password) => {
  const url = BASE_URL + AUTH_URL;

  //connect api
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Email: email, Password: password }),
  });
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const register = async (fullName, email, password) => {
  //connect api
  const url = BASE_URL + REGISTER_URL;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Name: fullName, Email: email, Password: password }),
  });
  if (response.status != 200) {
    return null;
  }
  try {
    const result = await response.json();
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default { login, register, allUsers };
