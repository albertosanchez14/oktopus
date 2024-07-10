import { useState } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../../app/store_dispatch";

import FileList from "./FileList";

import styles from "../assets/styles/FileWh.module.css";
import { useEffect } from "react";
import { useFoldersActions } from "../hooks/useFoldersActions";

export default function FileWh() {
  const folders = useAppSelector((state) => state.folder);
  const { setFolder } = useFoldersActions();
  const currentFolder = folders[folders.length - 1];
  const [folderName, setFolderName] = useState(currentFolder.folderName || "Home");
  const folderId = useParams().folderId || "root";

  useEffect(() => {
    const data = setFolder({ folderId });
    setFolderName(data.payload.folderName || "Home");
  }, [folderId, currentFolder.folderName]);
  
  return (
    <div id={styles.file_wh}>
      <div id={styles.file_wh_header}>
        <h2>{folderName}</h2>
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
      <FileList folderId={folderId}/>
    </div>
  );
}
