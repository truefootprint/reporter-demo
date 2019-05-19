import css from "./styles.scss";
import Image from "../image";

const Overview = () => (
  <div className={css.overview}>
    <h3>Bilobilo</h3>
    <h4>Project 1: School</h4>

    <p>
      The first of three projects to be built in the Bilobilo area will by a
      three classroom school, with water, electricity and boy and girl toilets.
    </p>

    <Image className={css.map} src="/static/images/map.png" />

    <ul>
      <li>The foundation has to be solid cement</li>
      <li>There must be brick walls with a slated roof</li>
      <li>Length: 18m, Width: 6m</li>
    </ul>

    <button>
      Send an update
    </button>
  </div>
);

export default Overview;
