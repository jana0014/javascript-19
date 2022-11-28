async function getUser() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
    if (!response.ok) {
        console.log('Error' + response.statusText)
        return
    }

    const data = await response.json()
    generateUserData(data)
}

function generateUserData(data) {
    const userName = document.getElementById('name')
    const userEmail = document.getElementById('email')
    const userWorkplace = document.getElementById('workplace')
    const userWebsite = document.getElementById('website')
    const userAddress = document.getElementById('address')
    userName.innerText = data.name
    userEmail.innerText = data.email
    userWorkplace.innerText = data.company.name
    userWebsite.innerText = data.website 
    userAddress.innerText = (`${data.address.street}-${data.address.city}-${data.address.zipcode}`)
}

getUser()
