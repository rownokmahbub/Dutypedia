import { default as getMonth, default as getYear } from 'date-fns/getYear';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DownIcon from '../public/Assets/images/dashboard/DownIcon';
import SearchIcon from '../public/Assets/images/dashboard/SearchIcon';
import UpIcon from '../public/Assets/images/dashboard/UpIcon';

import StyleSheet from './Utilites.module.css';

export function SearchBox({ placeholder, value, action, name, style, iconStyle }) {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex justify-start align-middle relative">
                <input
                    className="w-full h-auto outline-none text-[14.5px] p-[5px] pl-[12px] border-[1px] border-[#ececec]"
                    style={{
                        fontFamily: ' aller, sans-serif',
                        outline: 'none',
                        border: '1px solid #ececec',
                        padding: '7px 7px 7px 14px',
                        borderRadius: '6px',
                        ...style
                    }}
                    type="text"
                    id={name}
                    placeholder={placeholder}
                    onChange={(e) => action(e)}
                    value={value}
                />

                <label
                    className="w-auto absolute"
                    style={{ top: '7px', right: '13px', ...iconStyle }}
                    htmlFor={name}>
                    <div className="w-full cursor-pointer mt-[3px]">
                        <SearchIcon width={'18.5'} />
                    </div>
                </label>
            </div>
        </div>
    );
}
export function MemberCheckbox({ name, title, actions, value }) {
    return (
        <div className={StyleSheet.checkboxs__container}>
            <div className={StyleSheet.checkboxs__container__input}>
                <input
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                    onChange={(e) => {
                        actions(e.target.checked);
                    }}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title}
                </label>
            </div>
        </div>
    );
}
export function Name({ title, actions, value }) {
    return (
        <div className="w-full h-auto p-2 px-0">
            <div className="text-[17.5px] pb-[6px] text-[#313131]">{title}</div>
            <input
                className="w-full h-auto p-2 text-[16px] outline-none border-none rounded-md bg-[#f5f5f5]"
                style={{
                    background: '#f5f5f5',
                    fontFamily: ' aller, sans-serif',
                    borderRadius: '5px'
                }}
                type="text"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}
export function Gender({ title, actions, value }) {
    return (
        <div className={StyleSheet.gender__container}>
            <div className={StyleSheet.gender__container__title}>{title}</div>
            <div className={StyleSheet.gender__container__box}>
                <select
                    name="gender"
                    className={StyleSheet.gender__container__box__selecte__box}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}>
                    <option value="">select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className={StyleSheet.gender__container__box__icon}></div>
            </div>
        </div>
    );
}
export function BloodGroup({ title, actions, value }) {
    return (
        <div className={StyleSheet.Blood__group__container}>
            <div className={StyleSheet.Blood__group__container__title}>{title}</div>
            <div className={StyleSheet.Blood__group__container__box}>
                <select
                    name="bloodGroup"
                    className={StyleSheet.Blood__group__container__box__selecte__box}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}>
                    <option value="">select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <div className={StyleSheet.Blood__group__container__selected__box__icon}></div>
            </div>
        </div>
    );
}
export function SetDate({ title, actions, value, titleStyle, rootStyle, iconStayle, inputStyle }) {
    const range = (start, end) => {
        return new Array(end - start).fill().map((d, i) => i + start);
    };
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
        <div className={StyleSheet.date__container} style={rootStyle}>
            {title !== '' ? (
                <div className={StyleSheet.date__container__title} style={titleStyle}>
                    {title}
                </div>
            ) : (
                ''
            )}
            <div className={StyleSheet.date__container__date__box}>
                <DatePicker
                    className={[StyleSheet.date__container__date__box__input, inputStyle].join(' ')}
                    id="datePicker"
                    dateFormat="yyyy-MM-dd"
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {'<'}
                            </button>
                            <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}>
                                {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={months[getMonth(date)]}
                                onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                }>
                                {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {'>'}
                            </button>
                        </div>
                    )}
                    selected={new Date(value)}
                    onChange={(date) => {
                        const dateFormat =
                            date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                        actions(dateFormat);
                    }}
                />
                <label htmlFor="datePicker">
                    <div
                        className={StyleSheet.date__container__date__box__icon}
                        style={iconStayle}></div>
                </label>
            </div>
        </div>
    );
}
export function Religion({ title, actions, value }) {
    function Dropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Islam
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Hindu
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Christan
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);
    return (
        <div className={StyleSheet.religion__container}>
            <div className={StyleSheet.religion__container__title}>{title}</div>
            <div className={StyleSheet.religion__container__input__box}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        actions(e.target.value);
                        if (e.target.value === '') {
                            setDropDownState(true);
                        }
                        if (e.target.value !== '') {
                            setDropDownState(false);
                        }
                    }}
                    onClick={(e) => {
                        if (e.target.value === '') {
                            setDropDownState(true);
                        }
                        dropDownSate ? setDropDownState(false) : setDropDownState(true);
                    }}
                />
                <div className={StyleSheet.religion__container__input__box__dropdown}>
                    {dropDownSate && <Dropdrown />}
                </div>
            </div>
        </div>
    );
}
export function Nationality({ title, actions, value }) {
    function PositionDropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Bangladeshi
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);

    return (
        <div className={StyleSheet.nationlity__container}>
            <div className={StyleSheet.nationlity__container__title}>{title}</div>
            <input
                type="text"
                onClick={(e) => {
                    if (e.target.value === '') {
                        setDropDownState(true);
                    }
                    dropDownSate ? setDropDownState(false) : setDropDownState(true);
                }}
                onChange={(e) => {
                    actions(e.target.value);
                    if (e.target.value === '') {
                        setDropDownState(true);
                    }
                    if (e.target.value !== '') {
                        setDropDownState(false);
                    }
                }}
                value={value}
            />
            <div className={StyleSheet.nationlity__container__dropdown}>
                {dropDownSate && <PositionDropdrown />}
            </div>
        </div>
    );
}
export function Email({ title, actions, value }) {
    return (
        <div className={StyleSheet.email__container}>
            <div className={StyleSheet.email__container__title}>{title}</div>
            <input
                type="text"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}
export function MobileNo({ title, actions, value }) {
    return (
        <div className={StyleSheet.mobile__no__container}>
            <div className={StyleSheet.mobile__no__container__title}>{title}</div>
            <input
                type="number"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}

// dutypedia user add from
export function Position({ actions, value }) {

    function PositionDropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    CEO
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Marketing Officer
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);

    return (
        <div className={StyleSheet.position__container}>
            <p className={StyleSheet.position__container__heading}>Position</p>
            <div className={StyleSheet.position__container__input__box}>
                <div className={StyleSheet.position__container__input__box__input}>
                    <input
                        type="text"
                        onClick={(e) => {
                            if (e.target.value === '') {
                                setDropDownState(true);
                            }
                            dropDownSate ? setDropDownState(false) : setDropDownState(true);
                        }}
                        onChange={(e) => {
                            console.log(e.target.value)
                            actions(e.target.value);
                            if (e.target.value === '') {
                                setDropDownState(true);
                            }
                            if (e.target.value !== '') {
                                setDropDownState(false);
                            }
                        }}
                        value={value}
                        placeholder="Position"
                    />
                </div>
                <div className={StyleSheet.position__container__input__box__dropdrown}>
                    {dropDownSate && <PositionDropdrown />}
                </div>
            </div>
        </div>
    );
}
export function JoiningDate({ actions, value }) {
    return (
        <div className={StyleSheet.Joining__date__container}>
            <div className={StyleSheet.Joining__date__container__title}>Joining Date</div>
            <div className={StyleSheet.Joining__date__container__box}>
                <DatePicker
                    id="datePicker"
                    className={StyleSheet.Joining__date__container__date}
                    selected={value}
                    onChange={(date) => {
                        actions(date);
                    }}
                />

                <label htmlFor="datePicker">
                    <div className={StyleSheet.Joining__date__container__icon}></div>
                </label>
            </div>
        </div>
    );
}
export function SalaryAmount({ actions, value }) {
    return (
        <div className={StyleSheet.salary__amounts__container}>
            <div className={StyleSheet.salary__amounts__container__title}>Salary Ammount</div>
            <div className={StyleSheet.salary__amounts__container__input__box}>
                <input
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    type="number"
                    value={value}
                    placeholder="500000.."
                />

                <span className={StyleSheet.salary__amounts__container__input__box__icon}>
                    <button
                        type="button"
                        onClick={() => {
                            actions(Number(value) + 1);
                        }}
                        className={StyleSheet.salary__amounts__container__input__box__icon__top}>
                        <UpIcon />
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            value > 0 ? actions(Number(value) - 1) : actions(0);
                        }}
                        className={StyleSheet.salary__amounts__container__input__box__icon__bottom}>
                        <DownIcon />
                    </button>
                </span>
            </div>
        </div>
    );
}
export function SalaryType({ actions, value }) {
    return (
        <div className={StyleSheet.salary__type__container}>
            <div className={StyleSheet.salary__type__container__title}>Salary Type</div>

            <select
                onChange={(e) => {
                    actions(e.target.value === '' ? null : e.target.value);
                }}
                name="salaryType"
                value={value}
                className={StyleSheet.salary__type__container__selected__box}>
                <option value="">select</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>

            <div className={StyleSheet.salary__type__container__icon}></div>
        </div>
    );
}
export function SalaryDateEveryDay({ actions, value }) {
    return (
        <div className={StyleSheet.salary__date__every__day__container}>
            <div className={StyleSheet.salary__date__every__day__container__title}>
                Salary Date Every Day
            </div>

            <div className={StyleSheet.salary__date__every__day__container__input__box}>
                <input
                    type="time"
                    value={value}
                    onChange={(e) => {

                        actions(`${e.target.value}:00`);
                    }}
                />

                <div
                    className={
                        StyleSheet.salary__date__every__day__container__input__box__icon
                    }></div>
            </div>
        </div>
    );
}
export function SalaryDateEveryWeek({ actions, value }) {
    const [weekDay, setWeekDay] = useState([]);

    useEffect(() => {
        getApiCall(getSalaryWeekDayURL)
            .then((res) => setWeekDay(res))
            .catch((err) => console.log(`Error ${err}`));
    }, []);

    return (
        <div className={StyleSheet.salary__date__every__week__container}>
            <div className={StyleSheet.salary__date__every__week__container__title}>
                Salary Date Every Week
            </div>
            <div className={StyleSheet.salary__date__every__week__container__selected__box}>
                <select
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}
                    className={
                        StyleSheet.salary__date__every__week__container__selected__box__select
                    }>
                    <option value={null}>select</option>
                    {weekDay?.map((day) => {
                        return (
                            <option key={day?.id} value={day?.id}>
                                {day?.day_name}
                            </option>
                        );
                    })}
                </select>
                <div className={StyleSheet.salary__date__every__week__container__icon}></div>
            </div>
        </div>
    );
}
export function SalaryDateEveryMonth({ actions, value }) {
    const [monthDate, setMonthDate] = useState([]);

    useEffect(() => {
        getApiCall(getSalaryMonthDateURL)
            .then((res) => setMonthDate(res))
            .catch((err) => console.log(`Error ${err}`));
    }, []);

    return (
        <div className={StyleSheet.salary__date__every__month__container}>
            <div className={StyleSheet.salary__date__every__month__container__title}>
                Salary Date Every Month
            </div>
            <div className={StyleSheet.salary__date__every__month__container__selected__box}>
                <select
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}
                    className={
                        StyleSheet.salary__date__every__month__container__selected__box__select
                    }>
                    <option value={null}>select</option>
                    {monthDate?.map((date) => {
                        return (
                            <option key={date?.id} value={date?.id}>
                                {date?.starting_day} to {date?.ending_day}
                            </option>
                        );
                    })}
                </select>
                <div className={StyleSheet.salary__date__every__month__container__icon}></div>
            </div>
        </div>
    );
}
export function clockTimer(timeString) {
    var hour = Number(timeString.split(':')[0]);
    var minute = Number(timeString.split(':')[1]);

    var prepand = hour >= 12 ? ' PM ' : ' AM ';

    hour = hour >= 12 ? hour - 12 : hour;

    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0) {
            hour = 12;
            prepand = ' Noon';
        } else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }
    return (
        (hour < 10 ? '0' + hour : hour) + ' : ' + (minute < 10 ? '0' + minute : minute) + prepand
    );
}
export function SalaryStatus({ action, value }) {
    return (
        <div className={StyleSheet.salary__status__container}>
            <div className={StyleSheet.salary__status__container__title}>Salary Status</div>
            <div className={StyleSheet.salary__status__container__selected__box}>
                <select
                    value={value}
                    onChange={(e) => action(e.target.value)}
                    className={StyleSheet.salary__status__container__selected__box__select}>
                    <option value="">select</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="due">Due</option>
                    <option value="paid">Paid</option>
                </select>
                <div className={StyleSheet.salary__status__container__selected__box__icon}></div>
            </div>
        </div>
    );
}
export function CheckBox({ name, title, actions, value, style }) {
    return (
        <div className={StyleSheet.checkbox__container} style={style}>
            <div
                className={StyleSheet.checkbox__container__input}
                style={name === 'noAccess' ? { width: '20vw' } : style}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title && title}
                </label>
            </div>
        </div>
    );
}
export function CircleCheckBox({ name, title, actions, value, style }) {
    return (
        <div className={StyleSheet.circle__checkbox__container} style={style}>
            <div className={StyleSheet.circle__checkbox__container__input}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.circle__checked : StyleSheet.circle__unchecked}>
                    {title && title}
                </label>
            </div>
        </div>
    );
}
export function ViewCircleCheckBox({ name, title, actions, value, style }) {
    return (
        <div className={StyleSheet.view__circle__checkbox__container} style={style}>
            <div className={StyleSheet.view__circle__checkbox__container__input}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    className={
                        value
                            ? StyleSheet.view__circle__checked
                            : StyleSheet.view__circle__unchecked
                    }>
                    {title && title}
                </label>
            </div>
        </div>
    );
}
export const firstDateFormet = (enterStartDate, dateObject) => {
    const date =
        (enterStartDate.split('-')[0] > 9
            ? enterStartDate.split('-')[0]
            : '0' + enterStartDate.split('-')[0]) +
        '/' +
        (Number(`${dateObject.getMonth() + 2 === 13 ? 0 + 1 : dateObject.getMonth() + 2}`) < 10
            ? '0' +
            Number(`${dateObject.getMonth() + 2 === 13 ? 0 + 1 : dateObject.getMonth() + 2}`)
            : dateObject.getMonth() + 2) +
        '/' +
        dateObject.getFullYear();
    return date;
};
export const lastDateFormet = (enterEndDate, dateObject) => {
    const date =
        (enterEndDate.split('-')[1] > 9
            ? enterEndDate.split('-')[1]
            : '0' + enterEndDate.split('-')[1]) +
        '/' +
        (Number(`${dateObject.getMonth() + 2 === 13 ? 0 + 1 : dateObject.getMonth() + 2}`) < 10
            ? '0' +
            Number(`${dateObject.getMonth() + 2 === 13 ? 0 + 1 : dateObject.getMonth() + 2}`)
            : dateObject.getMonth() + 2) +
        '/' +
        dateObject.getFullYear();
    return date;
};

