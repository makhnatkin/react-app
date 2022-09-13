import './button.css';

export const Buttons = () => <>
    <div className="button__wrapper">
        <label><b>Button</b></label>
    </div>
    {/*Wrapper for separating button blocks for a better view, it is not part of the button*/}
    <div className="button__wrapper">
        <button className="button button_blue button_medium">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
            <div className="button__text">Text here</div>
        </button>
        {/*Button with text, blue colored, medium size*/}
        <button className="button button_blue button_medium">
            <div className="button__text">Text here</div>
        </button>
        {/*Button with icon, blue colored, medium size*/}
        <button className="button button_icon-only button_blue button_medium">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
        </button>
        {/*Button with text and icon, blue colored, small size*/}
        <button className="button button_blue button_small">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
            <div className="button__text">Text here</div>
        </button>
        {/*Button with text, blue colored, small size*/}
        <button className="button button_blue button_small">
            <div className="button__text">Text here</div>
        </button>
        {/*Button with icon, blue colored, small size*/}
        <button className="button button_icon-only button_blue button_small">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
        </button>
    </div>
    <div className="button__wrapper">
        {/*Button with icon and text, blue reverse colored, medium size*/}
        <button className="button button_blue-reverse button_medium">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
            <div className="button__text">Text here</div>
        </button>
        {/*Button with text, blue reverse colored, medium size*/}
        <button className="button button_blue-reverse button_medium">
            <div className="button__text">Text here</div>
        </button>
        {/*Button with icon, blue reverse colored, medium size*/}
        <button
            className="button button_icon-only button_blue-reverse button_medium"
        >
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
        </button>
        {/*Button with icon and text, blue reverse colored, small size*/}
        <button className="button button_blue-reverse button_small">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
            <div className="button__text">Text here</div>
        </button>
        {/*Button with text, blue reverse colored, small size*/}
        <button className="button button_blue-reverse button_small">
            <div className="button__text">Text here</div>
        </button>
        {/*Button with icon, blue reverse colored, small size*/}
        <button
            className="button button_icon-only button_blue-reverse button_small"
        >
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
        </button>
    </div>
    <div className="button__wrapper">
        {/*Button with icon and text, black reverse colored, medium size*/}
        <button className="button button_black-reverse button_medium">
            {/*{/*<svg className="button__icon">*/}
            {/*    <use xlink:href="#bin"/>*/}
            {/*</svg> */}
            <div className="button__text">Text here</div>
        </button>
        {/*Button with text, black reverse colored, medium size*/}
        <button className="button button_black-reverse button_medium">
            <div className="button__text">Text here</div>
        </button>
        {/*Button with icon, black reverse colored, medium size*/}
        <button
            className="button button_icon-only button_black-reverse button_medium"
        >
            {/*<svg className="button__icon">
                        <use xlink:href="#bin"/>
                    </svg> */} */}
        </button>
    </div>

</>;