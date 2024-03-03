import styles from "./BrickLayout.module.css"
import pickle1 from "../../Assets/pickle1.png";
import pickle2 from "../../Assets/pickle2.png";
import pickle3 from "../../Assets/pickle3.png";
import pickle4 from "../../Assets/pickle4.png";
import pickle5 from "../../Assets/pickle5.png";
import pickle6 from "../../Assets/pickle6.png";
import pickle7 from "../../Assets/pickle7.jpeg";
import pickle8 from "../../Assets/pickle8.png";

import pickle9 from "../../Assets/pickle9.png";
import pickle10 from "../../Assets/pickle10.jpeg";
const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src={pickle1} alt="" />
        <img src={pickle2} alt="" />
        <img src={pickle3} alt="" />
        <img src={pickle1} alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src={pickle4} alt="" />
        <img src={pickle5} alt="" />
        <img src={pickle6} alt="" />
        <img src={pickle4} alt="" />

      </div>
      <div className={styles["brick-column"]}>
        <img src={pickle7} alt="" />
        <img src={pickle8} alt="" />
        <img src={pickle9} alt="" />
        <img src={pickle7} alt="" />

      </div>
    </div>
  )
}

export default BrickLayout