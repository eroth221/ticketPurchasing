import React, { useState } from 'react';
import './Shows.css';

const fakeShows = [
    {
        name: "Awesome Show",
        price: 50
    },
    {
        name: "Fantastic Show",
        price: 100
    }
]

const Shows = () => {
    return (
        <div className="shows">
            <div className="shows-header">
                <h2>Shows</h2>
            </div>
            <div className="shows-body">
                {fakeShows.map((show,index) => (
                    <p key={index} className="name">{show.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Shows;