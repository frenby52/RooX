import React from "react";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import UsersPage from "../pages/users-page/users-page.jsx";
import withIsActive from '../../hocs/with-is-active/with-is-active';
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import Page404 from "../pages/page-404/page-404.jsx";
import {getFilteredUsers} from "../../reducer/users/selectors";
import {getUserById} from "../../utils";
import UserProfile from "../pages/user-profile/user-profile.jsx";
import {ActionCreator} from "../../reducer/users/users";
import '../../sass/global.scss';

const UserProfileWrapped = withIsActive(UserProfile);

const App = (props) => {
  const {users, onSortButtonClick} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() => <UsersPage users={users} onSortButtonClick={onSortButtonClick} />}
        />
        <Route exact path={AppRoute.USERS + `/:id`}
          render={(routerProps) => <UserProfileWrapped user={getUserById(routerProps, users)} onSortButtonClick={onSortButtonClick}/>}
        />
        <Route
          render={() => <Page404 />}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  users: getFilteredUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSortButtonClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
