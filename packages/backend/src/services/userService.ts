import { users } from "../constants/users.js";

const ADMIN = "admin";

export type User = {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_admin: boolean;
};

export const getUserByUserName = async (username: string) => {
  const foundUser = findUserByName(username);

  if (foundUser) {
    const user: User = { ...foundUser, is_admin: foundUser.role === ADMIN };
    return user;
  }
  return null;
};

export const getAllUsers = async () => {
  const userList: User[] = users.map((usr) => {
    const user: User = {...usr,  is_admin: usr.role === ADMIN};
    return user;
  });

  return userList;
};


export const getUserById = async (userId: number) => {
  const foundUser = findUserById(userId);
  if (foundUser) {
    const user: User = { ...foundUser, is_admin: foundUser.role === ADMIN };
    return user;
  }
  return null;
};

export const loginValid = async (username: string, password: string) => {
  const foundUser = findUserByName(username);
  
  if (foundUser && password === foundUser.password) {
    const user: User = {...foundUser, is_admin: foundUser.role === ADMIN}
    return user;
  }

  return null;
};

// Helper functions
const findUserByName = (username: string) => {
  return users.find((usr) => usr.username === username);
};

const findUserById = (userId: number) => {
  return users.find((usr) => usr.user_id === userId);
};
