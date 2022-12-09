export default {
	name: "aboutSection",
	title: "About Section",
	type: "document",
	description:
		"The about section is where i provide relevant information about myself",
	fields: [
		{
			name: "title",
			title: "Title",
			description: "The about sections title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			description: "A couple of paragraphs about myself",
			type: "text",
		},
		{
			name: "educationSections",
			title: "Educations sections",
			type: "array",
			of: [{ type: "educationSection" }],
		},
		{
			name: "profilePicture",
			title: "Profile picture",
			description: "Smile to the camera",
			type: "image",
		},
	],
};
