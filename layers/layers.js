var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: 'Clipped',
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_1_0.png" /> Boyolali<br />\
    <img src="styles/legend/Clipped_1_1.png" /> Karanganyar<br />\
    <img src="styles/legend/Clipped_1_2.png" /> Sukoharjo<br />\
    <img src="styles/legend/Clipped_1_3.png" /> <br />' });
var format_LapakGIS_Batas_Kecamatan_2024_2 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_2 = format_LapakGIS_Batas_Kecamatan_2024_2.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_2.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_2);
var lyr_LapakGIS_Batas_Kecamatan_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_2, 
                style: style_LapakGIS_Batas_Kecamatan_2024_2,
                popuplayertitle: 'LapakGIS_Batas_Kecamatan_2024',
                interactive: false,
                title: '<img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_2.png" /> LapakGIS_Batas_Kecamatan_2024'
            });
var format_SHP2022PASSIVE_3 = new ol.format.GeoJSON();
var features_SHP2022PASSIVE_3 = format_SHP2022PASSIVE_3.readFeatures(json_SHP2022PASSIVE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP2022PASSIVE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP2022PASSIVE_3.addFeatures(features_SHP2022PASSIVE_3);
var lyr_SHP2022PASSIVE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP2022PASSIVE_3, 
                style: style_SHP2022PASSIVE_3,
                popuplayertitle: 'SHP 2022 PASSIVE',
                interactive: true,
                title: '<img src="styles/legend/SHP2022PASSIVE_3.png" /> SHP 2022 PASSIVE'
            });
var format_SHP2023_4 = new ol.format.GeoJSON();
var features_SHP2023_4 = format_SHP2023_4.readFeatures(json_SHP2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP2023_4.addFeatures(features_SHP2023_4);
var lyr_SHP2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP2023_4, 
                style: style_SHP2023_4,
                popuplayertitle: 'SHP 2023',
                interactive: true,
                title: '<img src="styles/legend/SHP2023_4.png" /> SHP 2023'
            });
var format_SHP2024PASSIVE_5 = new ol.format.GeoJSON();
var features_SHP2024PASSIVE_5 = format_SHP2024PASSIVE_5.readFeatures(json_SHP2024PASSIVE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP2024PASSIVE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP2024PASSIVE_5.addFeatures(features_SHP2024PASSIVE_5);
var lyr_SHP2024PASSIVE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP2024PASSIVE_5, 
                style: style_SHP2024PASSIVE_5,
                popuplayertitle: 'SHP 2024 PASSIVE',
                interactive: true,
                title: '<img src="styles/legend/SHP2024PASSIVE_5.png" /> SHP 2024 PASSIVE'
            });
