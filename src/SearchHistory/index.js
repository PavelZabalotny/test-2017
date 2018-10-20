import React from 'react';

// компонент отвечает за отображение одного запроса
export default function SearchHistory ({id, date, text, deleteSearchHistory}) {
    const deleteHistory = id => e => {
        e.preventDefault();
        deleteSearchHistory(id);
    };

    return (
        <li>
            <div>{id}</div>
            <div>{date}</div>
            <div>{text}</div>
            <button
                className='btn btn-primary btn-sm'
                onClick={deleteHistory(id)}>Delete</button>
        </li>

    )
}