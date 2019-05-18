import css from "./styles.scss";

const Logo = () => (
  <div className={css.logo}>
    <div className={css.line} />

    <div className={`${css.circle} ${css.top}`} />
    <div className={`${css.circle} ${css.middle}`} />
    <div className={`${css.circle} ${css.bottom}`} />
  </div>
);

Logo.WithText = () => (
  <div className={css.logo_with_text}>
    <Logo />

    <div className={css.text}>
      <div className={css.true}>True</div>Footprint
    </div>
  </div>
);

export default Logo;
