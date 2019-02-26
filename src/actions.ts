import { Action } from 'redux';
import api from './api';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './reducer';

export const actionTypes = {
  FETCHING_ARTICLE: 'FETCHING_ARTICLE',
  SET_ARTICLE: 'SET_ARTICLE',
};

export const getArticles = (
  type: string,
  page: number,
  category: string,
  query?: string,
): ThunkAction<void, AppState, null, Action<string>> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  if (state.fetching) {
    return;
  }

  dispatch(setFetchingArticles(true));
  console.log('current Page', page);
  try {
    const endpoint = type === 'search' ? 'everything' : 'top-headlines';

    const { data } = await api.get<ArticlesResponse>(`/${endpoint}`, {
      params: {
        page,
        country: type !== 'search' ? 'us' : undefined,
        category: type !== 'search' ? category : undefined,
        q: type === 'search' ? query : undefined,
      },
    });
    dispatch(setArticles(data.articles, page));
    dispatch(setFetchingArticles(false));
  } catch (err) {
    console.log(err);
    dispatch(setFetchingArticles(false));
  }
};

const setArticles = (articles: Article[], page: number) => ({
  type: actionTypes.SET_ARTICLE,
  articles,
  page,
});

const setFetchingArticles = (fetching: boolean) => ({
  type: actionTypes.FETCHING_ARTICLE,
  fetching,
});
