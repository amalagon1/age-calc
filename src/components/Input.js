import React from 'react'

const Input = ({ title, dayInput, setDayInput, monthInput, setMonthInput, yearInput, setYearInput }) => {
    return (
        <div>
            <h2>{title}</h2>
            <input type="string" placeholder={title}
                onChange={e => setDayInput(e.target.value)}></input>
        </div>
    )
}

export default Input
