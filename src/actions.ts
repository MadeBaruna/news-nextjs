import api from './api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './reducer';
import { string } from 'prop-types';

export const actionTypes = {
  SET_ARTICLE: 'SET_ARTICLE',
};

export const getArticles = (category?: string): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    const { data } = await api.get<HeadlineResponse>('/top-headlines', {
      params: {
        country: 'us',
        category,
      },
    });
    dispatch(setArticles(data.articles));
  } catch (err) {
    console.log(err);
  }
};

const setArticles = (articles: Article[]) => ({
  type: actionTypes.SET_ARTICLE,
  articles,
});
