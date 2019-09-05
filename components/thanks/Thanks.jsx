import { useState, useRef } from "react";
import Spinner from "../spinner";
import Logo from "../logo";
import Footer from "../footer";
import css from "./styles.scss";

const Thanks = ({ setPage, setLoading, setProject, setLanguage, content }) => {
  const [selectClass, setSelectClass] = useState(css.select);
  const projectMenu = useRef(null);

  const openMenu = () => {
    projectMenu.current.focus();
    setSelectClass(`${css.select} ${css.selected}`);
  };

  const restartApp = () => {
    const [project, language] = projectMenu.current.value.split(",");

    setSelectClass(css.select);
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

      <div className={css.footer}>
        <Footer />
      </div>
    </div>

    <select ref={projectMenu} className={selectClass} onChange={restartApp}>
      <option selected disabled>Choose an option:</option>

      <option value="agri_farmer,english">Agri Farmer: en</option>
      <option value="agri_trainer,english">Agri Trainer: en</option>
      <option value="agri_monitor,english">Agri Monitor: en</option>
      <option value="school_construction,english">School Construction: en</option>
      <option value="school_construction,swahili">School Construction: sw</option>
      <option value="school_ongoing,english">School Ongoing</option>
      <option value="pump,english">Pump</option>
      <option value="workshop,english">Workshop</option>
    </select>
  </>;
};

export default Thanks;
