import {Group, Panel} from '@vkontakte/vkui'
import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeaderPanel from '../Components/PanelHeader/PanelHeader'
import RemindersContent from '../Components/RemindersContent/RemindersContent'

function NotesPages({activePanel,setActivePanel}) {
    return (
        <Group>
            <HeaderPanel title="Напоминания"/>
            <RemindersContent/>
            <NavBar activePanel={activePanel} setActivePanel={setActivePanel}/>
        </Group>

    )
}

export default NotesPages