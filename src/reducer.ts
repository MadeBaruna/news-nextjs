import { actionTypes } from './actions';

export interface IState {
  articles: Article[];
}

export const startingState: IState = {
  articles: [],
};

export const reducer = (state = startingState, action) => {
  switch (action.type) {
    case actionTypes.SET_ARTICLE:
      return {
        ...state,
        articles: action.articles,
      };
    default:
      return state;
  }
};

export type AppState = ReturnType<typeof reducer>;
