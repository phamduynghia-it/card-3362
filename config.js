window.__MOCK_DATA__ = {
    title: `DNLoveGift 🌕🏮 Món Quà Kỷ Niệm Yêu Thương Trăng Rằm`,

    // Dòng chữ hiển thị lúc đang tải trang (Loading)
    loadingText: `Món quà đang đến trong giây lát...`,

    // Nhạc nền (Tải lên file MP3 tùy chọn, hoặc fallback sang CDN)
    music: `./assets/user_music.mp3` || "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/thangcuoipiano.mp3",

    // Các câu chúc chạy vòng tròn xung quanh trái tim 3D
    messages: ["Anh mãi mãi yeu em"],

    // Ảnh người yêu / kỉ niệm hiển thị bên trong trái tim 3D
    images: (["./assets/user_images_0.jpg"] && ["./assets/user_images_0.jpg"].length > 0 && ["./assets/user_images_0.jpg"][0]) ? ["./assets/user_images_0.jpg"] : ["./images/mid_autumn_moon_center.png"],

    // Nội dung bức thư hiện ra khi chạm vào phong bì
    letter: {
        title: `Em à, `,
        body: `yêu xa đôi khi thật khó, vì những lúc nhớ em anh chỉ có thể nhìn em qua màn hình. Nhưng dù khoảng cách có xa đến đâu, tình cảm anh dành cho em vẫn luôn ở đó. Anh mong chúng ta sẽ cùng nhau cố gắng, để một ngày không còn phải nói “anh nhớ em” qua điện thoại nữa, mà có thể ôm em thật gần và nói rằng: **“Cuối cùng mình cũng ở bên nhau rồi.”** ❤️`,
        sender: `Yêu em thật nhiều ♡`
    }
};
