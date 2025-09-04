/*async function call(){

either we pass directly latitude , longitude and API key value in the api link  like down below or the other method declareing through varriables


    let wheather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=30.67995000&lon=76.72211000&appid=24eb8166b8ac48112f93ce58abc0d687')
    let obj = await wheather.json()
    console.log(obj)
}
call()*/
// in this method we will use backtick instead of single quotes to treat some  varriables




let input = document.querySelector('.input')

input.addEventListener('input', function () {
    
   
    async function call() {
    

        try{
    let store = input.value.trim()
     let city = store
    let apiKey = '24eb8166b8ac48112f93ce58abc0d687'
    let wheather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

    let obj = await wheather.json()
    console.log(obj)


    let nam = document.querySelector('.name')
    nam.textContent = `Location: ${obj.name}`

    let wind = document.querySelector('.wind')
    wind.textContent = (`Wind: ${(obj.wind.speed * 3.6).toFixed(2)} Km/h`)


    let humidity = document.querySelector('.humidity')
    humidity.textContent = `Humidity: ${obj.main.humidity}%`

    let temprature = document.querySelector('.temp')
    temprature.textContent = `Temprature: ${obj.main.temp}℃`

    let time = document.querySelector('.time')
    time.textContent= new Date()
        }
        catch(err){
            console.log("error"+err)
        }

}
call()
})





