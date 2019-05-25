import React, { useState} from "react";
import Layout from "../components/layout";
import Loading from "../components/loading";
import Overview from "../components/overview";
import Form from "../components/form";
import Thanks from "../components/thanks";

const Index = () => {
  const [page, setPage] = useState("overview");
  const [loading, setLoading] = useState(true);

  const setPageAndScroll = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
    setLoading(false);
  };

  return (
    <Layout>
      {loading && <Loading />}

      {page === "overview" && <Overview setPage={setPageAndScroll} />}
      {page === "form" && <Form setPage={setPageAndScroll} />}
      {page === "thanks" && <Thanks setPage={setPageAndScroll} setLoading={setLoading} />}
    </Layout>
  );
};

export default Index;
