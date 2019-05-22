import css from "./styles.scss";
import Image from "../image";

const Overview = ({ setPage }) => (
  <div className={css.overview}>
    <h3>Bilobilo</h3>
    <h4>Project 1: School</h4>

    <p>
      The first of three projects to be built in the Bilobilo area will by a
      three classroom school, with water, electricity and boy and girl toilets.
    </p>

    <Image className={css.map} src="/static/images/school-map.png" />

    <ul>
      <li>The foundation has to be solid cement</li>
      <li>There must be brick walls with a slated roof</li>
      <li>Length: 18m, Width: 6m</li>
    </ul>

    <div className={css.center} onClick={() => setPage("form")}>
      <button className={css.call_to_action}>
        Send an update
      </button>
    </div>
  </div>
);

export default Overview;
