import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddTour from "./components/AddTour/AddTour";
import AllBookings from "./components/AllBookings/AllBookings";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MyBookings from "./components/MyBookings/MyBookings";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addTour">
              <AddTour></AddTour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/offerDetails/:offerId">
              <OfferDetails></OfferDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
