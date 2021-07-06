import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/layout/Layout";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import Prism from "prismjs";
import axios from "axios";
import { BASE_URL } from "./config";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

axios.defaults.baseURL = BASE_URL;

function App() {
  const timerRunning: boolean = useSelector((state: any) => state.timer.isRunning);
  const timerFinished: boolean = useSelector((state: any) => state.timer.isFinished);

  useEffect(() => {
    if (!timerFinished) return;
    Prism.highlightAll();
  }, [timerFinished]);

  // return <Layout></Layout>;
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
            <Redirect to="/exams" />
          </Route>

          <Route path="/exams" exact>
            {!timerRunning && !timerFinished ? <Home /> : <Exams />}
          </Route>

          <Route path="/admin" exact>
            <Admin />
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
