import * as React from 'react';

interface Props {

}

const Card = (props: Props) => {
  return (
    <div className="background-by-type">
      <div className="pokemon-image">pokemon IMAGE goes here!</div>
      <div className="pokemon-name">pokemon NAME goes here!</div>
      <div className="description">pokemon DESCRIPTION goes here!</div>
    </div>
  );
};

export default Card;
