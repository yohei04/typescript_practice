import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SongListProps { }

interface Songs {
  title: string
  id: number | string
}

const SongList: React.FC<SongListProps> = ({}) => {
  const [songs, setSongs] = useState<Songs[]>([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'newSong', id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};
export default SongList;
