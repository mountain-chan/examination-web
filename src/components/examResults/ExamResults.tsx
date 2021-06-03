import { useSelector } from "react-redux";
import { QuestionModel } from "../../models";
import DetailedResult from "./DetailedResult";
// import classes from "./ExamResults.module.css";

const ExamResults: React.FC = (props) => {
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);

  const correctAnswers = questions.filter(
    (item) => JSON.stringify(item.answers) === JSON.stringify(item.correctAnswer)
  ).length;

  const correctPersent = (correctAnswers / questions.length) * 100;

  return (
    <div>
      <div>
        <h1>
          {correctAnswers}/{questions.length}
        </h1>
        <p>
          Bạn trả lời đúng{" "}
          <span>
            {correctAnswers}/{questions.length}
          </span>{" "}
          ({correctPersent}%) câu hỏi trong bài kiểm tra này
        </p>
      </div>

      <div>
        <div>Chi tiết bài kiểm tra</div>
        <p>(Chúng tôi chỉ hiển thị đáp án bạn đã chọn, không hiển thị đáp án đúng của hệ thống)</p>
      </div>

      <div>
        {questions.map((item, index) => (
          <div key={item.id}>
            {JSON.stringify(item.correctAnswer) === JSON.stringify(item.answers) ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}{" "}
            Câu {index + 1}
            <DetailedResult item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResults;
