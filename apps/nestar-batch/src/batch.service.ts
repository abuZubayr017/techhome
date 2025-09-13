import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from 'apps/nestar-api/src/libs/dto/member/member';
import { Product } from 'apps/nestar-api/src/libs/dto/product/product';
import { MemberStatus, MemberType } from 'apps/nestar-api/src/libs/enums/member.enum';
import { ProductStatus } from 'apps/nestar-api/src/libs/enums/product.enum';
import { Model } from 'mongoose';

@Injectable()
export class BatchService {
	constructor(
		@InjectModel('Product') private readonly productModel: Model<Product>,
		@InjectModel('Member') private readonly memberModel: Model<Member>,
	) {}

	public async batchRollback(): Promise<void> {
		await this.productModel
			.updateMany(
				{
					productStatus: ProductStatus.ACTIVE,
				},
				{ productRank: 0 },
			)
			.exec();
	}

	public async batchTopProducts(): Promise<void> {
		const products: Product[] = await this.productModel
			.find({
				productStatus: ProductStatus.ACTIVE,
				productRank: 0,
			})
			.exec();

		const promisedList = products.map(async (ele: Product) => {
			const { _id, productLikes, productViews } = ele;
			const rank = productLikes * 2 + productViews * 1;
			return await this.productModel.findByIdAndUpdate(_id, { productRank: rank });
		});
		await Promise.all(promisedList);
	}

	public getHello(): string {
		return 'Welcome to NESTAR_BATCH!';
	}
}
