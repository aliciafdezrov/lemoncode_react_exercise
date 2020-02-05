import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useParams, useHistory} from 'react-router-dom';
import {trackPromise} from "react-promise-tracker";
import {memberAPI} from "../../api/memberAPI";
import {createDefaultMemberEntity, MemberEntity} from "../../model/member";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export const MemberCardComponent = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [memberInfo, setMemberInfo] = React.useState<MemberEntity>(createDefaultMemberEntity());
    const params = useParams();

    useEffect(() => {
        loadMemberInfo();
    }, []);

    const loadMemberInfo = () => {
        memberAPI.getSingleMemberByLogin(params.id).then(member => setMemberInfo(member));
    };


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="member-avatar" className={classes.avatar} src={memberInfo.avatar_url}/>
                }
                title={memberInfo.name}
                subheader={memberInfo.location}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {memberInfo.bio}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Company: {memberInfo.company}</Typography>
                    <Typography paragraph>Followers: {memberInfo.followers}</Typography>
                    <Typography paragraph>Following: {memberInfo.following}</Typography>
                    <Typography paragraph>Created at: {memberInfo.created_at}</Typography>
                    <Typography paragraph>Blog: {memberInfo.blog}</Typography>
                    <Typography paragraph>Public repos: {memberInfo.public_repos}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};