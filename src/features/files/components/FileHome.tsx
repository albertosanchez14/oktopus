import AccountList from "../../auth/components/AccountList";
import FileWh from "./FileWh";

import styles from "../assets/styles/FileHome.module.css";

export default function FileHome() {
  return (
    <div id={styles.file_home}>
      <div id={styles.title}>
        <h1>Oktopus</h1>
      </div>
      <div id={styles.bottom}>
        <AccountList />
        <FileWh />
      </div>
    </div>
  );
}
