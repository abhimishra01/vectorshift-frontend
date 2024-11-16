// submit.js
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { parsePipeline } from "./services/api";

export const SubmitButton = () => {
  const { isLoading, nodes, edges, pipelineData, error, parsePipeline } =
    useStore();

  const handleSubmit = () => {
    console.log(nodes);
    console.log(edges);
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
