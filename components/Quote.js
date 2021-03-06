import styles from "../styles/Quote.module.scss";
import Glide from "@glidejs/glide";

const Quote = ({ text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
};

export default Quote;
