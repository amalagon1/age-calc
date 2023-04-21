import React, { useState } from 'react';
import Input from '../components/Input';
// import Icon from '../../assets/images/icon-arrow.svg';

const Calculator = () => {

    const [dayInput, setDayInput] = useState("")
    const [monthInput, setMonthInput] = useState("")
    const [yearInput, setYearInput] = useState("")

    const [yearOutput, setYearOutput] = useState("")
    const [monthOutput, setMonthOutput] = useState("")
    const [dayOutput, setDayOutput] = useState("")

    const submitHandler = () => {
        timeElapsed();
    }

    // function for calculating age //
    function timeElapsed() {
        // let someDate = new Date(yearInput, monthInput - 1, dayInput)
        // const milliseconds = Date.now() - someDate.getTime();
        // const seconds = Math.floor(milliseconds / 1000);
        // const minutes = Math.floor(seconds / 60);
        // const hours = Math.floor(minutes / 60);
        // const days = Math.floor(hours / 24);
        // const years = Math.floor(days / 365);

        // if (years > 0) {
        //     console.log(years);

        // }

        // setYearOutput(years)

        const inputDate = new Date(yearInput, monthInput - 1, dayInput);
        const currentDate = new Date();
        const diffInMonths = (currentDate.getFullYear() - inputDate.getFullYear()) * 12 + (currentDate.getMonth() - inputDate.getMonth());
        const years = Math.floor(diffInMonths / 12);
        const months = diffInMonths % 12;
        setYearOutput(years);
        setMonthOutput(months);
        // console.log(`${years} years and ${months} months`);
    }


    return (
        <div>
            <div className="col d-flex gap-3 bg-black">
                <div className='d-flex flex-column'>
                    <label for="day">Day</label>
                    <input type="string" id="day" placeholder="Day"
                        onChange={e => setDayInput(e.target.value)}></input>
                </div>
                <div className="d-flex flex-column">
                    <label for='month'>Month</label>
                    <input type="string" placeholder="Month"
                        onChange={e => setMonthInput(e.target.value)}></input>
                </div>
                <div className="d-flex flex-column">
                    <label for='year'>Year</label>
                    <input type="string" placeholder="Year"
                        onChange={e => setYearInput(e.target.value)}></input>
                </div>

            </div>
            {/* <div className='w-100 bg-secondary h-25'></div> */}
            <div >
                <div className="w-100 h-5 bg-dark"></div>
                <svg role="button"
                    onClick={submitHandler}
                    className="bg-danger rounded-circle p-2" xmlns="http://www.w3.org/2000/svg"
                    width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2">
                        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g>
                </svg>
            </div>
            <h1>{yearOutput ? yearOutput : "-- "}  years</h1>
            <h1>{monthOutput ? monthOutput : "-- "}  months</h1>
            <h1>{dayOutput ? "Hello " : "-- "}days</h1>
        </div>
    )
}

export default Calculator
