import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h2>About Us Page</h2>
      <Profile name={"sunny class"} />
    </div>
  );
};
export default About;
