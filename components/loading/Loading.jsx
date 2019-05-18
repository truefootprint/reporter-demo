import Logo from "../logo";
import css from "./styles.scss";

const Loading = () => (
  <div className={css.loading}>
    <img className={css.footprint} src="/static/images/footprint.png" />

    <div className={css.logo}>
      <Logo.WithText />
    </div>

    <img className={css.spinner} src="/static/images/spinner.gif" />
  </div>
);

export default Loading;
