import React from 'react';

const WidgetTitle = (props) => {
  return (
    <p
      data-name="widget_title"
      className="widget_form_title"
      onClick={props.setModalData}>
      {props.title}
      </p>
  )
};

export default WidgetTitle;