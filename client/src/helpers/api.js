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
    const url = "//localhost:8000/endpage.php";
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

export function fetchTransition() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/transition.php";
    return fetch(url, requestConfig)
        .then(data => data.json())
}

export function fetchMap() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/map.php";
    return fetch(url, requestConfig)
        .then(data => data.json())
}

export function fetchMapArticle() {
    const requestConfig = {
        method: "GET"
    }
    const url = "//localhost:8000/maparticle.php";
    return fetch(url, requestConfig)
        .then(data => data.json())
}