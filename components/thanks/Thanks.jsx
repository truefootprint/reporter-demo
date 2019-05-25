import { useRef } from "react";
import Spinner from "../spinner";
import Logo from "../logo";
import css from "./styles.scss";

const Thanks = ({ setPage, setLoading, setProject, setLanguage }) => {
  const projectMenu = useRef(null);

  const openMenu = () => {
    projectMenu.current.focus();
  };

  const restartApp = () => {
    const [project, language] = projectMenu.current.value.split(",");

    setProject(project);
    setLanguage(language);
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

      <a className={css.logo} onClick={openMenu}>
        <Logo variant="stackedText" />
      </a>
    </div>

    <select ref={projectMenu} className={css.hidden} onChange={restartApp}>
      <option value="school,english">School: English</option>
      <option value="school,swahili">School: Swahili</option>
      <option value="roads,english">Roads: English</option>
      <option value="roads,swahili">Roads: Swahili</option>
    </select>
  </>;
};

export default Thanks;
