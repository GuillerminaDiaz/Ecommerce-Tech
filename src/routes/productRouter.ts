import {Router} from 'express';

const productRouter= Router();

productRouter.get('/products', /* getAllProducts */)
productRouter.get('/product/:id', /* getProductById */)
productRouter.post('/product', /* createProduct */)
productRouter.put('/product/:id', /* updateProduct */)
productRouter.delete('/product/:id', /* deleteProduct */)

export default productRouter;