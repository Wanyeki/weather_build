(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"save_search",(function(){return i})),a.d(t,"get_saved",(function(){return l}));var r=a(16),s=a.n(r),n=a(25),c=a(104).firestore;a(51);function i(e,t,a){return o.apply(this,arguments)}function o(){return(o=Object(n.a)(s.a.mark((function e(t,a,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.collection("users").doc(t).collection("searches").doc(a),e.next=3,n.set({place:a,coordinates:r});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(s.a.mark((function e(t){var a,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.collection("users").doc(t).collection("searches"),e.next=3,a.get();case 3:return r=e.sent,n=[],r.forEach((function(e){var t=e.data();t.id=e.id,n.push(t)})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},104:function(e,t,a){"use strict";a.r(t),a.d(t,"storage",(function(){return n})),a.d(t,"firestore",(function(){return c})),a.d(t,"auth",(function(){return i})),a.d(t,"fireb",(function(){return o})),a.d(t,"timestamp",(function(){return l}));var r=a(23),s=r.a.initializeApp({apiKey:"AIzaSyBnTdbA70LBf2FiQchk5B-X8F4BI6R_las",authDomain:"weatherfs.firebaseapp.com",projectId:"weatherfs",storageBucket:"weatherfs.appspot.com",messagingSenderId:"260894720720",appId:"1:260894720720:web:04bdc40d8ebc4bd6b9d4d5",measurementId:"G-4FZQ0BV96L"}),n=r.a.storage(),c=r.a.firestore(),i=s.auth(),o=r.a,l=r.a.firestore.FieldValue.serverTimestamp();c.enablePersistence().catch((function(e){console.log("failed")}))},109:function(e,t,a){"use strict";a.r(t);var r=a(5),s=a.n(r),n=a(15),c=a.n(n),i=(a(32),a(16)),o=a.n(i),l=a(25),h=a(9),u=a(10),p=a(12),d=a(11),j=a(2),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e.componentDidMount=function(){var t=new Date;e.setState({hr:t.getHours(),min:t.getMinutes()})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"time",children:Object(j.jsxs)("div",{className:"time_wrapper",children:[Object(j.jsxs)("div",{className:"now",children:[this.state.hr,":",this.state.min]}),Object(j.jsx)("div",{className:"today",children:"Tuesday, August 17, 2021"})]})})}}]),a}(r.Component),m=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("div",{className:"search_wrapper",children:Object(j.jsx)("input",{type:"search",onKeyPress:function(t){console.log(t.key),"Enter"==t.key&&e.props.search_city(t.target.value)},placeholder:"search for a place"})})})}}]),a}(r.Component),O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"city_name",children:Object(j.jsxs)("div",{className:"cityWrapper",children:[Object(j.jsx)("div",{className:"ctname",children:this.props.weather.name?this.props.weather.name:"Search"}),Object(j.jsx)("br",{}),this.props.weather.name&&Object(j.jsxs)("div",{className:"lat_lng",children:["lat: ",this.props.weather.coord.lat," , lng: ",this.props.weather.coord.lon]}),this.props.weather.name&&Object(j.jsx)("img",{className:"weth_icon2",src:"http://openweathermap.org/img/wn/"+this.props.weather.weather[0].icon+"@2x.png",alt:""}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn",onClick:function(t){e.props.get_saved()},children:"Saved locations"})]})})}}]),a}(r.Component),g=a(53),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"gmap",children:Object(j.jsx)(g.a,{bootstrapURLKeys:{key:this.props.auth_key},defaultCenter:this.props.coordinates,defaultZoom:this.props.zoom,children:this.props.children})})}}]),a}(r.Component),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"bottom_part",children:Object(j.jsx)("div",{className:"bottom_wrapper"})})}}]),a}(r.Component),x=(a(61),"data:image/png;base64,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"),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"overlay",children:[this.props.weather.main&&Object(j.jsxs)("div",{className:"overlay_wrapper",children:[Object(j.jsx)("div",{className:"title",children:this.props.weather.name}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"det",children:["Humidity: ",Object(j.jsxs)("span",{children:[this.props.weather.main.humidity,"%"]})," "]}),Object(j.jsxs)("div",{className:"det",children:["Temp: ",Object(j.jsxs)("span",{children:[this.props.weather.main.temp," \xb0C"]})," "]}),Object(j.jsxs)("div",{className:"det",children:["Pressure: ",Object(j.jsxs)("span",{children:[this.props.weather.main.pressure," pa"]})," "]}),Object(j.jsxs)("div",{className:"det",children:["Wind: ",Object(j.jsxs)("span",{children:[this.props.weather.wind.speed," km/h"]})," "]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"bd",children:[Object(j.jsx)("img",{className:"weth_icon",src:"http://openweathermap.org/img/wn/"+this.props.weather.weather[0].icon+"@2x.png",alt:""}),Object(j.jsx)("div",{className:"the_weather",children:this.props.weather.weather[0].description})]})]}),this.props.weather.main&&Object(j.jsx)("img",{class:"the_marker",src:x,alt:""})]})}}]),a}(r.Component),y=(a(62),a.p+"static/media/loader.f53aa23f.gif"),A=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"loader",children:[this.props.loading_text&&Object(j.jsx)("span",{children:this.props.loading_text}),Object(j.jsx)("img",{src:y,alt:""})]})}}]),a}(r.Component),I=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"marker",children:Object(j.jsx)("img",{class:"the_marker",src:x,alt:""})})}}]),a}(r.Component),k=a(63),N=a(83),S=a(103),E=a(51),M=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={coordinates:{lat:.5,lng:38.6666},zoom:7,weather:{},loading:!1,searches:null},e.auth_key="AIzaSyCxuLSbuIzxXlenXdw5Go3gclhUjChl2Go",e.search_city=function(t){e.setState({searches:null}),e.show_loading(),N().geocode(t).end((function(t,a){if(t&&alert("cant connect"),a[0]){var r={lat:a[0].lat,lng:a[0].lon};e.setState({coordinates:r}),console.log(r),e.get_weather(r)}else alert("No matches found"),e.close_loading()}))},e.get_weather=function(t){k.setCoordinate(t.lat,t.lng),k.setUnits("metric"),k.setLang("en"),k.setAPPID("daaf28796af7382e3437583ceeaf7213"),k.getAllWeather((function(a,r){console.log(r),e.setState({weather:r}),console.log(r),e.close_loading();var s=localStorage.getItem("user_id");s||(s=E.v4(),localStorage.setItem("user_id",s)),S.save_search(s,r.name,t)}))},e.show_loading=function(){e.setState({loading:!0})},e.close_loading=function(){e.setState({loading:!1})},e.get_saved=Object(l.a)(o.a.mark((function t(){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.show_loading(),a=localStorage.getItem("user_id"),t.next=4,S.get_saved(a);case 4:r=t.sent,e.setState({searches:r}),e.close_loading();case 7:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("div",{className:"top_part",children:[Object(j.jsx)(b,{}),Object(j.jsx)(m,{search_city:this.search_city}),Object(j.jsx)(O,{weather:this.state.weather,get_saved:this.get_saved})]}),Object(j.jsxs)(f,{coordinates:this.state.coordinates,zoom:this.state.zoom,auth_key:this.auth_key,children:[Object(j.jsx)(w,{weather:this.state.weather,lat:this.state.coordinates.lat,lng:this.state.coordinates.lng}),this.state.searches&&this.state.searches.map((function(e){return Object(j.jsx)(I,{lat:e.coordinates.lat,lng:e.coordinates.lng})}))]}),Object(j.jsx)(v,{weather:this.state.weather}),this.state.loading&&Object(j.jsx)(A,{})]})}}]),a}(r.Component);var G=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(M,{})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),D()},32:function(e,t,a){},62:function(e,t,a){},67:function(e,t){},69:function(e,t){},99:function(e,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.79b8d78b.chunk.js.map