import React from "react";
import TextField from '@mui/material/TextField';

interface Props {
    defaultSearch: string;
    onSearch: (query: string) => void;
    placeholder: string;
}

export const SearchInput: React.FC<Props> = (props) => {
    const {onSearch, defaultSearch, placeholder} = props;
    const [inputValue, setInputValue] = React.useState(defaultSearch);

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputValue(value);
        onSearch(value);
    }

    return (
        <TextField variant="standard" value={inputValue} type="search" onChange={handleOnChangeInput} placeholder={placeholder}/>
    );
};
