import {createSelector} from "reselect";
import NameSpace from "../name-space";

export const getUsers = (state) => state[NameSpace.USERS].users;

export const isUsersLoaded = (state) => state[NameSpace.USERS].isUsersLoaded;

export const getSortType = (state) => state[NameSpace.USERS].sortType;

export const getFilteredUsers = createSelector(
    getUsers,
    getSortType,
    (users, sortType) => {
      if (sortType !== ``) {

        return users.slice().sort((a, b) => {
          let x = a[sortType].toLowerCase();
          let y = b[sortType].toLowerCase();
          if (x < y) {
            return -1;
          }

          if (x > y) {
            return 1;
          }

          return 0;
        });
      }

      return users;
    }
);
