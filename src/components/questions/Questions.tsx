import { useDispatch, useSelector } from "react-redux";
import { QuestionModel } from "../../models";
import { currentIndexActions } from "../../store";
import Question from "../question/Question";
import classes from "./Questions.module.css";

const Questions: React.FC = (props) => {
  const dispatch = useDispatch();
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);
  const currentIndex: number = useSelector((state: any) => state.currentIndex);

  const onClickPreviousBtn = () => {
    if (currentIndex > 0) {
      dispatch(currentIndexActions.updateCurrentIndex(currentIndex - 1));
    }
  };

  const onClickNextBtn = () => {
    if (currentIndex < questions.length - 1) {
      dispatch(currentIndexActions.updateCurrentIndex(currentIndex + 1));
    }
  };

  return (
    <div>
      <p>Câu hỏi số {currentIndex + 1}: </p>
      <Question item={questions[currentIndex]} />
      <div>
        <button onClick={onClickPreviousBtn}>Quay Lại</button>
        <button onClick={onClickNextBtn}>Lưu Tiếp tục</button>
      </div>
    </div>
  );
};

export default Questions;
