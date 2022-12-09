export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "order",
			title: "Order (default)",
			type: "number",
			hidden: false,
		},
		{
			name: "active",
			title: "Active",
			type: "boolean",
			description: "Will the project be visible for visitors",
			initialValue: true,
		},
		{
			name: "title",
			title: "Project Title",
			type: "string",
			description:
				"The project title is used when listing projects and in the header for the project page",
		},
		{
			name: "slug",
			title: "Project URL",
			type: "slug",
			options: {
				source: "title",
			},
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
			description:
				'Keywords for what type of project this is e.g: "Graphic design", "UX Design", "Front-end development"',
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			description: "Short project explanation",
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			description: "The cover image is displayed in the project catalog",
		},
		{
			name: "hero",
			title: "Hero",
			type: "hero",
		},
		{
			name: "pageSections",
			title: "Page sections",
			type: "array",
			of: [
				{ type: "imageCollection" },
				{ type: "imageElement" },
				{ type: "textCollection" },
				{ type: "textElement" },
			],
		},
	],
	orderings: [
		{
			title: "Manual order",
			name: "manualOrder",
			by: [{ field: "order", direction: "asc" }],
		},
	],
};
