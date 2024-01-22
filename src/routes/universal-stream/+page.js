export async function load() {
    return {
        user: fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
        streamed: {

            message: new Promise((resolve, reject) => setTimeout(() => resolve(fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())), 3000)),

        }
    }
};
