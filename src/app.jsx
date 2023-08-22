import React, { useState, useEffect, useReducer } from "react";
import "./app.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";
import History from "../History";

const initialState = {
  data: null,
  requestParams: {},
  history: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FORM_DATA":
      return {
        ...state,
        requestParams: payload,
        history: [...state.history, payload],
      };

    case "STARTPAGE":
      return {
        ...state,
        loading: true,
      };
    case "GETDATA":
      return {
        ...state,
        loading: false,
        data: {
          results: [
            { method: state.requestParams.method },
            { url: state.requestParams.url },
            { response: payload },
          ],
        },
        history: [
          ...state.history,
          [
            { method: state.requestParams.method },
            { url: state.requestParams.url },
            { response: payload },
          ],
        ],
      };
    case "ERROR":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.requestParams.method === "get") {
      dispatch({
        type: "STARTPAGE",
      });

      axios({
        method: state.requestParams.method,
        url: state.requestParams.url,
      })
        .then((res) => {
          dispatch({ type: "GETDATA", payload: res.data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          dispatch({ type: "ERROR" });
        });
    }
  }, [state.requestParams]);

  function callApi(requestParams) {
    dispatch({
      type: "FORM_DATA",
      payload: requestParams,
    });

    // console.log(requestParams.method)
  }

  return (
    <>
      {/* {console.log(state.history)} */}
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <History historyData={state.history} />
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      {state.loading ? <p>loading</p> : null}
      <Footer />
    </>
  );
}

export default App;
