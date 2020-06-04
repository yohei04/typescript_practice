import React from "react";

interface IStore {
  episodes: [],
  favorites: []
}

const initialState: IStore = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IStore>(initialState);


function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider value={initialState}> {props.children} </Store.Provider>
  );
}
