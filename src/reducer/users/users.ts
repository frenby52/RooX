import User from "../../models/user";
import {AppRoute} from "../../const";
import {User as UserType} from "../../types";

type UsersState = {
  users: UserType[];
  isUsersLoaded: boolean;
  sortType: string;
};

const initialState: UsersState = {
  users: [],
  isUsersLoaded: false,
  sortType: ``
};

const enum ActionType {
  GET_USERS = `GET_USERS`,
  SET_USERS_LOADER_STATE = `SET_USERS_LOADER_STATE`,
  CHANGE_SORT_TYPE = `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  getUsers: (users) => ({type: ActionType.GET_USERS, payload: users}),
  setUsersLoaderState: (isUsersLoaded) => ({type: ActionType.SET_USERS_LOADER_STATE, payload: isUsersLoaded}),
  changeSortType: (sortType) => ({type: ActionType.CHANGE_SORT_TYPE, payload: sortType}),
};

const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return Object.assign({}, state, {users: action.payload});

    case ActionType.SET_USERS_LOADER_STATE:
      return Object.assign({}, state, {isUsersLoaded: action.payload});

    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {sortType: action.payload});
  }

  return state;
};

const Operation = {
  getContacts: () => (dispatch, getState, api) => {

    return api.get(AppRoute.USERS)
      .then((response) => response.data)
      .then(User.parseUsers)
      .then((response) => {
        dispatch(ActionCreator.getUsers(response));
        dispatch(ActionCreator.setUsersLoaderState(true));
      })
      .catch((err) => {
        throw err;
      });
  },
};

export {reducer, Operation, ActionType, ActionCreator};
