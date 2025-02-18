import Tools from "./components/tools/tools";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";

function App() {
  //random id for user
  const id = uuidv4();
  //check to see if user has id data

  return (
    <>
      <Tools />
    </>
  );
}

export default App;
