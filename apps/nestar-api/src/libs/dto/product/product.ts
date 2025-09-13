import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { ProductBrand, ProductStatus, ProductType } from '../../enums/product.enum';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class ProductSpecs {
	@Field(() => String, { nullable: true })
	cpu?: string;

	@Field(() => String, { nullable: true })
	ram?: string;

	@Field(() => String, { nullable: true })
	storage?: string;

	@Field(() => String, { nullable: true })
	screen?: string;

	@Field(() => String, { nullable: true })
	battery?: string;

	@Field(() => String, { nullable: true })
	gpu?: string;
}

@ObjectType()
export class Product {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => String)
	productName: string;

	@Field(() => ProductType)
	productType: ProductType;

	@Field(() => ProductBrand)
	productBrand: ProductBrand;

	@Field(() => ProductStatus)
	productStatus: ProductStatus;

	@Field(() => ProductSpecs, { nullable: true })
	productSpecs?: ProductSpecs;

	@Field(() => Number)
	productPrice: number;

	@Field(() => Number)
	productQuantity: number;

	@Field(() => Int)
	productViews: number;

	@Field(() => Int)
	productLikes: number;

	@Field(() => Int)
	productComments: number;

	@Field(() => Int)
	productRank: number;

	@Field(() => [String])
	productImages: string[];

	@Field(() => String, { nullable: true })
	productDesc?: string;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt: Date;

	@Field(() => Date, { nullable: true })
	deletedAt: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	/** from aggregation **/

	@Field(() => Member, { nullable: true })
	memberData?: Member;

	@Field(() => [MeLiked], { nullable: true })
	meLiked?: MeLiked[];
}

@ObjectType()
export class Products {
	@Field(() => [Product])
	list: Product[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
