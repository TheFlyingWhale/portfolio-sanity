export default {
	name: "hero",
	title: "Hero",
	type: "object",
	description: "Heros are whats displayed at the top of a project page",
	fields: [
		{
			name: "header",
			title: "Header",
			type: "string",
		},
		{
			name: "subheader",
			title: "Subheader",
			type: "string",
		},
		{
			name: "text",
			title: "Text",
			type: "text",
		},
		{
			name: "image",
			title: "Image",
			type: "imageElement",
		},
	],
};
