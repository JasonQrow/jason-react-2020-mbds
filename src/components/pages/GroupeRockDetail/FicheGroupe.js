import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CakeIcon from '@material-ui/icons/Cake';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NumberFormat from 'react-number-format';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers({data}) {
  const classes = useStyles();
  const locationInfo = data.locationInfo.map((value,index) => {
    let string ="";
    if(index < data.locationInfo.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  const genres = data.genres.map((value,index) => {
    let string ="";
    if(index < data.genres.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  const genresDBP = data.dbp_genre.map((value,index) => {
    let string ="";
    if(index < data.dbp_genre.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  const labels = data.labels.map((value,index) => {
    let string ="";
    if(index < data.labels.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  const labelsDBP = data.recordLabel.map((value,index) => {
    let string ="";
    if(index < data.recordLabel.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  const deezerFans = <NumberFormat value={data.deezerFans} displayType={'text'} thousandSeparator={true}/>;
  const associatedMusicalArtist = data.associatedMusicalArtist.map((value,index) => {
    let string ="";
    if(index < data.associatedMusicalArtist.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <CakeIcon style={{ color: "orange"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Création du groupe" secondary={data.lifeSpan.begin} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <LocationOnIcon style={{ color: "blue"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={locationInfo} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <HeadsetIcon style={{ color: "black"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Genre" secondary={genres} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <HeadsetIcon style={{ color: "black"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Genre (DBpedia)" secondary={genresDBP} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <MicIcon style={{ color: "black"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Label" secondary={labels} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <MicIcon style={{ color: "black"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Label (DBpedia)" secondary={labelsDBP} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <FavoriteIcon style={{ color: "pink"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nombres de fan sur Deezer" secondary={deezerFans} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "white" }}>
            <LinkRoundedIcon style={{ color: "grey"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Artiste(s) associé(s)" secondary={associatedMusicalArtist} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
