import React from "react";
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// Typography is same as any text heading , paragraph etc

// we can use Styles to ignore inline styling and make code little structured
// we can use theme.palette.background.paper or theme.spacing(8,0,8) etc for uing built in styles of material ui or we can give our own style in pixels
// or simply make style.js in src and store everything related to useStyles in it and import it here
function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{
          backgroundColor: "#DC143C",
        }}
      >
        <Toolbar>
          <PhotoCameraIcon />
          <Typography
            variant="h5"
            sx={{ letterSpacing: 6, fontWeight: "bold", margin: "0px 20px" }}
          >
            Photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ margin: "20px auto" }}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              <span style={{ color: "red" }}>
                Memories are timeless treasures of the heart.
              </span>
              <br />
              <span style={{ color: "green" }}>
                Happy times come and go, but the memories stay forever.
              </span>
              <br />
              <span style={{ color: "red" }}>
                A photograph keeps a moment from running away.
              </span>
              <br />
              <span style={{ color: "green" }}>
                and is the pause button of life.
              </span>
            </Typography>
            <div>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Button variant="contained" color="error">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="error">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container
          style={{
            padding: "20px 0",
          }}
          maxWidth="md"
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  style={{
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    width: "250px",
                    overflow: "scroll",
                  }}
                >
                  <CardMedia
                    style={{
                      paddingTop: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent
                    style={{
                      flexGrow: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card which is used Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Exercitationem magni
                      odit dicta aspernatur unde non excepturi veniam.
                      Repudiandae, sed sint.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer
        style={{
          backgroundColor: "#DC143C",
          padding: "20px 0",
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Copyright@photoGallery2022
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          <FacebookIcon style={{ margin: "0px 10px", cursor: "pointer" }} />
          <InstagramIcon style={{ margin: "0px 10px", cursor: "pointer" }} />
          <LinkedInIcon style={{ margin: "0px 10px", cursor: "pointer" }} />
          <TwitterIcon style={{ margin: "0px 10px", cursor: "pointer" }} />
        </Typography>
      </footer>
    </>
  );
}

export default App;
