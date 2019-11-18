// Arthur Sidle (1911859)

const IMAGEDATA = [
    /*
    This is a hard-coded database consisting of an array of arrays for the gallery images
    
    The data attributed to each entry in the arrays are:
    0: Image URL
    1: Image title
    2: Alt text
    */
    
    ["imagesqtbnANd9GcQaZDaFlE3bxLM85dzG3MMg0FQsjyqixRr06dTpSGLRjHqowTJnQs.jpg","Who are these people?","Mysterious people in fog"],
    
    ["imagesqtbnANd9GcQdsaCX4LeLOHP_7JIaZRD6F23M6fGiCmLH5q8Lb9FjIf6J6p3wgs.jpg","The truth is out there!","Collage of conspiratorial images"],
    
    ["imagesqtbnANd9GcQLpnKhej7nVd5q2FNw7jc9u9tjm7KKiYa40r2bqHzEnaaLxxELyws.jpg","Truth protest","Sign in street reading \"9/11 was an inside job\""],
    
    ["imagesqtbnANd9GcQnFTADBDl6D_Dy5CmDCn5UdMBtp8jWG7WhEzznrRoSXsNBHIKIs.jpg","Real image of the Earth","Picture of flat Earth"],
    ["imagesqtbnANd9GcQpGQFTF3bLnqSa9YVv8y_2CkUcWL5J6milt5WvDwboZE98PVztgs.jpg","Essential headgear","Person wearing a tinfoil hat"],
    
    ["imagesqtbnANd9GcQuKmkLScCeCLf_mZjIN1srDklpOn7ArnDLkCFsIVuzhZDVIRvs.jpg","World's biggest fabrication","Apollo 11 moon landing"],

    ["6d5c0cbc-65ca-483a-89ae-1422e0feac7e-medium16x9_Conspiracytheories.png","The world is awakening!","How many Americans agree? 60% JFK Assassination, 25% Birther, 25% Truther, 21% Roswell, 20% Vaccines, 9% Fluoride, 6% Moon landing, 5% Chem-trails, 4% Reptilian"],
    ["imagesqtbnANd9GcR5xOk5GvvmOk6QHNNnJR0_dol_poBaHuCjrQXMBlTGxGEA769aKgs.jpg","Chemtrails in action","Planes leaving behind co2, although it's really chemtrails"],
    
    ["imagesqtbnANd9GcR6oB39eVfQc220csUufYbLGqkVW97jaG6uLYVNkpmxdqUfxmcLQs.jpg","Our biggest enemy!","Illuminati logo"],
    
    ["imagesqtbnANd9GcRq3HQHmBTPDNPYWZn0ayau7bjwFtPTug9sWtgtyqXTfRujl0bows.jpg","Rare photo of lizard people","Celebrities with their true lizard faces"],
    ["imagesqtbnANd9GcRQj8D6P8BbUpXisp7rKHKLQfbHQdzfl6bkkdSakmlj0ESOA0HFs.jpg","Brainwashed masses","People looking onward, only one looking away"],
    ["imagesqtbnANd9GcRU4Sjsozg5Am0cJJbWdWWxDxHlpknT7XGp9VnLjIhTHr3cN73XMgs.jpg","Essential door decoration","Sign that says \"Cation: Conspiracy Theory Ahead"],

    ["imagesqtbnANd9GcRwQDGN42XoEmgpqJ3awbe12FqOjMw8c6CxbyP4SNc9kemZjJs.jpg","Each MAGA hat loaded with tinfoil!","MAGA hat with tinfoil on top, with 1s and 0s in the background"],

    ["20180406-d4HT50gLbp7VynAK05l0.png","Abduction witness illustration","Person being abducted by UFO"],
    
    ["imagesqtbnANd9GcSAQ8xl_a0AOP5MpKSSfUmtvYosOyWn2vQoctvgDiCrGiIZbNIs.jpg","Theorising in action","Collage of words with a maginfying glass highlighting the word \"conspiracy\""],
    
    ["imagesqtbnANd9GcSq5F2RsJLLjLXy4v7jgTTf_eReICqtcEtJlLgpsqLtUzUIN2YQws.jpg","Under influence","Silouhette of man with Illuminati logo in background"],
    
    ["imagesqtbnANd9GcSUN9eciLP9N9sH5XLbGmPgJCT8hZFq2Yxa_t2CP7K2oZZZXXxcQs.jpg","Trying to break free","Yellow Illuminati logo surrounded by conspiratorial images"],
    
    ["imagesqtbnANd9GcSXgH4aPEZaITCXVsgCMiL6LukKXfOmIlGz2CpyQjgJ6MCYAd3s.jpg","Leaked photo of JFK assassin","Crosshairs pointing at John F. Kennedy's car"],

    ["imagesqtbnANd9GcT4JhVRAtkO_waFxZTBteqU1pwk7D3_KiHVTe8TZC6Wkd0N8vQs.jpg","CNN mad","CNN reporting on Trump's supposedly false claims"],
    
    ["imagesqtbnANd9GcTEuClGjqm5Bcod7kAdn923xEPuxSNrwbpOm7A9XlITLw1AXeQs.jpg","Facebook = Illuminati","Facebook logo on a monitor surrounded by programming code"],
    ["imagesqtbnANd9GcTfHxLZs8u6kQGK0l3NlC9SDRxf8Gtmt0BHn1H3ZZXiz0gq2624kws.jpg","Designer hat","Advert for fancy tinfoil hat"],
    
    ["imagesqtbnANd9GcTfrFtP6mllsuVWxzYTvs8NMUB2VdPpaEOkioVY9I_J53Hl04ZKs.jpg","Russia doing their part","List of conspiracy theories prevalent in Russia"],
    ["imagesqtbnANd9GcTJ6UNERAuneVPj3j1Pu05Y8jzQxMbk2DTt3DraQf82cyP6DtyoAs.jpg","\"Innocent\" strangers","Man sitting on a bench next to an alien"],

    ["imagesqtbnANd9GcTMCuJRr4zzlDtUJdoqfI21GB5ffUhRhJOhpdBk6owbQQM1sGs.jpg","Hard night's work","Man talking to his wife in bed about a fourth Epstein theory with connecting strings layed out accross the room"],
    
    ["imagesqtbnANd9GcTqpni4Q6HRrWcLGcxRqdYPdaM9vMHL3GdFU7p6fWIkuiU0pes.jpg","Wholesome graffiti","Graffiti saying \"9/11 was a inside job!\""]
];





