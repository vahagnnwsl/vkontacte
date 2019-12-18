import React from 'react';
import {
  Group,
  Cell,
  List,
} from '@vkontakte/vkui';
import ListIcon from '../../images/list_icon.png';
import LayersIcon from '../../images/layers_icon.png';
import StarIcon from '../../images/star_icon.png';
import Ideaicon from '../../images/idea_icon.png';
import Icon24List from '@vkontakte/icons/dist/24/list';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

const Menu = (props) => {

  return (
    <Group id={'menu'} title={'Меню'}>
      <a className={'item'} href="#">
        <Cell
          before={<img className='menu_icon' src={ListIcon}/>}
          onClick={props.handleContentPanelSwitch}
          data-panel="groupWidgets"
          children={'Moи виджеты'}/>
      </a>
      <a className={'item'} href="#">
        <Cell
          before={<img className='menu_icon' src={LayersIcon}/>}
          asideContent={props.isOpen ? <Icon16Dropdown/> : <Icon16Chevron/>}
          children={'Каталог Виджетов'}
          onClick={props.handleContextToggle}
        />
      </a>
      {
        props.isOpen ?
          <List className={'dropdown_items_wrapper'}>
            <a className={'item'} href="#">
              <Cell
                onClick={(e) => {
                  props.handleContentPanelSwitch(e);
                  props.getCatalog('sale')}
                }
                data-panel="widgetCatalog">
                Для продаж
              </Cell>
            </a>
            <a className={'item'} href="#">
              <Cell
                onClick={(e) => {
                  props.handleContentPanelSwitch(e);
                  props.getCatalog('navigation')}
                }
                data-panel="widgetCatalog">
                Для Навигации
              </Cell>
            </a>
          </List> : null
      }
      <a className={'item'} href="#">
        <Cell
          onClick={props.handlePanelSwitch}
          data-panel='subscription'
          before={<img className='menu_icon' src={StarIcon}/>}
        >Тарифы</Cell>
      </a>
      <a className={'item'} href="#">
        <Cell
          onClick={props.handleContentPanelSwitch}
          data-panel='help'
          before={<img className='menu_icon' src={Ideaicon}/>}
        >Помощь</Cell>
      </a>
    </Group>
  )
};

export default Menu;