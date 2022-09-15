import Technology from "../componenets/Technology";

function Knowledge() {
  const technologies = [
    { name: "HTML", color: "#f06529", bgColor: "rgba(240, 101, 41, 0.2)" },
    { name: "CSS", color: "#2965f1", bgColor: "rgba(41, 101, 241, 0.2)" },
    { name: "SASS", color: "#cc6699", bgColor: "rgba(204, 102, 153, 0.2)" },
    {
      name: "JAVASCRIPT",
      color: "#f7df1e",
      bgColor: "rgba(247, 223, 30, 0.2)",
    },
    { name: "REACT", color: "#61DBFB", bgColor: "rgba(97, 219, 251, 0.2)" },
  ];

  return (
    <div className="Knowledge">
      <ul>
        {technologies.map((technology, i) => (
          <Technology key={i} technology={technology} i={i} />
        ))}
      </ul>
    </div>
  );
}

export default Knowledge;
