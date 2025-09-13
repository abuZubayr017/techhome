import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class OrderItemInput {
	@IsNotEmpty()
	@Field(() => Number)
	item_quantity: number;

	@IsNotEmpty()
	@Field(() => Number)
	item_price: number;

	orderId?: ObjectId;

	productId?: ObjectId;
}
