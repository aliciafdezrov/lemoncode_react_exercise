import React from "react";

interface Props {
    defaultSearch: string;
    onSearch: (query: string) => void;
}

export const SearchInput: React.FC<Props> = (props) => {
    const {onSearch, defaultSearch} = props;
    const [inputValue, setInputValue] = React.useState(defaultSearch);

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputValue(value);
        onSearch(value);
    }

    return (
        <input value={inputValue} type="search" onChange={handleOnChangeInput} placeholder="Search something" aria-label="search-input"/>
    );
};
