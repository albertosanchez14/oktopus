import { useNavigate } from "react-router-dom";

import styles from "../assets/styles/FileList.module.css";

import {
  useGetFolderFilesQuery,
  useDownloadFileQuery,
} from "../hooks/foldersApiSlice";
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

  const handleDoubleClick = (file: FileType) => {
    if (file.mimeType === "application/vnd.google-apps.folder") {
      addFolder({ folderId: file.id, folderName: file.name });
      navigate(`/files/${file.id}`);
    } else {
    }
  };

  const {
    data: data2,
    isLoading: isLoading2,
    isSuccess: isSuccess2,
    isError: isError2,
    error: error2,
  } = useDownloadFileQuery({
    folderId: currentFolder.folderId,
    file: {
      kind: "drive#file",
      fileExtension: "jpg",
      mimeType: "image/jpeg",
      parents: ["0AAxC62ZZ08H8Uk9PVA"],
      owners: [
        {
          displayName: "Pepe",
          kind: "drive#user",
          me: true,
          permissionId: "10003951756349274404",
          emailAddress: "pepecalzon23@gmail.com",
          photoLink:
            "https://lh3.googleusercontent.com/a/ACg8ocJ3UxgfRCWZu3ol5OjvE2GZQtM8PCxBwKfk7OtqqEbZDOQAQA=s64",
        },
      ],
      size: "39102",
      id: "1F5WIQQw_i_d5nygEx2C8MQi81Suv3dxx",
      name: "43a.jpg",
    },
  });
  if (isLoading2) {
    console.log("Downloading...");
  } else if (isSuccess2) {
    console.log("Downloaded");
    const downloaded = data2.data;
    const blob = new Blob([downloaded]);
    window.open(URL.createObjectURL(blob));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }
  if (isSuccess) {
    console.log(data.files);
    return (
      <div id={styles.file_list}>
        {data?.files.map((file: FileType) => (
          <div
            className={file.mimeType}
            key={file.id}
            onDoubleClick={() => handleDoubleClick(file)}
          >
            <File file={file} />
          </div>
        ))}
      </div>
    );
  }
}
