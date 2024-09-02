import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import TestModuleService from "../../../modules/test/service";
import { TEST_MODULE } from "../../../modules/test";

export async function GET(
	req: MedusaRequest,
	res: MedusaResponse
): Promise<void> {
	const testModuleService: TestModuleService = req.scope.resolve(TEST_MODULE);

	res.json({
		message: testModuleService.getMessage(),
	});
}
