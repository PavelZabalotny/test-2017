import React from 'react';

// компонент отвечает за отображение одного запроса
export default function SearchHistory({id, date, text, deleteSearchHistory}) {
    const deleteHistory = id => e => {
        e.preventDefault();
        deleteSearchHistory(id);
    };

    return (
        <li className="row justify-content-md-center border-bottom mb-2 pb-2">
            <div className="col-10">
                {/*<div>id = {id}</div>*/}
                <div>{date}</div>
                <div>{text}</div>
            </div>
            <div className="col-2 m-auto">
                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={deleteHistory(id)}>Delete
                </button>
            </div>
        </li>
    )
}