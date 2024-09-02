import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
import { IProductModuleService } from "@medusajs/types";
import { ModuleRegistrationName } from "@medusajs/utils";

// subscriber function
export default async function productCreateHandler({
	event,
	container,
	pluginOptions,
}: SubscriberArgs<{ id: string }>) {
	const productId = event.data.id;
	console.log(`Event Name: `, event.name);
	console.log(`Event Data: `, event.data);
	console.log(`The product ${productId} was created`, { event });

	const productService: IProductModuleService = container.resolve(
		ModuleRegistrationName.PRODUCT
	);
	const product = await productService.retrieveProduct(productId);
	console.log("createdProduct", product);
}

// subscriber config
export const config: SubscriberConfig = {
	event: "product.created",
};
