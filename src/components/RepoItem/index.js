import { useState } from "react";

import {
  FaDownload,
  FaExternalLinkSquareAlt,
  FaClone,
  FaClipboardCheck,
} from "react-icons/fa";

const RepoItem = ({ item }) => {
  const [text, setText] = useState("");

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText("");
    await navigator.clipboard.writeText(text);
    setText("Copied");
  };

  return (
    <div className="flex p-2 shadow bg-slate-700 rounded-lg justify-between m-4 items-center md:p-6">
      <h3>{item.name}</h3>
      <div className="flex p-2 flex-col md:flex-row  items-center  md:px-10">
        <button
          className="m-2"
          disabled={!!text}
          onClick={() => handleCopy(item.git_url)}
        >
          {!text ? <FaClone /> : <FaClipboardCheck />}
        </button>

        <a
          className="m-2"
          href={
            "https://github.com/" +
            item.full_name +
            "/archive/refs/heads/master.zip"
          }
          target="_blank"
          rel="noreferrer"
        >
          <FaDownload />
        </a>
        <a
          className="m-2"
          href={item.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkSquareAlt />
        </a>
      </div>
    </div>
  );
};

export default RepoItem;
