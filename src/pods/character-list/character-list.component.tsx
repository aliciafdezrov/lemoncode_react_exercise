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
    onSearch: () => void;
}

export const CharacterListComponent: React.FC<Props> = (props) => {
    const {characters, onSearch} = props;
    const [status, setStatus] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');

    const handleOnSearch = (value: string) => {
        console.log(value);
    }

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <h2>Hello from Rick and Morty page</h2>
            <Paper className={queryPaper}>
                <SearchInput defaultSearch={""} placeholder="Name" onSearch={handleOnSearch}/>
                <SearchInput defaultSearch={""} placeholder="Specie" onSearch={handleOnSearch}/>
                <SearchInput defaultSearch={""} placeholder="Type" onSearch={handleOnSearch}/>
                <FormControl variant="standard" sx={{minWidth: 165}}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={status}
                        label="Status"
                        onChange={handleChangeStatus}
                    >
                        <MenuItem value={'Alive'}>Alive</MenuItem>
                        <MenuItem value={'Dead'}>Dead</MenuItem>
                        <MenuItem value={'Unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{minWidth: 165}}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={gender}
                        label="Gender"
                        onChange={handleChangeGender}
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
