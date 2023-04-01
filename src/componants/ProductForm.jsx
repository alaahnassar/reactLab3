import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productAPI } from "../Api/Products";

export default function ProductForm() {
  let navigate = useNavigate();
  let [formValue, setFormValues] = useState({});

  let [product, setProduct] = useState({
    title: "",
    price: "",
    quantity: "",
    img: "",
  });
  const { id } = useParams();

  const getProductById = async () => {
    let response = await productAPI.getProductById(id);
    setProduct(response.data);
    setFormValues(response.data);
  };
  useEffect(() => {
    if (Number(id) !== 0) {
      getProductById();
    }
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formValue);
    if (id === 0) {
      await productAPI.addProduct(formValue);
    } else {
      await productAPI.editProduct(id, formValue);
    }
    navigate("/products");
  };
  const operationHandler = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="p-5">
      <h2 className="m-4 text-center">
        {id === 0 ? "Add Product " : "Edit Product"}
      </h2>
      <Form className="bg-light p-5 rounded" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            onChange={operationHandler}
            defaultValue={product.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            onChange={operationHandler}
            placeholder="Product Price"
            defaultValue={product.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>quntity</Form.Label>
          <Form.Control
            name="quntity"
            type="number"
            onChange={operationHandler}
            placeholder="Product quntity"
            defaultValue={product.quntity}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="price"
            type="text"
            onChange={operationHandler}
            placeholder="Product image"
            defaultValue={product.img}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
