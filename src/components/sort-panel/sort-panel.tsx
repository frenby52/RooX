import * as React from "react";
import style from './sort-panel.module.scss';

type SortPanelProps = {
  onSortButtonClick: (sortType: string) => void;
};

const SortPanel: React.FunctionComponent<SortPanelProps> = (props: SortPanelProps) => {
  const {onSortButtonClick} = props;

  return (
    <div className={style.wrapper}>
      <div>Сортировка</div>
      <button className={style.btn} type="button" onClick={(e)=> onSortButtonClick(e.currentTarget.id)} name="city" id={`city`} >по городу</button>
      <button className={style.btn} type="button" onClick={(e)=> onSortButtonClick(e.currentTarget.id)} name="company" id={`companyName`} >по&nbsp;компании</button>
    </div>
  );
};

export default SortPanel;
