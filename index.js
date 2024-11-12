async function getInfo() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2079411bc3msh2feb1716da575b5p105137jsn3d675697a5bf',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.table("results", result)

        return result;

    } catch(e) {
        console.error("DEU ERRO NO FETCH: ", e)
    }
}

async function generateDOM() {
    const main = document.getElementById("mainSection");

    const list = document.createElement("ul");

    const result = await getInfo();
    console.log("aaaaaa", result)

    result.classes.forEach(el => {
        const listItem = document.createElement("li")
        listItem.innerHTML = el;
        list.appendChild(listItem);
    })


    main.appendChild(list);
}

generateDOM()