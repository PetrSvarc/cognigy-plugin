// This file shims the 'react' and 'react-dom' imports to use the global React instance provided by Cognigy Webchat.
// This is necessary because we cannot bundle React with the plugin, as it would conflict with the host's React instance.

declare global {
    interface Window {
        __COGNIGY_WEBCHAT: any;
        cognigyWebchat: {
            sendMessage: (text: string, data?: any) => void;
        };
    }
}

if (!window.__COGNIGY_WEBCHAT) {
    // In development/test environment where __COGNIGY_WEBCHAT might not be present,
    // you might want to fallback to a bundled React or throw an error.
    // For now, we'll just log a warning and assume it will be there at runtime.
    console.warn('Cognigy Webchat global not found. Plugin might not work as expected outside of Webchat.');
}

const React = window.__COGNIGY_WEBCHAT ? window.__COGNIGY_WEBCHAT.React : null;
const ReactDOM = window.__COGNIGY_WEBCHAT ? window.__COGNIGY_WEBCHAT.ReactDOM : null;

export default React;
export { React, ReactDOM };
// Export all React properties to mimic the module
export const {
    Children,
    Component,
    Fragment,
    Profiler,
    PureComponent,
    StrictMode,
    Suspense,
    cloneElement,
    createContext,
    createElement,
    createFactory,
    createRef,
    forwardRef,
    isValidElement,
    lazy,
    memo,
    useCallback,
    useContext,
    useDebugValue,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    version
} = React || {};
