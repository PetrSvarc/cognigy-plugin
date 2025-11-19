import React, { useState, useCallback } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(c => c + 1), []);

    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s'
    };

    return (
        <button
            type='button'
            onClick={increment}
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        >
            clicked {count} times
        </button>
    );
};

export default Counter;
