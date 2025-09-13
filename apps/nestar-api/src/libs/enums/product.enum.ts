import { registerEnumType } from '@nestjs/graphql';

export enum ProductType {
	PHONE = 'PHONE',
	COMPUTER = 'COMPUTER',
	WATCH = 'WATCH',
}
registerEnumType(ProductType, {
	name: 'ProductType',
});

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

export enum ProductBrand {
	APPLE = 'APPLE',
	SAMSUNG = 'SAMSUNG',
	XIAOMI = 'XIAOMI',
	HONOR = 'HONOR',
	GOOGLE = 'GOOGLE',
	TOSHIBA = 'TOSHIBA',
	HP = 'HP',
	LENOVO = 'LENOVO',
	ACER = 'ACER',
}
registerEnumType(ProductBrand, {
	name: "ProductBrand"
})
