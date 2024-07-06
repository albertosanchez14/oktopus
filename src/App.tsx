import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth";
import FileHome from "./features/files";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="files" element={ <FileHome /> } />
        <Route path="files/:folderId" element={ <FileHome /> } />
      </Route>
    </Routes>
  );
}

export default App;
