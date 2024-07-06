import styles from "../assets/AccountList.module.css";

export default function AccountList() {
  const handleAddAccount = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div id={styles.account_list}>
      <h2>Accounts</h2>
      <button id={styles.add_account} onClick={handleAddAccount}>
        Add Account
      </button>
    </div>
  );
}
