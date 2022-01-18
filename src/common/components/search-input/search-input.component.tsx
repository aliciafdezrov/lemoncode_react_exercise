import React from "react";
import TextField from '@mui/material/TextField';
import {useDebounce} from "./search-input.hook";

interface Props {
    defaultSearch?: string;
    onSearch: (query: string) => void;
    placeholder: string;
    delay?: number;
}

export const SearchInput: React.FC<Props> = (props) => {
    const {onSearch, defaultSearch="", placeholder, delay} = props;
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
        <TextField variant="standard" value={inputValue} type="search" onChange={handleOnChangeInput}
                   placeholder={placeholder}/>
    );
};
