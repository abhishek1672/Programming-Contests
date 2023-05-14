let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    
    for (item in contests) {
        images = ['image1.jfif', 'image4.jfif', 'image7.jfif', 'image8.jfif', 'image3.jfif', 'image6.jfif', 'image2.jpg', 'image5.jpg','image9.jfif','image10.jfif'];
        // console.log(contests[item])
        ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                               <img src="./images/${images[Math.floor(Math.random() * images.length)]}" alt="...">

                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Ends at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
    }
    cardContainer.innerHTML = ihtml
})
