import { useState } from "react";

interface Props {
  name: string;
}

export const Component = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      SPOKO jestes {props.name} razy {counter}
      <button onClick={onClick}> pobij mnie </button>
    </div>
  );
};
