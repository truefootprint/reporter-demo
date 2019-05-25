import Spinner from "../spinner";
import Logo from "../logo";
import css from "./styles.scss";

const Thanks = ({ setPage, setLoading }) => {
  const restartApp = () => {
    setPage("overview");
    setLoading(true);
  };

  return <>
    <Spinner />

    <div className={css.thanks}>
      <p className={css.thank_you}>Thank you</p>

      <p className={css.received}>
        We have received your answers.
      </p>

      <p className={css.received}>
        We look forward to your next update in two weeks time.
      </p>

      <a className={css.logo} onClick={restartApp}>
        <Logo variant="stackedText" />
      </a>
    </div>
  </>;
};

export default Thanks;
