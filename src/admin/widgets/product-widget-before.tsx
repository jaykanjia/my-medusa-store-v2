import { defineWidgetConfig } from "@medusajs/admin-shared";
import { Container, Heading, Text } from "@medusajs/ui";

// The widget
const ProductWidgetBefore = ({ data }) => {
	return (
		<Container>
			<Heading>Product Widget</Heading>
			<Text>Custom plugin for product details page</Text>
			<div className="flex flex-col gap-2 py-6">
				<span>ID: {data.id}</span>
				<span>Title: {data.title}</span>
				<span>Handle: {data.handle}</span>
			</div>
		</Container>
	);
};

// The widget's configurations
export const config = defineWidgetConfig({
	zone: "product.details.before",
});

export default ProductWidgetBefore;
