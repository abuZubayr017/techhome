import { Schema } from 'mongoose';
import { ProductBrand, ProductStatus, ProductType } from '../libs/enums/product.enum';

const ProductSchema = new Schema(
	{
		productName: {
			type: String,
			required: true,
		},

		productType: {
			type: String,
			enum: ProductType,
			required: true,
		},

		productBrand: {
			type: String,
			enum: ProductBrand,
			required: true,
		},

		productStatus: {
			type: String,
			enum: ProductStatus,
			default: ProductStatus.ACTIVE,
		},

		ProductSpecs: {
			cpu: { type: String },
			ram: { type: String },
			storage: { type: String },
			screen: { type: String },
			battery: { type: String },
			gpu: { type: String },
		},

		productQuantity: {
			type: Number,
			required: true,
		},

		productPrice: {
			type: Number,
			required: true,
		},

		productViews: {
			type: Number,
			default: 0,
		},

		productLikes: {
			type: Number,
			default: 0,
		},

		productComments: {
			type: Number,
			default: 0,
		},

		productRank: {
			type: Number,
			default: 0,
		},

		productImages: {
			type: [String],
			required: true,
		},

		productDesc: {
			type: String,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'products' },
);

ProductSchema.index({ ProductBrand: 1, ProductType: 1, productName: 1, productPrice: 1 }, { unique: true });

export default ProductSchema;
