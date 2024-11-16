import PipelineUI from "../UI";
import { PipelineToolbar, SubmitButton } from "../../components";

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
