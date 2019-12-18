import React from 'react';
import {Group} from '@vkontakte/vkui';
import CatalogItem from './CatalogItem'

const WidgetCatalog = (props) => {
  return (
    <Group
      id={'widgetCatalog'}
      className={'content'}
      title={'Каталог виджетов/для продаж'}
    >
      {props.catalog.map(item => {
        return <CatalogItem key={item.id} data={item} handlePanelSwitch={props.handlePanelSwitch}  />
      })}
    </Group>
  )
};

export default WidgetCatalog;