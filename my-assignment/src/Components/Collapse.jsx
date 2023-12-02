import React, { useState } from 'react';
import './collapse.css';
const Collapse = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className='question'>
                <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                    <b style={{ color: !isCollapsed ? 'rgb(130, 71, 255)' : 'inherit' }}>{title}</b>
                </div>
                {!isCollapsed && <div className='answer'>{children}</div>}
            </div>
            <br />
        </>
    );
};

export default Collapse;
