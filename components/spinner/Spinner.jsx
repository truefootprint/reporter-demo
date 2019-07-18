import css from "./styles.scss";

const Spinner = ({ duration }) => (
  <div className={`${css.spinner} ${css[`duration_${duration}`]}`}>
    <img className={css.spinner} src="/static/images/spinner.gif" />
  </div>
);

Spinner.defaultProps = {
  duration: 2
};

export default Spinner;
