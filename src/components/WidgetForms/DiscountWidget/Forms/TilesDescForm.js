import React from 'react';
import {FormLayout, Input} from '@vkontakte/vkui';

const TilesDescForm = (props) => {
  return (
    <FormLayout>
      <Input top='Описание' name='descr' onChange={props.handleInputChange} defaultValue={props.data.descr}/>
    </FormLayout>
  )
};

export default TilesDescForm;