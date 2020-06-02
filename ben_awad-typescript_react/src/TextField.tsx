import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<TextNode>({text: "hello"});
  setCount({test});

  return (
    <div>
      <input type="text" name="" id="" />
    </div>
  );
};

export default TextField;
