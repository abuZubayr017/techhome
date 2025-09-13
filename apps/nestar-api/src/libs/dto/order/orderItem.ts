import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class OrderItem {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => Number)
	item_quantity: number;

	@Field(() => Number)
	item_price: number;

	@Field(() => String)
	orderId: ObjectId;

    @Field(() => String)
	productId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}