import axios from "axios";

const baseUrl = "http://localhost:3005/data";
const getAllProducts = () => axios.get(baseUrl);
const getProductById = (id) => axios.get(`${baseUrl}/${id}`);
const addProduct = (product) => axios.post(`${baseUrl}`, product);
const editProduct = (id, product) =>
  axios.put(`${baseUrl}` / `${id}` / "edit", product);
const deleteProduct = (id) => axios.delete(`${baseUrl}/${id}`);

export const productAPI = {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
