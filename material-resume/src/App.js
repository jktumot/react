import "./App.css";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import FolderIcon from '@mui/icons-material/Folder';
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Restore } from "@mui/icons-material";
import { DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backGroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
    color: theme.palette.common.white,
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const [open, setOpen] =React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Material-Ui Project
            </Typography>
            <Box mr={2}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
                Log In
              </Button>
              <Dialog open={open} onClose={handleClose} aria-lableledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" > Log In </DialogTitle>
                <DialogContent>
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="email Adress" type="email" fullWidth />
                  <TextField autoFocus margin="dense" id="pass" label="Password" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log In</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Out
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{
            backgroundImage: `url("https://source.unsplash.com/random")`,
          }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Material Ui Project
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Практический опыт показывает, что постоянный количественный
                    рост и сфера нашей активности обеспечивает широкому кругу
                    специалистов участие в формировании форм воздействия!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Material UI Project
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Практический опыт показывает, что постоянный количественный рост и
              сфера нашей активности обеспечивает широкому кругу специалистов
              участие в формировании форм воздействия! Таким образом,
              социально-экономическое развитие позволяет выполнить важнейшие
              задания по разработке существующих финансовых и административных
              условий...
            </Typography>
            <div className={classes.menuButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Blog post
                      </Typography>
                      <Typography>
                        Blog post. Material Ui blog information. Post
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayersIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nerby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          Material Ui Project
        </Typography>
      </footer>
    </>
  );
}

export default App;
