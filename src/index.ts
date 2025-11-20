import Counter from './components/Counter';
import Table from './components/Table';
import HeadlessCommand from './components/HeadlessCommand';

const counterPlugin = {
    match: 'counter',
    component: Counter,
    options: {
        fullwidth: true
    }
};

const tablePlugin = {
    match: 'table',
    component: Table,
    options: {
        fullwidth: true
    }
};

const commandPlugin = {
    match: 'command',
    component: HeadlessCommand
};

declare global {
    interface Window {
        cognigyWebchatMessagePlugins: any[];
    }
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(counterPlugin);
window.cognigyWebchatMessagePlugins.push(tablePlugin);
window.cognigyWebchatMessagePlugins.push(commandPlugin);

console.log('Cognigy React Plugins Registered');
