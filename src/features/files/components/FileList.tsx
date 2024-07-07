import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../assets/styles/FileList.module.css";

import { useGetFolderFilesQuery } from "../hooks/foldersApiSlice";
import { useAppSelector } from "../../../app/store_dispatch";
import { useFoldersActions } from "../hooks/useFoldersActions";

import File from "./File";
import { FileType } from "../types/file";

type FileListProps = {
  folderId: string;
};

export default function FileList({ folderId }: FileListProps) {
  const navigate = useNavigate();

  const folders = useAppSelector((state) => state.folder);
  const currentFolder = folders[folders.length - 1];
  const { addFolder } = useFoldersActions();
  const { data, isLoading, isSuccess, isError, error } = useGetFolderFilesQuery(
    currentFolder.folderId
  );

  const handleClick = (file: FileType) => {
    if (file.mimeType === "application/vnd.google-apps.folder") {
      addFolder({ folderId: file.id, folderName: file.name });
    }
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
