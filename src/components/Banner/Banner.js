import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./b4.jpg)",
    backgroundrepeat: "no-repeat",
    backgroundposition: "center",
    backgroundSize:"cover",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "60%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color:"#7fffd4",
              fontWeight: "bold",
              marginBottom: 18,
              fontFamily: "Montserrat",
            }}
          >
            Smart Crypt
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#8f9c84",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;