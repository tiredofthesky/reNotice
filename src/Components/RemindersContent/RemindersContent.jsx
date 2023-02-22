

import {Group, Panel} from '@vkontakte/vkui'
import React from 'react'
import ReminderItem from "../ReminderItem/ReminderItem";

function RemindersContent() {
    return (
        <Group style={{backgroundColor:"#F2F1F7",height:"calc(100vh - 65px)"}}>
            <ReminderItem/>
            <ReminderItem/>

        </Group>
    )
}
export default RemindersContent;