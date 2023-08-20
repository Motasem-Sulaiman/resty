import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    if (requestParams.method === "get") {
      axios({
        method: requestParams.method,
        url: requestParams.url,
      })
        .then((res) => {
          setData({
            results: [
              { method: requestParams.method },
              { url: requestParams.url },
              { response: res.data },
            ],
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setData([]);
        });
    }
  }, [requestParams]);

  function callApi(requestParams) {
    setRequestParams(requestParams);
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
