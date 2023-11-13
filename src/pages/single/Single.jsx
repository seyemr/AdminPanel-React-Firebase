// single.jsx

import React, { useState, useEffect } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { auth, db } from "../../firebase"; // Firebase bağlantısını import et

const Single = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    phone: "+1 2345 67 89",
    address: "Elton St. 234 Garden Yd. NewYork",
    country: "USA",
  });

  useEffect(() => {
    // Kullanıcının bilgilerini Firestore'dan çek
    const fetchUserData = async () => {
      try {
        const userDoc = await db.collection("users").doc(auth.currentUser.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          console.error("Kullanıcı bulunamadı");
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      console.log("Kaydet butonuna tıklandı");
      console.log("Güncellenen Kullanıcı Bilgileri:", userData);

      // Firestore'da kullanıcı bilgilerini güncelle
      await db.collection("users").doc(auth.currentUser.uid).set(userData, { merge: true });

      // Düzenleme modunu kapat
      setEditMode(false);
    } catch (error) {
      console.error("Veri güncelleme hatası:", error);
    }
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={handleEditClick}>
              {editMode ? "İptal" : "Düzenle"}
            </div>
            <h1 className="title">Bilgi</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userData.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  {editMode ? (
                    <input
                      type="text"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="itemValue">{userData.email}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefon:</span>
                  {editMode ? (
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="itemValue">{userData.phone}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adres:</span>
                  {editMode ? (
                    <input
                      type="text"
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="itemValue">{userData.address}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ülke:</span>
                  {editMode ? (
                    <input
                      type="text"
                      name="country"
                      value={userData.country}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="itemValue">{userData.country}</span>
                  )}
                </div>
              </div>
              {editMode && (
                <button className="saveButton" onClick={handleSaveClick}>
                  Kaydet
                </button>
              )}
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Kullanıcı Harcamaları (Son 6 Ay)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Son İşlemler</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
