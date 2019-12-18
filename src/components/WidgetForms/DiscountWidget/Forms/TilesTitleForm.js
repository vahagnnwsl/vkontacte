import React from 'react';
import {Input, FormLayout} from '@vkontakte/vkui';

const TilesTitleForm = (props) => {
  return (
    <FormLayout>
      <Input top='Заголовок' name='title' onChange={props.handleInputChange} defaultValue={props.data.title}/>
      <Input top='Ссылка' name='url' onChange={props.handleInputChange} defaultValue={props.data.url}/>
    </FormLayout>
  )
};

export default TilesTitleForm