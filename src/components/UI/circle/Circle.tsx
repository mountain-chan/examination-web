import classes from "./Circle.module.css";

interface Props {
  className: string;
  onClick?: any;
}

const Circle: React.FC<Props> = (props) => {
  const { onClick, className } = props;
  return (
    <div onClick={onClick} className={`${classes.circle} ${className}`}>
      {props.children}
    </div>
  );
};

export default Circle;
