import { useRef } from "react";
import Spinner from "../spinner";
import Logo from "../logo";
import css from "./styles.scss";

const Thanks = ({ setPage, setLoading, setProject, setLanguage, content }) => {
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
      <p className={css.thank_you}>{content.title}</p>

      <p className={css.received}>{content.paragraph1}</p>
      <p className={css.received}>{content.paragraph2}</p>

      <a className={css.logo} onClick={openMenu}>
        <Logo variant="stackedText" />
      </a>
    </div>

    <select ref={projectMenu} className={css.hidden} onChange={restartApp}>
      <option selected disabled>Choose an option:</option>
      <option value="school,english">School: English</option>
      <option value="school,swahili">School: Swahili</option>
    </select>
  </>;
};

export default Thanks;
