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
			name: "fixedColumns",
			title: "fixedColumns",
			type: "number",
			validation: (Rule) => Rule.max(6),
		},
		{
			name: "imageCollection",
			title: "Collection",
			type: "array",
			of: [{ type: "imageElement" }],
			validation: (Rule) => Rule.min(2),
		},
	],
};
