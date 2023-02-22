import { Icon28AddOutline, Icon28DoneOutline, Icon28KeyboardOutline } from '@vkontakte/icons'
import { Button, Div, Group, Tabs, TabsItem } from '@vkontakte/vkui'
import React from 'react'
import { useState } from 'react'
import DatePickerReminder from '../DataPicker/DatePicker'
import './ModalContent.scss'
function ModalContent({ valueInputRef }) {
    const [modalTools, setModalTools] = useState("unactive");
    return (
        <div>
            <DatePickerReminder />
            <Tabs>
                <TabsItem style={{
                    width: "20%",
                    padding: "0"
                }}>
                    {
                        modalTools == 'unactive' ?
                            <Icon28AddOutline onClick={() => setModalTools("active")} style={{ color: "#ED4344" }} />
                            :
                            <Icon28KeyboardOutline onClick={() => setModalTools("unactive")} style={{ color: "#ED4344" }} />

                    }
                </TabsItem>
                <Div>
                    <input type="text" ref={valueInputRef} style={{
                        border: "1px solid #A9A9A9",
                        // width:"100%",
                        borderRadius: "20px",
                        padding: "5px 10px"

                    }} />
                </Div>
                <TabsItem style={{
                    width: "20%",
                    padding: "0"

                }}>
                    <Icon28DoneOutline style={{ color: "#ED4344" }} />
                </TabsItem>
            </Tabs>
            {
                modalTools == 'active' ?
                    <Group className='modalTools'>
                        <Div className='modalTools__color transparent'>
                            <button className='transparent'></button>
                        </Div>
                        <Div className='modalTools__color red'>
                            <button className='red'></button>
                        </Div>
                        <Div className='modalTools__color blue'>
                            <button className='blue'></button>
                        </Div>
                        <Div className='modalTools__color violet'>
                            <button className='violet'></button>
                        </Div>
                        <Div className='modalTools__color orange'>
                            <button className='orange'></button>
                        </Div>
                        <Div className='modalTools__color green'>
                            <button className='green'></button>
                        </Div>
                    </Group>
                    : null

            }

        </div>
    )
}

export default ModalContent