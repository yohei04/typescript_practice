import React, { useEffect } from 'react';
import { Store } from '../redux/store';
import { IEpisodeProps } from '../interfaces';
import { fetchDataAction } from '../redux/Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    state: {state, dispatch}
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </div>
  );
};

export default HomePage;
