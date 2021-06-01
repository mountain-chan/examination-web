import { QuestionModel } from "../../models";
import classes from "./Question.module.css";

interface Props {
  item: QuestionModel;
}

const Question: React.FC<Props> = (props) => {
  const onChangeValue = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <p>{props.item.question}</p>

      {props.item.code.trim().length > 0 && (
        <pre className="language-py">
          <code>{props.item.code}</code>
        </pre>
      )}

      <div onChange={onChangeValue}>
        {props.item.options.map((option, index) => (
          <div key={index}>
            <input type="radio" value={option} name="option" />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
