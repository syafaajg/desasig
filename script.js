// Inisialisasi peta - dipusatkan di area Desa Kembang yang sebenarnya
const map = L.map('map').setView([-6.5030, 110.7100], 14);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Batas wilayah Desa Kembang (polygon dengan warna khusus) - disesuaikan dengan posisi sebenarnya
const desaKembangBoundary = [
    [-6.5000, 110.7070], // Barat Laut
    [-6.5005, 110.7130], // Timur Laut
    [-6.5060, 110.7135], // Tenggara (pesisir)
    [-6.5070, 110.7120], // Selatan (dekat pantai)
    [-6.5065, 110.7080], // Barat Daya
    [-6.5030, 110.7065], // Barat
    [-6.5000, 110.7070] // Kembali ke titik awal
];

// Tambahkan polygon batas Desa Kembang dengan warna khusus
const desaKembangPolygon = L.polygon(desaKembangBoundary, {
    color: '#ff6b6b', // Warna border merah muda/coral
    fillColor: '#ffd93d', // Warna fill kuning keemasan (khas dan berbeda)
    fillOpacity: 0.25, // Transparansi 25% agar tidak mengganggu marker
    weight: 3, // Ketebalan garis border
    opacity: 0.8, // Opacity border
    dashArray: '10, 5' // Garis putus-putus untuk lebih mencolok
}).addTo(map);

// Tambahkan label "DESA KEMBANG" di tengah polygon - di area tulisan "Kembang" di peta
const desaKembangCenter = L.latLng(-6.5030, 110.7100);
const desaKembangLabel = L.marker(desaKembangCenter, {
    icon: L.divIcon({
        className: 'desa-label',
        html: `
            <div style="
                background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 14px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                border: 2px solid white;
                white-space: nowrap;
            ">
                <i class="fas fa-map"></i> DESA KEMBANG
            </div>
        `,
        iconSize: [200, 40],
        iconAnchor: [100, 20]
    })
}).addTo(map);

// Tambahkan popup untuk batas desa
desaKembangPolygon.bindPopup(`
    <div style="text-align: center; padding: 5px;">
        <strong style="color: #ff6b6b; font-size: 16px;">
            <i class="fas fa-map-marked-alt"></i> Batas Wilayah
        </strong><br>
        <strong>Desa Kembang</strong><br>
        <small>Kecamatan Bangsri, Kabupaten Jepara, Jawa Tengah</small>
    </div>
`);

// Tambahkan tooltip saat hover
desaKembangPolygon.bindTooltip('Batas Wilayah Desa Kembang', {
    permanent: false,
    direction: 'center',
    className: 'desa-boundary-tooltip'
});

// Area laut untuk membedakan daratan dan lautan (di sisi barat/selatan desa)
const lautArea = [
    [-6.5115, 110.7045], // Barat Laut (garis pantai)
    [-6.5120, 110.7070], // Barat (garis pantai - area Pantai Kembang)
    [-6.5125, 110.7095], // Tengah (garis pantai)
    [-6.5130, 110.7120], // Timur (garis pantai)
    [-6.5165, 110.7130], // Tenggara (laut dalam)
    [-6.5165, 110.7045], // Barat Daya (laut dalam)
    [-6.5115, 110.7045] // Kembali ke titik awal
];

// Tambahkan polygon area laut
const lautPolygon = L.polygon(lautArea, {
    color: '#0066cc',
    fillColor: '#4a90e2',
    fillOpacity: 0.35,
    weight: 2,
    opacity: 0.7
}).addTo(map);

lautPolygon.bindTooltip('Laut Jawa', {
    permanent: false,
    direction: 'center',
    className: 'laut-tooltip'
});

// Garis pantai untuk lebih jelas membedakan daratan dan lautan
const garisPantai = [
    [-6.5115, 110.7045],
    [-6.5120, 110.7070],
    [-6.5125, 110.7095],
    [-6.5130, 110.7120]
];

const garisPantaiPolyline = L.polyline(garisPantai, {
    color: '#0066cc',
    weight: 3,
    opacity: 0.9,
    dashArray: '5, 5'
}).addTo(map);

