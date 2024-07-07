import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FolderState {
  folderId: string;
  folderName?: string;
}

const foldersSlice = createSlice({
  name: 'folder',
  initialState: [{ folderId: 'root' } as FolderState],
  reducers: {
    addFolderId: (state, action: PayloadAction<FolderState>) => {
      const { folderId, folderName } = action.payload;
      state.push({ folderId, folderName });
    },
    setFolderId: (state, action: PayloadAction<FolderState>) => {
      const { folderId } = action.payload;
      const index = state.findIndex(folder => folder.folderId === folderId);
      action.payload.folderName = state[index].folderName;
      if (index !== -1 && index !== state.length - 1) {
        return state.slice(0, index + 1);
      }
    },
  },
});

export const { addFolderId, setFolderId } = foldersSlice.actions;

export default foldersSlice.reducer;
