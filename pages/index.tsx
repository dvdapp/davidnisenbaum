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


/*
instagram svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className={classes.instagram}>
            <path ref={instaRef} d="
            M12 2.163
            c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z
            m0-2.163
            c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z
            m0 5.838
            c-3.403 0-6.162 2.759-6.162 6.162
            s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163
            c0-3.403-2.759-6.162-6.162-6.162z
            m0 10.162
            c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4
            s4 1.791 4 4
            c0 2.21-1.791 4-4 4z
            m6.406-11.845
            c-.796 0-1.441.645-1.441 1.44
            s.645 1.44 1.441 1.44
            c.795 0 1.439-.645 1.439-1.44
            s-.644-1.44-1.439-1.44z
            "
            />
          </svg>
*/

/*
soundcloud svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className={classes.soundcloud}><path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"/></svg>        
*/

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
