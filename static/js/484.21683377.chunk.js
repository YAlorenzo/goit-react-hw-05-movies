"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[484],{484:function(e,t,_){_.r(t);var i=_(439),o=_(791),s=_(689),l=_(212),n=_(184);t.default=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),_=t[0],a=t[1],c=(0,s.UO)().movieId;return fetch("https://api.themoviedb.org/3/movie/".concat(c,"/credits?api_key=f95d72194aa7d46701b715dc087a6994")).then((function(e){return e.json()})).then((function(e){a(e.cast.splice(0,10))})).catch((function(e){console.log(e)})),(0,n.jsx)("div",{className:l.Z.container,children:(0,n.jsx)("ul",{className:l.Z.cast_list,children:_.map((function(e){var t=e.cast_id,_=e.original_name,i=e.profile_path;return(0,n.jsxs)("li",{className:l.Z.cast_list__item,children:[null===i?(0,n.jsx)("div",{className:l.Z.box_null,children:"Opps, no photo"}):(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(i),className:l.Z.photo,alt:"phot",width:"100",height:"150"}),(0,n.jsx)("p",{children:_})]},t)}))})})}},212:function(e,t){t.Z={containerPoster:"movieStyles_containerPoster__JjW3d",container:"movieStyles_container__1OSpS",movie_title:"movieStyles_movie_title__Vc5Tj",title:"movieStyles_title__6rPox",movie_info_container:"movieStyles_movie_info_container__tUFZH",movie_info:"movieStyles_movie_info__rleub",span:"movieStyles_span__GwPhM",overview_title:"movieStyles_overview_title__Qp-nr",overview:"movieStyles_overview__OZHuJ",photo:"movieStyles_photo__+6SY1",cast_list:"movieStyles_cast_list__rsciD",buttons:"movieStyles_buttons__8DWU5",cast_rev:"movieStyles_cast_rev__vilDJ",list_reviews:"movieStyles_list_reviews__l4dgr",list_reviews__item:"movieStyles_list_reviews__item__i1Sl4",titleRev:"movieStyles_titleRev__SeHkq",nuv_cast_rev:"movieStyles_nuv_cast_rev__ZfR6o",box_null:"movieStyles_box_null__Yc+0b",button_home:"movieStyles_button_home__hd62h"}}}]);
//# sourceMappingURL=484.21683377.chunk.js.map