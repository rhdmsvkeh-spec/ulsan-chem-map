var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '브이월드 기본',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '배경지도: 국토교통부 브이월드',
                url: 'https://api.vworld.kr/req/wmts/1.0.0/A12144E6-52DF-4B8E-B06E-4DA38561B75A/Base/{z}/{y}/{x}.png'
            })
        });
var format___v1_1 = new ol.format.GeoJSON();
var features___v1_1 = format___v1_1.readFeatures(json___v1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___v1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___v1_1.addFeatures(features___v1_1);
var lyr___v1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___v1_1, 
                style: style___v1_1,
                popuplayertitle: '행정동 정보',
                interactive: true,
                title: '<img src="styles/legend/__v1_1.png" /> 행정동 정보'
            });
var format___v1_2 = new ol.format.GeoJSON();
var features___v1_2 = format___v1_2.readFeatures(json___v1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___v1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___v1_2.addFeatures(features___v1_2);
var lyr___v1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___v1_2, 
                style: style___v1_2,
                popuplayertitle: '배출 집중 구역',
                interactive: true,
                title: '<img src="styles/legend/__v1_2.png" /> 배출 집중 구역'
            });
var format___v1_3 = new ol.format.GeoJSON();
var features___v1_3 = format___v1_3.readFeatures(json___v1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___v1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___v1_3.addFeatures(features___v1_3);
var lyr___v1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___v1_3, 
                style: style___v1_3,
                popuplayertitle: '화학물질 사업장',
                interactive: true,
    title: '화학물질 사업장<br />\
    <img src="styles/legend/__v1_3_0.png" /> 고지사업장(반경 3 km)<br />\
    <img src="styles/legend/__v1_3_1.png" /> 취급사업장(반경 1 km)<br />' });
var format___v1_4 = new ol.format.GeoJSON();
var features___v1_4 = format___v1_4.readFeatures(json___v1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___v1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___v1_4.addFeatures(features___v1_4);
var lyr___v1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___v1_4, 
                style: style___v1_4,
                popuplayertitle: '화학사고 대피장소',
                interactive: true,
                title: '<img src="styles/legend/__v1_4.png" /> 화학사고 대피장소'
            });

