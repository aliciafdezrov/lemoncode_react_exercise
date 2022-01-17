import React from 'react';
import * as classes from "./character-grid-item.styles";
import {Character} from "../../character-list.vm";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {routes} from "../../../../core/router";

const CustomizedCard = styled(Card)`
  background: #333333;
  color: white;
  :hover {
    background: #121212;
  }
`;

interface Props {
    character: Character;
}

export const CharacterGridItem: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const {character} = props;

    return (
        <CustomizedCard sx={{maxWidth: 300}} className={`${classes.card} ${classes.fadeInCard}`} onClick={() => navigate(routes.characterDetail(character.id.toString()))}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="300"
                    height="300"
                    image={character.image}
                    alt={character.name}
                />
                <CardContent sx={{minHeight: 136}} className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Chip color="primary" label={character.status} variant="outlined"/>
                        <Chip color="primary" label={character.species} variant="outlined"/>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </CustomizedCard>
    );
};
