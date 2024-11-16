// toolbar.js

import { nodeTypes } from "../../constants";
import { DraggableNode } from "../../draggableNode";

const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {nodeTypes.map((nodeType, id) => (
          <DraggableNode key={id} type={nodeType.type} label={nodeType.label} />
        ))}
      </div>
    </div>
  );
};

export default PipelineToolbar;
