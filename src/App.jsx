import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Content from "./Content";
import { Provider } from "./context/AppContext";

function App() {
  return (
    <Router>
      <Provider>
        <Content />
      </Provider>
    </Router>
  );
}

export default App;
