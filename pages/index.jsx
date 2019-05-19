import Layout from "../components/layout";
import Loading from "../components/loading";
import Overview from "../components/overview";
import css from "./styles.scss";

const Index = () => (
  <Layout>
    <Loading />
    <p className={css.instructions}>
      Please click on the icon in the bottom-middle of your iPhone screen to add this app to your home screen.
    </p>

    <div className={css.restart}>
      <a href=".">Restart App</a>
    </div>
    <Overview />
  </Layout>
);

export default Index;
