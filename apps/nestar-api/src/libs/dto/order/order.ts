import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { OrderStatus } from '../../enums/order.enum';
import { Product } from '../product/product';
import { OrderItem } from './orderItem';

@ObjectType()
export class Order {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => Number)
	orderTotalAmount: number;

	@Field(() => Number)
	orderDeliveryCost: number;

	@Field(() => OrderStatus)
	orderStatus: OrderStatus;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

    /** from aggregation **/
    @Field(() => OrderItem, {nullable:true})
    orderItemData: OrderItem;

    @Field(() => Product, {nullable:true})
    productData: Product;
}
