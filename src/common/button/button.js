import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  return (
    <Button
      className={props.class}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.iconLeft && props.iconLeft}
      {props.name}
      {props.iconRight && props.iconRight}
    </Button>
  );
};

export default CustomButton;
