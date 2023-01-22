import { publicRequest } from "./requestMethods";


export const getProductById = (id)=>publicRequest.get("Product/get-product/"+id);
export const getAllProducts = () => publicRequest.get('/Product/get-products');
export const getProductCount = () => publicRequest.get('/Product/getNombreOfProducts');
export const CreateProduct = (data) => publicRequest.post('/Product/save-prod',data);
export const UploadProductImage = (data) => publicRequest.post('/ProductImage',data);
