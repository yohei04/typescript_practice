import React from "react";

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState>(initialState);

function reducer(store: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
  }
}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider value={initialState}> {props.children} </Store.Provider>
  );
}
