import React from 'react';

export default function SearchHistory ({date, text}) {
    return (
        <li>
            <div>{date}</div>
            <div>{text}</div>
        </li>

    )
}