import {Link} from "react-router-dom";
import * as React from "react";
import {AppRoute} from "../../const";
import style from './user-card.module.scss';

const UserCard = (props) => {
  const {user} = props;

  return (
    <div className={style.wrapper}>
      <p className={style[`item-value`]}><span className={style[`item-title`]}>ФИО:</span> {user.name}</p>
      <p className={style[`item-value`]}><span className={style[`item-title`]}>город:</span> {user.city}</p>
      <div className={style[`company-wrapper`]}>
        <p className={style[`item-value`]}><span className={style[`item-title`]}>компания:</span> {user.companyName}</p>
        <Link className={style.link} to={AppRoute.USERS + `/${user.id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default UserCard;
