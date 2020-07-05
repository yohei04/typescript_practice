import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
import { AddSong } from '../types';

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

  const addSong: AddSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log('useEffect hook run', songs)
  })

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};
export default SongList;
