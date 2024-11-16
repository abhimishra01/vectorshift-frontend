import BaseNode from "../BaseNode";
import { useState } from "react";
import { Position } from "reactflow";

const SlackNode = ({ id, data = {} }) => {
  const [channel, setchannel] = useState(data.channel || "");
  const [recipient, setRecipient] = useState(data.recipient || "");

  const handles = [
    { type: "target", position: Position.Left, id: "trigger" },
    { type: "source", position: Position.Right, id: "status" },
  ];

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handlechannelChange = (e) => setchannel(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Gmail" handles={handles}>
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
          Sub:
          <input type="text" value={channel} onChange={handlechannelChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default SlackNode;
