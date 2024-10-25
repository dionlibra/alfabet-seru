// Data untuk setiap huruf alfabet, berisi daftar kata dan gambar terkait
const alphabetData = {
    A: [
        { word: 'Apel', image: 'assets/images/apel.png', text: 'A untuk Apel' },
        { word: 'Ayam', image: 'assets/images/ayam.png', text: 'A untuk Ayam' }
    ],
    B: [
        { word: 'Bola', image: 'assets/images/bola.png', text: 'B untuk Bola' },
        { word: 'Buku', image: 'assets/images/buku.png', text: 'B untuk Buku' }
    ],
    C: [
        { word: 'Ceri', image: 'assets/images/ceri.png', text: 'C untuk Ceri' },
        { word: 'Celana', image: 'assets/images/celana.png', text: 'C untuk Celana' }
    ],
    D: [
        { word: 'Domba', image: 'assets/images/domba.png', text: 'D untuk Domba' },
        { word: 'Durian', image: 'assets/images/durian.png', text: 'D untuk Durian' }
    ],
    E: [
        { word: 'Elang', image: 'assets/images/elang.png', text: 'E untuk Elang' },
        { word: 'Es Krim', image: 'assets/images/eskrim.png', text: 'E untuk Es Krim' }
    ],
    F: [
        { word: 'Flamingo', image: 'assets/images/flamingo.png', text: 'F untuk Flamingo' },
        { word: 'Fanta', image: 'assets/images/fanta.png', text: 'F untuk Fanta' }
    ],
    G: [
        { word: 'Gajah', image: 'assets/images/gajah.png', text: 'G untuk Gajah' },
        { word: 'Gitar', image: 'assets/images/gitar.png', text: 'G untuk Gitar' }
    ],
    H: [
        { word: 'Harimau', image: 'assets/images/harimau.png', text: 'H untuk Harimau' },
        { word: 'Helikopter', image: 'assets/images/helikopter.png', text: 'H untuk Helikopter' }
    ],
    I: [
        { word: 'Ikan', image: 'assets/images/ikan.png', text: 'I untuk Ikan' },
        { word: 'Istana', image: 'assets/images/istana.png', text: 'I untuk Istana' }
    ],
    J: [
        { word: 'Jerapah', image: 'assets/images/jerapah.png', text: 'J untuk Jerapah' },
        { word: 'Jus', image: 'assets/images/jus.png', text: 'J untuk Jus' }
    ],
    K: [
        { word: 'Kucing', image: 'assets/images/kucing.png', text: 'K untuk Kucing' },
        { word: 'Kelinci', image: 'assets/images/Kelinci.png', text: 'K untuk Kelinci' }
    ],
    L: [
        { word: 'Lumba-lumba', image: 'assets/images/lumba-lumba.png', text: 'L untuk Lumba-lumba' },
        { word: 'Lidah Buaya', image: 'assets/images/lidah-buaya.png', text: 'L untuk Lidah Buaya' }
    ],
    M: [
        { word: 'Monyet', image: 'assets/images/monyet.png', text: 'M untuk Monyet' },
        { word: 'Mangga', image: 'assets/images/mangga.png', text: 'M untuk Mangga' }
    ],
    N: [
        { word: 'Nanas', image: 'assets/images/nanas.png', text: 'N untuk Nanas' },
        { word: 'Nampan', image: 'assets/images/nampan.png', text: 'N untuk Nampan' }
    ],
    O: [
        { word: 'Orangutan', image: 'assets/images/orangutan.png', text: 'O untuk Orangutan' },
        { word: 'Oreo', image: 'assets/images/oreo.png', text: 'O untuk Oreo' }
    ],
    P: [
        { word: 'Pisang', image: 'assets/images/pisang.png', text: 'P untuk Pisang' },
        { word: 'Panda', image: 'assets/images/panda.png', text: 'P untuk Panda' }
    ],
    Q: [
        { word: 'Quran', image: 'assets/images/quran.png', text: 'Q untuk Quran' },
        { word: 'Qari', image: 'assets/images/qari.png', text: 'Q untuk Qari' }
    ],
    R: [
        { word: 'Rusa', image: 'assets/images/rusa.png', text: 'R untuk Rusa' },
        { word: 'Raket', image: 'assets/images/raket.png', text: 'R untuk Raket' }
    ],
    S: [
        { word: 'Sapi', image: 'assets/images/sapi.png', text: 'S untuk Sapi' },
        { word: 'Semangka', image: 'assets/images/semangka.png', text: 'S untuk Semangka' }
    ],
    T: [
        { word: 'Tikus', image: 'assets/images/tupai.png', text: 'T untuk Tupai' },
        { word: 'Tomat', image: 'assets/images/tomat.png', text: 'T untuk Tomat' }
    ],
    U: [
        { word: 'Ular', image: 'assets/images/ular.png', text: 'U untuk Ular' },
        { word: 'Udang', image: 'assets/images/unta.png', text: 'U untuk Unta' }
    ],
    V: [
        { word: 'Vespa', image: 'assets/images/vespa.png', text: 'V untuk Vespa' },
        { word: 'Vulkan', image: 'assets/images/vas.png', text: 'V untuk Vas' }
    ],
    W: [
        { word: 'Walrus', image: 'assets/images/walrus.png', text: 'W untuk Walrus' },
        { word: 'Wajan', image: 'assets/images/wajan.png', text: 'W untuk Wajan' }
    ],
    X: [
        { word: 'Xylophone', image: 'assets/images/xylophone.png', text: 'X untuk Xylophone' },
        { word: 'X-ray', image: 'assets/images/x-ray.png', text: 'X untuk X-ray' }
    ],
    Y: [
        { word: 'Yak', image: 'assets/images/yogurt.png', text: 'Y untuk Yogurt' },
        { word: 'Yoyo', image: 'assets/images/yoyo.png', text: 'Y untuk Yoyo' }
    ],
    Z: [
        { word: 'Zebra', image: 'assets/images/zebra.png', text: 'Z untuk Zebra' },
        { word: 'Zaitun', image: 'assets/images/zaitun.png', text: 'Z untuk Zaitun' }
    ]
};

// Fungsi untuk menampilkan gambar, kata, dan memulai text-to-speech
function displayLetterInfo(letter) {
    const data = alphabetData[letter];
    if (data && data.length > 0) {
        // Pilih kata secara acak dari daftar
        const randomData = data[Math.floor(Math.random() * data.length)];

        // Tampilkan gambar dengan animasi
        const imageElement = document.getElementById('letter-image');
        imageElement.src = randomData.image;
        imageElement.classList.remove('hide');
        imageElement.classList.add('show');

        // Tampilkan kata
        const wordElement = document.getElementById('letter-word');
        wordElement.textContent = randomData.word;

        // Memulai Text-to-Speech
        const textToSpeak = randomData.text;
        const speech = new SpeechSynthesisUtterance(textToSpeak);
        speech.lang = 'id-ID'; // Bahasa Indonesia
        window.speechSynthesis.speak(speech);
    }
}

// Tambahkan event listener untuk setiap tombol alfabet
document.querySelectorAll('.alphabet-btn').forEach(button => {
    button.addEventListener('click', () => {
        const letter = button.getAttribute('data-letter');
        displayLetterInfo(letter);
    });
});
