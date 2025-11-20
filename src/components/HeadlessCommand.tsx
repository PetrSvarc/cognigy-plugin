import React from 'react';

interface HeadlessCommandProps {
    message: {
        data: {
            _plugin: {
                type: 'command';
                payload: any;
            };
        };
    };
}

const HeadlessCommand: React.FC<HeadlessCommandProps> = () => {
    // This component intentionally renders nothing and performs no side effects.
    // It serves as a data container for the 'command' plugin type, which can be
    // intercepted by global listeners (e.g. Analytics API) on the host page.
    return null;
};

export default HeadlessCommand;
