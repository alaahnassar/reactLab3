import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productAPI } from "../Api/Products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  let [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // Get all Data
  const getAllProducts = async () => {
    let res = await productAPI.getAllProducts();

    setProducts(res.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  // view product
  const viewProduct = (id) => {
    navigate(`/products/${id}`);
  };
  // edit product
  const editProduct = (id) => {
    navigate(`/products/${id}/edit`);
  };
  const addProduct = () => {
    navigate(`/products/0/edit`);
  };
  const deleteProduct = async (id) => {
    await productAPI.deleteProduct(id);
    let filteredList = products.filter((product) => product.id !== id);
    setProducts(filteredList);
  };
  return (
    <div className="container py-5">
      <Button onClick={() => addProduct()} variant="primary">
        <i class="fa-solid fa-plus me-2"></i>Add Product
      </Button>
      <div className="d-flex flex-wrap col-md-12 justify-content-between ">
        {products.map((product) => {
          return (
            <div key={product.id} className="py-3 col-6 col-md-4 px-2   ">
              <Card>
                {/* src={product.img} */}
                <Card.Img
                  variant="top"
                  src={`./imgs/${product.img}`}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button
                    onClick={() => editProduct(product.id)}
                    variant="success"
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Button>
                  <Button
                    onClick={() => viewProduct(product.id)}
                    variant="warning"
                    className="mx-2"
                  >
                    <i class="fa-regular fa-eye text-white "></i>
                  </Button>
                  <Button
                    onClick={() => deleteProduct(product.id)}
                    variant="danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
