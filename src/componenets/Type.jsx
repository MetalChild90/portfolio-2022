import { useState, useEffect } from "react";

function Type() {
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    const handlePrintWord = (word, time) => {
      let index = 0;

      for (let letter of word) {
        index++;

        setTimeout(() => {
          setWelcome((prevState) => (prevState += letter));
        }, index * time);
      }
    };

    handlePrintWord("Hello, I'm Eichan!", 100);
  }, []);

  return <span className="Type">{welcome}</span>;
}

export default Type;
