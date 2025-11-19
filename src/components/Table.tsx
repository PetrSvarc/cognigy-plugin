import React from 'react';

interface TableProps {
    message: {
        data: {
            _plugin: {
                data: Array<Record<string, string | number | boolean>>;
            };
        };
    };
}

const Table: React.FC<TableProps> = (props) => {
    let data = props.message?.data?._plugin?.data;

    // Handle case where data is passed as a JSON string (common in CognigyScript)
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (e) {
            console.error('Failed to parse Table data:', e);
            return <div>Error parsing table data</div>;
        }
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available</div>;
    }

    const headers = Object.keys(data[0]);

    const tableStyle: React.CSSProperties = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
        fontSize: '14px',
        fontFamily: 'sans-serif'
    };

    const thStyle: React.CSSProperties = {
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        fontWeight: 'bold'
    };

    const tdStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        padding: '8px'
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} style={thStyle}>
                                {header.charAt(0).toUpperCase() + header.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header) => (
                                <td key={`${rowIndex}-${header}`} style={tdStyle}>
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
