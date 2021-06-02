import classes from "./Button.module.css";

interface Props {
  className: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={`${classes.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
