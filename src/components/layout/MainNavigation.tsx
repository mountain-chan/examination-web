import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimerModel, UserModel } from "../../models";
import { timerActions } from "../../store";
import Button from "../UI/Button";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = (props) => {
  const user: UserModel = useSelector((state: any) => state.auth);
  const timer: TimerModel = useSelector((state: any) => state.timer);

  const dispatch = useDispatch();

  const onClickSubmit = () => {
    dispatch(timerActions.updateFinished(true));
    dispatch(timerActions.updateRunning(false));
  };

  useEffect(() => {
    if (timer.seconds <= 0) {
      dispatch(timerActions.updateFinished(true));
      dispatch(timerActions.updateRunning(false));
    }
  }, [timer.seconds, dispatch]);

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
      Thời gian làm bài: <span style={{ marginLeft: 6, fontWeight: 600 }}>90 phút</span>
    </div>
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>{user.displayName}</div>

      <div>Kiểm tra Python cơ bản</div>

      {timeInfo}
    </header>
  );
};

export default MainNavigation;
