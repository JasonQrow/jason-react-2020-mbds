import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '8%',
    maxHeight:'100%',
  },
  root2: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  title: {
    fontWeight:'bold',
  },
  image: {
    width: 128,
    height: 128,
  },
  abstract: {
    textAlign: 'justify',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingTop: '0%',
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function ComplexGrid({data}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="image_du_groupe" src={data.picture.standard} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  {data.name}
                </Typography>
                <Typography variant="body2" gutterBottom align="justify">
                  {data.abstract}
                </Typography>
                <Divider />
                <Typography variant="body2" color="textSecondary">
                  ID: {data._id}
                </Typography>
                <Divider />
                <div className={classes.root2}>
                  <a href={data.urlOfficialWebsite} target="_blank">
                      <LanguageIcon color="primary"/>
                  </a>
                  <a href={data.urlFacebook} target="_blank">
                      <FacebookIcon color="primary"/>
                  </a>
                  <a href={data.urlTwitter} target="_blank">
                      <TwitterIcon color="primary" />
                  </a>
                  <a href={data.urlYouTube} target="_blank">
                      <YoutubeIcon color="secondary" />
                  </a>
                  <a href={data.urlInstagram} target="_blank">
                      <InstagramIcon color="secondary" />
                  </a>
                </div>
                <div className={classes.root2}>
                  <a href={data.urlWikipedia} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/icons8/windows-8/24/Logos-Wikipedia-icon.png"></img>
                  </a>
                  <a href={data.urlMySpace} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/24/myspace-icon.png"></img>
                  </a>
                  <a href={data.urlAmazon} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/uiconstock/e-commerce/24/amazon-icon.png"></img>
                  </a>
                  <a href={data.urlITunes} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/wineass/ios7-redesign/24/iTunes-icon.png"></img>
                  </a>
                  <a href={data.urlAllmusic} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/graphics-vibe/retro-social/24/music-icon.png"></img>
                  </a>
                  <a href={data.urlMusicBrainz} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-15/24/MusicBrainz-icon.png"></img>
                  </a>
                  <a href={data.urlSpotify} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/dakirby309/simply-styled/24/Spotify-icon.png"></img>
                  </a>
                  <a href={data.urlPureVolume} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/24/Actions-player-volume-icon.png"></img>
                  </a>
                  <a href={data.urlSoundCloud} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/designbolts/cute-social-media/24/Sound-Cloud-icon.png"></img>
                  </a>
                  <a href={data.urlDeezer} target="_blank">
                      <img src="http://icons.iconarchive.com/icons/martz90/circle/24/deezer-2-icon.png"></img>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="image_du_groupe" src={data.picture.standard} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
