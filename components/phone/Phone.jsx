import css from "./styles.scss";
import Header from "../header";

const Phone = ({ children }) => (
  <div className={css.fullscreen}>
    <div className={css.phone}>
      <Header />
      <div id="scrollable" className={css.phone_inner}>
        {children}
      </div>
    </div>
  </div>
);

export default Phone;
