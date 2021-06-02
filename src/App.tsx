import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Questions from "./components/questions/Questions";
import RightMenu from "./components/rightMenu/RightMenu";
import LoadingSpinner from "./components/UI/LoadingSpinner";

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
            <div className="wraper">
              <Questions />
              <RightMenu />
            </div>
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
