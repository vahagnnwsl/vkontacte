import React from 'react';
import {Div, Button} from '@vkontakte/vkui';

const CatalogItem = (props) => {
  return (
    <Div className={'catalog_item'}>
      <div className={'widget_description clearfix'}>
        <img className='widget_description_img' src={props.data.img}
             alt="img"/>
        <div className="widget_description_wrapper">
          <h1 className='widget_description_wrapper_title'>{props.data.title}</h1>
          <p className="widget_description_wrapper_detail">
            {props.data.description}
          </p>
          <Button onClick={(e) => props.handlePanelSwitch(e)} data-panel='widgetCreator' className='widget_description_wrapper_btn'>Выбрать</Button>
        </div>
      </div>
    </Div>
  )
};

export default CatalogItem;