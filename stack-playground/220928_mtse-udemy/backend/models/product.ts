import { Schema, model} from "mongoose";

export interface IProduct {
  name          : string;
  price         : number;
  description   : string;
  ratings?      : number;
  images: [{
    public_id : string,
    url       : string,
  }];
  category      : string;
  seller        : string,
  stock         : number,
  numOfReviews? : number,
  reviews: [{
    name      : string,
    rating    : number,
    comment   : string
  }];
  createdAt     : Date
}

enum ECategory {
  Electronics     = 'Electronics',
  Cameras         = 'Cameras',
  Laptop          = 'Captop',
  Accessories     = 'Accessories',
  Headphones      = 'Headphones',
  Food            = 'Food',
  Books           = 'Books',
  Clothes_Shoes   = 'Clothes/Shoes',
  Beauty_Health   = 'Beauty/Health',
  Sports          = 'Sports',
  Home            = 'Home'
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    trim: true,
    maxlength: [5, 'Product price cannot exceed 5 characters'],
    default: 0.0
  },
  description: {
    type: String,
    required: [true, 'Please enter product description']
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, 'Please select category for this productr'],
    enum: {
      values: Object.values(ECategory), 
      message: 'Please select correct category for product'
    }
  },
  seller: {
    type: String,
    required: [true, 'Please enter product seller']
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    maxlength: [5, 'Stock cannot exceed 5 characters']
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model<IProduct>('Product', productSchema);