import { Schema } from 'mongoose';

const OrderItemSchema = new Schema(
	{
		item_quantity: { type: Number, required: true },
		item_price: { type: Number, required: true },
		orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
		productId: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			required: false,
		},
	},
	{ timestamps: true, collection: 'orderitems' },
);

export default OrderItemSchema;
