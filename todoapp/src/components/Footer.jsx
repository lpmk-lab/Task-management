import styles from "../css/Footer.module.css";
const Footer = ({ totalDone, totalTodos }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos:{totalDone}</span>
      <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
  );
};

export default Footer;
