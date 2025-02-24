import Tools from "../../components/tools/tools";
import Scene from "../../components/scene/scene";
import "./HomePage.scss";
import { v4 as uuidv4 } from "uuid";

function HomePage() {
  let user = {};

  const assignNewId = (user) => {
    if (!user.user_id) {
      user.user_id = uuidv4();
    }
    return user;
  };

  user = assignNewId(user);

  return (
    <>
      <div className="tools-container">
        <Tools />
      </div>
      <div className="canvas-container">
        <Scene />
      </div>
    </>
  );
}

export default HomePage;
