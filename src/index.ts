import Counter from './components/Counter';

const counterPlugin = {
    match: 'counter',
    component: Counter,
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

console.log('Cognigy React Counter Plugin Registered');
