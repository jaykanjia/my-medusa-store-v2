import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { IProductModuleService } from "@medusajs/types";
import { ModuleRegistrationName } from "@medusajs/utils";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
	const productModuleService: IProductModuleService = req.scope.resolve(
		ModuleRegistrationName.PRODUCT
	);

	const [products, count] = await productModuleService.listAndCountProducts();

	res.json({
		products,
		count,
	});
};
