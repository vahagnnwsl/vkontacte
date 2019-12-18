import React from 'react';

const Header = () => {
  return (
      <div className="widget_header clearfix">
        <p className="widget_header_name">Виджет «Акции и Скидки»</p>
        <div className="switch_wrapper">
          <p className="switch_txt">Режим Просмотра:</p>
          <label className='switch'>
          <input className='switch_checkbox' type='checkbox'/>
          <span className="switch_trigger"></span>
        </label>
        </div>
      </div>
  )
};

export default Header