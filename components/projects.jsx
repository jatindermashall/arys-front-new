import { React, useEffect, useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { SlLogin } from "react-icons/sl";
import { authAtom, projectsAtom, usersAtom, projectAtom } from "../_state";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useUserActions } from "../_actions";
import { useProjectAction } from "../_actions/project.actions";
function Projects() {
  //const user = useRecoilValue(usersAtom);

  const projects = useRecoilValue(projectsAtom);
  const projectid = useRecoilValue(projectAtom);

  const setProjectid = useSetRecoilState(projectAtom);
  const userActions = useUserActions();

  const projectAction = useProjectAction();
  useEffect(() => {
    projectAction.getProjects({ user: "hh" });
  }, []);

  useEffect(() => {
    console.log("project id", projectid);
  }, [projectid]);
  /*
  useEffect(() => {
    if (projectid != "") {
      projectAction.getProjectMessages({ project_id: projectid });
    }
  }, [projectid]);
  */

  useEffect(() => {
    console.log("projects", projects);
    if (projects?.length > 0 && projectid.length == 0) {
      console.log("projects iidd", projects[0]?.id);
      setProjectid(projects[0]?.id);
    }
  }, [projects]);

  /*
  useEffect(() => {
    //console.log("my current project id", projectid);
    socket.on("receive_message", (data) => {
      //socket.to(data.room).emit("receive_message", data);

      if (data.room == projectid) {
        projectAction.getProjectMessages({ project_id: projectid });
      }
      //console.log("this is current room", projectid);
    });
  }, []);

  useEffect(() => {
    //console.log("porjjject id before joining room", projectid);
    if (projectid != "") {
      socket.emit("join_room", projectid);
    }
  }, [projectid]);
  */
  return projects?.map((item) => {
    return (
      <div
        className={`flex p-2 gap-2 justify-between ${
          projectid == item.id ? "bg-gray-200" : ""
        } cursor-pointer`}
        key={item.id}
        onClick={() => {
          console.log("channginngngngn room to ", item.id);
          setProjectid(item.id);
        }}
      >
        <div className=" text-right ">
          <div className="w-16 p-2 bg-white text-center text-blue-400 border-2 border-gray-200 rounded-md border-thin text-xl">
            A
          </div>
          <div className="-top-4 text-right  flex justify-end">
            <div className="relative  -top-2 justify-self-end bg-green-600 rounded-full w-2 h-2 text-right">
              &nbsp;
            </div>
          </div>
        </div>
        <div className="w-full text-sm text-black  w-full flex flex-col">
          <div id="project">{item.title}</div>
          <div id="latest_message" className="text-sm text-gray-500">
            You: latest m
          </div>
        </div>
      </div>
    );
  });
}

export default Projects;
