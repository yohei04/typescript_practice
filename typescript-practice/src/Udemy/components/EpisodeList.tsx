import React from 'react';
import { IEpisode } from '../interfaces';

const EpisodeList = (props: any): React.FC => {
  const { episodes, toggleFavAction, favorites, state } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick adn Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'fles', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodeList;
