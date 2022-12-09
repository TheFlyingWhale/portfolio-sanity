export default {
	name: "imageDocument",
	title: "Image",
	type: "document",
	options: {
		hotspot: true,
	},
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
			name: "slug",
			title: "Image slug",
			type: "slug",
			options: {
				source: "title",
			},
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "text",
			title: "text",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
		{
			name: "withBorderRadius",
			title: "With border radius",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "withShadow",
			title: "With shadow",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "caption",
			title: "Caption",
			type: "string",
		},
		{
			name: "displayCaption",
			title: "Display caption",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "align",
			title: "Align",
			type: "string",
		},
		{
			name: "width",
			title: "Width",
			type: "number",
		},
		{
			name: "height",
			title: "Height",
			type: "number",
		},
	],
};
