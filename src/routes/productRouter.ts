import {Router} from 'express';
import { getOneProductHandler } from '../handlers/products/getOneProductHandler';
import { getAllProductsHandler } from '../handlers/products/getAllProductsHandler';
import { postProductHandler } from '../handlers/products/postProductHandler';
import { deleteProductHanlder } from '../handlers/products/deleteProductHandler';
import { updateProductHandler } from '../handlers/products/updateProductHandler';

const productRouter = Router();

productRouter.get('/products', getAllProductsHandler)
productRouter.get('/product/:_id', getOneProductHandler)
productRouter.post('/product', postProductHandler)
productRouter.put('/product/:_id', updateProductHandler)
productRouter.delete('/product/:id', deleteProductHanlder)

export default productRouter;