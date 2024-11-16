import { PipelineUI } from "./feature/ui";
import { PipelineToolbar, SubmitButton } from "./components";

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
