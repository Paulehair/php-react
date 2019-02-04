export function parseToNumber(index) {
    let indexToNumber = parseInt(index, 10);
    return indexToNumber;
}

export function pushHistory(component, slug) {
    component.props.history.push(`/` + slug);
}

export function setIndex(component, indexToNumber) {
    component.props.dataFromApp.setIndex(indexToNumber);
}

export function setStorage(key , value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key){
    const getItem = localStorage.getItem(key);
    return JSON.parse(getItem);
}
