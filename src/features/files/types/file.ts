type GoogleUserType = {
  displayName: string;
  kind: "drive#user";
  me: boolean;
  permissionId: string;
  emailAddress: string;
  photoLink: string;
};

export type FileType = {
  kind: string;
  fileExtension: string;
  mimeType: string;
  parents: string[];
  owners: GoogleUserType[];
  size: string;
  id: string;
  name: string;
};