// Titik-titik penting di Desa Kembang berdasarkan data Google Maps dan sumber resmi
const locations = [{
        name: 'Pantai Kembang',
        lat: -6.5135,
        lng: 110.7085,
        icon: 'fa-water',
        color: '#1abc9c',
        category: 'Wisata',
        address: 'Pesisir Desa Kembang, Kecamatan Bangsri',
        description: 'Pantai dengan pasir putih dan ombak yang tenang. Pantai Kembang terkenal akan keasriannya dan kebersihan air serta pasirnya. Destinasi wisata yang menarik di pesisir Desa Kembang, Kecamatan Bangsri, Jepara. Terletak tepat di garis pantai yang membedakan daratan dan lautan.',
        coordinates: '-6.5135°S, 110.7085°E'
    },
    {
        name: 'Balai Desa Kembang',
        lat: -6.5083,
        lng: 110.7083,
        icon: 'fa-building',
        color: '#e74c3c',
        category: 'Pemerintahan',
        address: 'Desa Kembang, Kecamatan Bangsri, Jepara',
        description: 'Kantor pemerintahan desa yang menjadi pusat administrasi dan pelayanan masyarakat di Desa Kembang. Tempat penyelenggaraan berbagai kegiatan administratif dan kemasyarakatan.',
        coordinates: '-6.5083°S, 110.7083°E'
    },
    {
        name: 'Masjid Al Yaqin',
        lat: -6.5080,
        lng: 110.7078,
        icon: 'fa-mosque',
        color: '#3498db',
        category: 'Tempat Ibadah',
        address: 'Desa Kembang, Kecamatan Bangsri',
        description: 'Masjid utama di Desa Kembang yang menjadi salah satu pusat kegiatan keagamaan masyarakat setempat. Masjid ini berdekatan dengan Gereja Injili di Tanah Jawa Ngelak Mulyo (sekitar 350 meter), mencerminkan kerukunan antarumat beragama di desa tersebut.',
        coordinates: '-6.5080°S, 110.7078°E'
    },
    {
        name: 'Gereja Injili di Tanah Jawa Ngelak Mulyo',
        lat: -6.5095,
        lng: 110.7085,
        icon: 'fa-church',
        color: '#3498db',
        category: 'Tempat Ibadah',
        address: 'Desa Kembang, Kecamatan Bangsri',
        description: 'Gereja yang terletak sekitar 350 meter dari Masjid Al Yaqin, menunjukkan toleransi dan keharmonisan antarumat beragama di Desa Kembang. Gereja ini mencerminkan kerukunan antarumat beragama yang terjaga dengan baik di desa ini.',
        coordinates: '-6.5095°S, 110.7085°E'
    },
    {
        name: 'SD Negeri 1 Kembang',
        lat: -6.5065,
        lng: 110.7065,
        icon: 'fa-school',
        color: '#2ecc71',
        category: 'Pendidikan',
        address: 'RT 03 RW 05, Desa Kembang, Kecamatan Bangsri',
        description: 'Sekolah Dasar Negeri yang berlokasi di RT 03 RW 05, Desa Kembang. Menyediakan pendidikan dasar bagi anak-anak di wilayah tersebut.',
        coordinates: '-6.5065°S, 110.7065°E'
    },
    {
        name: 'SD Negeri 4 Kembang',
        lat: -6.5095,
        lng: 110.7105,
        icon: 'fa-school',
        color: '#2ecc71',
        category: 'Pendidikan',
        address: 'RT 02 RW 07, Desa Kembang, Kecamatan Bangsri',
        description: 'Sekolah Dasar Negeri yang berlokasi di RT 02 RW 07, Desa Kembang. Menyediakan pendidikan dasar bagi anak-anak setempat di Desa Kembang.',
        coordinates: '-6.5095°S, 110.7105°E'
    },
    {
        name: 'RA An Nur Kembang',
        lat: -6.5080,
        lng: 110.7070,
        icon: 'fa-school',
        color: '#2ecc71',
        category: 'Pendidikan',
        address: 'RT 02 RW 06, Desa Kembang, Kecamatan Bangsri',
        description: 'Raudhatul Athfal (setara taman kanak-kanak) yang berlokasi di RT 02 RW 06, Desa Kembang. Menyediakan pendidikan anak usia dini bagi masyarakat setempat.',
        coordinates: '-6.5080°S, 110.7070°E'
    },
    {
        name: 'TK TA Kembang',
        lat: -6.5092,
        lng: 110.7102,
        icon: 'fa-school',
        color: '#2ecc71',
        category: 'Pendidikan',
        address: 'RT 02 RW 09, Desa Kembang, Kecamatan Bangsri',
        description: 'Taman Kanak-Kanak swasta yang beralamat di RT 02 RW 09, Desa Kembang. Menyediakan pendidikan anak usia dini bagi masyarakat setempat.',
        coordinates: '-6.5092°S, 110.7102°E'
    },
    {
        name: 'Bumdes Tanjung Java',
        lat: -6.5070,
        lng: 110.7080,
        icon: 'fa-store',
        color: '#9b59b6',
        category: 'Ekonomi',
        address: 'RT 003 RW 009, Desa Kembang, Kecamatan Bangsri',
        description: 'Badan Usaha Milik Desa yang beralamat di RT 003 RW 009, Desa Kembang. Bumdes ini berperan dalam pengembangan ekonomi desa dan pemberdayaan masyarakat.',
        coordinates: '-6.5070°S, 110.7080°E'
    },
    {
        name: 'Pesisir Kembang (Sentra Budi Daya Rumput Laut)',
        lat: -6.5135,
        lng: 110.7120,
        icon: 'fa-water',
        color: '#1abc9c',
        category: 'Ekonomi & Wisata',
        address: 'Pesisir Desa Kembang, Kecamatan Bangsri',
        description: 'Kawasan pesisir yang diproyeksikan menjadi sentra budi daya rumput laut di Jepara. Memiliki luas lahan mencapai 20 hektare dengan potensi perluasan lebih lanjut. Menjadi salah satu sumber ekonomi masyarakat pesisir Desa Kembang. Terletak di garis pantai yang membedakan daratan dan lautan.',
        coordinates: '-6.5135°S, 110.7120°E'
    },
    {
        name: 'Puskesmas Kembang',
        lat: -6.5085,
        lng: 110.7078,
        icon: 'fa-hospital',
        color: '#e67e22',
        category: 'Kesehatan',
        address: 'Desa Kembang, Kecamatan Bangsri',
        description: 'Pusat Kesehatan Masyarakat untuk pelayanan kesehatan warga desa. Menyediakan layanan kesehatan dasar bagi masyarakat Desa Kembang.',
        coordinates: '-6.5085°S, 110.7078°E'
    },
    {
        name: 'Lapangan Desa Kembang',
        lat: -6.5078,
        lng: 110.7085,
        icon: 'fa-futbol',
        color: '#f39c12',
        category: 'Fasilitas Umum',
        address: 'Desa Kembang, Kecamatan Bangsri',
        description: 'Lapangan untuk kegiatan olahraga dan acara desa. Tempat berkumpul masyarakat untuk berbagai kegiatan kemasyarakatan dan olahraga.',
        coordinates: '-6.5078°S, 110.7085°E'
    },
    {
        name: 'Pasar Desa Kembang',
        lat: -6.5088,
        lng: 110.7072,
        icon: 'fa-store',
        color: '#9b59b6',
        category: 'Ekonomi',
        address: 'Desa Kembang, Kecamatan Bangsri',
        description: 'Pasar tradisional untuk kebutuhan sehari-hari warga desa. Tempat jual beli hasil pertanian, perikanan, dan kebutuhan pokok masyarakat Desa Kembang.',
        coordinates: '-6.5088°S, 110.7072°E'
    }
];

