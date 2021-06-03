import { useDispatch, useSelector } from "react-redux";
import { QuestionModel } from "../../models";
import { currentIndexActions } from "../../store";
import Circle from "../UI/circle/Circle";
import classes from "./RightMenu.module.css";

const RightMenu: React.FC = (props) => {
  const dispatch = useDispatch();
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);
  const currentIndex: number = useSelector((state: any) => state.currentIndex);

  const onClickHandler = (index: number) => {
    dispatch(currentIndexActions.updateCurrentIndex(index));
  };

  return (
    <div className={classes.rightMenu}>
      <div className={classes.top}>
        <p style={{ fontWeight: 600 }}>Phần thi số 1</p>
        <div className={classes.topNote}>
          <div>
            <div className={classes.noteElement}>
              <Circle className={`${classes.smallCircle} ${classes.answered}`} />
              <span>Đã trả lời</span>
            </div>

            <div className={classes.noteElement}>
              <Circle className={`${classes.smallCircle} ${classes.marked}`} />
              <span>Đã đánh dấu</span>
            </div>
          </div>

          <div className={`${classes.noteElement} ${classes.noteElement1}`}>
            <Circle className={`${classes.smallCircle} ${classes.notAnswered}`} />
            <span>Chưa trả lời</span>
          </div>
        </div>
      </div>

      <div className={classes.listQuestions}>
        {questions.map((item, index) => (
          <Circle
            onClick={() => onClickHandler(index)}
            key={item.id}
            className={`${classes.bigCircle} ${
              item.marked ? classes.marked : item.answers.length > 0 ? classes.answered : ""
            } ${currentIndex === index ? classes.activated : ""}`}
          >
            {index + 1}
          </Circle>
        ))}
      </div>
    </div>
  );
};

export default RightMenu;
