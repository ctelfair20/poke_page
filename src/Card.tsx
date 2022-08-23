import * as React from 'react';

interface Props {

}

const Card = (props: Props) => {
  return (
    <div className="background-by-type">
      <div className="pokemon-image"></div>
      <div className="pokemon-name"></div>
      <div className="description"></div>
    </div>
  );
};

export default Card;
