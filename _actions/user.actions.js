import Router from 'next/router'

import { useSetRecoilState } from "recoil";

import { useFetchWrapper } from "../_helpers";
import { authAtom, usersAtom } from "../_state";

export { useUserActions };

function useUserActions() {
  const baseUrl = `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}`;
  const fetchWrapper = useFetchWrapper();
  const setAuth = useSetRecoilState(authAtom);
  const setUsers = useSetRecoilState(usersAtom);
  
  return {
    login,
    logout,
    getAll,
  };

  async function login(email, password) {

    
    const result = await fetchWrapper.post(`${baseUrl}/api/users/login`, {
      email,
      password,
    });
    console.log(result)
   
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    if (result.success === 1) {
      localStorage.setItem("authToken", JSON.stringify(result.token));
      localStorage.setItem("user", JSON.stringify(result.user));
      setAuth(result.token);
      setUsers(result.user);
      localStorage.removeItem("loginerror");
      // get return url from location state or default to home page
      Router.push("/messagecenter", { replace: true });
      
    } else {
      localStorage.setItem("loginerror", "Incorrect login details");
    }
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginerror");
    setAuth(null);
    navigate("/", { replace: true });
  }

  function getAll() {
    return fetchWrapper.get(baseUrl).then(setUsers);
  }
}
