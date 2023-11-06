export async function load() {
    return {
        quick: "Sveltekit waits for it before the page is rendered",
        streamed: {

            message: new Promise((resolve, reject) => setTimeout(() => resolve("Slow Data Loaded!"), 3000))
        }
    }
};