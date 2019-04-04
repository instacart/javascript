import React from 'react';

interface Props {
  text: string;
  hidden?: boolean;
}

const FixtureComponent: React.FunctionComponent<Props> = ({ text, hidden }) => {
  if (hidden) {
    return null;
  }

  return <div>{text}</div>;
}

export { FixtureComponent };
