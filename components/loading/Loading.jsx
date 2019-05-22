import Logo from "../logo";
import Image from "../image";
import css from "./styles.scss";

const Loading = () => (
  <div className={css.loading}>
    <div className={css.logo}>
      <Logo variant="stackedText" />
    </div>

    <Image className={css.spinner} src="/static/images/spinner.gif" />
  </div>
);

export default Loading;
