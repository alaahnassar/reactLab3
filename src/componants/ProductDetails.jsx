import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useParams } from "react-router-dom";
import { productAPI } from "../Api/Products";

export default function ProductDetails() {
  let [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    try {
      let response = await productAPI.getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div>
      <MDBCard className="w-50 mx-auto my-5 ">
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={`./imgs/${product.img}`}
              style={{ objectFit: "cover" }}
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{product.img}</MDBCardTitle>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText>{product.description}</MDBCardText>
              <MDBCardText>price:{product.price} EGP</MDBCardText>
              <MDBCardText>quntity:{product.quntity} EGP</MDBCardText>

              <MDBBtn href="#">Add to cart</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}
