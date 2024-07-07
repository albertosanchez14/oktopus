import { addFolderId, setFolderId } from "./foldersSlice";
import { useAppDispatch } from "../../../app/store_dispatch";

import { FolderState } from "./foldersSlice";

export const useFoldersActions = () => {
  const dispatch = useAppDispatch();

  const addFolder = (folder: FolderState) => {
    dispatch(addFolderId(folder));
  };
  const setFolder = (folder: FolderState) => {
    const payload = dispatch(setFolderId(folder));
    return payload;
  };

  return { addFolder, setFolder };
};
