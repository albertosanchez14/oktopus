import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import FileHome from "./features/files/FileHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="files" element={ <FileHome /> } />
      </Route>
    </Routes>
  );
}

export default App;
