import React, {useState} from 'react';
import cameraIcon from '../../../images/camera_icon.png';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import {Cell} from '@vkontakte/vkui';
import {
  arrayMove,
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

const SortableHandle = sortableHandle(() => <Icon24Reorder/>)

const SortableContainer = sortableContainer(({children}) => {
  return <div className="widget_form_cards_wrapper">{children}</div>;
});


const SortableItem = sortableElement(({el, props, i}) =>
  <div key={el.i} data-index={i} className="widget_form_card">
    <a href="#" className='widget_link'>
      <div
        className="widget_card_img" onClick={(e) => {
          if(e.currentTarget.classList.contains('widget_card_img')) {
            props.getTileIndex(e);
            props.toggleModal()
          }
      }}>
        {props.showRemoveIcon && <Icon24Cancel className="remove_icon" onClick={() => props.removeTile(i)}/>}
        <SortableHandle/>
        {
          el.img_url ?
            <img onClick={(e) => {
              props.toggleModal();
              props.getTileIndex(e)
            }} className='img' src={el.img_url}/>
            :
            <img src={cameraIcon} onClick={(e) => {
              props.toggleModal();
              props.getTileIndex(e)
            }} className='camera_icon'/>
        }
      </div>
      <p
        data-name='tile_title'
        onClick={props.setModalData}
        className="widget_card_title">{el.title ? el.title : '+добавить'}
      </p>
      <p data-name='tile_descr'
         onClick={props.setModalData}
         className="widget_card_desc">{el.descr ? el.descr : '+добавить'}
      </p>
      <p data-name='tile_link'
         onClick={props.setModalData}
         className="widget_card_link">{el.link ? el.link : '+добавить'}
      </p>
    </a>
  </div>
);

const DiscountWidget = (props) => {
  return (
    <SortableContainer axis='xy' useDragHandle onSortEnd={({oldIndex, newIndex}) => {
      let array = [...props.data];
      array = arrayMove(array, oldIndex, newIndex);
      props.setItemsOrder(array);
    }}>
      {props.data.map((el, i) => {
        return (
          <SortableItem key={i} index={i} props={props} el={el} i={i}/>
        )
      })}
      {props.showTileAdder &&
      <div onClick={props.addTile} className='widget_form_card new_tile_btn'>+ Добавить элемент</div>}
    </SortableContainer>
  );
};

export default DiscountWidget;