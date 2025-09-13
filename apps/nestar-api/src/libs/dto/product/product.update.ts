import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsNotEmpty, Length, Min } from 'class-validator';
import { ProductBrand, ProductStatus, ProductType } from '../../enums/product.enum';
import { ObjectId } from 'mongoose';

@InputType()
export class ProductSpecsInput {
	@IsOptional()
	@Field(() => String, { nullable: true })
	cpu?: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	ram?: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	storage?: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	screen?: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	battery?: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	gpu?: string;
}

@InputType()
export class ProductUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	productName: string;

	@IsOptional()
	@Field(() => ProductBrand, { nullable: true })
	productBrand?: ProductBrand;

	@IsOptional()
	@Field(() => ProductType, { nullable: true })
	productType?: ProductType;

	@IsOptional()
	@Field(() => ProductStatus, { nullable: true })
	productStatus?: ProductStatus;

	@IsOptional()
	@Field(() => ProductSpecsInput, { nullable: true })
	productSpecs?: ProductSpecsInput;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	productQuantity?: number;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	productPrice?: number;

	@IsOptional()
	@Field(() => [String], { nullable: true })
	productImages?: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	productDesc?: string;

	soldAt?: Date;

	deletedAt?: Date;
}
