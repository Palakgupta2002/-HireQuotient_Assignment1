import React, { useState } from 'react';
import './Navbar.css';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [outlined, setOutlined] = useState(<DownOutlined />);
    return (
        <div className='Head-Nav'>
            <div className='Left-Nav'>
                <div>image</div>
                
                <div className='Hover-fun'>Product<p>{outlined}</p></div>
                <div className='Hover-fun'>Download<p>{outlined}</p></div>
                <div className='Hover-fun'>Solution<p>{outlined}</p></div>
                <div className='Hover-fun'>Resources<p>{outlined}</p></div>
                <div className='Hover-fun'>Prices</div>
                
            </div>
            <div className='Right-Nav'>
                <div>Request a demo  |</div>
                <div className='Hover-fun'>Connection</div>
                <div className='Notion-button'><button>Get Notion free</button></div>
            </div>
        </div>
    );
};

export default Navbar;
