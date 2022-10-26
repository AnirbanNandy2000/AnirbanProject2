function changeMode()
    {
        let mybody=document.body;
        mybody.classList.toggle('dark-mode')
    }
function loadCoupon()
{
    document.getElementById('coupon').style.visibility='visible';
}
function closeCoupon()
{
    document.getElementById('coupon').style.visibility='hidden';
}
// let x=document.getElementById('out');
// let y=document.getElementById('weatherOut');
// function geolocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         x.innerText="Geo Not supported"
//     }
// }
// function showPosition(data){
//     console.log(data)
//     let lat=data.coords.latitude;
//     let long=data.coords.longitude;
//     x.innerText=`Latitude is ${lat} and Longitude is ${long}`
//     const url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
//     fetch(url,{method: 'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         let cityName = data.city.name;
//         let temp = data.list[0].temp.day;
//         y.innerText = `Your city is ${cityName} & temp is ${temp} °C`
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }
