// Define an object to hold information about drum elements
// Defining Types Of Drum Elements Available
let data = {
    'A': {
        name: 'Clap',
        sound: 'sounds/clap.wav',
    },
    'S': {
        name: 'HiHat',
        sound: 'sounds/hihat.wav'
    },
    'D': {
        name: 'Kick',
        sound: 'sounds/kick.wav'
    },
    'F': {
        name: 'OpenHat',
        sound: 'sounds/openhat.wav'
    },
    'G': {
        name: 'Boom',
        sound: 'sounds/boom.wav'
    },
    'H': {
        name: 'Ride',
        sound: 'sounds/ride.wav'
    },
    'J': {
        name: 'Snare',
        sound: 'sounds/snare.wav'
    },
    'K': {
        name: 'Tom',
        sound: 'sounds/tom.wav'
    },
    'L': {
        name: 'Tink',
        sound: 'sounds/tink.wav'
    }
};


// Get the drumkit element from the DOM
let drumkit = document.getElementById("drumkit");

// Create HTML elements for each drum element and add them to the DOM
function construct() {
    for (let key in data) {
        let drumElement = document.createElement('div');
        drumElement.classList.add('element', data[key].name);
        let h2 = document.createElement('h2');
        h2.textContent = key;

        let span = document.createElement('span');
        span.textContent = data[key].name;

        drumElement.appendChild(h2);
        drumElement.append(span);
        drumkit.appendChild(drumElement);

        // Add event listener to play the sound corresponding to the clicked drum element
        drumElement.addEventListener('click', function (event) {
            let key = event.currentTarget.querySelector('h2').textContent;
            playDrum(key.toUpperCase());
        });
    }
}



function playDrum(key){
if(data.hasOwnProperty(key)){

    drumElement= document.querySelector('.element.' + data[key].name)
    drumElement.classList.add('active');
    let audio = new Audio();
    audio.src= data[key].sound;
    audio.play();

    // Remove Active class
    audio.addEventListener('timeupdate', function(){
    if(audio.currentTime >= audio.duration /32){

        drumElement.classList.remove('active');
        audio.removeEventListener('timeupdate', arguments.callee);
    }
    })

}
else{
    console.log(
        "OOPS!\nIt looks like you've pressed a key that isn't defined.\nCould you please try again with a valid key?\nThank you!"
    );
    setTimeout(function () {
        console.clear();
    }, 10000);
}

}

function keyEvents(event) {
    playDrum(event.key.toUpperCase());
}

// Listen for any key press events and call keyEvents function to handle the key press
window.addEventListener('keydown', keyEvents);

construct();