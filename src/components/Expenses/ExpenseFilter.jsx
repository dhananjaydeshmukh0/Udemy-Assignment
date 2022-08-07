import React from 'react';

const ExpensesFilter = ({setYearSelected,yearSelected}) => {
    
    const onChangehandler=(e)=>{
        setYearSelected(e.target.value.toString());
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={yearSelected} onChange={onChangehandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;