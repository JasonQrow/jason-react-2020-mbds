import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  text: {
    color:'text.primary',
  },
}));

const MembreAncienDetail = ({data}) => {
  const classes = useStyles();

  function instruments(props) {
    let string ="";
    props.map((value,index) => {
      console.log("instrument : " + value);
      if(index < props.length - 1){
        string = string + value + " - ";
      }
      else{string = string + value;}
    });
    return string;
  }

  return (
    <React.Fragment>
      <List className={classes.root} subheader={<li />}>
            <li key="deee" className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader color="primary">Ancien membres</ListSubheader>
            </ul>
            </li>
      </List>
      <List className={classes.root} subheader={<li />}>
        {data.map(sectionId => (
            <li key={`section-${sectionId.id_member_musicbrainz}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader>{sectionId.name}</ListSubheader>
                <ListItem key={`Naissance : ${sectionId.birthDate}`}>
                    <ListItemText primary={`Naissance : ${sectionId.birthDate}`} />
                </ListItem>
                <ListItem key={`Instruments : ${instruments(sectionId.instruments)}`}>
                    <ListItemText primary={`Instruments : ${instruments(sectionId.instruments)}`} />
                </ListItem>
                <ListItem key={`Activtés : ${sectionId.begin} - ${sectionId.end}`}>
                    <ListItemText primary={`Activtés : ${sectionId.begin} - ${sectionId.end}`} />
                </ListItem>
            </ul>
            </li>
        ))}
        </List>
    </React.Fragment>
  );
};

export default MembreAncienDetail;
