import { SubnavigationBar, SubnavigationButton, Tabbar, TabbarItem } from '@vkontakte/vkui'
import React from 'react'
import './NavBar.scss'
import { Icon28BookOutline, Icon28MoreHorizontal, Icon28NotificationAddOutline,Icon28CalendarOutline} from '@vkontakte/icons';
function NavBar({activePanel,setActivePanel}) {
    return (
        <Tabbar style={{backgroundColor:"#FFFFFF"}}>
            <TabbarItem selected={activePanel === 'remindersPage'} text="Напоминания" onClick={()=>setActivePanel("remindersPage")}>
            <Icon28NotificationAddOutline/>
            </TabbarItem >
            <TabbarItem selected={activePanel === 'notesPage'} text="Заметки" onClick={()=>setActivePanel("notesPage")}>
                <Icon28BookOutline/>
            </TabbarItem >
            <TabbarItem selected={activePanel === 'calendarPage'} text="Календарь" onClick={()=>setActivePanel("calendarPage")}>
                <Icon28CalendarOutline/>
            </TabbarItem >

        </Tabbar>
    )
}

export default NavBar