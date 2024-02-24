import { atom } from "recoil";

const usersAtom = atom({
  key: "users",
  default: (typeof window !== 'undefined')? localStorage.getItem("user"):""  ,
});



export { usersAtom};
