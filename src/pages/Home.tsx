import { useDispatch } from "react-redux";
import Button from "../components/UI/Button";
import { timerActions } from "../store";
import classes from "./Home.module.css";

const Home: React.FC = (props) => {
  const dispatch = useDispatch();

  const onClickBtnHandler = () => {
    dispatch(timerActions.updateRunning(true));
  };

  return (
    <div>
      <div>
        <p>Chú ý:</p>
        <p>
          - Trang web sẽ bật <span>chế độ toàn màn hình</span> trong lúc thi, việc thoát khỏi chế độ toàn màn hình là{" "}
          <span>vi phạm quy chế thi</span>
        </p>
        <p>
          - Sau khi nhấn <span>"Nộp bài"</span>, bài thi kết thúc và bạn sẽ <span>không thể sửa bài thi</span> nữa
        </p>
        <p> Thời gian làm bài thi có hạn, chú ý thời gian hợp lý cho mỗi câu để đạt kết quả tốt nhất.</p>
      </div>

      <div>
        <Button disabled={false} className={classes.startBtn} onClick={onClickBtnHandler}>
          Bắt đầu thi
        </Button>
      </div>
    </div>
  );
};

export default Home;
