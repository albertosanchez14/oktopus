import { FileType } from "../types/file";

import styles from "../assets/styles/File.module.css";
import { useEffect, useRef } from "react";

type FileProp = { file: FileType };

export default function File({ file }: FileProp) {
  const folderIcon = "src/features/files/assets/folder.svg";
  const fileIcon = "src/features/files/assets/file.svg";

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = file.mimeType === "application/vnd.google-apps.folder"
      ? folderIcon
      : fileIcon;
    }
  }, [file.mimeType]);

  return (
    <div id={styles.file}>
      <div>
        <img ref={imgRef} />
        <p>{file.name}</p>
      </div>
      <p>{file.owners[0].displayName}</p>
      <p>{file.size}</p>
    </div>
  );
}
