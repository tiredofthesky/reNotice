import { Icon28AddOutline, Icon28DoneOutline } from '@vkontakte/icons';
import { Div, Group, ModalPage, ModalPageHeader, ModalRoot, Panel, PanelHeaderBack, PanelHeaderClose, PanelHeaderSubmit, Tabs, TabsItem } from '@vkontakte/vkui'
import React, { useRef, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeaderPanel from '../Components/PanelHeader/PanelHeader'
import RemindersContent from "../Components/RemindersContent/RemindersContent";
function RemindersPage({ activePanel, setActivePanel }) {
    const valueInputRef = useRef(null);
    const [activeModal, setActiveModal] = React.useState(false);

    const handleOpenOfModalRoot = React.useCallback((id) => {
        if (id === 'modal-1') {
            firstInputRef.current.focus();
        }
    }, []);

    const handleOpenOfModalPage = React.useCallback(() => {
        secondInputRef.current.focus();
    }, []);
    const modalBack = () => {
        setActiveModal(null)
    };
    return (
        <Group>
            <HeaderPanel title="Заметки" setActiveModal={setActiveModal} />
            <RemindersContent />
            <ModalRoot activeModal={activeModal} onOpened={handleOpenOfModalRoot}>
                <ModalPage
                    id="modal_active"
                    onClose={() => setActiveModal(null)}
                    settlingHeight={100}
                >
                    <Tabs>
                        <TabsItem style={{
                                width:"20%",
                                padding:"0"
                            }}>
                            <Icon28AddOutline style={{ color: "#ED4344" }} />
                        </TabsItem>
                        <Div>
                            <input type="text" ref={valueInputRef} style={{
                                border:"1px solid #A9A9A9",
                                // width:"100%",
                                borderRadius:"20px",
                                padding:"5px 10px"
                            
                            }}/>
                        </Div>
                        <TabsItem style={{
                                width:"20%",
                                padding:"0"

                            }}>
                            <Icon28DoneOutline style={{ color: "#ED4344" }} />
                        </TabsItem>
                    </Tabs>
                </ModalPage>
            </ModalRoot>
            <NavBar activePanel={"modal_active"} setActivePanel={setActivePanel} />
        </Group>
    )
}

export default RemindersPage