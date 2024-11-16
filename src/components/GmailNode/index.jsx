import { useState } from "react";
import BaseNode from "../BaseNode";
import { Position } from "reactflow";

const GmailNode = ({ id, data = {} }) => {
  const [subject, setSubject] = useState(data.subject || "");
  const [recipient, setRecipient] = useState(data.recipient || "");

  const handles = [
    { type: "target", position: Position.Left, id: "trigger" },
    { type: "source", position: Position.Right, id: "status" },
  ];

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Gmail Integration" handles={handles}>
      <div>
        <label>
          To:
          <input
            type="email"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default GmailNode;
