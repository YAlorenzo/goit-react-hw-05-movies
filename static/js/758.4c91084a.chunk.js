"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{758:function(e,s,t){t.r(s);var i=t(439),a=t(689),n=t(87),l=t(791),o=t(212),c=t(184);s.default=function(){var e=(0,l.useState)(""),s=(0,i.Z)(e,2),t=s[0],r=s[1],_=(0,l.useState)([]),v=(0,i.Z)(_,2),m=v[0],h=v[1],d=(0,l.useState)([]),p=(0,i.Z)(d,2),u=p[0],j=p[1],x=(0,a.UO)().movieId;(0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(x,"?api_key=f95d72194aa7d46701b715dc087a6994")).then((function(e){return e.json()})).then((function(e){console.log(e),r(e),h(e.production_countries),j(e.genres)})).catch((function(e){console.log(e)}))}),[x]);var Z,S="https://image.tmdb.org/t/p/original".concat(t.backdrop_path);return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:o.Z.containerPoster,children:(0,c.jsx)("img",{src:S,alt:"poster",width:"100%",height:"500"})}),(0,c.jsxs)("div",{className:o.Z.container,children:[(0,c.jsx)("p",{className:o.Z.movie_title,children:t.title}),(0,c.jsxs)("div",{className:o.Z.movie_info_container,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:"movie",width:"300",height:"360"}),(0,c.jsxs)("div",{className:o.Z.movie_info,children:[(0,c.jsxs)("p",{className:o.Z.title,children:["Timing: ",(0,c.jsx)("span",{className:o.Z.span,children:(Z=t.runtime,Math.trunc(Z/60)+"h "+Z%60+"m")})]}),(0,c.jsxs)("p",{className:o.Z.title,children:["Production Countries:",m.map((function(e){var s=e.name;return(0,c.jsx)("span",{className:o.Z.span,children:s})}))]}),(0,c.jsxs)("p",{className:o.Z.title,children:["Release: ",(0,c.jsx)("span",{className:o.Z.span,children:t.release_date})]}),(0,c.jsxs)("p",{className:o.Z.title,children:["Geners: ",u.map((function(e){var s=e.name;return(0,c.jsx)("span",{className:o.Z.span,children:s})}))]}),(0,c.jsxs)("p",{className:o.Z.title,children:["Rating: ",(0,c.jsx)("span",{className:o.Z.span,children:t.vote_average})]}),(0,c.jsxs)("p",{className:o.Z.title,children:["Total Votes: ",(0,c.jsx)("span",{className:o.Z.span,children:t.vote_count})]})]})]}),(0,c.jsxs)("div",{className:o.Z.overview_section,children:[(0,c.jsx)("p",{className:o.Z.overview_title,children:"Overview"}),(0,c.jsx)("p",{className:o.Z.overview,children:t.overview})]}),(0,c.jsx)(n.OL,{to:"Cast",className:o.Z.cast_rev,children:"Cast"}),(0,c.jsx)(n.OL,{to:"Reviews",className:o.Z.cast_rev,children:"Reviews"}),(0,c.jsx)(l.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading subpage..."}),children:(0,c.jsx)(a.j3,{})})]})]})}},212:function(e,s){s.Z={containerPoster:"movieStyles_containerPoster__JjW3d",container:"movieStyles_container__1OSpS",movie_title:"movieStyles_movie_title__Vc5Tj",title:"movieStyles_title__6rPox",movie_info_container:"movieStyles_movie_info_container__tUFZH",movie_info:"movieStyles_movie_info__rleub",span:"movieStyles_span__GwPhM",overview_title:"movieStyles_overview_title__Qp-nr",overview:"movieStyles_overview__OZHuJ",photo:"movieStyles_photo__+6SY1",cast_list:"movieStyles_cast_list__rsciD",buttons:"movieStyles_buttons__8DWU5",cast_rev:"movieStyles_cast_rev__vilDJ",list_reviews:"movieStyles_list_reviews__l4dgr",list_reviews__item:"movieStyles_list_reviews__item__i1Sl4",titleRev:"movieStyles_titleRev__SeHkq"}}}]);
//# sourceMappingURL=758.4c91084a.chunk.js.map