import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class OrderInput {
	@IsNotEmpty()
	@Field(() => Number)
	orderTotalAmount: number;

	@IsNotEmpty()
	@Field(() => Number)
	orderDeliveryCost: number;

	memberId?: ObjectId;
}
