export function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

export function createMultipleElements(elemType, count) {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(document.createElement(`${elemType}`));
    }
    return result;
}
