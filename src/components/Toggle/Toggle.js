import React, { useState } from 'react'
export const Toggle = props => {
    const [display, setDisplay] = useState(true);
    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>

                <button onClick={() => setDisplay(pre => !pre)} data-test="toggle-btn">Toggle</button>
                {display &&
                    <div data-test="toggled-element">Text To Show!</div>
                }
                <h1 data-test="number">

                    {number}
                </h1>
                <button data-test="increment-btn" onClick={() => setNumber(pre => pre + 1)}>increment</button>
            </div>

        </div>)
}