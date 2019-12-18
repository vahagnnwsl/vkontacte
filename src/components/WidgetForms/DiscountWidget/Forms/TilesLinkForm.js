import React from 'react';
import {FormLayout, Input} from '@vkontakte/vkui';

const TilesLinkForm = (props) => {
    return (
      <FormLayout>
        <Input top='Текст' name='link' onChange={props.handleInputChange} defaultValue={props.data.link} />
        <Input top='Ссылка' name='link_url' onChange={props.handleInputChange} defaultValue={props.data.link_url} />
      </FormLayout>
    )
};

export default TilesLinkForm