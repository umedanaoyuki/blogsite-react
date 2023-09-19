import React from 'react';
import {Link} from "react-router-dom";

//rcc
const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>ポートフォリオ</h3>
            </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                    {/*<a href="#">ホーム</a>*/}
                </li>
                <li>
                    <Link to="/blog">ブログ</Link>
                    {/*<a href="#">ブログ</a>*/}
                </li>
                <li>
                    <a href="#">SNS</a>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;