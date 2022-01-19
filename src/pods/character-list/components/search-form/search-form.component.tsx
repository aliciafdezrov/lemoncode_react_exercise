import React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as classes from "./search-form.component.styles";
import {SearchInput} from "../../../../common/components";
import {createInitialSearchTerm, SearchTerm} from "./search-form.vm";

interface Props {
    onSearch: (searchTerm: SearchTerm) => void;
}

export const SearchForm: React.FC<Props> = (props) => {
    const { onSearch } = props;
    const [searchTerm, setSearchTerm] = React.useState<SearchTerm>(createInitialSearchTerm());

    const handleSearch = (key: string) => (value: string) => {
        const newSearchTerm = {...searchTerm, [key]: value};
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };

    const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = {...searchTerm, [key]: event.target.value};
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };

    return (
            <Paper className={classes.queryPaper}>
                <SearchInput defaultSearch={searchTerm.name} placeholder="Name" onSearch={handleSearch('name')}/>
                <SearchInput defaultSearch={searchTerm.specie} placeholder="Specie" onSearch={handleSearch('specie')}/>
                <SearchInput defaultSearch={searchTerm.type} placeholder="Type" onSearch={handleSearch('type')}/>
                <FormControl variant="standard" sx={{minWidth: 165}}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={searchTerm.status}
                        label="Status"
                        onChange={handleChange('status')}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'alive'}>Alive</MenuItem>
                        <MenuItem value={'dead'}>Dead</MenuItem>
                        <MenuItem value={'unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{minWidth: 165}}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={searchTerm.gender}
                        label="Gender"
                        onChange={handleChange('gender')}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Genderless'}>Genderless</MenuItem>
                        <MenuItem value={'Unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
    );
};
