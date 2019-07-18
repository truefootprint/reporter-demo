import Logo from "../logo";
import css from "./styles.scss";

const Loading = () => (
  <div className={css.loading}>
    <div className={css.logo}>
      <Logo variant="stackedText" />
    </div>

    <img className={css.spinner} src="/static/images/spinner.gif" />
  </div>
);

export default Loading;
