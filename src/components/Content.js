import "./../styles/Content.css";
import About from "./About";
import Header from "./Header";
import Links from "./Links";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <About />
      <Links />
    </div>
  );
};

export default Content;
