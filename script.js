// Inisialisasi peta
const map = L.map('map').setView([-6.5085, 110.7085], 14);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Batas Desa Kembang
const desaKembangBoundary = [
    [-6.5000, 110.7070],
    [-6.5005, 110.7130],
    [-6.5060, 110.7135],
    [-6.5070, 110.7120],
    [-6.5065, 110.7080],
    [-6.5030, 110.7065],
    [-6.5000, 110.7070]
];
const desaKembangPolygon = L.polygon(desaKembangBoundary, {
    color: '#ff6b6b',
    fillColor: '#ffd93d',
    fillOpacity: 0.25,
    weight: 3,
    opacity: 0.8,
    dashArray: '10, 5'
}).addTo(map);
const desaKembangLabel = L.marker(L.latLng(-6.5030, 110.7100), {
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
desaKembangPolygon.bindPopup(`
    <div style="text-align: center; padding: 5px;">
        <strong style="color: #ff6b6b; font-size: 16px;">
            <i class="fas fa-map-marked-alt"></i> Batas Wilayah
        </strong><br>
        <strong>Desa Kembang</strong><br>
        <small>Kecamatan Bangsri, Kabupaten Jepara, Jawa Tengah</small>
    </div>
`);
desaKembangPolygon.bindTooltip('Batas Wilayah Desa Kembang', { permanent: false, direction: 'center', className: 'desa-boundary-tooltip' });

// Batas Desa Bondo
const desaBondoBoundary = [
    [-6.5100, 110.7050],
    [-6.5105, 110.7110],
    [-6.5140, 110.7115],
    [-6.5145, 110.7100],
    [-6.5135, 110.7070],
    [-6.5115, 110.7055],
    [-6.5100, 110.7050]
];
const desaBondoPolygon = L.polygon(desaBondoBoundary, {
    color: '#00a86b',
    fillColor: '#4ecdc4',
    fillOpacity: 0.25,
    weight: 3,
    opacity: 0.8,
    dashArray: '12, 8'
}).addTo(map);
const desaBondoLabel = L.marker(L.latLng(-6.5120, 110.7085), {
    icon: L.divIcon({
        className: 'desa-label',
        html: `
            <div style="
                background: linear-gradient(135deg, #00a86b 0%, #4ecdc4 100%);
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
                <i class="fas fa-map"></i> DESA BONDO
            </div>
        `,
        iconSize: [200, 40],
        iconAnchor: [100, 20]
    })
}).addTo(map);
desaBondoPolygon.bindPopup(`
    <div style="text-align: center; padding: 5px;">
        <strong style="color: #00a86b; font-size: 16px;">
            <i class="fas fa-map-marked-alt"></i> Batas Wilayah
        </strong><br>
        <strong>Desa Bondo</strong><br>
        <small>Kecamatan Bangsri, Kabupaten Jepara, Jawa Tengah</small>
    </div>
`);
desaBondoPolygon.bindTooltip('Batas Wilayah Desa Bondo', { permanent: false, direction: 'center', className: 'desa-boundary-tooltip' });

// Titik-titik penting di kedua desa
const locations = [
    // Kembang
    { name: 'Balai Desa Kembang', lat: -6.5083, lng: 110.7083, icon: 'fa-building', color: '#e74c3c', category: 'Pemerintahan', address: 'Desa Kembang, Kecamatan Bangsri', description: 'Balai Desa Kembang.', coordinates: '-6.5083°S, 110.7083°E' },
    { name: 'Masjid Al Yaqin Kembang', lat: -6.5080, lng: 110.7078, icon: 'fa-mosque', color: '#3498db', category: 'Tempat Ibadah', address: 'Desa Kembang, Kecamatan Bangsri', description: 'Masjid utama Desa Kembang.', coordinates: '-6.5080°S, 110.7078°E' },
    { name: 'Gereja Injili Ngelak Mulyo', lat: -6.5095, lng: 110.7085, icon: 'fa-church', color: '#3498db', category: 'Tempat Ibadah', address: 'Desa Kembang, Kecamatan Bangsri', description: 'Gereja berdekatan dengan Masjid Al Yaqin.', coordinates: '-6.5095°S, 110.7085°E' },
    { name: 'SD Negeri 1 Kembang', lat: -6.5065, lng: 110.7065, icon: 'fa-school', color: '#2ecc71', category: 'Pendidikan', address: 'RT 03 RW 05, Desa Kembang', description: 'SD Negeri di RT 03 RW 05.', coordinates: '-6.5065°S, 110.7065°E' },
    { name: 'SD Negeri 4 Kembang', lat: -6.5095, lng: 110.7105, icon: 'fa-school', color: '#2ecc71', category: 'Pendidikan', address: 'RT 02 RW 07, Desa Kembang', description: 'SD Negeri di RT 02 RW 07.', coordinates: '-6.5095°S, 110.7105°E' },
    { name: 'RA An Nur Kembang', lat: -6.5080, lng: 110.7070, icon: 'fa-school', color: '#2ecc71', category: 'Pendidikan', address: 'RT 02 RW 06, Desa Kembang', description: 'RA An Nur Kembang.', coordinates: '-6.5080°S, 110.7070°E' },
    { name: 'TK TA Kembang', lat: -6.5092, lng: 110.7102, icon: 'fa-school', color: '#2ecc71', category: 'Pendidikan', address: 'RT 02 RW 09, Desa Kembang', description: 'TK swasta di Desa Kembang.', coordinates: '-6.5092°S, 110.7102°E' },
    { name: 'Bumdes Tanjung Java', lat: -6.5070, lng: 110.7080, icon: 'fa-store', color: '#9b59b6', category: 'Ekonomi', address: 'RT 003 RW 009, Desa Kembang', description: 'Bumdes Desa Kembang.', coordinates: '-6.5070°S, 110.7080°E' },
    { name: 'Pesisir Kembang (Rumput Laut)', lat: -6.5135, lng: 110.7120, icon: 'fa-water', color: '#1abc9c', category: 'Ekonomi & Wisata', address: 'Pesisir Desa Kembang', description: 'Sentra budi daya rumput laut.', coordinates: '-6.5135°S, 110.7120°E' },
    { name: 'Puskesmas Kembang', lat: -6.5085, lng: 110.7078, icon: 'fa-hospital', color: '#e67e22', category: 'Kesehatan', address: 'Desa Kembang', description: 'Puskesmas Desa Kembang.', coordinates: '-6.5085°S, 110.7078°E' },
    { name: 'Lapangan Desa Kembang', lat: -6.5078, lng: 110.7085, icon: 'fa-futbol', color: '#f39c12', category: 'Fasilitas Umum', address: 'Desa Kembang', description: 'Lapangan Desa Kembang.', coordinates: '-6.5078°S, 110.7085°E' },
    { name: 'Pasar Desa Kembang', lat: -6.5088, lng: 110.7072, icon: 'fa-store', color: '#9b59b6', category: 'Ekonomi', address: 'Desa Kembang', description: 'Pasar tradisional Desa Kembang.', coordinates: '-6.5088°S, 110.7072°E' },
    // Bondo
    { name: 'Balai Desa Bondo', lat: -6.5085, lng: 110.7090, icon: 'fa-building', color: '#c0392b', category: 'Pemerintahan', address: 'Desa Bondo, Kecamatan Bangsri', description: 'Balai Desa Bondo.', coordinates: '-6.5085°S, 110.7090°E' },
    { name: 'Masjid Al Yaqin Bondo', lat: -6.5078, lng: 110.7075, icon: 'fa-mosque', color: '#2980b9', category: 'Tempat Ibadah', address: 'Desa Bondo, Kecamatan Bangsri', description: 'Masjid utama Desa Bondo.', coordinates: '-6.5078°S, 110.7075°E' },
    { name: 'Gereja Ngelak Mulyo', lat: -6.5092, lng: 110.7085, icon: 'fa-church', color: '#2980b9', category: 'Tempat Ibadah', address: 'Desa Bondo, Kecamatan Bangsri', description: 'Gereja di Desa Bondo.', coordinates: '-6.5092°S, 110.7085°E' },
    { name: 'SD Negeri 1 Bondo', lat: -6.5068, lng: 110.7068, icon: 'fa-school', color: '#27ae60', category: 'Pendidikan', address: 'RT 03 RW 05, Desa Bondo', description: 'SDN 1 Bondo.', coordinates: '-6.5068°S, 110.7068°E' },
    { name: 'SD Negeri 4 Bondo', lat: -6.5098, lng: 110.7108, icon: 'fa-school', color: '#27ae60', category: 'Pendidikan', address: 'RT 02 RW 07, Desa Bondo', description: 'SDN 4 Bondo.', coordinates: '-6.5098°S, 110.7108°E' },
    { name: 'RA An Nur Bondo', lat: -6.5082, lng: 110.7072, icon: 'fa-school', color: '#27ae60', category: 'Pendidikan', address: 'RT 02 RW 06, Desa Bondo', description: 'RA An Nur Bondo.', coordinates: '-6.5082°S, 110.7072°E' },
    { name: 'TK Ester Bondo 01', lat: -6.5090, lng: 110.7100, icon: 'fa-school', color: '#27ae60', category: 'Pendidikan', address: 'RT 02 RW 07, Desa Bondo', description: 'TK Ester Bondo 01.', coordinates: '-6.5090°S, 110.7100°E' },
    { name: 'Bumdes Tanjung Java (Bondo)', lat: -6.5075, lng: 110.7082, icon: 'fa-store', color: '#9b59b6', category: 'Ekonomi', address: 'RT 003 RW 009, Desa Bondo', description: 'Bumdes Desa Bondo.', coordinates: '-6.5075°S, 110.7082°E' },
    { name: 'Puskesmas Bondo', lat: -6.5085, lng: 110.7078, icon: 'fa-hospital', color: '#e67e22', category: 'Kesehatan', address: 'Desa Bondo', description: 'Puskesmas Desa Bondo.', coordinates: '-6.5085°S, 110.7078°E' },
    { name: 'Pasar Desa Bondo', lat: -6.5088, lng: 110.7072, icon: 'fa-store', color: '#9b59b6', category: 'Ekonomi', address: 'Desa Bondo', description: 'Pasar tradisional Desa Bondo.', coordinates: '-6.5088°S, 110.7072°E' },
    { name: 'Lapangan Desa Bondo', lat: -6.5092, lng: 110.7085, icon: 'fa-futbol', color: '#f39c12', category: 'Fasilitas Umum', address: 'Desa Bondo', description: 'Lapangan Desa Bondo.', coordinates: '-6.5092°S, 110.7085°E' },
    { name: 'Pantai Bondo', lat: -6.5125, lng: 110.7095, icon: 'fa-water', color: '#1abc9c', category: 'Wisata', address: 'Pesisir Desa Bondo', description: 'Pantai Bondo dengan ombak tenang.', coordinates: '-6.5125°S, 110.7095°E' }
];

// Fungsi ikon kustom
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

// Marker
const markers = [];
locations.forEach(location => {
            const icon = createCustomIcon(location.icon, location.color);
            const marker = L.marker([location.lat, location.lng], { icon }).addTo(map)
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
                </div>` : ''}
                ${location.coordinates ? `
                <div class="popup-info">
                    <i class="fas fa-globe"></i> <strong>Koordinat GPS:</strong> ${location.coordinates}
                </div>` : ''}
                <div class="popup-info">
                    <i class="fas fa-info-circle"></i> ${location.description}
                </div>
            </div>
        `);
    markers.push(marker);
});

// Fit bounds
if (markers.length > 0) {
    const group = new L.featureGroup([...markers, desaKembangPolygon, desaBondoPolygon]);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Kontrol pencarian
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
    const searchInput = div.querySelector('#search-input');
    const searchBtn = div.querySelector('#search-btn');
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const found = locations.find(loc =>
            loc.name.toLowerCase().includes(query) ||
            loc.category.toLowerCase().includes(query) ||
            (loc.address || '').toLowerCase().includes(query)
        );
        if (found) {
            map.setView([found.lat, found.lng], 16);
            markers[locations.indexOf(found)].openPopup();
        } else {
            alert('Lokasi tidak ditemukan');
        }
    });
    searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') searchBtn.click(); });
    return div;
};
searchControl.addTo(map);

// Info kontrol
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
