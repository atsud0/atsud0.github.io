const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: false,
        theme: '#FADFA3', //主题色
        autoplay: false,
    audio: [
        {
            name: "小さな恋のうた",
            artist: '新垣結衣',
            url: '/assets/music/gakki-1.mp3',
            cover: 'https://p1.music.126.net/jn5QCsmkR3WIDEOBvYqnpg==/892803441798468.jpg?param=130y130',
        }
    ]


});
