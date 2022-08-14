
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/coins/:id" element={<CoinPage />} />
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;