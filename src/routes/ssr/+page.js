// export const ssr = false;
export async function load() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())

}
