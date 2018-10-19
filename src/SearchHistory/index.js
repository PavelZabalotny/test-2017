import React from 'react';

export default function SearchHistory ({id, date, text}) {
    return (
        <li>
            <div>{id}</div>
            <div>{date}</div>
            <div>{text}</div>
        </li>

    )
}