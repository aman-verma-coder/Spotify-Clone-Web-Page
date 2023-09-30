let playedSong = document.querySelector("#played__song");
let chaleyaAudio = document.querySelector("#chaleya-jawan-song");
let heeriyeAudio = document.querySelector("#heeriye-song");
let kuleyKuleyAudio = document.querySelector("#kuley-kuley-song");
let chaleyaPlayButton = document.querySelector("#chaleya-jawan");
let heeriyePlayButton = document.querySelector("#heeriye");
let kuleyKuleyPlayButton = document.querySelector("#kuley-kuley");
let playPause = document.querySelector("#play_pause");
let songDetails = document.querySelector("#played_song");
chaleyaPlayButton.addEventListener("click", () => {
    let songData = playedSong.innerHTML = `<audio src="/assets/Chaleya_320(PagalWorld.com.se).mp3" autoplay id="played__song"></audio>`;
    songDetails.innerHTML = `            <div class="album" id="played_song">
    <img src="/assets/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg" alt="#" class="song-image">
    <div class="song-detais">
        <p class="song-name">Chaleya</p>
        <p class="singer-name">Arijit Singh, Shilpa Rao</p>
    </div>
    <img src="/Homework Assets/album_icon1.png" alt="#" class="song-icon1">
    <img src="/Homework Assets/album_icon2.png" alt="#" class="song-icon2">
</div>`;
})
heeriyePlayButton.addEventListener("click", () => {
    let songData = playedSong.innerHTML = `<audio src="/assets/Heeriye-Heeriye-Aa(PaglaSongs).mp3" autoplay id="played__song"></audio>`;
    songDetails.innerHTML = `            <div class="album" id="played_song">
    <img src="/assets/Heeriye.jpeg" alt="#" class="song-image">
    <div class="song-detais">
        <p class="song-name">Heeriye</p>
        <p class="singer-name">Arijit Singh, Dulquer Salman</p>
    </div>
    <img src="/Homework Assets/album_icon1.png" alt="#" class="song-icon1">
    <img src="/Homework Assets/album_icon2.png" alt="#" class="song-icon2">
</div>`;
})
kuleyKuleyPlayButton.addEventListener("click", () => {
    let songData = playedSong.innerHTML = `<audio src="/assets/Kuley Kuley Honey 3.0 128 Kbps.mp3" autoplay id="played__song"></audio>`;
    songDetails.innerHTML = `            <div class="album" id="played_song">
    <img src="/assets/Kuley-Kuley-From-Honey-3-0-Punjabi-2023-20230914113553-500x500.jpg" alt="#" class="song-image">
    <div class="song-detais">
        <p class="song-name">Kuley Kuley</p>
        <p class="singer-name">Yo Yo Honey Singh</p>
    </div>
    <img src="/Homework Assets/album_icon1.png" alt="#" class="song-icon1">
    <img src="/Homework Assets/album_icon2.png" alt="#" class="song-icon2">
</div>`;
})
playPause.addEventListener("click", () => {
    pauseSong(playedSong);
    playPause.addEventListener("click", () => {
        playSong();
    })
})
function pauseSong(playedSong) {
    playedSong.innerHTML = `<audio src="" id="played__song"></audio>`;
}
function playSong() {
    playedSong.innerHTML = `${songData}`;
}