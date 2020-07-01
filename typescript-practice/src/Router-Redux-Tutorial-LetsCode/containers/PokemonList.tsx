import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store';
import _ from 'lodash';
import { GetPokemonList } from '../redux/actions/pokemonActions';
import { Link } from 'react-router-dom';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemonList);

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData: any = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map((el: any) => {
            return (
              <div className='pokemon.item'>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return <div>{ShowData()}</div>;
};

export default PokemonList;
