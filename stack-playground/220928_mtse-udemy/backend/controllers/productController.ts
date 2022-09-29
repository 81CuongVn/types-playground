import { NextFunction, Request, Response }  from "express";
import { HydratedDocument }                 from 'mongoose'
import Product, { IProduct }                from '../models/product';

// @desc: Create new product
// @route: POST /api/v1/product/new 
const newProduct = async (req: Request, res: Response, next: NextFunction) => {

  const newProduct: IProduct = req.body;

  const product: HydratedDocument<IProduct> = await Product.create(newProduct);

  res
    .status(201)
    .json({
      success: true,
      product
    });
}

// @desc: Get all product
// @route: GET /api/v1/products
const getProducts = async (req: Request, res: Response, next: NextFunction) => {

  const products: HydratedDocument<IProduct>[] = await Product.find();

  res
    .status(200)
    .json({
      success: true,
      count: products.length,
      products
    });
}

// @desc: Get single product details
// @route: GET /api/v1/product/:id
const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {

  const product: HydratedDocument<IProduct> | null = await Product.findById(req.params.id);
  
  if (!product) {
    return res
      .status(404)
      .json({
        success: false,
        message: 'Product not found'
      })
  }

  res
    .status(200)
    .json({
      success: true,
      product
    })
}

// @desc: Update product
// @route: PUT /api/v1/product/:id
const updateProduct = async (req: Request, res: Response, next: NextFunction) => {

  let product: HydratedDocument<IProduct> | null = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(404)
      .json({
        success: false,
        message: 'Product not found'
      })
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })

  res
    .status(200)
    .json({
      success: true,
      product
    })
}

// @desc: Delete product
// @route: DELETE /api/v1/product:/id
const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product: HydratedDocument<IProduct> | null = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(404)
      .json({
        success: false,
        message: 'Product not found'
      })
  }

  await product.remove();

  res
    .status(200)
    .json({
      success: true,
      message: 'Product is deleted.'
    })
}

export { newProduct, getProducts, getSingleProduct, updateProduct, deleteProduct };