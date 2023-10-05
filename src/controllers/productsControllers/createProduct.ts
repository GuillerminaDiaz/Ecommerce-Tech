import Product, { IProduct } from "../../models/products";


export const createProduct = async (product: IProduct) => {
    const newProduct = new Product({
        id: product.id,
        category: product.category,
        price: product.price,
        name: product.name,
        image: product.image,
        color: product.color,
        description: product.description,
        brand: product.brand,
        stock: product.stock
    })

    console.log(newProduct, 'product created')

    await newProduct.save();
    return 'listoo';
}