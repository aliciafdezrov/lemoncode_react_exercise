import React from "react";
import TextField from '@mui/material/TextField';
import {useDebounce} from "./search-input.hook";

interface Props {
    defaultSearch?: string;
    onSearch: (query: string) => void;
    placeholder: string;
    delay?: number;
    variant?: "outlined" | "standard" | "filled";
    fullWidth?: boolean;
}

export const SearchInput: React.FC<Props> = (props) => {
    const {onSearch, defaultSearch="", placeholder, delay, variant, fullWidth} = props;
    const [inputValue, setInputValue] = React.useState(defaultSearch);
    const debouncedValue = useDebounce(inputValue, delay);

    React.useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue]);

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputValue(value);
    }

    return (
        <TextField variant={variant} fullWidth={fullWidth} value={inputValue} type="search" onChange={handleOnChangeInput}
                   placeholder={placeholder}/>
    );
};
