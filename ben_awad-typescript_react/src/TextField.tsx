import React from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person
}

export const TextField: React.FC<Props> = ({}) => {
  return (
    <div>
    </div>
  )
}

