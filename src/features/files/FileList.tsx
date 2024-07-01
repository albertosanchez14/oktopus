import { useGetFilesQuery } from "./filesApiSlice";
import {
  useGetFolderFilesQuery,
  useGetFileofFolderQuery,
} from "./foldersApiSlice";

import File from "./File";
import { FileType } from "./File";

export default function FileList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetFilesQuery(undefined);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (isError) {
    content = <div>Error: {error.data.message}</div>;
  }

  if (isSuccess) {
    content = (
      <div>
        {data?.files.map((file: FileType) => (
          <File key={file.id} file={file} />
        ))}
      </div>
    );
  }
  return content;
}
