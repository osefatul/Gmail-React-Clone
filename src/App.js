import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();

  //persistent Login, whenever we refresh we shouldnt be asked for login again.
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //the user is loggedIn
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <Router>
      {/*If there is no user, render the Login page */}
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          {/*Header and Sidebar should be outside the switch, means whenever we click on the tab header and sidebar shouldn;t go away*/}
          <Header />
          <div className="app_body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
