export default {
	name: "textElement",
	title: "Text",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "includeTitle",
			title: "Include title",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "body",
			title: "Body",
			type: "text",
		},
		{
			name: "align",
			title: "Align",
			type: "string",
		},
	],
};
