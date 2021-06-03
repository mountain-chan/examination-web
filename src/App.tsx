import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/layout/Layout";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import Prism from "prismjs";

function App() {
  const timerRunning: boolean = useSelector((state: any) => state.timer.isRunning);
  const timerFinished: boolean = useSelector((state: any) => state.timer.isFinished);

  useEffect(() => {
    if (!timerFinished) return;
    Prism.highlightAll();
  }, [timerFinished]);

  return <Layout>{!timerRunning && !timerFinished ? <Home /> : <Exams />}</Layout>;
}

export default App;
