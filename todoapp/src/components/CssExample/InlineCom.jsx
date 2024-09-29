import "../../css/style.css";
// import "../css/style.css";
import style from "./InLineCom.module.css";
// const header = { color: "blue", font: "140pc" };
const InlineCom = () => {
  return (
    <div>
      <h1 className={style.header}> inline component</h1>
    </div>
  );
};

export default InlineCom;
