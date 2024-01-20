//forma de utilizaçao axios



import axios from "axios";

const Token = "e446aafa-e155-49cb-b2dd-e0bb2b1d1305"

const http = axios.create({
    baseURL: 'https://staging-encore-hello-world-ngni.encr.app/api/v1',
    timeout: 10000,
    headers: {'Authorization': `Bearer ${Token}`}
  });


  //pegar os produtos (serviços) 

//   const Products = new Promise((resolve, reject) => {
//     http.get("/products")
//     .then(res => {
//         resolve(res.data)
//     })
//     .catch(err => reject(err))
//   })

const Products = () => http.get("/products")
const Content = () => http.get("/content")


export {
    Products,
    Content

}