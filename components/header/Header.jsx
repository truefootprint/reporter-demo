import css from "./styles.scss";
import Logo from "../logo";

const Header = () => (
  <div className={css.header}>
    <Logo variant="onlyText" />
  </div>
);

export default Header;
