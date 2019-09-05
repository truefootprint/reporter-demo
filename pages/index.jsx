import React, { useState} from "react";
import Layout from "../components/layout";
import Loading from "../components/loading";
import Overview from "../components/overview";
import Form from "../components/form";
import Thanks from "../components/thanks";
import Content from "../static/content.js";

const Index = () => {
  const [page, setPage] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState("agri_farmer");
  const [language, setLanguage] = useState("english");

  const setPageAndScroll = (page) => {
    window.scrollTo(0, 0);
    document.getElementById("scrollable").scrollTo(0, 0);

    setPage(page);
    setLoading(false);
  };

  const content = Content[language][project];

  return (
    <Layout>
      {loading && <Loading />}

      {page === "overview" && <Overview setPage={setPageAndScroll} content={content.overview} />}
      {page === "form" && <Form setPage={setPageAndScroll} content={content.form} />}

      {page === "thanks" &&
          <Thanks setPage={setPageAndScroll}
                  setLoading={setLoading}
                  setProject={setProject}
                  setLanguage={setLanguage}
                  content={content.thanks} />}
    </Layout>
  );
};

export default Index;
