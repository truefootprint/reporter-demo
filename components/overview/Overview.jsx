import css from "./styles.scss";
import Image from "../image";

const Overview = ({ setPage, content }) => (
  <div className={css.overview}>
    <h3>{content.title}</h3>
    <h4>{content.subtitle}</h4>

    <p>{content.paragraph1}</p>
    <p>{content.paragraph2}</p>

    <Image className={css.map} src={content.image_path} />

    <ul>
      <li>{content.bullet_point1}</li>
      <li>{content.bullet_point2}</li>
      <li>{content.bullet_point3}</li>
    </ul>

    <a className={css.spec}>{content.specification}</a>

    <div className={css.center} onClick={() => setPage("form")}>
      <button className={css.call_to_action}>
        {content.call_to_action}
      </button>
    </div>
  </div>
);

export default Overview;
