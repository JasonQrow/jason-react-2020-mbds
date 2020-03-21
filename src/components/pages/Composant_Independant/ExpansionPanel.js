import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FicheGroupe from '../GroupeRockDetail/FicheGroupe';
import Membres from '../GroupeRockDetail/Membres';
import Albums from '../GroupeRockDetail/Albums';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels({data}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let Fiche_Groupe_Expansion_Panel = (
    <FicheGroupe data={data}/>
  );

  let Membres_Groupe_Expansion_Panel = (
    <Membres data={data}/>
  );

  let Albums_Groupe_Expansion_Panel = (
    <Albums data={data.albums}/>
  );

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="primary">Fiche du groupe</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {Fiche_Groupe_Expansion_Panel}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="primary">Membres</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {Membres_Groupe_Expansion_Panel}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography color="primary">Albums</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {Albums_Groupe_Expansion_Panel}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
