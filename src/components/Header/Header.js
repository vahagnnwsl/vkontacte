import React from 'react';
import GroupInfo from './GroupInfo'
import {PanelHeader, HeaderButton} from '@vkontakte/vkui';

const Header = (props) => {
    return (
        <PanelHeader
            left={<HeaderButton onClick={props.handlePanelSwitch} data-panel={'home'}>{props.title}</HeaderButton>}
            right={<GroupInfo/>}
        />
    )
};

export default Header;