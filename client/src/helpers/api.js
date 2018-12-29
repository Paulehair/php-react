export function fetchData() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/";
    return fetch(url, requestConfig)
        .then(data => data.json())

}

export function fetchEndpoint() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/endpoint.php";
    return fetch(url, requestConfig)
        .then(data => data.json())

}

export function fetchGlobalPart() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/globalpart.php";
    return fetch(url, requestConfig)
        .then(data => data.json())

}