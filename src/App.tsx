import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Questions from "./components/questions/Questions";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Home from "./pages/Home";

const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home" exact>
            <Questions />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
