const pro = new Promise((resolve, reject) => {
    let success=true
    if(success){
        resolve("data received successfully")
    }else{
        reject("error fetching data")
    }

})
pro.then((data) => console.log(data))
    .catch((error) => console.log(error))

async function fetchData() {
    try{
        const r=await fetch ("https://jsonplaceholder.typicode.com/users")
        const data=await r.json()
        data.map((user) => console.log(user.email))
        data.map((user) => console.log(user.address.city))
    }catch(error)
    {
        console.log(error)
    }
}
fetchData()
