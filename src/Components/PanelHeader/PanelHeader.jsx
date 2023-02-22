import {Group, PanelHeader, PanelHeaderButton, Tabs, TabsItem, Text} from '@vkontakte/vkui'
import React from 'react'
import {Icon28UserOutline, Icon28AddOutline} from '@vkontakte/icons';

function HeaderPanel({title,setActiveModal}) {
    return (
        <Tabs style={{backgroundColor:"#FFFFFF"}}>
            <TabsItem>
                <Icon28UserOutline style={{color:"#ED4344"}}/>
            </TabsItem>
            <Text>{title}</Text>
            <TabsItem onClick={()=>setActiveModal("modal_active")}>
                <Icon28AddOutline style={{color:"#ED4344"}}/>
            </TabsItem>
        </Tabs>
    )
}

export default HeaderPanel