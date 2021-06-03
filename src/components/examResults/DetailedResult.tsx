import { QuestionModel } from "../../models";
import classes from "./DetailedResult.module.css";

interface Props {
  item: QuestionModel;
}

const DetailedResult: React.FC<Props> = (props) => {
  const { item } = props;

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
                readOnly={true}
                type="checkbox"
                value={option}
                name={item.id}
                checked={item.answers.some((i) => i === option)}
              />
            ) : (
              <input readOnly={true} type="radio" value={option} name={item.id} checked={option === item.answers[0]} />
            )}
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedResult;
