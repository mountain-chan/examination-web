import { useDispatch, useSelector } from "react-redux";
import ExamResults from "../components/examResults/ExamResults";
import Questions from "../components/questions/Questions";
import RightMenu from "../components/rightMenu/RightMenu";
import { currentIndexActions } from "../store";
// import classes from "./Home.module.css";

const Exams: React.FC = (props) => {
  const timerFinished: boolean = useSelector((state: any) => state.timer.isFinished);
  const dispatch = useDispatch();

  if (timerFinished) {
    dispatch(currentIndexActions.updateCurrentIndex(-1));
  }

  return (
    <div className="wraper">
      {timerFinished ? <ExamResults /> : <Questions />}
      <RightMenu />
    </div>
  );
};

export default Exams;
