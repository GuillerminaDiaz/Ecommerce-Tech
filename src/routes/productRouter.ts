import { createProduct } from 'controllers/productsControllers/createProduct';
import { deleteProduct } from 'controllers/productsControllers/deleteProduct';
import { getAllProducts } from 'controllers/productsControllers/getAllProducts';
import { getProductById } from 'controllers/productsControllers/getProductById';
import { updateProduct } from 'controllers/productsControllers/updateProduct';
import {Router} from 'express';

const productRouter = Router();

productRouter.get('/products', getAllProducts)
productRouter.get('/product/:id', getProductById)
productRouter.post('/product', createProduct)
productRouter.put('/product/:id', updateProduct)
productRouter.delete('/product/:id', deleteProduct)

export default productRouter;