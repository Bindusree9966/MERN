import React, { useState } from 'react'

const Conditional = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle
            </button>

            {isVisible && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            )}
        </div>
    )
}

export default Conditional