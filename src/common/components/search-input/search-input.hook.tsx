import React from "react";

export function useDebounce(value: string, delay: number = 500) {
    const [debouncedValue, setDebouncedValue] = React.useState<string>(value);
    React.useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );
    return debouncedValue;
}
