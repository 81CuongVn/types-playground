import * as dotenv      from 'dotenv';
import Product          from '../models/product';
import connectDatabase  from '../config/database';
import products         from '../data/products.json';

dotenv.config({ path: 'backend/config/config.env' });

const uri: string = process.env.DB_LOCAL_URL!;

connectDatabase(uri);

const seedProducts = async () => {
  try {

    await Product.deleteMany();
    console.log('Products are deleted.');

    await Product.insertMany(products);
    console.log('All Products are added.');

    process.exit();
  } catch(error: unknown) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    process.exit();
  }
}

seedProducts();