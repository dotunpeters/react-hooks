
import React, {useContext} from "react";
import {FooterContext} from './App'
import './App.css';

export default function Footer(): JSX.Element{
    const {footText} = useContext(FooterContext)

    return (
        <div className="footer">
            <p> &copy; {footText}</p>
        </div>
    );
}
