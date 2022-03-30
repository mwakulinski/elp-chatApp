import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState<string[]>([]);

  function addMessageToList(message: string) {
    setAllMessages([...allMessages, message]);
  }

  function submitMessage(message: string) {
    addMessageToList(message);
    setMessage("");
  }

  return (
    <div>
      <ul id="messages">
        {allMessages.map((message) => {
          return <li>{message}</li>;
        })}
      </ul>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(message);
        }}
      >
        <input
          id="input"
          autoComplete="off"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Home;
