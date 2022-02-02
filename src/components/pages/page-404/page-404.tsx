import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import style from './page-404.module.scss';

const Page404 = () => {
  return (
    <h3 className={style.title}>Error 404!<br />Page was not found. <Link className={style.link} to={AppRoute.ROOT}>Go to main page</Link></h3>
  );
};

export default Page404;