// This function generates the gallery automatically.
// The page argument determines what set of images will be generated
function generatePage(page) {
    for (let i = 0; i < 16; i++) {
        var pageNo = (page - 1) * 16 + i;
        var $gImage = $(".g-image").eq(i);
        $gImage.append(imageCard(pageNo));
        $gImage.attr("onclick","showCarousel(" + i + ")");
        $gImage.addClass("g-image-hoverable");
        
        $(".carousel-indicators").append(carouselIndicator(i));
        $(".carousel-inner").append(carouselImage(pageNo));
    }
}


// This uses template literals to return a gallery image container with the relevant details from the database
function imageCard(imageSrc) {
    var thumbnail = IMAGEDATA[imageSrc][0];
    var title = IMAGEDATA[imageSrc][1];
    return `<div class="rounded">
                <div class="img-wrapper" style="background-image:url('img/gallery/${thumbnail}')">
                </div>
                <div class="image-text bg-colour-1">
                    <h6>${title}</h6>
                </div>
            </div>`;
}

// This automatically generates indicators for the carousel
function carouselIndicator(imageNo) {
    return `<li data-target="#demo" data-slide-to="${imageNo}"></li>`;
}

// This automatically generates the images on the over-screen carosel that shows when you click on an image
function carouselImage(imageSrc) {
    var isActive = (imageSrc % 16 === 0) ? "active" : "";
    var image = IMAGEDATA[imageSrc][0];
    var altText = IMAGEDATA[imageSrc][2];
    return `<div class="carousel-item ${isActive} h-100">
                <img src="img/gallery/${image}" alt="${altText}">
            </div>`
}

// This shows the over-screen carousel when you click on an image
function showCarousel(page) {
    $(".carousel").removeClass("d-none");
    $(".carousel-item").removeClass("active");
    $(".carousel-item").eq(page).addClass("active");
}

// Hides the over-screen carousel
function hideCarousel() {
    $(".carousel").addClass("d-none");
}