// Navbar.jsx
import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { useTranslation } from 'react-i18next';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { auth } from "../../firebase"; // Firebase bağlantısını import et

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { dispatch } = useContext(DarkModeContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Arama alanı */}
        <div className="search">
          <input type="text" placeholder={t('Arama Yap')} />
          <SearchOutlinedIcon />
        </div>

        {/* Navbar öğeleri */}
        <div className="items">
          {/* Dil seçimi */}
          <div className="item" onClick={() => changeLanguage('en')}>
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="item" onClick={() => changeLanguage('tr')}>
            <LanguageOutlinedIcon className="icon" />
            Türkçe
          </div>

          {/* Koyu mod */}
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          {/* Tam ekran */}
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          {/* Bildirimler */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          {/* Mesajlar */}
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          {/* Liste görünümü */}
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          {/* Kullanıcı avatarı */}
          <div className="item">
            {user ? (
              <img
                src={user.photoURL}
                alt=""
                className="avatar"
              />
            ) : (
              <span>Giriş Yap</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
