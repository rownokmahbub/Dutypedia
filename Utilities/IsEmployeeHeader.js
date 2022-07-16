import React from 'react';
import style from 'styled-components';
import PlusIcon from '../public/Assets/images/dashboard/PlusIcon';
import RestartIcon from '../public/Assets/images/dashboard/RestartIcon';

export default function IsEmployeeHeader({ setQrCodePopup }) {
    return (
        <Wrraper>
            <div className="employee__list__container__header">
                <div className="employee__list__container__header__title">
                    Add Staff And Partner
                </div>
                <div className="employee__list__container__header__button">
                    <div
                        onClick={() => setQrCodePopup(true)}
                        className="employee__list__container__header__button__left">
                        <PlusIcon />
                    </div>
                    <div className="employee__list__container__header__button__right">
                        <RestartIcon />
                    </div>
                </div>
            </div>
        </Wrraper>
    );
}

const Wrraper = style.div`
.employee__list__container__header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0vw 0vw 1vw 0vw;
}
.employee__list__container__header__title {
    font-size: 1.2vw;
    color: #222222;
    padding: 0vw 1vw;
}

.employee__list__container__header .employee__list__container__header__button {
    width: 9vw;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.employee__list__container__header
    .employee__list__container__header__button
    .employee__list__container__header__button__left {
    width: 3vw;
    height: 3vw;
    background: #da1e37;
    border-radius: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
}
.employee__list__container__header
    .employee__list__container__header__button
    .employee__list__container__header__button__left
    svg {
    width: 1.9vw;
    height: 1.9vw;
}
.employee__list__container__header
    .employee__list__container__header__button
    .employee__list__container__header__button__right {
    width: 3vw;
    height: 3vw;
    background: #da1e37;
    border-radius: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
}

.employee__list__container__header
    .employee__list__container__header__button
    .employee__list__container__header__button__right
    img {
    width: 3vw;
    height: 3vw;
}

`;
