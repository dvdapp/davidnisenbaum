import { Component } from 'react';
import Head from 'next/head';
import { Link, Tooltip, Fade, CircularProgress } from '@material-ui/core';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = (theme: Theme) => createStyles({
  root: {
    textAlign: "center",
    height: "100vh"
  },

  main: {
    lineHeight: "100vh",
    "& > a": {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2, 0) 
      }
    },
    "& > a > *": {
      margin: theme.spacing(0, 1),
      verticalAlign: "middle",
      color: "#B0C4DE",
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(0, 2.5),
        height: 45,
        width: 45,
      }
    }
  },

  spinner: {
    color: "#B0C4DE", 
  },

  github: {
    "&:hover": {
      color: "#24292e"
    }
  },

  linkedin: {
    "&:hover": {
      color: "#0077b5"
    }
  },

  instagram: {
    fill: "#B0C4DE",
    fontSize: "24px",
    [theme.breakpoints.up('sm')]: {
      fontSize: "45px",
    },
    "&:hover": {
      background: "linear-gradient(45deg, yellow, red, purple)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textFillColor: "transparent"
    }
  },

  youtube: {
    "&:hover": {
      color: "#ff0000"
    }
  },

  soundcloud: {
    fill: "#B0C4DE",
    fontSize: "24px",
    [theme.breakpoints.up('sm')]: {
      fontSize: "45px",
    },
    "&:hover": { 
      color: "#ff6a00"
    }
  }
});

interface Props {
  classes: any;
}

interface State {
  mounted: boolean;
}

class Home extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({ mounted: true});
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Head>
          <title>David Nisenbaum</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossOrigin="anonymous"/>
          <script src="https://kit.fontawesome.com/7a66ef7334.js" crossOrigin="anonymous"></script>
        </Head>

        <main className={classes.main}>
          {this.state.mounted && 
          (
            <>
              <Tooltip title="Check Out my Code" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://github.com/dvdapp/">
                  <GitHubIcon classes={{ root: classes.github }} />
                </Link>
              </Tooltip>
              <Tooltip title="View my Resume" placement="top" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://www.linkedin.com/in/davidnisenbaum/">
                  <LinkedInIcon classes={{ root: classes.linkedin }} />
                </Link>
              </Tooltip>
              <Tooltip title="Watch my Adventures" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://www.youtube.com/channel/UCYRrV-BJKHndebk1F09d1FQ/">
                  <YouTubeIcon classes={{ root: classes.youtube }}/>
                </Link>
              </Tooltip> 
              <Tooltip title="Follow my Social Life" placement="top" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://www.instagram.com/david.nisenn/">
                  <i className={`${classes.instagram} fab fa-instagram`} />
                </Link>
              </Tooltip>
              <Tooltip title="Listen to my Music" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://soundcloud.com/neighb0urs/">
                  <i className={`${classes.soundcloud} fab fa-soundcloud`} />
                </Link>
              </Tooltip>
            </>
          )
          }

          {!this.state.mounted && (
            <CircularProgress className={classes.spinner} />
          )}
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home)