// attendence related common componentes
export function AttendenceName({ title, action, value, placeholder }) {
    return (
        <div className={StyleSheet.attendence__name__container}>
            <div className={StyleSheet.attendence__name__container__title}>{title}</div>
            <input
                type="text"
                onChange={(e) => action(e.target.value)}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}
export function DutyTimer({ title, action, value }) {
    return (
        <div className={StyleSheet.duty__timer__container}>
            <div className={StyleSheet.duty__timer__container__title}>{title}</div>

            <div className={StyleSheet.duty__timer__container__input__box}>
                <input type="time" value={value} onChange={(e) => action(e.target.value)} />
                <div className={StyleSheet.duty__timer__container__input__box__icon}></div>
            </div>
        </div>
    );
}
export function BrackTimer({ title, action, value }) {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [timeFormat, setTimeFormat] = useState('Hour');
    const [dropDown, setDropdown] = useState(false);

    function DropDown() {
        return (
            <ul>
                <li
                    onClick={() => {
                        setTimeFormat('Hour');
                        setDropdown(false);
                    }}>
                    Hour
                </li>
                <li
                    onClick={() => {
                        setTimeFormat('Minute');
                        setDropdown(false);
                    }}>
                    Minute
                </li>
            </ul>
        );
    }

    function upHendeler() {
        if (timeFormat === 'Hour') {
            setHour((prev) => (prev === 12 ? 0 : prev + 1));
        } else if (timeFormat === 'Minute') {
            setMinute((prev) => (prev === 59 ? 0 : prev + 1));
        }
        action(`${hour}:${minute}`);
    }
    function downHendeler() {
        if (timeFormat === 'Hour') {
            setHour((prev) => (prev === 1 ? 12 : prev - 1));
        } else if (timeFormat === 'Minute') {
            setMinute((prev) => (prev === 0 ? 59 : prev - 1));
        }
        action(`${hour}:${minute}`);
    }

    return (
        <div className={StyleSheet.brack__timer__container}>
            <div className={StyleSheet.brack__timer__container__title}>{title}</div>
            <div className={StyleSheet.brack__timer__container__input__box}>
                <div className={StyleSheet.brack__timer__container__input__box__timer__box}>
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__box__value
                        }>
                        <div className={StyleSheet.hours}>{hour}</div>
                        <span>:</span>
                        <div className={StyleSheet.minutes}>{minute}</div>
                    </div>
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__box__button
                        }>
                        <button
                            type="button"
                            onClick={upHendeler}
                            className={
                                StyleSheet.brack__timer__container__input__box__timer__box__button__up
                            }>
                            <UpIcon />
                        </button>
                        <span></span>
                        <button
                            type="button"
                            onClick={downHendeler}
                            className={
                                StyleSheet.brack__timer__container__input__box__timer__box__button__down
                            }>
                            <DownIcon />
                        </button>
                    </div>
                </div>
                <div
                    className={StyleSheet.brack__timer__container__input__box__timer__formater}
                    onClick={() => {
                        dropDown ? setDropdown(false) : setDropdown(true);
                    }}>
                    {timeFormat}

                    {dropDown && <DropDown />}
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__formater__select__box__icon
                        }
                        onClick={() => {
                            dropDown ? setDropdown(false) : setDropdown(true);
                        }}></div>
                </div>
            </div>
        </div>
    );
}
export function DayCheckBox({ name, title, actions, value, style }) {
    const { width } = style;
    return (
        <div className={StyleSheet.checkbox__container} style={style}>
            <div className={StyleSheet.checkbox__container__input} style={{ width }}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    style={
                        value
                            ? { color: '#da1e37', transition: 'all .4s' }
                            : { color: '#313131', transition: 'all .4s' }
                    }
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title && title}
                </label>
            </div>
        </div>
    );
}
export function TodayStatus({ action, value }) {
    return (
        <div className={StyleSheet.today__status__container}>
            <div className={StyleSheet.today__status__container__title}>Today Status</div>
            <div className={StyleSheet.today__status__container__select__box}>
                <select value={value} onChange={(e) => action(e.target.value)}>
                    <option>Select</option>
                    <option>Present</option>
                    <option>Absent</option>
                    <option>Company Holiday</option>
                    <option>Leave For Holiday</option>
                </select>

                <div className={StyleSheet.today__status__container__select__box__icon}></div>
            </div>
        </div>
    );
}
export function TimerSet({ title, value, action }) {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [timeFormat, setTimeFormat] = useState('Hour');
    const [dropDown, setDropdown] = useState(false);

    function DropDown() {
        return (
            <ul>
                <li
                    onClick={() => {
                        setTimeFormat('Hour');
                        setDropdown(false);
                    }}>
                    Hour
                </li>
                <li
                    onClick={() => {
                        setTimeFormat('Minute');
                        setDropdown(false);
                    }}>
                    Minute
                </li>
            </ul>
        );
    }

    function upHendeler() {
        if (timeFormat === 'Hour') {
            setHour((prev) => (prev === 12 ? 1 : prev + 1));
        } else if (timeFormat === 'Minute') {
            setMinute((prev) => (prev === 59 ? 0 : prev + 1));
        }
        action(`${hour}:${minute}`);
    }
    function downHendeler() {
        if (timeFormat === 'Hour') {
            setHour((prev) => (prev === 1 ? 12 : prev - 1));
        } else if (timeFormat === 'Minute') {
            setMinute((prev) => (prev === 0 ? 59 : prev - 1));
        }
        action(`${hour}:${minute}`);
    }

    return (
        <div className={StyleSheet.brack__timer__container}>
            <div className={StyleSheet.brack__timer__container__title}>{title}</div>
            <div className={StyleSheet.brack__timer__container__input__box}>
                <div className={StyleSheet.brack__timer__container__input__box__timer__box}>
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__box__value
                        }>
                        <div className={StyleSheet.hours}>{hour}</div>
                        <span>:</span>
                        <div className={StyleSheet.minutes}>{minute}</div>
                    </div>
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__box__button
                        }>
                        <button
                            type="button"
                            onClick={upHendeler}
                            className={
                                StyleSheet.brack__timer__container__input__box__timer__box__button__up
                            }>
                            <UpIcon />
                        </button>
                        <span></span>
                        <button
                            type="button"
                            onClick={downHendeler}
                            className={
                                StyleSheet.brack__timer__container__input__box__timer__box__button__down
                            }>
                            <DownIcon />
                        </button>
                    </div>
                </div>
                <div
                    className={StyleSheet.brack__timer__container__input__box__timer__formater}
                    onClick={() => {
                        dropDown ? setDropdown(false) : setDropdown(true);
                    }}>
                    {timeFormat}

                    {dropDown && <DropDown />}
                    <div
                        className={
                            StyleSheet.brack__timer__container__input__box__timer__formater__select__box__icon
                        }
                        onClick={() => {
                            dropDown ? setDropdown(false) : setDropdown(true);
                        }}></div>
                </div>
            </div>
        </div>
    );
}
