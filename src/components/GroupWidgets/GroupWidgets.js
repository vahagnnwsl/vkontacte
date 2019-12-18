import React, {useState, useEffect} from 'react';
import {Group, Div, Cell, List} from '@vkontakte/vkui';
import Widget from './Widget';
import Owl from '../../images/owl.png';
import axios from 'axios';

const GroupWidgets = (props) => {

  const [groupWidgets, setWidget] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.get('widgets')
      .then(res => {
        setWidget(res.data.resp)
        console.log(res.data.resp)
      })
      .catch(res => {
        console.log(res)
      })
  }, []);

  let widgets = null;
  if (groupWidgets) {
    widgets = <List>
      {groupWidgets.map((item) => (
      <Cell key={item.id} draggable onDragFinish={({from, to}) => {
        const draggingList = [...groupWidgets];
        draggingList.splice(from, 1);
        draggingList.splice(to, 0, groupWidgets[from]);
        setWidget(draggingList);
      }}>
        <Widget id={'widget'} widgetData={item}/>
      </Cell>
      ))}
    </List>
  } else {
    widgets = <Div className={'empty_content'}>
      <img className={'empty_content_img'} src={Owl} alt=""/>
      <p className={'empty_content_message'}>
        Дружище, у тебя еще нет виджетов. Не пора ли их создать?
      </p>
      <button
        className={'btn-pink empty_content_btn'}
        data-panel={'widgetCatalog'}
        onClick={(e) => {props.handleContentPanelSwitch(e); props.getCatalog('sale')}}
      >
        Создать виджет
      </button>
    </Div>
  }
  return (
    <Group
      id={'group_widgets'}
      className={'content'}
      title={
        <div>
          <span>Мои Виджеты </span>
          <button
            className='btn-pink create_widget_btn'
            onClick={(e) => {props.handleContentPanelSwitch(e); props.getCatalog('sale')}}>+ Создать Виджет</button>
        </div>
      }
    >
      {widgets}
    </Group>
  )
};

export default GroupWidgets;