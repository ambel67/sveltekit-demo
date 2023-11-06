// export const ssr = false;

export async function load() {
    return {
        quick: "Sveltekit waits for it before the page is rendered on the server (no JS needed!)",
        users: fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
        streamed: {

            message: new Promise((resolve, reject) => setTimeout(() => resolve("Slow Data Loaded with async JS!"), 3000)),

        }
    }
};