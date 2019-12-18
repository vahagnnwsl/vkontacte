import React from 'react';
import {Avatar} from '@vkontakte/vkui'
import groupImg from '../../images/avatar.png'

const GroupInfo = () => {
    return (
        <div id='group' className='clearfix'>
            <div className="info">
                <p className='name'>John Doe</p>
                <p className="subscription_info">Тариф «Для бизнеса»: 23 дней.</p>
            </div>
            <div className="avatar">
                <a href="">
                    <Avatar size={40} src={groupImg}/>
                </a>
            </div>
        </div>
    );
};

export default GroupInfo;