import { actionTypes } from './actions';

export interface IState {
  articles: Article[];
  page: number;
  fetching: boolean;
}

export const startingState: IState = {
  articles: [],
  page: 1,
  fetching: false,
};

export const reducer = (state = startingState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_ARTICLE:
      return {
        ...state,
        fetching: action.fetching,
      };
    case actionTypes.SET_ARTICLE:
      let articles;
      if (action.page > 1) {
        articles = [...state.articles, ...action.articles];
      } else {
        articles = action.articles;
      }

      return {
        ...state,
        articles,
        page: action.page,
      };
    default:
      return state;
  }
};

export type AppState = ReturnType<typeof reducer>;
