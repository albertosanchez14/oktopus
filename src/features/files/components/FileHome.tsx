import { useParams } from "react-router-dom";

import FileList from "./FileList";
import AccountList from "../../auth/components/AccountList";

import styles from "../assets/FileHome.module.css";

export default function FileHome() {
  const { folderId } = useParams();

  console.log("folderId", folderId);
  return (
    <div id={styles.file_home}>
      <div>
        <h1>Oktopus</h1>
      </div>
      <div>
        <AccountList />
        <FileList folderId={folderId || "root"} />
      </div>
    </div>
  );
}