// Fungsi untuk membuat ikon kustom
function createCustomIcon(iconClass, color) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${color};
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <i class="fas ${iconClass}" style="
                color: white;
                transform: rotate(45deg);
                font-size: 18px;
            "></i>
        </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
}

// Tambahkan marker untuk setiap lokasi
const markers = [];
locations.forEach(location => {
            const icon = createCustomIcon(location.icon, location.color);

            const marker = L.marker([location.lat, location.lng], { icon: icon })
                .addTo(map)
                .bindPopup(`
            <div class="popup-content">
                <div class="popup-title">
                    <i class="fas ${location.icon}" style="color: ${location.color}; margin-right: 5px;"></i>
                    ${location.name}
                </div>
                <div class="popup-info">
                    <i class="fas fa-tag"></i> <strong>Kategori:</strong> ${location.category}
                </div>
                ${location.address ? `
                <div class="popup-info">
                    <i class="fas fa-map-marker-alt"></i> <strong>Alamat:</strong> ${location.address}
                </div>
                ` : ''}
                ${location.coordinates ? `
                <div class="popup-info">
                    <i class="fas fa-globe"></i> <strong>Koordinat GPS:</strong> ${location.coordinates}
                </div>
                ` : ''}
                <div class="popup-info">
                    <i class="fas fa-info-circle"></i> ${location.description}
                </div>
            </div>
        `);
    
    markers.push(marker);
});

// Fit bounds untuk menampilkan semua marker dan batas desa
if (markers.length > 0) {
    const group = new L.featureGroup([...markers, desaKembangPolygon]);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Tambahkan kontrol pencarian
const searchControl = L.control({ position: 'topright' });
searchControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'search-control');
    div.innerHTML = `
        <input type="text" id="search-input" placeholder="Cari lokasi..." 
               style="padding: 8px; width: 200px; border: 2px solid #667eea; border-radius: 5px; font-size: 14px;">
        <button id="search-btn" 
                style="padding: 8px 15px; margin-left: 5px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
            <i class="fas fa-search"></i>
        </button>
    `;
    
    L.DomEvent.disableClickPropagation(div);
    
    // Event listener untuk pencarian
    const searchInput = div.querySelector('#search-input');
    const searchBtn = div.querySelector('#search-btn');
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const found = locations.find(loc => 
            loc.name.toLowerCase().includes(query) || 
            loc.category.toLowerCase().includes(query)
        );
        
        if (found) {
            map.setView([found.lat, found.lng], 16);
            markers[locations.indexOf(found)].openPopup();
        } else {
            alert('Lokasi tidak ditemukan');
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    return div;
};
searchControl.addTo(map);

// Tambahkan info kontrol
const infoControl = L.control({ position: 'bottomright' });
infoControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info-control');
    div.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); font-size: 12px;">
            <strong>Total Lokasi:</strong> ${locations.length}
        </div>
    `;
    return div;
};
infoControl.addTo(map);

console.log('Peta Desa Kembang & Bondo telah dimuat dengan ' + locations.length + ' titik penting.');