export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  season: number;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  state: { state: IState; dispatch: any };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favorites: Array<IEpisode>;
}
