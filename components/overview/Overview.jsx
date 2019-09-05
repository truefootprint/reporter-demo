import css from "./styles.scss";
import Footer from "../footer";

const Overview = ({ setPage, content }) => {
  const bullet_point1 = content.bullet_point1 || '';
  const bullet_point2 = content.bullet_point2 || '';
  const bullet_point3 = content.bullet_point3 || '';

  return (
    <div className={css.overview}>
      <h3>{content.title}</h3>
      <h4>{content.subtitle}</h4>

      <p>{content.paragraph1}</p>
      <p>{content.paragraph2}</p>

      <img className={css.map} src={content.image_path} />

      {bullet_point1.length > 0 && bullet_point2.length > 0 && bullet_point3.length > 0 &&
      <ul className={css.bullets}>
        { bullet_point1.length > 0 && <li>{content.bullet_point1}</li> }
        { bullet_point2.length > 0 && <li>{content.bullet_point2}</li> }
        { bullet_point3.length > 0 && <li>{content.bullet_point3}</li> }
      </ul>}

      <a className={css.spec}>{content.specification}</a>

      <div className={css.center} onClick={() => setPage("form")}>
        <button className={css.call_to_action}>
          {content.call_to_action}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Overview;
