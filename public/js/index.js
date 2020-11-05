let weaTherData = document.querySelector('#forJs')
let datas = document.querySelector('#loc')

 const elementStrings = {
    loader: 'loader'
};

 const renderLoader = () => {
    const loader = `
        <div class="${elementStrings.loader}">
         <img src="/image/load.png" alt="">
            
        </div>
    `;
    document.querySelector('#loading').insertAdjacentHTML('afterbegin', loader);
};

 const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};

document.querySelector('#valuess').addEventListener('submit', (e) => {
    e.preventDefault()
    const searchLoc = datas.value
    // console.log(searchLoc)
    weaTherData.innerHTML = ''
    renderLoader()
    fetch(`/weather?place=${searchLoc}`)
    .then(response => {
        response.json()
            .then(data => {
            clearLoader()
                const markup = `
                
                            <div
                                class="col-md-6 my-3 text-left">
                                <h6 class="text-white lead">
                                    ${data.location}</h6>
                                <h5 class="text-white">
                                    TEMP<small
                                        class="ml-5">${data.forecastData.temperature}°C</small>
                                </h5>
                                <h5 class="text-white">SKY
                                    <small
                                        class="ml-5">${data.forecastData.sky}</small>
                                </h5>
                                <h5 class="text-white">
                                    UVI<small
                                        class="ml-5">${data.forecastData.uvIndex}</small>
                                </h5>
                                <h5 class="text-white">
                                    WIND<small
                                        class="ml-5">${data.forecastData.winSpeed}
                                        KM/H</small> </h5>
                            </div>
                            <div
                                class="col-md-6 my-3 text-left">
                                <h5 class="text-white">
                                    HUMIDITY <small
                                        class="ml-5">${data.forecastData.humid}%</small>
                                </h5>
                                <h5 class="text-white">FEELS
                                    LIKE <small
                                        class="ml-5">${data.forecastData.feelLike}°C</small>
                                </h5>
                                <h5 class="text-white">
                                    PRESSURE <small
                                        class="ml-5">${data.forecastData.pressure}
                                        Mb</small></h4>
                                    <h5 class="text-white">
                                        VISIBLITY <small
                                            class="ml-5">
                                            ${data.forecastData.visisble}m</small>
                                    </h5>
                            </div>
                        
                `;
                weaTherData.insertAdjacentHTML('afterbegin', markup)
    })
    })

})


    