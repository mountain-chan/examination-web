import { useDispatch, useSelector } from "react-redux";
import { QuestionModel } from "../../models";
import { currentIndexActions } from "../../store";
import Question from "../question/Question";
import classes from "./Questions.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";
import Button from "../UI/Button";
require("prismjs/components/prism-python");

const Questions: React.FC = (props) => {
  const dispatch = useDispatch();
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);
  const currentIndex: number = useSelector((state: any) => state.currentIndex);

  useEffect(() => {
    Prism.highlightAll();
  }, [currentIndex]);

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

  const onClickMarkBtn = () => {};

  return (
    <div className={classes.mainLeft}>
      <p className={classes.question}>Câu hỏi số {currentIndex + 1}: </p>
      <Question index={currentIndex} item={questions[currentIndex]} />

      <div className={classes.actions}>
        <div>
          <Button disabled={currentIndex === 0} className={classes.prevBtn} onClick={onClickPreviousBtn}>
            Quay Lại
          </Button>

          <Button disabled={currentIndex === questions.length - 1} className={classes.nextBtn} onClick={onClickNextBtn}>
            Tiếp tục
          </Button>
        </div>

        <Button disabled={false} className={classes.markBtn} onClick={onClickMarkBtn}>
          <i className="fas fa-bookmark" style={{ marginRight: 6 }}></i>
          Đánh dấu
        </Button>
      </div>
    </div>
  );
};

export default Questions;
