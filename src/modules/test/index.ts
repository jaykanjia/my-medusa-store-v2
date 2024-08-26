import TestModuleService from "./service";
import { Module } from "@medusajs/utils";

export const TEST_MODULE = "testModuleService";

export default Module(TEST_MODULE, {
	service: TestModuleService,
});
