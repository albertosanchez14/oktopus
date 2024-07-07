import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "../assets/styles/FileList.module.css";

import { useGetFolderFilesQuery } from "../hooks/foldersApiSlice";
import { useAppSelector } from "../../../app/store_dispatch";
import { useFoldersActions } from "../hooks/useFoldersActions";

import File from "./File";
import { FileType } from "../types/file";

export default function FileList() {
  const navigate = useNavigate();
  const { folderIdParam } = useParams();
  const folderId = folderIdParam || "root";

  const currentFolder = useAppSelector((state) => state.folder);
  const { setFolder } = useFoldersActions();
  const { data, isLoading, isSuccess, isError, error } = useGetFolderFilesQuery(
    currentFolder.folderId
  );

  useEffect(() => {
    setFolder({ folderId, folderName: currentFolder.folderName });
  }, [folderId]);

  const handleClick = (file: FileType) => {
    if (file.mimeType === "application/vnd.google-apps.folder") {
      setFolder({ folderId: file.id, folderName: file.name });
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