var format_SHP2025PASSIVE_6 = new ol.format.GeoJSON();
var features_SHP2025PASSIVE_6 = format_SHP2025PASSIVE_6.readFeatures(json_SHP2025PASSIVE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP2025PASSIVE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP2025PASSIVE_6.addFeatures(features_SHP2025PASSIVE_6);
var lyr_SHP2025PASSIVE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP2025PASSIVE_6, 
                style: style_SHP2025PASSIVE_6,
                popuplayertitle: 'SHP 2025 PASSIVE',
                interactive: true,
                title: '<img src="styles/legend/SHP2025PASSIVE_6.png" /> SHP 2025 PASSIVE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Clipped_1.setVisible(true);lyr_LapakGIS_Batas_Kecamatan_2024_2.setVisible(true);lyr_SHP2022PASSIVE_3.setVisible(true);lyr_SHP2023_4.setVisible(true);lyr_SHP2024PASSIVE_5.setVisible(true);lyr_SHP2025PASSIVE_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Clipped_1,lyr_LapakGIS_Batas_Kecamatan_2024_2,lyr_SHP2022PASSIVE_3,lyr_SHP2023_4,lyr_SHP2024PASSIVE_5,lyr_SHP2025PASSIVE_6];
lyr_Clipped_1.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'IPM': 'IPM', });
lyr_LapakGIS_Batas_Kecamatan_2024_2.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_SHP2022PASSIVE_3.set('fieldAliases', {'Tahun': 'Tahun', 'No': 'No', 'Lokasi': 'Lokasi', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Wilayah': 'Wilayah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tanggal': 'Tanggal', 'Waktu/WIB': 'Waktu/WIB', 'Tanggal_1': 'Tanggal_1', 'Waktu/WIB_': 'Waktu/WIB_', 'NO? ?g/m��': 'NO? ?g/m��', 'SO? ?g/m��': 'SO? ?g/m��', 'Hujan/Hari': 'Hujan/Hari', 'Cerah/Hari': 'Cerah/Hari', 'Metode': 'Metode', });
lyr_SHP2023_4.set('fieldAliases', {'Tahun': 'Tahun', 'No': 'No', 'Lokasi': 'Lokasi', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Wilayah': 'Wilayah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tanggal': 'Tanggal', 'Waktu/WIB': 'Waktu/WIB', 'Tanggal_1': 'Tanggal_1', 'Waktu/WIB_': 'Waktu/WIB_', 'NO? ?g/m��': 'NO? ?g/m��', 'SO? ?g/m��': 'SO? ?g/m��', 'Hujan/Hari': 'Hujan/Hari', 'Cerah/Hari': 'Cerah/Hari', 'Metode': 'Metode', });
lyr_SHP2024PASSIVE_5.set('fieldAliases', {'Tahun': 'Tahun', 'No': 'No', 'Lokasi': 'Lokasi', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Wilayah': 'Wilayah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tanggal': 'Tanggal', 'Waktu/WIB': 'Waktu/WIB', 'Tanggal_1': 'Tanggal_1', 'Waktu/WIB_': 'Waktu/WIB_', 'NO?g/m�': 'NO?g/m�', 'SO?g/m�': 'SO?g/m�', 'Hujan/Hari': 'Hujan/Hari', 'Cerah/Hari': 'Cerah/Hari', 'Metode': 'Metode', });
lyr_SHP2025PASSIVE_6.set('fieldAliases', {'Tahun': 'Tahun', 'No': 'No', 'Lokasi': 'Lokasi', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Wilayah': 'Wilayah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tanggal': 'Tanggal', 'Waktu/WIB': 'Waktu/WIB', 'Tanggal_1': 'Tanggal_1', 'Waktu/WIB_': 'Waktu/WIB_', 'NO? ?g/m��': 'NO? ?g/m��', 'SO? ?g/m��': 'SO? ?g/m��', 'Hujan/Hari': 'Hujan/Hari', 'Cerah/Hari': 'Cerah/Hari', 'Metode': 'Metode', });
lyr_Clipped_1.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'IPM': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_2.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_SHP2022PASSIVE_3.set('fieldImages', {'Tahun': '', 'No': '', 'Lokasi': '', 'Kelurahan': '', 'Kecamatan': '', 'Wilayah': '', 'Latitude': '', 'Longitude': '', 'Tanggal': '', 'Waktu/WIB': '', 'Tanggal_1': '', 'Waktu/WIB_': '', 'NO? ?g/m��': '', 'SO? ?g/m��': '', 'Hujan/Hari': '', 'Cerah/Hari': '', 'Metode': '', });
lyr_SHP2023_4.set('fieldImages', {'Tahun': '', 'No': '', 'Lokasi': '', 'Kelurahan': '', 'Kecamatan': '', 'Wilayah': '', 'Latitude': '', 'Longitude': '', 'Tanggal': '', 'Waktu/WIB': '', 'Tanggal_1': '', 'Waktu/WIB_': '', 'NO? ?g/m��': '', 'SO? ?g/m��': '', 'Hujan/Hari': '', 'Cerah/Hari': '', 'Metode': '', });
lyr_SHP2024PASSIVE_5.set('fieldImages', {'Tahun': '', 'No': '', 'Lokasi': '', 'Kelurahan': '', 'Kecamatan': '', 'Wilayah': '', 'Latitude': '', 'Longitude': '', 'Tanggal': '', 'Waktu/WIB': '', 'Tanggal_1': '', 'Waktu/WIB_': '', 'NO?g/m�': '', 'SO?g/m�': '', 'Hujan/Hari': '', 'Cerah/Hari': '', 'Metode': '', });
lyr_SHP2025PASSIVE_6.set('fieldImages', {'Tahun': '', 'No': '', 'Lokasi': '', 'Kelurahan': '', 'Kecamatan': '', 'Wilayah': '', 'Latitude': '', 'Longitude': '', 'Tanggal': '', 'Waktu/WIB': '', 'Tanggal_1': '', 'Waktu/WIB_': '', 'NO? ?g/m��': '', 'SO? ?g/m��': '', 'Hujan/Hari': '', 'Cerah/Hari': '', 'Metode': '', });
lyr_Clipped_1.set('fieldLabels', {'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'IPM': 'no label', });
lyr_LapakGIS_Batas_Kecamatan_2024_2.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_SHP2022PASSIVE_3.set('fieldLabels', {'Tahun': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Wilayah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Tanggal': 'inline label - visible with data', 'Waktu/WIB': 'inline label - visible with data', 'Tanggal_1': 'inline label - visible with data', 'Waktu/WIB_': 'inline label - visible with data', 'NO? ?g/m��': 'inline label - visible with data', 'SO? ?g/m��': 'inline label - visible with data', 'Hujan/Hari': 'inline label - visible with data', 'Cerah/Hari': 'inline label - visible with data', 'Metode': 'inline label - visible with data', });
lyr_SHP2023_4.set('fieldLabels', {'Tahun': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Wilayah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Tanggal': 'inline label - visible with data', 'Waktu/WIB': 'inline label - visible with data', 'Tanggal_1': 'inline label - visible with data', 'Waktu/WIB_': 'inline label - visible with data', 'NO? ?g/m��': 'inline label - visible with data', 'SO? ?g/m��': 'inline label - visible with data', 'Hujan/Hari': 'inline label - visible with data', 'Cerah/Hari': 'inline label - visible with data', 'Metode': 'inline label - visible with data', });
lyr_SHP2024PASSIVE_5.set('fieldLabels', {'Tahun': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Wilayah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Tanggal': 'inline label - visible with data', 'Waktu/WIB': 'inline label - visible with data', 'Tanggal_1': 'inline label - visible with data', 'Waktu/WIB_': 'inline label - visible with data', 'NO?g/m�': 'inline label - visible with data', 'SO?g/m�': 'inline label - visible with data', 'Hujan/Hari': 'inline label - visible with data', 'Cerah/Hari': 'inline label - visible with data', 'Metode': 'inline label - visible with data', });
lyr_SHP2025PASSIVE_6.set('fieldLabels', {'Tahun': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Wilayah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Tanggal': 'inline label - visible with data', 'Waktu/WIB': 'inline label - visible with data', 'Tanggal_1': 'inline label - visible with data', 'Waktu/WIB_': 'inline label - visible with data', 'NO? ?g/m��': 'inline label - visible with data', 'SO? ?g/m��': 'inline label - visible with data', 'Hujan/Hari': 'inline label - visible with data', 'Cerah/Hari': 'inline label - visible with data', 'Metode': 'inline label - visible with data', });
lyr_SHP2025PASSIVE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});