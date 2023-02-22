import {Group, Panel} from '@vkontakte/vkui'
import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeaderPanel from '../Components/PanelHeader/PanelHeader'
import CalendarContent from '../Components/Calendar/CalendarContent'

function CalendarPages({activePanel,setActivePanel}) {
    return (
        <Group>
            <HeaderPanel title="Календарь"/>
            <CalendarContent/>     
            <NavBar activePanel={activePanel} setActivePanel={setActivePanel}/>
        </Group>
    )
}

export default CalendarPages;