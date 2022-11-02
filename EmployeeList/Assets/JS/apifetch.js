let apiData;

fetch('https://reqres.in/api/users')
.then(res => { return res.json()})
.then(data => {apiData = data})
.finally(() => {
    apiData.data.forEach(element => {
        document.querySelector('#mainList').innerHTML += `
        <div>
            <img src="${element.avatar}" alt="">
            <h2>${element.first_name}<span> </span>${element.last_name}</h2>
            <p>${element.email}</p>
        </div>`
    });
})

