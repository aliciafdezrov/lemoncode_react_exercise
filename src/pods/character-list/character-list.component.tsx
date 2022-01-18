import React from "react";
import Paper from "@mui/material/Paper";
import {Placeholder} from "../../common/components/placeholder";
import {Character} from "./character-list.vm";
import {CharacterGrid} from "./components/characters-grid/characters-grid.component";
import {SearchInput} from "../../common/components";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {css} from "@emotion/css";

const queryPaper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

interface Props {
    characters: Character[];
    onSearch: (searchTerm: any) => void;
}

export const CharacterListComponent: React.FC<Props> = (props) => {
    const {characters, onSearch} = props;
    const [searchTerm, setSearchTerm] = React.useState<any>({name: '', specie: '', type: '', status: '', gender: ''});

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
        <>
            <h2>Hello from Rick and Morty page</h2>
            <Paper className={queryPaper}>
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
                        <MenuItem value={'Alive'}>Alive</MenuItem>
                        <MenuItem value={'Dead'}>Dead</MenuItem>
                        <MenuItem value={'Unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{minWidth: 165}}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={searchTerm.gender}
                        label="Gender"
                        onChange={handleChange('gender')}
                    >
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Genderless'}>Genderless</MenuItem>
                        <MenuItem value={'Unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
            {characters.length ? (
                <CharacterGrid characters={characters}/>
            ) : (
                <Placeholder text='No results found. Try a different search to look up for more options.'/>
            )}
        </>
    );
};
