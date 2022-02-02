import React from 'react';
import style from './sort-panel.module.scss';

const SortPanel = (props) => {
  const {onSortButtonClick} = props;

  return (
    <div className={style.wrapper}>
      <div>Сортировка</div>
      <button className={style.btn} type="button" onClick={(e)=> onSortButtonClick(e.target.id)} name="city" id={`city`} >по городу</button>
      <button className={style.btn} type="button" onClick={(e)=> onSortButtonClick(e.target.id)} name="company" id={`companyName`} >по&nbsp;компании</button>
    </div>
  );
};

export default SortPanel;
