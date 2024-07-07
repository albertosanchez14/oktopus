import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FolderState {
  folderId: string;
  folderName?: string;
}

const foldersSlice = createSlice({
  name: 'folder',
  initialState: { folderId: 'root' } as FolderState,
  reducers: {
    setFolderId: (state, action: PayloadAction<FolderState>) => {
      const { folderId, folderName } = action.payload;
      state.folderId = folderId;
      state.folderName = folderName;
    },
  },
});

export const { setFolderId } = foldersSlice.actions;

export default foldersSlice.reducer;
