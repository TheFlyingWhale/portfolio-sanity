export default {
	name: "educationSection",
	title: "Education Section",
	type: "object",
	description: "A place/source of education",
	fields: [
		{
			name: "subject",
			title: "Subject",
			type: "string",
		},
		{
			name: "degree",
			title: "Degree",
			type: "string",
		},
		{
			name: "school",
			title: "School/source",
			type: "string",
		},
		{
			name: "startDate",
			title: "Start date",
			type: "date",
		},
		{
			name: "endDate",
			title: "End date",
			type: "date",
		},
	],
};
