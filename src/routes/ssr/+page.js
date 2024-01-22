
export async function load() {
    return await slowData();
}

async function slowData() {
    const startTime = Date.now();
    while (Date.now() - startTime < 3000) {
        // do nothing
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    return { user }
}

