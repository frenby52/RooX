import * as React from "react";
import {connect} from "react-redux";
import {isUsersLoaded} from "../../../reducer/users/selectors";
import SortPanel from "../../sort-panel/sort-panel";
import Loader from "../../loader/loader";
import UserCard from "../../user-card/user-card";
import style from './users-page.module.scss';
import {User} from "../../../types";

type UsersPageProps = {
  users: User[];
  onSortButtonClick: (sortType: string) => void;
  isUsersLoaded: boolean;
};

const UsersPage: React.FunctionComponent<UsersPageProps> = (props: UsersPageProps) => {
  const {users, isUsersLoaded, onSortButtonClick} = props;

  return !isUsersLoaded ? <Loader /> : (
    <>
      <div className={style.wrapper}>
        <SortPanel onSortButtonClick={onSortButtonClick} />
        <div className={style[`users-wrapper`]}>
          <h2 className={style.title}>Список пользователей</h2>
          {isUsersLoaded && !users.length ? <div>No data to show</div> : users.map((user) => <UserCard user={user} key={user.id} />)}
        </div>
      </div>
      <footer className={style.footer}>
        Найдено {users.length} пользователей
      </footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  isUsersLoaded: isUsersLoaded(state),
});

export {UsersPage};
export default connect(mapStateToProps, null)(UsersPage);
