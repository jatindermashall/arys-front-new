import { atom } from "recoil";

const projectsAtom = atom({
  key: "projects",
  default: [],
});

const projectmessagesAtom = atom({
  key: "projectmessages",
  default: [],
});
const projectAtom = atom({
  key: "project",
  default: [],
});

export { projectsAtom, projectmessagesAtom, projectAtom };
