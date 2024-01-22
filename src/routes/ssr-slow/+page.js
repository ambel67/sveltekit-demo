// export const ssr = false;
export async function load() {
    return {
        user: new Promise((resolve, reject) =>
            setTimeout(() =>
                resolve(
                    fetch("https://jsonplaceholder.typicode.com/users/1")
                        .then(res => res.json())),
                3000))
    }
}
