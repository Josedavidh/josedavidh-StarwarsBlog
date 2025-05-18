
const URL_BASE = "https://www.swapi.tech/api";

export const getCharacter = async () => {
    try {
        const response = await fetch(`${URL_BASE}/people`);
        const data = await response.json();

        if (response.ok) {
            const charactersWithDetails = await Promise.all(
                data.results.map(async (item) => {
                    const detail = await fetch(item.url)
                    const detailData = await detail.json()
                    detailData.result["image"] = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`
                    detailData.result["group"] = "people"
                    return detailData.result
                })
            )
            return charactersWithDetails
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPlanet = async () => {
    try {
        const response = await fetch(`${URL_BASE}/planets`);
        const data = await response.json();

        if (response.ok) {
            const detailOfPlanet = await Promise.all(
                data.results.map(async (item) => {
                    const detail = await fetch(item.url)
                    const detailData = await detail.json()
                    detailData.result["image"]= `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`
                    detailData.result["group"]= "planets"
                    return detailData.result

                })
            )
            return detailOfPlanet
        }

    } catch (error) {
        console.log(error);
    }

}