import Spinner from "../spinner";
import Logo from "../logo";
import css from "./styles.scss";

const Thanks = () => <>
  <Spinner />

  <div className={css.thanks}>
    <p className={css.thank_you}>Thank you.</p>

    <p className={css.received}>
      We have received your answers and will update our records.
    </p>

    <a className={css.logo} href=".">
      <Logo variant="stackedText" />
    </a>
  </div>
</>;

export default Thanks;
