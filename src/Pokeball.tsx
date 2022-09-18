import React from 'react';
import axios from 'axios';

interface Props {

}

interface Pokemon {
  species: any,
}

const Pokeball = (props: Props) => {
  const randomNumber = (): number => {
    return Math.floor(Math.random() * 905) + 1;
  }

  const handleOnClick = async (): Promise<Array<Pokemon>> => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    console.log(data);
    return data;
  }

  return (
    <button className="pokeball-button" onClick={handleOnClick}>choose your pokemon!</button>
  )
}

export default Pokeball;