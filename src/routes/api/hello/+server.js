export function GET(request) {
	const name = request.url.searchParams.get('name') || 'World';
	return new Response(`Hello ${name}!`);
}
