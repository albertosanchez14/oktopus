import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../assets/FileList.module.css";

import { useGetFolderFilesQuery } from "../hooks/foldersApiSlice";

import File from "./File";
import { FileType } from "../types/file";

type FileListProps = {
  folderId: string;
};

export default function FileList({ folderId }: FileListProps) {
  const navigate = useNavigate();

  const [currentFolderId, setCurrentFolderId] = useState(folderId);
  const { data, isLoading, isSuccess, isError, error } =
    useGetFolderFilesQuery(currentFolderId);

  useEffect(() => {
    setCurrentFolderId(folderId);
  }, [folderId]);

  const handleClick = (file: FileType) => {
    if (file.mimeType === "application/vnd.google-apps.folder") {
      setCurrentFolderId(file.id);
    }
    console.log("Clicked on file", file.name);
    navigate(`/files/${file.id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }

  if (isSuccess) {
    return (
      <div id={styles.file_list}>
        {data?.files.map((file: FileType) => (
          <div
            className={file.mimeType}
            key={file.id}
            onDoubleClick={() => handleClick(file)}
          >
            <File file={file} />
          </div>
        ))}
      </div>
    );
  }
}
