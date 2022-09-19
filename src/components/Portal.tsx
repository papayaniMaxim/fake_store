import { ReactNode, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

function Portal(props:{children:ReactNode}) {
    
    let elem = document.createElement('section')
    
    useLayoutEffect(() => {
        document.body.appendChild(elem)
        return () => elem.remove()
    },[])

    return createPortal(
        <div
            style={{
                zIndex: '99',
                color: 'black',
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to top, #481173 0, #cb11ab 100%) no-repeat",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {props.children}
        </div>, elem);
}

export default Portal;