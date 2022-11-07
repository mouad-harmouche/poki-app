export function getRessource(ressource) {
    return fetch(ressource).then((res) => res.json())
}