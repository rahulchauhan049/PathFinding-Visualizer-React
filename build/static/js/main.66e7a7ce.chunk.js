(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{22:function(n,t,e){},23:function(n,t,e){},24:function(n,t,e){},26:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i),r=e(16),c=e.n(r),s=(e(22),e(23),e(4)),a=e(14),u=(e(24),e(1));var f=function(n){var t=n.col,e=n.isFinish,i=n.isStart,o=n.isWall,r=n.onMouseDown,c=n.onMouseEnter,s=n.onMouseUp,a=n.row,f=e?"node-finish":i?"node-start":o?"node-wall":"";return Object(u.jsx)("div",{id:"node-".concat(a,"-").concat(t),className:"node ".concat(f),onMouseDown:function(){return r(a,t)},onMouseEnter:function(){return c(a,t)},onMouseUp:function(){return s()}})},l=(e(26),e(10));function d(n,t,e){var i=[];t.distance=0;for(var o=function(n){var t,e=[],i=Object(l.a)(n);try{for(i.s();!(t=i.n()).done;){var o,r=t.value,c=Object(l.a)(r);try{for(c.s();!(o=c.n()).done;){var s=o.value;e.push(s)}}catch(a){c.e(a)}finally{c.f()}}}catch(a){i.e(a)}finally{i.f()}return e}(n);o.length;){v(o);var r=o.shift();if(!r.isWall){if(r.distance===1/0)return i;if(r.isVisited=!0,i.push(r),r===e)return i;h(r,n)}}}function v(n){n.sort((function(n,t){return n.distance-t.distance}))}function h(n,t){var e,i=function(n,t){var e=[],i=n.col,o=n.row;o>0&&e.push(t[o-1][i]);o<t.length-1&&e.push(t[o+1][i]);i>0&&e.push(t[o][i-1]);i<t[0].length-1&&e.push(t[o][i+1]);return e.filter((function(n){return!n.isVisited}))}(n,t),o=Object(l.a)(i);try{for(o.s();!(e=o.n()).done;){var r=e.value;r.distance=n.distance+1,r.previousNode=n}}catch(c){o.e(c)}finally{o.f()}}var j=e(41),p=function(n,t){return{col:n,row:t,isStart:10===t&&15===n,isFinish:10===t&&35===n,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},b=function(n,t,e){var i=n.slice(),o=i[t][e],r=Object(a.a)(Object(a.a)({},o),{},{isWall:!o.isWall});return i[t][e]=r,i};var O=function(){var n=Object(i.useState)([]),t=Object(s.a)(n,2),e=t[0],o=t[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),a=c[0],l=c[1];Object(i.useEffect)((function(){var n=function(){for(var n=[],t=0;t<20;t++){for(var e=[],i=0;i<50;i++)e.push(p(i,t)),console.log(p(i,t).isFinish);n.push(e)}return n}();o(n)}),[]);var v=function(n){for(var t=function(t){setTimeout((function(){var e=n[t];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path"}),50*t)},e=0;e<n.length;e++)t(e)},h=function(){var n=e[10][15],t=e[10][35],i=d(e,n,t),o=function(n){for(var t=[],e=n;null!==e;)t.unshift(e),e=e.previousNode;return t}(t);!function(n,t){for(var e=function(e){if(e===n.length)return setTimeout((function(){v(t)}),10*e),{v:void 0};setTimeout((function(){var t=n[e];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*e)},i=0;i<=n.length;i++){var o=e(i);if("object"===typeof o)return o.v}}(i,o)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{variant:"contained",onClick:function(){h()},children:"Visualize Dijkstra's Algorithm"}),Object(u.jsx)("div",{className:"grid",children:e.map((function(n,t){return Object(u.jsx)("div",{children:n.map((function(n,t){var i=n.row,r=n.col,c=n.isFinish,s=n.isStart,d=n.isWall;return Object(u.jsx)(f,{col:r,isStart:s,isFinish:c,isWall:d,mouseIsPressed:a,onMouseDown:function(n,t){return function(n,t){var i=b(e,n,t);o(i),l(!0)}(n,t)},onMouseEnter:function(n,t){return function(n,t){if(a){var i=b(e,n,t);o(i)}}(n,t)},onMouseUp:function(){l(!1)},row:i},t)}))},t)}))})]})};var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{})})};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.66e7a7ce.chunk.js.map