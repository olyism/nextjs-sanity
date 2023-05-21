const slugify = (input: string): string => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)

export default slugify
