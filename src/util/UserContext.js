import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "DUMMY_EMAIL",
  },
  setUser: () => null,
  isLogin: false,
  setIsLogin: () => null,
});
