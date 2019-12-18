import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import VKConnect from "../custom_states/useVKConnect";
import connect from '@vkontakte/vk-connect';

const Home = ({id, go, fetchedUser, token, onGetCommunityClick, group_id}) => {

    function addWidget(group_id, type, user) {
        console.log(user)
        const json = user.sex === 2 ? `{title: "vle", title_url: "https://vk.com" , text: "this is a widget text content"};` : false;
        connect.send("VKWebAppShowCommunityWidgetPreviewBox", {group_id: group_id, type: type, code: `return ${json}`});
    }

    return (
        <Panel id={id}>
            <PanelHeader>Example</PanelHeader>
            {fetchedUser &&
            <Group title="User Data Fetched with VK Connect">
                <Cell
                    before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : 'Your photo could be here'}
                    description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : 'Your city name could be here'}
                >
                    {`${fetchedUser.first_name} ${fetchedUser.last_name} and token ${token}`}
                </Cell>
            </Group>}

            <Group title="Navigation Example">
                <Div>
                    <Button size="xl" level="2" onClick={go} data-to="persik">
                        Show me the Persik
                    </Button>
                </Div>
            </Group>
            <Group title="Navigation Example">
                <Div>
                    <Button onClick={() => {
                        onGetCommunityClick()
                    }}>
                        Add community
                    </Button>
                    <Button onClick={() => {
                        addWidget(group_id, 'text', fetchedUser)
                    }}>
                        Add widget
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
