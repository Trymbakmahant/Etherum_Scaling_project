import { Routes, Route } from "react-router-dom";

import Polls from "../Pages/login";

function Path() {
  return (
    <Routes>
      <Route exact path="/" element={<Polls />} />
    </Routes>
  );
}

export default Path;
