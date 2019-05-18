import css from "./styles.scss";

const Logo = () => (
  <div className={css.logo}>
    <div className={css.line} />

    <div className={`${css.circle} ${css.top}`} />
    <div className={`${css.circle} ${css.middle}`} />
    <div className={`${css.circle} ${css.bottom}`} />
  </div>
);

export default Logo;
