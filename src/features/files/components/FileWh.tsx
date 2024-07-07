import { useParams } from "react-router-dom";

import FileList from "./FileList";

import styles from "../assets/styles/FileWh.module.css";

export default function FileWh() {
  const { folderId } = useParams();

  return (
    <div id={styles.file_wh}>
      <div id={styles.file_wh_header}>
        <h2>Home</h2>
        <p>Search Bar</p>
      </div>
      <div id={styles.file_wh_filter}>
        <div>
          <p>Name</p>
          <img
            src="src\features\files\assets\filter_icon.svg"
            alt="Filter icon"
          />
        </div>
        <div>
          <p>Owner</p>
          <img
            src="src\features\files\assets\filter_icon.svg"
            alt="Filter icon"
          />
        </div>
        <div>
          <p>Size</p>
          <img
            src="src\features\files\assets\filter_icon.svg"
            alt="Filter icon"
          />
        </div>
      </div>
      <FileList folderId={folderId || "root"} />
    </div>
  );
}
