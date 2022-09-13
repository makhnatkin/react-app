import './App.css';
import './css/checkbox.css';
import './css/common.css';
import './css/input.css';
import './css/index.css';
import './css/dropdown.css';
import './css/radio.css';
import './css/searchbar.css';

import { Buttons } from './components/Button/Button';

const App = () => <div>
    {/* Prepared svg images */}
{/*Component visualization starts here*/}
<div className="wrapper">
    <div className="container">
        {/*Container with checkboxes*/}
        <div className="container__item container__item_checkbox">
            <label><b>Checkbox</b></label>
            {/*Checkbox empty*/}
            <div className="checkbox">
                <label className="checkbox__label">
                    <input className="checkbox__area" type="checkbox"/>
                    {/*{/*<svg className="checkbox__icon">*/}
                    {/*    <use xlink:href="#checkmark"/>*/}
                    {/*</svg> */}
                    <span className="checkbox__text"></span>
                </label>
            </div>
            {/*Checkbox checked*/}
            <div className="checkbox">
                <label className="checkbox__label">
                    <input className="checkbox__area" type="checkbox" checked/>
                    {/*{/*<svg className="checkbox__icon">*/}
                    {/*    <use xlink:href="#checkmark"/>*/}
                    {/*</svg> */}
                    <span className="checkbox__text"></span>
                </label>
            </div>
        </div>
        {/*Container with radio buttons*/}
        <div className="container__item container__item_radio">
            <label><b>Radio</b></label>
            {/*Radio empty*/}
            <div className="radio">
                <label className="radio__label">
                    <input className="radio__area" type="radio" name="test"/>
                    {/*{/*<svg className="radio__icon">*/}
                    {/*    <use xlink:href="#dot"/>*/}
                    {/*</svg> */}
                    <span className="radio__text"></span>
                </label>
            </div>
            {/*Radio checked*/}
            <div className="radio">
                <label className="radio__label">
                    <input className="radio__area" type="radio" name="test" checked/>
                    {/*{/*<svg className="radio__icon">*/}
                    {/*    <use xlink:href="#dot"/>*/}
                    {/*</svg> */}
                    <span className="radio__text"></span>
                </label>
            </div>
        </div>
        {/*Container with searchbars*/}
        <div className="container__item container__item_searchbar">
            {/*Wrapper for dynamic searchbar width demonstration*/}
            <div className="searchbar__wrapper">
                <label><b>Searchbar</b></label>
                {/*Searchbar empty*/}
                <div className="searchbar searchbar_empty">
                    <div className="searchbar__field">
                        {/*{/*<svg className="searchbar__icon-search">*/}
                        {/*    <use xlink:href="#search"/>*/}
                        {/*</svg> */}
                        <input
                            className="searchbar__area"
                            placeholder="Номер заказа или ФИО"
                        />
                        <button className="searchbar__button">
                            {/*{/*<svg className="searchbar__icon-cross">*/}
                            {/*    <use xlink:href="#x-large"/>*/}
                            {/*</svg> */}
                        </button>
                    </div>
                </div>
                {/*Searchbar filled*/}
                <div className="searchbar searchbar_filled">
                    <div className="searchbar__field">
                        {/*{/*<svg className="searchbar__icon-search">*/}
                        {/*    <use xlink:href="#search"/>*/}
                        {/*</svg> */}
                        <input
                            className="searchbar__area"
                            value="50744"
                            placeholder="Номер заказа или ФИО"
                        />
                        <button className="searchbar__button">
                            {/*{/*<svg className="searchbar__icon-cross">*/}
                            {/*    <use xlink:href="#x-large"/>*/}
                            {/*</svg> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/*Container with inputs*/}
        <div className="container__item container__item_input">
            {/*Wrapper for dynamic input width demonstration*/}
            <div className="input__wrapper">
                <label><b>Input</b></label>
                {/*Input empty*/}
                <div className="input input_empty">
                    <label className="input__label"
                    >Дата и время заказа
                        <div className="input__field">
                            <input className="input__area" placeholder="Введите"/>
                            <button className="input__button">
                                {/*{/*<svg className="input__icon-cross">*/}
                                {/*    <use xlink:href="#x-large"/>*/}
                                {/*</svg> */}
                            </button>
                        </div>
                    </label>
                </div>
                {/*Input incorrect*/}
                <div className="input input_incorrect">
                    <label className="input__label"
                    >Дата и время заказа
                        <div className="input__field">
                            <input
                                className="input__area"
                                value="06.12.2021"
                                placeholder="Введите"
                            />
                            <button className="input__button">
                                {/*{/*<svg className="input__icon-cross">*/}
                                {/*    <use xlink:href="#x-large"/>*/}
                                {/*</svg> */}
                            </button>
                        </div>
                    </label>
                </div>
                {/*Input disabled*/}
                <div className="input input_disabled">
                    <label className="input__label"
                    >Дата и время заказа
                        <div className="input__field">
                            <input
                                className="input__area"
                                value="06.12.2021"
                                placeholder="Введите"
                                readOnly
                            />
                            {/*{/*<svg className="input__icon-lock">*/}
                            {/*    <use xlink:href="#locked"/>*/}
                            {/*</svg> */}
                        </div>
                    </label>
                </div>
            </div>
        </div>
        {/*Container with buttons*/}
        <div className="container__item container__item_button">
            <Buttons />
        </div>
        {/*Container with dropdowns*/}
        <div className="container__item container__item_dropdown">
            <label><b>Dropdown</b></label>
            {/*Dropdown with multiple status*/}
            <div className="dropdown dropdown_with-list">
                <ul className="dropdown__list">
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox"/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Новый</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox"/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Рассчет</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox" checked/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Подтвержден</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox"/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Отложен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox"/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Выполнен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="checkbox checkbox_with-text">
                                <label className="checkbox__label">
                                    <input className="checkbox__area" type="checkbox"/>
                                    {/*<svg className="checkbox__icon">
                                        <use xlink:href="#checkmark"/>
                                    </svg> */}
                                    <span className="checkbox__text">Отменен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                </ul>
            </div>
            {/*Dropdown with single status*/}
            <div className="dropdown dropdown_with-list">
                <ul className="dropdown__list">
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="new"
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Новый</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="calculation"
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Рассчет</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="accepted"
                                        checked
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Подтвержден</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="paused"
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Отложен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="done"
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Выполнен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                    <label>
                        <li className="dropdown__item">
                            <div className="radio radio_with-text-only">
                                <label className="radio__label">
                                    <input
                                        className="radio__area"
                                        type="radio"
                                        name="dropdown-selector"
                                        value="cancelled"
                                    />
                                    {/*<svg className="radio__icon">
                                        <use xlink:href="#dot"/>
                                    </svg> */}
                                    <span className="radio__text">Отменен</span>
                                </label>
                            </div>
                        </li>
                    </label>
                </ul>
            </div>
            {/*Dropdown with page selection*/}
            <div className="dropdown dropdown_with-input">
                <div className="input input_empty">
                    <label className="input__label"
                    >Номер страницы
                        <div className="input__field">
                            <input className="input__area" placeholder="Введите номер"/>
                            <button className="input__button">
                                {/*<svg className="input__icon-cross">
                                    <use xlink:href="#x-large"/>
                                </svg> */}
                            </button>
                        </div>
                    </label>
                </div>
            </div>
            {/*Dropdown with deletion dialog*/}
            <div className="dropdown dropdown_with-dialog">
                <span className="dropdown__title">Удалить n записей?</span>
                <button className="button button_blue-reverse button_small">
                    <div className="button__text">Удалить</div>
                </button>
                <button className="button button_blue button_small">
                    <div className="button__text">Отмена</div>
                </button>
            </div>
            {/*Dropdown with theme switcher*/}
            <div className="dropdown dropdown_with-dialog">
                <span className="dropdown__title">Выберите тему</span>
                <button className="button button_blue-reverse button_small">
                    {/*<svg className="button__icon">
                        <use xlink:href="#sun"/>
                    </svg> */}
                    <div className="button__text">Светлая</div>
                </button>
                <button className="button button_blue button_small">
                    {/*<svg className="button__icon">
                        <use xlink:href="#moon"/>
                    </svg> */}
                    <div className="button__text">Темная</div>
                </button>
            </div>
        </div>
    </div>
</div>
<button className="button button_blue button_medium switcher">
    <div className="button__text">Переключить тему</div>
</button>
</div>


export default App;
