import Counter from './components/Counter';
import Table from './components/Table';

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

console.log('Cognigy React Plugins Registered');
