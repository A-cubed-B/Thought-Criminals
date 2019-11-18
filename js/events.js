// Arthur Sidle (1911859)

const EVENTDATA = [
    /*
    This is a hard-coded database consisting of an array of arrays for the event data
    
    The data attributed to each entry in the arrays are:
    1. Image
    2. Title
    3. Time
    4. Place
    5. Description
    */
    
    [
        "alex-jones.jpg",
        "Speech: Alex Jones Panel",
        "December 3rd - 14:00",
        "Sir Ian Wood Building - Secret Basement",
        "In this upcoming speech, the greatest conspiracy theorist of all time, Alex Jones, will provide definitive proof that Watergate never actually happened (something much worse was underway) and much, much more."
    ],
    
    [
        "dundee.jpg",
        "Speech: Does Dundee actualy exist?",
        "December 1st - 17:00",
        "Library - 10th Floor",
        "A prominent member will give a speech detailing the proof that the entire city Dundee is actually just a fabrication to hide a major Reptilian base."
    ],
    
    [
        "secret.jpg",
        "Investigation: Is RGU a Reptilian hideout?",
        "November 28th - 3:00",
        "Aberdeen Business School - Room 221",
        "THERE'S A SECRET PANEL IN THE WALL THAT UNHINGES! TONIGHT WE GO DOWN THAT HOLE TO FIND THE TRUTH!"
    ],
    
    [
        "illuminati.jpg",
        "Debate: Does the Illuminati exist?",
        "November 24th - 17:00",
        "Sir Ian Wood Building - N599",
        "This debate night will discuss whether the Illuminati does exist, or if it's theortical existance is actually reptilian a ploy to distract us from the real One World Government. And no, skeptics of the existence of a OWG are not invited."
    ],
    
    [
        "tinfoil-hat.jpg",
        "Workshop: How to make an effective tinfoil hat",
        "November 22nd - 14:00",
        "Gray's School of Art - A random room",
        "This workshop will teach you all about how to make a tinfoil hat sure to ward off those pesky government rays. Learn which areas of the head to apply additional protection on, which brand of tinfoil will work the best, and much more."
    ],
    
    [
        "pyramid.jpg",
        "Speech: Michael Jackson is hiding in the Pyramids",
        "November 20th - 16:00",
        "Aberdeen Business School - B20",
        "We all know Michael Jackson is still alive and in hiding. But shocking new evidence reveals Michael Jackson's new location is indeed the Great Pyramids of Giza. Photographic evidence and more will be presented for the first time at basement floor 20 of the Business School."
    ],
    
    [
        "reptilian.jpg",
        "Workshop: How to identify a reptilian",
        "November 19th - 14:00",
        "Sir Ian Wood Building - Somewhere",
        "The secret about the reptilian army who are the real rulers of the world is known to humans by now, but efforts by the Illuminati seek to supress knowledge of such crucial observations. But not for long! Join us... somewhere in the Sir Ian Wood Building as we teach you all the telltale signs of a reptilian that have been staring us in the face for millenia."
    ],
    
    [
        "mall.jpg",
        "Investigation: Strange signals from Union Square Shopping Centre",
        "November 15th - 3:00",
        "Union Square Shopping Centre",
        "Ahhh, the Union Square Shopping Centre, paradise of consumerism, and secret reptilian hideout? Bizarre electromagnetic signals have been detected coming out of the building at 3:00 AM, and we're going to be getting to bottom this mystery once and for all! Bring your finest infiltration gear!"
    ]
];





function generateEvents(pageNo) {
    for (let i = 0; i < 6; i++) {
        $(".event-list").append(eventContainer(i + ((pageNo - 1) * 6)));
    }
}

function eventContainer(eventNo) {
    let event = EVENTDATA[eventNo];
    let thumbnail = event[0];
    let title = event[1];
    let time = event[2];
    let place = event[3];
    let description = event[4];
    
    return `<div class="event row my-3">
                <!-- Thumbnail -->
                <div class="col-sm-3">
                    <div class="thumbnail" style="background-image: url('img/events/${thumbnail}')"></div>    
                </div>
                <!-- Title + Description -->
                <div class="event-text col-sm-9">
                    <h2>${title}</h2>
                    <div class="info">
                        <img src="img/events/clock-circular-outline.svg" class="info-icon">
                        <div class="info-text d-inline-block">${time}</div>
                    </div>
                    <div class="info">
                        <img src="img/events/home.svg" class="info-icon">
                        <div class="info-text d-inline-block">${place}</div>
                    </div>
                    <p>${description}</p>
                </div>
            </div>`;
} 