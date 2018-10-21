import React from 'react';

// компонент отвечает за отображение одного запроса
export default function SearchHistory({id, date, text, deleteSearchHistory}) {
    const deleteHistory = id => e => {
        e.preventDefault();
        deleteSearchHistory(id);
    };

    return (
        <li className='row justify-content-md-center'>
            <div>
                <div>id = {id}</div>
                <div>Дата = {date}</div>
                <div>Текст = {text}</div>
            </div>
            <div>
                <button
                    className='btn btn-primary btn-sm'
                    onClick={deleteHistory(id)}>Delete
                </button>
            </div>

        </li>
    )
}