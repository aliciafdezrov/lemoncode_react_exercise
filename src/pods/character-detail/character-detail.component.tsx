import React from "react";
import {Character} from "./character-detail.vm";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import * as classes from './character-detail.component.styles';

interface Props {
    character: Character;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
    const {character} = props;

    return (
        <Paper>
            <div className={classes.root}>
                <Avatar
                    variant="rounded"
                    src={character.image}
                    alt={character.name}
                    sx={{width: 200, height: 200}}
                />
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>

                    <Typography variant="body1">
                        Last known location:
                    </Typography>
                    <Typography variant="body1">
                        {character.location.name}
                    </Typography>

                    <Typography variant="body1">
                        First seen in:
                    </Typography>
                    <Typography variant="body1">
                        {character.origin.name}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Chip color="primary" label={character.status} variant="outlined"/>
                        <Chip color="primary" label={character.species} variant="outlined"/>
                        <Chip color="primary" label={character.gender} variant="outlined"/>
                    </Stack>
                </div>

                <List dense sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': {padding: 0},
                }} subheader={<ListSubheader>Episodes</ListSubheader>}>
                    {character.episode.map(episode => (
                        <ListItem key={episode}>
                            <ListItemText
                                primary={episode}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Paper>
    );
};
