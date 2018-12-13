export function fetchData() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/";
    return fetch(url, requestConfig)
        .then(data => data.json())

}