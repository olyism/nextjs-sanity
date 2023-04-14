export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'slug',
			type: 'string',
			title: 'Slug',
			description: 'A slug is the web page\'s address (e.g. example.com/slug)'
		},
		{
			name: 'content',
			type: 'array',
			title: 'Content',
			of: [
				{
					type: 'block'
				},
				{
					type: 'image'
				}
			]
		}
	]
}