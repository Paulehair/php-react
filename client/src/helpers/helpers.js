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
