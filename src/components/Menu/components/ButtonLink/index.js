import React from 'react';


function ButtonLink(props) {
    //props => {className: "o que álguem passar"", href: "/""}
    return (
        <a hrerf="props.href" className={props.className}>
            {props.children}
        </a>

    )
}

export default ButtonLink;