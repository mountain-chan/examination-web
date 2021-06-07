import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { QuestionModel } from "../../models";
import DetailedResult from "./DetailedResult";
import "./ExamResults.css";

const ExamResults: React.FC = (props) => {
  const questions: QuestionModel[] = useSelector((state: any) => state.questions);
  const currentIndex: number = useSelector((state: any) => state.currentIndex);

  const myRef = useRef<any[]>(Array.from({ length: 20 }));

  const correctAnswers = questions.filter(
    (item) => JSON.stringify(item.answers) === JSON.stringify(item.correctAnswer)
  ).length;

  const correctPersent = (correctAnswers / questions.length) * 100;

  useEffect(() => {
    if (currentIndex === -1) return;
    myRef.current[currentIndex].scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentIndex]);

  return (
    <div>
      <div className="centered">
        <div className="ExamResults-top">
          <span className="ExamResults-logo">
            {correctAnswers}/{questions.length}
          </span>
          <p>
            Bạn trả lời đúng{" "}
            <span>
              {correctAnswers}/{questions.length}
            </span>{" "}
            ({correctPersent}%) câu hỏi trong bài kiểm tra này
          </p>
        </div>

        <div className="ExamResults-top2">
          <span>Chi tiết bài kiểm tra</span>
          <p>(Chúng tôi chỉ hiển thị đáp án bạn đã chọn, không hiển thị đáp án đúng của hệ thống)</p>
        </div>
      </div>

      <div>
        {questions.map((item, index) => (
          <div ref={(r) => (myRef.current[index] = r)} className="ExamResults-item" key={item.id}>
            <div className="fontBold">
              {JSON.stringify(item.correctAnswer) === JSON.stringify(item.answers) ? (
                <i className="fas fa-check color2" />
              ) : (
                <i className="fas fa-times color3" />
              )}{" "}
              Câu {index + 1}
            </div>
            <DetailedResult item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResults;
