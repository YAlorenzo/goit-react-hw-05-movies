"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[989],{989:function(e,t,i){i.r(t);var s=i(439),_=i(791),o=i(689),l=i(212),n=i(184);t.default=function(){var e=(0,_.useState)([]),t=(0,s.Z)(e,2),i=t[0],r=t[1],v=(0,o.UO)().movieId;return fetch("https://api.themoviedb.org/3/movie/".concat(v,"/reviews?api_key=f95d72194aa7d46701b715dc087a6994")).then((function(e){return e.json()})).then((function(e){r(e.results)})).catch((function(e){console.log(e)})),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{className:l.Z.list_reviews,children:i.map((function(e){var t=e.author,i=e.content;return(0,n.jsxs)("li",{className:l.Z.list_reviews__item,children:[(0,n.jsxs)("p",{className:l.Z.titleRev,children:["user: ",(0,n.jsx)("span",{className:l.Z.span,children:t})]}),(0,n.jsxs)("p",{className:l.Z.titleRev,children:["review: ",(0,n.jsx)("span",{className:l.Z.span,children:i})]})]})}))})})}},212:function(e,t){t.Z={containerPoster:"movieStyles_containerPoster__JjW3d",container:"movieStyles_container__1OSpS",movie_title:"movieStyles_movie_title__Vc5Tj",title:"movieStyles_title__6rPox",movie_info_container:"movieStyles_movie_info_container__tUFZH",movie_info:"movieStyles_movie_info__rleub",span:"movieStyles_span__GwPhM",overview_title:"movieStyles_overview_title__Qp-nr",overview:"movieStyles_overview__OZHuJ",photo:"movieStyles_photo__+6SY1",cast_list:"movieStyles_cast_list__rsciD",buttons:"movieStyles_buttons__8DWU5",cast_rev:"movieStyles_cast_rev__vilDJ",list_reviews:"movieStyles_list_reviews__l4dgr",list_reviews__item:"movieStyles_list_reviews__item__i1Sl4",titleRev:"movieStyles_titleRev__SeHkq"}}}]);
//# sourceMappingURL=989.ff8b17a2.chunk.js.map