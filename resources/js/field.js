import VueAMap from 'vue-amap';
Nova.booting((Vue, router, store) => {
    Vue.component('index-amap', require('./components/IndexField'))
    Vue.component('detail-amap', require('./components/DetailField'))
    Vue.component('form-amap', require('./components/FormField'))



    Vue.use(VueAMap);
    VueAMap.initAMapApiLoader({
        key: 'eeb7e7e703b57e8d106f6f352563bd71',
        plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType','Geocoder','Geolocation']
    });
})
