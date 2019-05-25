import css from "./styles.scss";

const Phone = ({ children }) => (
  <div className={css.fullscreen}>
    <div className={css.phone}>
      <div id="scrollable" className={css.phone_inner}>
        {children}
      </div>
    </div>
  </div>
);

export default Phone;
