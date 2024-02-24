import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import events from "../constants/events";
import { authAtom, usersAtom } from "../_state";
import { useRecoilState, useRecoilValue } from "recoil";
import Chatcard_other from "./Chatcard_other";
import Chatcard_you from "./Chatcard_you";

function Chatbox(props) {
  let { messages } = props;

  const [typedmessage, settypedmessage] = useState("");
  const auth = useRecoilValue(authAtom);
  const user = useRecoilValue(usersAtom);

  const sendMsg = () => {
    let { socket, room } = props;

    socket.emit("send_message", {
      room: room,
      message: typedmessage,
      token: auth,
    });
    settypedmessage("");
  };
  return (
    <div className="min-h-screen max-h-screen overflow-auto">
      {messages.map((item, i) => {
        return item.from_user_id == user.id ? (
          <Chatcard_you item={item} key={item.id} />
        ) : (
          <Chatcard_other item={item} key={item.id} />
        );
      })}

      <div className="mt-auto flex gap-2 text-white items-center">
        <GrAttachment className="cursor-pointer" />
        <input
          type="text"
          className="border-2 rounded-md border-gray-200 border-thin p-2 w-full text-black"
          placeholder="Type a message"
          value={typedmessage}
          onChange={(e) => {
            settypedmessage(e.target.value);
          }}
        />
        <div className="bg-blue-500 p-2 rounded-full">
          <BiSend size="36" className="" onClick={sendMsg} />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
