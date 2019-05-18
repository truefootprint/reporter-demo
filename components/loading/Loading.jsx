import Logo from "../logo";
import Image from "../image";
import css from "./styles.scss";

const Loading = () => (
  <div className={css.loading}>
    <Image className={css.footprint} src="/static/images/footprint.png" />

    <div className={css.logo}>
      <Logo.WithText />
    </div>

    <Image className={css.spinner} src="/static/images/spinner.gif" />
  </div>
);

export default Loading;
