import { Routes, Route } from "react-router-dom";

import Upload from "../Pages/Polls";

function Path() {
  return (
    <Routes>
      <Route exact path="/" element={<Upload />} />
    </Routes>
  );
}

export default Path;
