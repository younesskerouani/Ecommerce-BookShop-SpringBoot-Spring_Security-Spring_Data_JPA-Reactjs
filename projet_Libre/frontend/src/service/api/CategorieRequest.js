import { publicRequest } from "./requestMethods";


export const getCategorieByName = (cat)=>publicRequest.get("/category/get-category/"+cat);
