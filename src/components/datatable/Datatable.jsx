import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom"; // useHistory yerine useNavigate
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { userColumns } from "../../datatablesource"; // userColumns'ı ekleyin

const Datatable = () => {
  const navigate = useNavigate(); // useHistory yerine useNavigate
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Gör</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Sil
            </div>
          </div>
        );
      },
    },
  ];

  const handleEdit = (id) => {
    navigate(`/users/${id}/edit`); // useHistory yerine useNavigate
  };

  const editColumn = [
    {
      field: "edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="editButton"
              onClick={() => handleEdit(params.row.id)}
            >
              Düzenle
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Yeni Kullanıcı Ekle
        <Link to="/users/new" className="link">
          Ekle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn, editColumn)} // userColumns'ı ekleyin
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
