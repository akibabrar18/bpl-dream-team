import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaDollarSign } from "react-icons/fa";

const Nav = ({ coin }: { coin: number }) => {
    return (
        <div className="flex justify-between container items-center mx-auto mt-6">
            <img src={Logo} alt="Logo"/>
            <ul className="flex gap-4 text-gray-600">
                <li>Home</li>
                <li>Fixtures</li>
                <li>Teams</li>
                <li>Schedule</li>
            </ul>
            <h2 className="font-bold text-3xl flex items-center "><FaDollarSign />{coin} Coin</h2>
        </div>
    );
};

export default Nav;