import { defineWidgetConfig } from "@medusajs/admin-shared";
import { Container, Heading, Text } from "@medusajs/ui";

// The widget
const ProductWidgetAfter = () => {
	return (
		<Container>
			<Heading>Product Widget</Heading>
			<Text>Custom plugin for product details page</Text>
		</Container>
	);
};

// The widget's configurations
export const config = defineWidgetConfig({
	zone: "product.details.after",
});

export default ProductWidgetAfter;
