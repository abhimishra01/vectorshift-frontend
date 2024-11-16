import { PipelineToolbar, SubmitButton } from "./components";
import { PipelineUI } from "./feature";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
