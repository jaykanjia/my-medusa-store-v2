import { defineWidgetConfig } from "@medusajs/admin-shared";
import { Container, Heading, Text } from "@medusajs/ui";

// The widget
const ProductListWidgetBefore = (props) => {
	console.log({ props });

	return (
		<Container>
			<Heading>Product List Widget</Heading>
			<Text>Custom plugin for product details page</Text>
		</Container>
	);
};

// The widget's configurations
export const config = defineWidgetConfig({
	zone: "product.list.before",
});

export default ProductListWidgetBefore;
