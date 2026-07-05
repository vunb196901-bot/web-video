// ==========================================
// 1. TÍNH NĂNG ẨN / HIỆN DANH SÁCH (PLAYLIST)
// ==========================================
const toggleBtn = document.getElementById('toggle-btn');
const playlistContainer = document.getElementById('playlist-container');

toggleBtn.addEventListener('click', function() {
    if (playlistContainer.style.display === '' || playlistContainer.style.display === 'block') {
        playlistContainer.style.display = 'none';
    } else {
        playlistContainer.style.display = 'block';
    }
});

// ==========================================
// 2. HÀM PHÁT VIDEO KHI BẤM NÚT CLIPS
// ==========================================
function playVideo(videoSrc, element) {
    var videoPlayer = document.getElementById('main-video');
    videoPlayer.src = videoSrc;
    videoPlayer.play();

    var buttons = document.querySelectorAll('.playlist-btn');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = '#007bff';
    });

    if (element) {
        element.style.backgroundColor = '#ff5722';
    }
}

// ==========================================
// 3. TÍNH NĂNG STICKY NAVBAR (THANH TIÊU ĐỀ DÍNH)
// ==========================================
const navbar = document.getElementById('navbar');
const stickyPosition = navbar.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > stickyPosition) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});