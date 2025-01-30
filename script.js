let currentPage = 1;
const totalPages = 15;
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const backgroundMusic = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music-button');
const pauseMusicButton = document.getElementById('pause-music-button');
const volumeControl = document.getElementById('volume-control');
const audio = document.getElementById("spacemusic");
const playButton = document.getElementById("playButton");
const button = document.querySelector(".next-button");  


function nextPage() {
    const current = document.getElementById(`page-${currentPage}`);
    current.classList.add('hidden');
    button.classList.add('show');
    

    currentPage++;
    if (currentPage > totalPages) {
        currentPage = 1; // Loop back to the start
    }

    const next = document.getElementById(`page-${currentPage}`);
    next.classList.remove('hidden');
    
    updateProgress();
}

function restartStory() {
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${currentPage}`).classList.remove('hidden');
    updateProgress();
}

function updateProgress() {
    const progress = (currentPage / totalPages) * 100;
    progressFill.style.width = `${progress}%`;
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicButton.style.display = 'none';
        pauseMusicButton.style.display = 'inline-block';
    } else {
        backgroundMusic.pause();
        playMusicButton.style.display = 'inline-block';
        pauseMusicButton.style.display = 'none';
    }
}



/* volumeControl.addEventListener('input', (event) => {
    backgroundMusic.volume = event.target.value;
}); */

function makeChoice(choice) {
    switch(choice) {
        case 'choice0':
            showPage(0)
            break;  
        case 'choice1':
            showPage(4);
            break;
        case 'choice2':
            showPage(5);
            break;
        case 'choice3':
            showPage(6);
            break;
        case 'choice4':
            showPage(5);
            break;
        case 'choice5':
            showPage(7);
            break;
        case 'choice6':
            showPage(8);
            break;
        case 'choice7':
            showPage(9);
            break;
        case 'choice8':
            showPage(10);
            break;
        case 'choice9':
            showPage(14);
            break;
        case 'choice10':
            showPage(15);
            break;
        case 'choice11':
            showPage(11);
            break;
        case 'choice12':
            showPage(13);
            break;
        case 'choice13':
            showPage(11);
            break;
        case 'choice14':
            showPage(13);
            break;
         case 'choice15':
            showPage(12);
             break;
        case 'choice16':
            showPage(13);
            break;
        default:
            restartStory();
            break;
    }
}

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
    currentPage = pageNumber;
    updateProgress();
}

/*
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".next-button").style.display = "block!important"; 
    }, 3500); // Matches the typewriter animation duration
});

*/

/* function showNextButton() { 
    document.getElementsByClassName("next-button").style.display = "block"; 
}

setTimeout("showNextButton()", 1000); */


document.addEventListener("DOMContentLoaded", () => {  
    setTimeout(() => {
        button.classList.add("show");
    }, 3500);
});


function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.innerText = "Stop Music"; // Change button text to "Stop Music"
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
        playButton.innerText = "Play Music"; // Change button text back to "Play Music"
    }
}