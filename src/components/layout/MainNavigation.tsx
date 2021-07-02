import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rest } from "../../config";
import { QuestionModel, TimerModel, UserModel } from "../../models";
import { questionActions, timerActions } from "../../store";
import { callApi } from "../../utils";
import Button from "../UI/Button";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = (props) => {
  const user: UserModel = useSelector((state: any) => state.auth);
  const timer: TimerModel = useSelector((state: any) => state.timer);
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);

  const dispatch = useDispatch();

  const callFinishExam = useCallback(
    async (timeRemaining: number) => {
      const questionsAnswer: any = questions.map((item: QuestionModel) => ({
        id: item.id,
        answers: item.answers,
      }));

      const body = {
        email: user.email,
        name: user.name,
        imageUrl: user.imageUrl,
        time_spend: 1800 - timeRemaining,
        total_time: 1800,
        language: "python",
        answers: questionsAnswer,
      };

      const response: any = await callApi({
        api: rest.finishExam(),
        method: "post",
        body: body,
      });
      const { status, data } = response;

      if (status) {
        const reuslts: QuestionModel[] = questions.map((item: QuestionModel) => ({
          ...item,
          isCorrect: data.find((i: any) => i.id === item.id)?.isCorrect || false,
        }));

        dispatch(questionActions.updateQuestions(reuslts));
      } else {
        alert("Backend Failed");
      }
    },
    [user, questions, dispatch]
  );

  const onClickSubmit = async () => {
    callFinishExam(timer.seconds);
    dispatch(timerActions.updateFinished(true));
    dispatch(timerActions.updateRunning(false));
  };

  useEffect(() => {
    if (timer.seconds <= 0) {
      callFinishExam(0);
      dispatch(timerActions.updateFinished(true));
      dispatch(timerActions.updateRunning(false));
    }
  }, [timer.seconds, dispatch, callFinishExam]);

  useEffect(() => {
    if (!timer.isRunning) {
      return;
    }

    const countDownInterval = setInterval(() => {
      dispatch(timerActions.updateTime());
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [timer.isRunning, dispatch]);

  const timeInfo = timer.isFinished ? (
    <div>Đã kết thúc</div>
  ) : timer.isRunning ? (
    <div style={{ display: "flex", alignItems: "center" }}>
      Thời gian còn lại:{" "}
      <div style={{ marginLeft: 6, fontWeight: 600, minWidth: 80 }}>
        {("00" + Math.floor(timer.seconds / 3600)).substr(-2)}:
        {("00" + Math.floor((timer.seconds % 3600) / 60)).substr(-2)}:{("00" + (timer.seconds % 60)).substr(-2)}
      </div>
      <Button disabled={false} className={classes.submitBtn} onClick={onClickSubmit}>
        Nộp Bài
      </Button>
    </div>
  ) : (
    <div>
      Thời gian làm bài: <span style={{ marginLeft: 6, fontWeight: 600 }}>30 phút</span>
    </div>
  );

  return (
    <header className={classes.header}>
      {user.email !== "" ? (
        <div className={classes.wrapperInfo}>
          <img className={classes.avatar} src={user.imageUrl} alt="avatar" />
          <span className={classes.username}>{user.name}</span>
        </div>
      ) : (
        ""
      )}

      <div>Kiểm tra Python cơ bản</div>

      {timeInfo}
    </header>
  );
};

export default MainNavigation;
