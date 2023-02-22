import React, { useEffect, useRef, useState } from 'react'
import './DataPicker.scss'
import './logicDataPicker'
import IosSelector, { getYears, getDays, getMonths, hours, minutes } from "./logicDataPicker";

const DatePickerReminder = () => {
	const hourRef = useRef();
	const yearRef = useRef();
	const minuteRef = useRef();
	let currentYear = new Date().getFullYear();
	let currentMonth = 1;
	let currentDay = 1;
	let yearSource = getYears();
	let daySource = getDays(currentYear, currentMonth);
	useEffect(() => {
		let hourSelector = new IosSelector({
			el: hourRef.current,
			type: 'infinite',
			source: hours,
			count: 20,
			onChange: (selected) => {
				currentDay = selected.value;
			}
		});
		let yearSelector = new IosSelector({
			el: yearRef.current,
			type: 'infinite',
			source: yearSource,
			count: 20,
			onChange: (selected) => {
				currentYear = selected.value;
				daySource = getDays(currentYear, currentMonth);
			}
		});
		let minuteSelector = new IosSelector({
			el: minuteRef.current,
			type: 'infinite',
			source: minutes,
			count: 20,
			onChange: (selected) => {
				currentDay = selected.value;
			}
		});

	}, [hourRef])


	// let  daySelector = new IosSelector({
	//      el: '#day1',
	//      type: 'infinite',
	//      source: [],
	//      count: 20,
	//      onChange: (selected) => {
	//          currentDay = selected.value;
	//          console.log(yearSelector.value, monthSelector.value, daySelector.value);
	//      }
	//  });
	return (
		<div className="DatePicker__container">
			<div className="date-selector">
				<div ref={yearRef} className="year" id="year1"></div>
				<div ref={hourRef} className="month" id="month1"></div>
				<div ref={minuteRef} className="day" id="day1"></div>
			</div>
		</div>

	)
}
export default DatePickerReminder;