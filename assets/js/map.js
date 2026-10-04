/* ============================================
   START: Interactive Map (Leaflet)
   ============================================ */
function initPlotMap(containerId = 'map') {
  const el = document.getElementById(containerId);
  if (!el || typeof L === 'undefined') return;
  const coords = {
    1: [34.0736, -118.4004], 2: [38.2975, -122.2869], 3: [39.1911, -106.8175],
    4: [34.0259, -118.7798], 5: [42.0884, -73.9337],  6: [33.4942, -111.9261],
    7: [39.0968, -120.0324], 8: [30.2672, -97.7431],  9: [45.5152, -122.6784],
    10: [34.0900, -118.4425]
  };
  const map = L.map(containerId, { zoomControl: true, scrollWheelZoom: false }).setView([37.5, -100], 4);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CartoDB', maxZoom: 19
  }).addTo(map);
  const goldIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="width:36px;height:36px;background:linear-gradient(135deg,#C8A24A,#d9b869);border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 6px 20px rgba(200,162,74,0.5);border:3px solid #fff;"><div style="width:10px;height:10px;background:#0B1F17;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"></div></div>`,
    iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -36]
  });
  const markers = [];
  PLOTS.forEach(p => {
    const c = coords[p.id] || [37.5, -100];
    const marker = L.marker(c, { icon: goldIcon }).addTo(map);
    marker.bindPopup(`<div class="map-popup"><img src="${p.image}" alt="${p.title}"><div class="map-popup__body"><div class="map-popup__title">${p.title}</div><div class="map-popup__loc">📍 ${p.location}</div><div class="map-popup__price">${p.priceLabel}</div><a href="plot-detail.html?id=${p.id}" style="display:block;margin-top:0.75rem;padding:0.5rem;background:#0B1F17;color:#F7F5EF;text-align:center;border-radius:8px;font-size:0.8rem;font-weight:600;text-decoration:none;">View Details</a></div></div>`);
    markers.push(marker);
  });
  if (markers.length) map.fitBounds(L.featureGroup(markers).getBounds().pad(0.15));
  return map;
}
/* ============================================
   END: Interactive Map
   ============================================ */