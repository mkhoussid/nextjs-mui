import React from 'react';

type TUseEventListener = {
    eventName: string;
    handler: (...params: any[]) => void;
    dependencies?: any;
    disabled?: boolean;
};
export default function useEventListener({
    eventName = 'scroll',
    handler = () => {},
    dependencies = undefined,
    disabled = false,
}: TUseEventListener) {
    const savedHandler = React.useRef(handler);

    React.useEffect(() => {
        if (disabled || !dependencies) return;
        savedHandler.current = handler;
    }, [handler, disabled]);

    React.useEffect(() => {
        if (disabled || !dependencies) return;
        const eventListener = () => savedHandler.current(window);

        window.addEventListener(eventName, eventListener);

        return () => {
            window.removeEventListener(eventName, eventListener);
        };
    }, [dependencies, disabled]);
}
