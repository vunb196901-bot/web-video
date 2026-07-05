// 1. TÌM CÁC PHẦN TỬ TRÊN GIAO DIỆN
const videoPlayer = document.getElementById('main-video');
const playlistContainer = document.getElementById('playlist-container');
const toggleBtn = document.getElementById('toggle-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const navbar = document.getElementById('navbar');
const stickyPosition = navbar.offsetTop;

// ==========================================
// 2. KHỞI TẠO TRẠNG THÁI TỪ BỘ NHỚ TRÌNH DUYỆT (LOCALSTORAGE)
// ==========================================

// Kiểm tra xem lần trước người dùng có bật Dark Mode không
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeBtn.innerHTML = "Chế độ ban ngày ☀️";
}

// Kiểm tra xem lần trước người dùng đang xem video nào
const savedVideoSrc = localStorage.getItem('currentVideoSrc');
const savedVideoText = localStorage.getItem('currentVideoText');

if (savedVideoSrc) {
    // Nếu có lưu, đổi nguồn video sang video đó
    videoPlayer.src = savedVideoSrc;
    // Tìm và đổi màu nút bấm tương ứng thành màu cam
    setTimeout(() => {
        const buttons = document.querySelectorAll('.playlist-btn');
        buttons.forEach(btn => {
            if (btn.innerText === savedVideoText) {
                btn.style.backgroundColor = '#ff5722';
            } else {
                btn.style.backgroundColor = '';
            }
        });
    }, 100);
}

// ==========================================
// 3. CÁC HÀM XỬ LÝ SỰ KIỆN (LOGIC CHÍNH)
// ==========================================

// Hàm phát video khi người dùng bấm nút
function playVideo(videoSrc, button) {
    // Đổi nguồn video và phát
    videoPlayer.src = videoSrc;
    videoPlayer.play();
    
    // Reset màu tất cả các nút về màu xanh mặc định
    const buttons = document.querySelectorAll('.playlist-btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = ''; 
    });
    
    // Đổi nút đang được bấm sang màu cam
    button.style.backgroundColor = '#ff5722';

    // LƯU VÀO LOCALSTORAGE: Nhớ video đang xem dở
    localStorage.setItem('currentVideoSrc', videoSrc);
    localStorage.setItem('currentVideoText', button.innerText);
}

// Logic Ẩn / Hiện danh sách phát
toggleBtn.addEventListener('click', function() {
    if (playlistContainer.style.display === 'none') {
        playlistContainer.style.display = 'flex';
        toggleBtn.innerHTML = 'Ẩn Danh Sách';
    } else {
        playlistContainer.style.display = 'none';
        toggleBtn.innerHTML = 'Hiện Danh Sách';
    }
});

// Logic bật/tắt Chế độ ban đêm và LƯU TRẠNG THÁI
darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.innerHTML = "Chế độ ban ngày ☀️";
        localStorage.setItem('theme', 'dark'); // Lưu trạng thái: Đang bật Dark Mode
    } else {
        darkModeBtn.innerHTML = "Chế độ ban đêm 🌙";
        localStorage.setItem('theme', 'light'); // Lưu trạng thái: Đang tắt Dark Mode
    }
});

// Logic Thanh tiêu đề dính (Sticky Navbar) khi cuộn trang
window.addEventListener('scroll', function() {
    if (window.pageYOffset > stickyPosition) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});