
// Append one or more children element to a parent element
export function appendChildren(parent, ...children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

// Create one or more elements of the same defined type
export function createMultipleElements(elemType, count) {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(document.createElement(`${elemType}`));
    }
    return result;
}