lyr__0.setVisible(true);lyr___v1_1.setVisible(true);lyr___v1_2.setVisible(true);lyr___v1_3.setVisible(true);lyr___v1_4.setVisible(true);
var layersList = [lyr__0,lyr___v1_1,lyr___v1_2,lyr___v1_3,lyr___v1_4];
lyr___v1_1.set('fieldAliases', {'fid': 'fid', '구군명': '구군명', '행정동': '행정동', '반경 1 km가 닿는 취급사업장(동 안)	': '반경 1 km가 닿는 취급사업장(동 안)	', '반경 1 km가 닿는 취급사업장(다른 동)': '반경 1 km가 닿는 취급사업장(다른 동)', '반경 3 km가 닿는 고지사업장(동 안)': '반경 3 km가 닿는 고지사업장(동 안)', '반경 3 km가 닿는 고지사업장(다른 동)': '반경 3 km가 닿는 고지사업장(다른 동)', '그중 사고 이력 있는 취급사업장': '그중 사고 이력 있는 취급사업장', '그중 사고 이력 있는 고지사업장': '그중 사고 이력 있는 고지사업장', '가장 가까운 대피장소(주거지역 비율)	': '가장 가까운 대피장소(주거지역 비율)	', '대피장소까지 1.5 km 넘는 주거지역(%)': '대피장소까지 1.5 km 넘는 주거지역(%)', '주거지역 절반이 속한 대피 거리': '주거지역 절반이 속한 대피 거리', '배출 집중 구역과 겹침': '배출 집중 구역과 겹침', '겹치는 주거지역(%)': '겹치는 주거지역(%)', '가장 가까운 배출 집중 구역': '가장 가까운 배출 집중 구역', });
lyr___v1_2.set('fieldAliases', {'fid': 'fid', '구역': '구역', '연간 배출량(톤, 2024년)': '연간 배출량(톤, 2024년)', '구역 안 배출 사업장(곳)': '구역 안 배출 사업장(곳)', '가장 많이 배출된 물질': '가장 많이 배출된 물질', '그 물질의 비율(%)': '그 물질의 비율(%)', });
lyr___v1_3.set('fieldAliases', {'fid': 'fid', '사업장명': '사업장명', '구분': '구분', '주소': '주소', '사고 이력(건)': '사고 이력(건)', });
lyr___v1_4.set('fieldAliases', {'fid': 'fid', '대피장소명': '대피장소명', '도로명주소': '도로명주소', '수용인원(명)': '수용인원(명)', '지정 구·군': '지정 구·군', });
lyr___v1_1.set('fieldImages', {'fid': 'TextEdit', '구군명': 'TextEdit', '행정동': 'TextEdit', '반경 1 km가 닿는 취급사업장(동 안)	': 'TextEdit', '반경 1 km가 닿는 취급사업장(다른 동)': 'TextEdit', '반경 3 km가 닿는 고지사업장(동 안)': 'TextEdit', '반경 3 km가 닿는 고지사업장(다른 동)': 'TextEdit', '그중 사고 이력 있는 취급사업장': 'TextEdit', '그중 사고 이력 있는 고지사업장': 'TextEdit', '가장 가까운 대피장소(주거지역 비율)	': 'TextEdit', '대피장소까지 1.5 km 넘는 주거지역(%)': 'TextEdit', '주거지역 절반이 속한 대피 거리': 'TextEdit', '배출 집중 구역과 겹침': 'TextEdit', '겹치는 주거지역(%)': 'TextEdit', '가장 가까운 배출 집중 구역': 'TextEdit', });
lyr___v1_2.set('fieldImages', {'fid': 'TextEdit', '구역': 'TextEdit', '연간 배출량(톤, 2024년)': 'TextEdit', '구역 안 배출 사업장(곳)': 'TextEdit', '가장 많이 배출된 물질': 'TextEdit', '그 물질의 비율(%)': 'TextEdit', });
lyr___v1_3.set('fieldImages', {'fid': 'TextEdit', '사업장명': 'TextEdit', '구분': 'TextEdit', '주소': 'TextEdit', '사고 이력(건)': 'TextEdit', });
lyr___v1_4.set('fieldImages', {'fid': 'TextEdit', '대피장소명': 'TextEdit', '도로명주소': 'TextEdit', '수용인원(명)': 'Range', '지정 구·군': 'TextEdit', });
lyr___v1_1.set('fieldLabels', {'fid': 'hidden field', '구군명': 'inline label - always visible', '행정동': 'inline label - always visible', '반경 1 km가 닿는 취급사업장(동 안)	': 'inline label - always visible', '반경 1 km가 닿는 취급사업장(다른 동)': 'inline label - always visible', '반경 3 km가 닿는 고지사업장(동 안)': 'inline label - always visible', '반경 3 km가 닿는 고지사업장(다른 동)': 'inline label - always visible', '그중 사고 이력 있는 취급사업장': 'inline label - always visible', '그중 사고 이력 있는 고지사업장': 'inline label - always visible', '가장 가까운 대피장소(주거지역 비율)	': 'inline label - always visible', '대피장소까지 1.5 km 넘는 주거지역(%)': 'inline label - always visible', '주거지역 절반이 속한 대피 거리': 'inline label - always visible', '배출 집중 구역과 겹침': 'inline label - always visible', '겹치는 주거지역(%)': 'inline label - always visible', '가장 가까운 배출 집중 구역': 'inline label - always visible', });
lyr___v1_2.set('fieldLabels', {'fid': 'hidden field', '구역': 'inline label - always visible', '연간 배출량(톤, 2024년)': 'inline label - always visible', '구역 안 배출 사업장(곳)': 'inline label - always visible', '가장 많이 배출된 물질': 'inline label - always visible', '그 물질의 비율(%)': 'inline label - always visible', });
lyr___v1_3.set('fieldLabels', {'fid': 'hidden field', '사업장명': 'inline label - always visible', '구분': 'inline label - always visible', '주소': 'inline label - always visible', '사고 이력(건)': 'inline label - always visible', });
lyr___v1_4.set('fieldLabels', {'fid': 'hidden field', '대피장소명': 'inline label - always visible', '도로명주소': 'inline label - always visible', '수용인원(명)': 'inline label - always visible', '지정 구·군': 'inline label - always visible', });
lyr___v1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});