let getApi = () =>{
    fetch('https://api.randomuser.me/?results=10')
    .then(res => res.json())
    .then(data => {
        data.results.map(item =>{
            const html = document.querySelector('tbody')
            html.insertAdjacentHTML('beforeend', `<tr>
            <td>
                ${item.name.first}
            </td>
            <td>
                ${item.name.last}
            </td>
            <td>
                ${item.dob.age}
            </td>
            <td>
                ${item.location.city}
            </td>
            <td>
                <img src="${item.picture.medium}">
            </td>
        </tr>`)
        })
    })
}
getApi()