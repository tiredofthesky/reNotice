
import {Group, Panel} from '@vkontakte/vkui'
import React from 'react'
import { Calendar } from '@vkontakte/vkui';
import './CalendarContent.scss'
function CalendarContent() {
    return (
        <Group>

<Calendar style={{height: "calc(100vh - var(--panelheader_height_ios))", width: "calc(100vh - var(--panelheader_width_ios))"}}></Calendar>
          
        </Group>
    )
}
export default CalendarContent;