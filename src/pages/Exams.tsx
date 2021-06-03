import { useSelector } from "react-redux";
import ExamResults from "../components/examResults/ExamResults";
import Questions from "../components/questions/Questions";
import RightMenu from "../components/rightMenu/RightMenu";
// import classes from "./Home.module.css";

const Exams: React.FC = (props) => {
  const timerFinished: boolean = useSelector((state: any) => state.timer.isFinished);

  return (
    <div className="wraper">
      {timerFinished ? <ExamResults /> : <Questions />}
      <RightMenu />
    </div>
  );
};

export default Exams;
