import Type from "../componenets/Type";
import Cursor from "../componenets/Cursor";

function Home() {
  return (
    <div className="inner-wrapper">
      <h1 className="Home-title">
        <Type />
        <Cursor />
      </h1>
      <div className="Home-text">
        <p>And currently I'm looking for my first job in web development.</p>
        <p>
          Although I don't have commercial experience, what makes me a valuable
          employee is that
          <span className="Home-text-highlight">I'm fluent in English</span> and
          <span className="Home-text-highlight">
            I'm willing to sacrifice my time and effort to become as best
            developer as I can be.
          </span>
          I understand that there will be plenty to learn and I'm ready for it.
        </p>
      </div>
    </div>
  );
}

export default Home;
