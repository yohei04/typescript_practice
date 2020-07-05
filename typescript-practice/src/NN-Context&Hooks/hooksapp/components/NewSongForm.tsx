import React, { useState } from 'react';
import { AddSong } from '../types';

interface NewSongFormProps {
  addSong: AddSong
}

const NewSongForm: React.FC<NewSongFormProps> = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSong(title);
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};
export default NewSongForm;
