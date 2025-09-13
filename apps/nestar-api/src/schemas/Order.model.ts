import { Schema } from 'mongoose';
import { OrderStatus } from '../libs/enums/order.enum';

const OrderSchema = new Schema(
	{
		orderTotalAmount: {
			type: Number,
			required: true,
		},
		orderDeliveryCost: {
			type: Number,
			required: true,
		},
		orderStatus: {
			type: String,
			required: false,
			enum: OrderStatus,
			default: 'PAUSED',
		},
		memberId: {
			type: Schema.Types.ObjectId,
			required: false,
			ref: 'Member',
		},
	},
	{ timestamps: true, collection: 'orders' },
);

export default OrderSchema;