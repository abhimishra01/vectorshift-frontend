// submit.js
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { parsePipeline } from "./services/api";
import { generatePipelinePayload } from "./utils";

export const SubmitButton = () => {
  const { isLoading, nodes, edges, pipelineData, error, parsePipelineData } =
    useStore();

  const handleSubmit = () => {
    const payload = generatePipelinePayload(nodes, edges);
    parsePipelineData(payload);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>

      {pipelineData && (
        <div>
          <p>No. of Nodes: {pipelineData.num_nodes}</p>
          <p>No. of Edges: {pipelineData.num_edges}</p>
          <p>Is DAG?: {pipelineData.is_dag ? "Yes" : "No"}</p>
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
