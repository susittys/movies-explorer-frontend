import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound";
// import api from "../../utils/MainApi";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // function checkToken() {
  //   const jwt = localStorage.getItem("token");
  //   api.getContent(jwt)
  //     .then((data) => {
  //       if (!data) {
  //         return;
  //       }
  //       setLoggedIn(true);
  //       navigate(location.pathname);
  //     })
  //     .catch((err) => {
  //       setLoggedIn(false);
  //       // console.error(`Ошибка: ${err}`);
  //     });
  // }
  // React.useEffect(() => {
  //   checkToken();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // React.useEffect(() => {
  //   const jwt = localStorage.getItem("token");
  //   if (isLoggedIn) {
  //     api.getUserData(jwt)
  //       .then((data) => {
  //         setCurrentUser(data);
  //       })
  //       .catch((err) => {
  //         console.error(`Ошибка: ${err}`);
  //       });
  //     // MainApi
  //     // .getInitialCards(jwt)
  //     // .then((cards) => {
  //     //   setCards(cards.reverse());
  //     // })
  //     // .catch((err) => {
  //     //   console.error(`Ошибка: ${err}`);
  //     // });
  //   }
  // }, [isLoggedIn]);

  function handleLoggedIn() {
    setLoggedIn(true);
  }

  function handlePageBack() {
    navigate(-1);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">

        <Routes>
          <Route path="/" element={<Main/>} isLoggedIn={isLoggedIn} />
          </Routes>
        </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
