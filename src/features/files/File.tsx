import FolderIcon from '@mui/icons-material/Folder';


// TODO: refactor to a shared location
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

type FileProp = { file: FileType };

export default function File({ file }: FileProp) {
  console.log(file);

  return <div>
    <FolderIcon />
    <p>{file.name}</p>
    <p>{file.owners[0].displayName}</p>
    <p>{file.size}</p>
  </div>;
}
