import { setFolderId } from "./foldersSlice";
import { useAppDispatch } from "../../../app/store_dispatch";

import { FolderState } from "./foldersSlice";

export const useFoldersActions = () => {
  const dispatch = useAppDispatch();

  const setFolder = (folder: FolderState) => {
    dispatch(setFolderId(folder));
  };

  return { setFolder };
};
