import fetch from "cross-fetch";

import { REACT_APP_API_URL } from "./env";

async function apiRequest(url, method, data) {
  const dataStorage = JSON.parse(localStorage.getItem("auth_data"));

  const response = await fetch(url, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: `Bearer ${
        dataStorage !== null ? dataStorage.token.token : ""
      }`,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
export const getUsers = async () => {
  try {
    const users = await apiRequest(`${REACT_APP_API_URL}users`, "GET");
    if (users.status >= 400) {
      throw new Error("Bad response from server");
    }
    return users;
  } catch (err) {
    console.error(err);
  }
};
export const getUser = async (id) => {
  try {
    const user = await apiRequest(`${REACT_APP_API_URL}users/${id}`, "GET");
    if (user.status >= 400) {
      throw new Error("Bad response from server");
    }
    return user;
  } catch (err) {
    console.error(err);
  }
};
export const deleteUser = async (id) => {
  try {
    const user = await apiRequest(`${REACT_APP_API_URL}users/${id}`, "DELETE");
    if (user.status >= 400) {
      throw new Error("Bad response from server");
    }

    return user;
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (data) => {
  try {
    const user = await apiRequest(`${REACT_APP_API_URL}users`, "POST", data);
    if (user.status >= 400) {
      throw new Error("Bad response from server");
    }
    return user;
  } catch (err) {
    console.error(err);
  }
};
export const editUser = async (id, data) => {
  try {
    const response = await apiRequest(
      `${REACT_APP_API_URL}users/${id}`,
      "PATCH",
      data
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    console.log(response, "response api");
    return response;
  } catch (err) {
    console.error(err);
  }
};
