import React, { useState} from "react";
import Layout from "../components/layout";
import Loading from "../components/loading";
import Overview from "../components/overview";
import Form from "../components/form";
import Thanks from "../components/thanks";
import Content from "../static/content.js";

const Index = () => {
  const [page, setPage] = useState("thanks");
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState("school");
  const [language, setLanguage] = useState("english");

  const setPageAndScroll = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
    setLoading(false);
  };

  const content = Content[project][language];

  return (
    <Layout>
      <p>{content.hello}</p>
      {loading && <Loading />}

      {page === "overview" && <Overview setPage={setPageAndScroll} content={content} />}
      {page === "form" && <Form setPage={setPageAndScroll} content={content} />}
      {page === "thanks" && <Thanks setPage={setPageAndScroll} setLoading={setLoading} content={content} />}
    </Layout>
  );
};

export default Index;
