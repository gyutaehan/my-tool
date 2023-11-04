import * as React from "react";
import "./../assets/scss/App.scss";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from "./header/Header";
import ToolB from "./toolb/ToolB";
import ToolC from "./toolc/ToolC";
import Hash from "./hash/Hash";

const App = () =>  (
  <Router>
  <div className="App">
   <Header />
    <main style={styles.main}>
      <Routes>
            <Route path={`/my-tool/`} element={<Hash />} />
            <Route path={`/my-tool/hash`} element={<Hash />} />
            <Route path={`/my-tool/toolb/`} element={<ToolB />} />
            <Route path={`/my-tool/toolc/`} element={<ToolC />} />
      </Routes>
    </main>
    <footer style={styles.footer}>footer</footer>
  </div>
  </Router>
);

export default App;

//css
const styles = {
  main: {
      height: "100%"
  },
  footer: {
      height: 100,
      background: "#ddd",
  }
}