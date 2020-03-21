import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MembresActuels from './MembreActuelDetail';
import MembresAncien from './MembreAncienDetail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Albums({data}) {
    const classes = useStyles();
    function dataAncien(data){
      return data.members.filter(member => member.ended === true);
    }
    function dataAncien(data){
      return data.members.filter(member => member.ended === false);
    }
    let Membres_Groupe_Actuel = (
      <MembresActuels data={dataAncien(data)}/>
    );
    let Membres_Groupe_Ancien = (
      <MembresAncien data={data.members}/>
    );

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2}>{Membres_Groupe_Actuel}</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2}>{Membres_Groupe_Ancien}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
