import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	ScreenSpinner,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	Panel,
	Calendar
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Header from '@vkontakte/vkui';
import RemindersPage from './Pages/RemindersPage';
import NotesPages from "./Pages/NotesPages";

import CalendarPages from './Pages/Calendar';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('remindersPage');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel}>
						<Panel id="remindersPage">
						<NotesPages activePanel={activePanel} setActivePanel={setActivePanel}/>
						
						</Panel>
						<Panel id="notesPage">
						<RemindersPage activePanel={activePanel} setActivePanel={setActivePanel}/>
						</Panel>
						<Panel id="calendarPage">
							<CalendarPages activePanel={activePanel} setActivePanel={setActivePanel}/>
						</Panel>
			
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
