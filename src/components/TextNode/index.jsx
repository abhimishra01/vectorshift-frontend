// textNode.js

import { useState } from "react";
import BaseNode from "../BaseNode";
import { Position } from "reactflow";

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: "output",
    },
  ];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} label="Text" handles={handles}>
      <div>
        <label>
          Text:
          <input type="text" value={currText} onChange={handleTextChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default TextNode;
