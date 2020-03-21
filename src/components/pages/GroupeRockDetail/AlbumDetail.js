import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  root2: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 'auto',
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  root2: {
    width: '100%',
    maxWidth: 360,
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
}));

function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  }
  
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  /*function songs(props){
    const result = (
    <FixedSizeList height={256} width={'400'} itemSize={46} itemCount={props.length}>
      {props.map((value,index) => (
        <ListItem key={index}>
          <ListItemText primary={value.title} />
        </ListItem>
      ))}
      </FixedSizeList>
    )
    return result;
  }*/
  
export default function AlbumDetail({data}) {
  const classes = useStyles();
  function image(lienImage) {
    if(lienImage != null){
      return <img className={classes.img} alt="complex" src={lienImage} />;
    }
    else{ return <img className={classes.img} alt="Aucune pochette d'album" src="https://images.unsplash.com/photo-1519677466127-c57393bf453b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80" />;  }
  };

  function detail(titre,annee,longueur) {
    return <ul>
    <li>{titre} </li>
    <li>{annee}</li>
    <li>{longueur}</li>
    </ul>;
  };

  function song(songs){
    let chansons = (
      <ol>
      {songs.map((item,index) => (
        <ListItem key={`${item._id}`}>
          <ListItemText>{`${index+1}- ${item.title}`}</ListItemText>
        </ListItem>
        ))}
      </ol>
    )
    return chansons;
  };

  return (
    <div className={classes.root}>   
      {data.map(value => (
        <Paper className={classes.paper} key={value._id}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                {image(value.cover ? value.cover.xl : null)}
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              {detail(value.title,value.dateRelease,value.length)}
            </Grid>
            <Grid item xs={6} sm container>
            <List className={classes.root2} subheader={<li />} height={256}>
                {song(value.songs)}
            </List>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
