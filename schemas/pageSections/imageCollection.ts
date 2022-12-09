export default {
	name: "imageCollection",
	title: "Image collection",
	type: "object",
	fields: [
		{
			name: "ignoreBreakpoints",
			title: "Ignore breakpoints",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "imageCollection",
			title: "Collection",
			type: "array",
			of: [{ type: "imageElement" }],
			validation: (Rule) => Rule.min(2).max(6),
		},
	],
};
