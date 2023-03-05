import React, { useEffect, useState, createContext } from 'react';
import cx from 'classnames';

export const CursorContext = createContext("cursorContext");
// const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']
const SUPPORTED_CURSORS = [true, false]

// https://codesandbox.io/s/react-custom-cursor-component-8lcvi?file=/src/styles.css:158-678
const CursorProvider = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursor, setCursor] = useState(false);

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y });
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        }
    })

    const { x, y } = mousePosition;

    const onCursor = cursorType => {
        // cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
        setCursor(cursorType)
    }

    return (
        <CursorContext.Provider value={{ cursor, onCursor }}>
            <ins
                className={cx('movable', {
                    'grow': !!cursor
                    // 'active': !!cursor,
                    // [`cursor-${cursor}`]: !!cursor
                })}
                style={{
                    left: `${x}px`,
                    top: `${y}px`
                }}
            />
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider;