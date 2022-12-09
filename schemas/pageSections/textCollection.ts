export default {
	name: "textCollection",
	title: "Text collection",
	type: "object",
	fields: [
		{
			name: "textCollection",
			title: "Collection",
			type: "array",
			of: [{ type: "textElement" }],
			validation: (Rule) => Rule.min(2).max(6),
		},
	],
};
