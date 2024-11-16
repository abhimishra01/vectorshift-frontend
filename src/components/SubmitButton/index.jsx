// Submit

import { shallow } from "zustand/shallow";
import { useStore } from "../../store";
import { generatePipelinePayload } from "../../utils";

const SubmitButton = () => {
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    isLoading: state.isLoading,
    pipelineData: state.pipelineData,
    parsePipelineData: state.parsePipelineData,
  });

  const { isLoading, nodes, edges, pipelineData, error, parsePipelineData } =
    useStore(selector, shallow);

  const handleSubmit = () => {
    if (nodes.length === 0 || edges.length === 0) {
      alert("Please generate nodes!");
      return;
    }

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

export default SubmitButton;
