import { useDispatch } from "react-redux";
import { QuestionModel } from "../../models";
import { questionActions } from "../../store";
import classes from "./Question.module.css";

interface Props {
  item: QuestionModel;
  index: number;
}

const Question: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { item, index } = props;

  const onRadioChangeValue = (e: any) => {
    const option = e.target.value;
    const payload = {
      indexQuestion: index,
      answer: option,
    };
    dispatch(questionActions.updateOneAnswer(payload));
  };

  const onCheckboxChangeValue = (e: any) => {
    const option = e.target.value;
    const checked = e.target.checked;
    const payload = {
      indexQuestion: index,
      option: option,
      checked: checked,
    };
    dispatch(questionActions.updateMultiAnswers(payload));
  };

  return (
    <div>
      <p>{item.question}</p>

      {item.code.trim().length > 0 && (
        <pre className="language-py">
          <code>{item.code}</code>
        </pre>
      )}

      <div className={classes.options}>
        {item.options.map((option, index) => (
          <div className={classes.option} key={index}>
            {item.multiAnswers ? (
              <input
                className={classes.input}
                onChange={onCheckboxChangeValue}
                type="checkbox"
                value={option}
                name={item.id}
                checked={item.answers.some((i) => i === option)}
              />
            ) : (
              <input
                className={classes.input}
                onChange={onRadioChangeValue}
                type="radio"
                value={option}
                name={item.id}
                checked={option === item.answers[0]}
              />
            )}
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
