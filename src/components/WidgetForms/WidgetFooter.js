import React from 'react';

const WidgetFooter = (props) => {
  return(
    <a
      data-name="widget_footer"
      href='#'
      onClick={props.setModalData}
      className="widget_footer">
      {props.more ? props.more : '+ Добавить подвал виджета'}
    </a>
  )
};

export default WidgetFooter;