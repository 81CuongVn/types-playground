import { Router } from 'express';
import { 
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
}  from '../controllers/productController';

const router = Router();

router.route('/admin/product/new').post(newProduct);
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id')
  .put(updateProduct)
  .delete(deleteProduct);

export default router;