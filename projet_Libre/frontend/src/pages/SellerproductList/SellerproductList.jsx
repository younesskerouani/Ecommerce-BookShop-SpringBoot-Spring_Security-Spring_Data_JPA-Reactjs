import "./SellerProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import * as ProductApi from '../../service/api/ProductRequest';

export default function SellerproductList() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    const getProduct =async() => {
      const res = await ProductApi.getAllProducts();
      setData(res.data);
      
    };

    getProduct();
  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const imageSrc = "http://localhost:8080/ProductImage/getImage/"

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "productName",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {


        return (
          <div className="productListItem">
            <img className="productListImg" src={imageSrc+params.row.id} alt="" />
            {params.row.productName}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productSeller/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];


  return (
    <div className="productList">
      <Link to="/newproduct">
      <button className="productAddButton">Add New Book</button>
      </Link>
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
       
    </div>
  );
}
