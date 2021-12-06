import React from 'react';

const Header = (props) => {
    return(
        <div className="full">
            <h1>Spellbook</h1>
            {/*<div className="row">
                <div className="third" id="castAbility">{props.castAbility}</div>
                <div className="third" id="className">{props.classType}</div>
                <div className="third" id="classLevel">{props.classLevel}</div>
            </div>*/}
        </div>
    )
}

export default Header;