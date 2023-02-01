// import fetch from "cross-fetch";
// import { dataStorage } from "./api-login";
import { apiRequest } from "./api-login";

export const getUsers = async () => {
  try {
    const users = await apiRequest(
      `${process.env.REACT_APP_API_URL}users`,
      "GET"
    );
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
    const user = await apiRequest(
      `${process.env.REACT_APP_API_URL}users/${id}`,
      "GET"
    );
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
    const user = await apiRequest(
      `${process.env.REACT_APP_API_URL}users/${id}`,
      "DELETE"
    );
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
    const user = await apiRequest(
      `${process.env.REACT_APP_API_URL}users`,
      "POST",
      data
    );
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
      `${process.env.REACT_APP_API_URL}users/${id}`,
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
