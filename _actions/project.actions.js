import { useSetRecoilState, useRecoilState } from "recoil";

import { projectsAtom, projectmessagesAtom } from "../_state";
import { useFetchWrapper } from "../_helpers";

export function useProjectAction() {
  let bearer_token = localStorage.getItem("authToken");

  var bearer = "Bearer " + bearer_token.replace(/['"]+/g, "");

  const baseUrl = `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}`;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: bearer,
  };

  const setProjects = useSetRecoilState(projectsAtom);
  const setProjectMessages = useSetRecoilState(projectmessagesAtom);

  async function getProjects(req) {
    req = JSON.stringify(req);

    try {
      const res = await fetch(`${baseUrl}/api/projects`, {
        method: "POST",
        headers,
        body: req,
      });
      if (res.status === 200) {
        const { data } = await res.json();

        setProjects(data);
      } else {
        console.error(
          `status : ${res.status},\n Message : ${res.statusText}, \n Url: ${res.url}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getProjectMessages(req) {
    req = JSON.stringify(req);

    try {
      const res = await fetch(`${baseUrl}/api/messages`, {
        method: "POST",
        headers,
        body: req,
      });
      if (res.status === 200) {
        const { data } = await res.json();

        setProjectMessages(data);
      } else {
        console.error(
          `status : ${res.status},\n Message : ${res.statusText}, \n Url: ${res.url}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getProjects,
    getProjectMessages,
  };
}
