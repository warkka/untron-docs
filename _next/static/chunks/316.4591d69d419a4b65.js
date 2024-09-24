"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{1316:function(e,n,r){r.d(n,{bK:function(){return e8}});var t,o=r(4678),i=r(303),u=r(3625),a=r(547),d=r(1243),f=r(4917),c=r(3784),s=r(5625);class g{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return h(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&h(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,r=n._prev;r!==n;)e.push(JSON.stringify(r,v)),r=r._prev;return"["+e.join(", ")+"]"}}function h(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function v(e,n){if("_next"!==e&&"_prev"!==e)return n}var l=a.Z(1);function Z(e,n,r,t,i){var u=i?[]:void 0;return o.Z(e.inEdges(t.v),function(t){var o=e.edge(t),a=e.node(t.v);i&&u.push({v:t.v,w:t.w}),a.out-=o,p(n,r,a)}),o.Z(e.outEdges(t.v),function(t){var o=e.edge(t),i=t.w,u=e.node(i);u.in-=o,p(n,r,u)}),e.removeNode(t.v),u}function p(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}var w=r(7826),m=r(2153),b=r(8269),y=r(1005),k=function(e,n,r){for(var t=-1,o=e.length;++t<o;){var i=e[t],u=n(i);if(null!=u&&(void 0===a?u==u&&!(0,y.Z)(u):r(u,a)))var a=u,d=i}return d},x=function(e,n){return e>n},E=r(5165),N=function(e){return e&&e.length?k(e,E.Z,x):void 0},_=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0},I=r(9510),R=r(323),M=r(8891),T=function(e,n){var r={};return n=(0,M.Z)(n,3),(0,R.Z)(e,function(e,t,o){(0,I.Z)(r,t,n(e,t,o))}),r},L=r(4279),C=function(e,n){return e<n},O=function(e){return e&&e.length?k(e,E.Z,C):void 0},P=r(1917),S=function(){return P.Z.Date.now()};function j(e,n,r,t){var o;do o=i.Z(t);while(e.hasNode(o));return r.dummy=n,e.setNode(o,r),o}function F(e){var n=new s.k({multigraph:e.isMultigraph()}).setGraph(e.graph());return o.Z(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),o.Z(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function G(e,n){var r,t,o=e.x,i=e.y,u=n.x-o,a=n.y-i,d=e.width/2,f=e.height/2;if(!u&&!a)throw Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*d>Math.abs(u)*f?(a<0&&(f=-f),r=f*u/a,t=f):(u<0&&(d=-d),r=d,t=d*a/u),{x:o+r,y:i+t}}function V(e){var n=f.Z(c.Z(q(e)+1),function(){return[]});return o.Z(e.nodes(),function(r){var t=e.node(r),o=t.rank;L.Z(o)||(n[o][t.order]=r)}),n}function B(e,n,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),j(e,"border",o,n)}function q(e){return N(f.Z(e.nodes(),function(n){var r=e.node(n).rank;if(!L.Z(r))return r}))}function Y(e,n){var r=S();try{return n()}finally{console.log(e+" time: "+(S()-r)+"ms")}}function z(e,n){return n()}function A(e,n,r,t,o,i){var u=o[n][i-1],a=j(e,"border",{width:0,height:0,rank:i,borderType:n},r);o[n][i]=a,e.setParent(a,t),u&&e.setEdge(u,a,{weight:1})}function D(e){o.Z(e.nodes(),function(n){$(e.node(n))}),o.Z(e.edges(),function(n){$(e.edge(n))})}function $(e){var n=e.width;e.width=e.height,e.height=n}function J(e){e.y=-e.y}function K(e){var n=e.x;e.x=e.y,e.y=n}var H=function(e,n){return e&&e.length?k(e,(0,M.Z)(n,2),C):void 0};function Q(e){var n={};o.Z(e.sources(),function r(t){var o=e.node(t);if(u.Z(n,t))return o.rank;n[t]=!0;var i=O(f.Z(e.outEdges(t),function(n){return r(n.w)-e.edge(n).minlen}));return(i===Number.POSITIVE_INFINITY||null==i)&&(i=0),o.rank=i})}function U(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function W(e){var n,r,t=new s.k({directed:!1}),i=e.nodes()[0],u=e.nodeCount();for(t.setNode(i,{});o.Z(t.nodes(),function n(r){o.Z(e.nodeEdges(r),function(o){var i=o.v,u=r===i?o.w:i;t.hasNode(u)||U(e,o)||(t.setNode(u,{}),t.setEdge(r,u,{}),n(u))})}),t.nodeCount()<u;)n=function(e,n){return H(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return U(n,r)})}(t,e),r=t.hasNode(n.v)?U(e,n):-U(e,n),function(e,n,r){o.Z(e.nodes(),function(e){n.node(e).rank+=r})}(t,e,r);return t}var X=r(8465),ee=r(1289),en=r(8489),er=r(7204),et=function(e){var n=(0,er.Z)(e),r=n%1;return n==n?r?n-r:n:0},eo=Math.max,ei=(t=function(e,n,r){var t=null==e?0:e.length;if(!t)return -1;var o=null==r?0:et(r);return o<0&&(o=eo(t+o,0)),(0,en.Z)(e,(0,M.Z)(n,3),o)},function(e,n,r){var o=Object(e);if(!(0,X.Z)(e)){var i=(0,M.Z)(n,3);e=(0,ee.Z)(e),n=function(e){return i(o[e],e,o)}}var u=t(e,n,r);return u>-1?o[i?e[u]:u]:void 0}),eu=r(715);a.Z(1),a.Z(1);var ea=r(6986),ed=r(8318),ef=r(5378),ec=r(4837),es=r(7977),eg=(0,r(4365).Z)("length"),eh=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),ev="\ud800-\udfff",el="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",eZ="\ud83c[\udffb-\udfff]",ep="[^"+ev+"]",ew="(?:\ud83c[\udde6-\uddff]){2}",em="[\ud800-\udbff][\udc00-\udfff]",eb="(?:"+el+"|"+eZ+")?",ey="[\\ufe0e\\ufe0f]?",ek="(?:\\u200d(?:"+[ep,ew,em].join("|")+")"+ey+eb+")*",ex=RegExp(eZ+"(?="+eZ+")|(?:"+[ep+el+"?",el,ew,em,"["+ev+"]"].join("|")+")"+(ey+eb+ek),"g"),eE=function(e){for(var n=ex.lastIndex=0;ex.test(e);)++n;return n};function eN(e,n,r){ec.Z(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return o.Z(n,function(n){if(!e.hasNode(n))throw Error("Graph does not have node: "+n);(function e(n,r,t,i,a,d){!u.Z(i,r)&&(i[r]=!0,t||d.push(r),o.Z(a(r),function(r){e(n,r,t,i,a,d)}),t&&d.push(r))})(e,n,"post"===r,a,t,i)}),i}function e_(e){n=e,r=new s.k().setGraph(n.graph()),o.Z(n.nodes(),function(e){r.setNode(e,n.node(e))}),o.Z(n.edges(),function(e){var t=r.edge(e.v,e.w)||{weight:0,minlen:1},o=n.edge(e);r.setEdge(e.v,e.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})}),Q(e=r);var n,r,t,i,u=W(e);for(eM(u),eI(u,e);t=eT(u);)i=eL(u,e,t),eC(u,e,t,i)}function eI(e,n){var r=eN(e,e.nodes(),"post");r=r.slice(0,r.length-1),o.Z(r,function(r){var t;t=e.node(r).parent,e.edge(r,t).cutvalue=eR(e,n,r)})}function eR(e,n,r){var t=e.node(r).parent,i=!0,u=n.edge(r,t),a=0;return u||(i=!1,u=n.edge(t,r)),a=u.weight,o.Z(n.nodeEdges(r),function(o){var u=o.v===r,d=u?o.w:o.v;if(d!==t){var f=u===i,c=n.edge(o).weight;if(a+=f?c:-c,e.hasEdge(r,d)){var s=e.edge(r,d).cutvalue;a+=f?-s:s}}}),a}function eM(e,n){arguments.length<2&&(n=e.nodes()[0]),function e(n,r,t,i,a){var d=t,f=n.node(i);return r[i]=!0,o.Z(n.neighbors(i),function(o){u.Z(r,o)||(t=e(n,r,t,o,i))}),f.low=d,f.lim=t++,a?f.parent=a:delete f.parent,t}(e,{},1,n)}function eT(e){return ei(e.edges(),function(n){return e.edge(n).cutvalue<0})}function eL(e,n,r){var t=r.v,o=r.w;n.hasEdge(t,o)||(t=r.w,o=r.v);var i=e.node(t),u=e.node(o),a=i,d=!1;return i.lim>u.lim&&(a=u,d=!0),H(eu.Z(n.edges(),function(n){return d===eO(e,e.node(n.v),a)&&d!==eO(e,e.node(n.w),a)}),function(e){return U(n,e)})}function eC(e,n,r,t){var i,u,a=r.v,d=r.w;e.removeEdge(a,d),e.setEdge(t.v,t.w,{}),eM(e),eI(e,n),i=ei(e.nodes(),function(e){return!n.node(e).parent}),u=(u=eN(e,i,"pre")).slice(1),o.Z(u,function(r){var t=e.node(r).parent,o=n.edge(r,t),i=!1;o||(o=n.edge(t,r),i=!0),n.node(r).rank=n.node(t).rank+(i?o.minlen:-o.minlen)})}function eO(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}Error(),r(8805),e_.initLowLimValues=eM,e_.initCutValues=eI,e_.calcCutValue=eR,e_.leaveEdge=eT,e_.enterEdge=eL,e_.exchangeEdges=eC;var eP=r(3213),eS=r(7015),ej=r(6938),eF=r(6049),eG=function(e,n,r){for(var t=-1,o=e.length,i=n.length,u={};++t<o;){var a=t<i?n[t]:void 0;r(u,e[t],a)}return u},eV=r(9115),eB=r(7956),eq=r(7198),eY=r(605),ez=function(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e},eA=r(7042),eD=function(e,n){if(e!==n){var r=void 0!==e,t=null===e,o=e==e,i=(0,y.Z)(e),u=void 0!==n,a=null===n,d=n==n,f=(0,y.Z)(n);if(!a&&!f&&!i&&e>n||i&&u&&d&&!a&&!f||t&&u&&d||!r&&d||!o)return 1;if(!t&&!i&&!f&&e<n||f&&r&&o&&!t&&!i||a&&r&&o||!u&&o||!d)return -1}return 0},e$=function(e,n,r){for(var t=-1,o=e.criteria,i=n.criteria,u=o.length,a=r.length;++t<u;){var d=eD(o[t],i[t]);if(d){if(t>=a)return d;return d*("desc"==r[t]?-1:1)}}return e.index-n.index},eJ=function(e,n,r){n=n.length?(0,eB.Z)(n,function(e){return(0,ec.Z)(e)?function(n){return(0,eq.Z)(n,1===e.length?e[0]:e)}:e}):[E.Z];var t=-1;return n=(0,eB.Z)(n,(0,eA.Z)(M.Z)),ez((0,eY.Z)(e,function(e,r,o){return{criteria:(0,eB.Z)(n,function(n){return n(e)}),index:++t,value:e}}),function(e,n){return e$(e,n,r)})},eK=r(8702),eH=r(2834),eQ=(0,eK.Z)(function(e,n){if(null==e)return[];var r=n.length;return r>1&&(0,eH.Z)(e,n[0],n[1])?n=[]:r>2&&(0,eH.Z)(n[0],n[1],n[2])&&(n=[n[0]]),eJ(e,(0,eV.Z)(n,1),[])});function eU(e,n,r){for(var t;n.length&&(t=_(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function eW(e,n,r){return f.Z(n,function(n){var t,a;return t=function(e){for(var n;e.hasNode(n=i.Z("_root")););return n}(e),a=new s.k({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(n){return e.node(n)}),o.Z(e.nodes(),function(i){var d=e.node(i),f=e.parent(i);(d.rank===n||d.minRank<=n&&n<=d.maxRank)&&(a.setNode(i),a.setParent(i,f||t),o.Z(e[r](i),function(n){var r=n.v===i?n.w:n.v,t=a.edge(r,i),o=L.Z(t)?0:t.weight;a.setEdge(r,i,{weight:e.edge(n).weight+o})}),u.Z(d,"minRank")&&a.setNode(i,{borderLeft:d.borderLeft[n],borderRight:d.borderRight[n]}))}),a})}function eX(e,n){o.Z(n,function(n){o.Z(n,function(n,r){e.node(n).order=r})})}var e0=r(5672),e1=r(8042),e2=r(6930);function e3(e,n,r){if(n>r){var t=n;n=r,r=t}var o=e[n];o||(e[n]=o={}),o[r]=!0}function e8(e,n){var r=n&&n.debugTiming?Y:z;r("layout",function(){var n=r("  buildLayoutGraph",function(){var n,r;return n=new s.k({multigraph:!0,compound:!0}),r=no(e.graph()),n.setGraph(w.Z({},e4,nt(r,e5),m.Z(r,e6))),o.Z(e.nodes(),function(r){var t=no(e.node(r));n.setNode(r,b.Z(nt(t,e7),e9)),n.setParent(r,e.parent(r))}),o.Z(e.edges(),function(r){var t=no(e.edge(r));n.setEdge(r,w.Z({},nn,nt(t,ne),m.Z(t,nr)))}),n});r("  runLayout",function(){r("    makeSpaceForEdgeLabels",function(){var e;e=n.graph(),e.ranksep/=2,o.Z(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)})}),r("    removeSelfEdges",function(){o.Z(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e)}})}),r("    acyclic",function(){var e,r,t,a;e="greedy"===n.graph().acyclicer?function(e,n){if(1>=e.nodeCount())return[];var r,t,i,u,a,h,v=(r=n||l,t=new s.k,i=0,u=0,o.Z(e.nodes(),function(e){t.setNode(e,{v:e,in:0,out:0})}),o.Z(e.edges(),function(e){var n=t.edge(e.v,e.w)||0,o=r(e);t.setEdge(e.v,e.w,n+o),u=Math.max(u,t.node(e.v).out+=o),i=Math.max(i,t.node(e.w).in+=o)}),a=c.Z(u+i+3).map(function(){return new g}),h=i+1,o.Z(t.nodes(),function(e){p(a,h,t.node(e))}),{graph:t,buckets:a,zeroIdx:h}),w=function(e,n,r){for(var t,o=[],i=n[n.length-1],u=n[0];e.nodeCount();){for(;t=u.dequeue();)Z(e,n,r,t);for(;t=i.dequeue();)Z(e,n,r,t);if(e.nodeCount()){for(var a=n.length-2;a>0;--a)if(t=n[a].dequeue()){o=o.concat(Z(e,n,r,t,!0));break}}}return o}(v.graph,v.buckets,v.zeroIdx);return d.Z(f.Z(w,function(n){return e.outEdges(n.v,n.w)}))}(n,function(e){return n.edge(e).weight}):(r=[],t={},a={},o.Z(n.nodes(),function e(i){u.Z(a,i)||(a[i]=!0,t[i]=!0,o.Z(n.outEdges(i),function(n){u.Z(t,n.w)?r.push(n):e(n.w)}),delete t[i])}),r),o.Z(e,function(e){var r=n.edge(e);n.removeEdge(e),r.forwardName=e.name,r.reversed=!0,n.setEdge(e.w,e.v,r,i.Z("rev"))})}),r("    nestingGraph.run",function(){var e,r,t,i,u;e=j(n,"root",{},"_root"),u={},o.Z(n.children(),function(e){!function e(r,t){var i=n.children(r);i&&i.length&&o.Z(i,function(n){e(n,t+1)}),u[r]=t}(e,1)}),t=2*(r=N(eP.Z(u))-1)+1,n.graph().nestingRoot=e,o.Z(n.edges(),function(e){n.edge(e).minlen*=t}),i=eS.Z(n.edges(),function(e,r){return e+n.edge(r).weight},0)+1,o.Z(n.children(),function(a){(function e(n,r,t,i,u,a,d){var f=n.children(d);if(!f.length){d!==r&&n.setEdge(r,d,{weight:0,minlen:t});return}var c=B(n,"_bt"),s=B(n,"_bb"),g=n.node(d);n.setParent(c,d),g.borderTop=c,n.setParent(s,d),g.borderBottom=s,o.Z(f,function(o){e(n,r,t,i,u,a,o);var f=n.node(o),g=f.borderTop?f.borderTop:o,h=f.borderBottom?f.borderBottom:o,v=f.borderTop?i:2*i,l=g!==h?1:u-a[d]+1;n.setEdge(c,g,{weight:v,minlen:l,nestingEdge:!0}),n.setEdge(h,s,{weight:v,minlen:l,nestingEdge:!0})}),n.parent(d)||n.setEdge(r,c,{weight:0,minlen:u+a[d]})})(n,e,t,i,r,u,a)}),n.graph().nodeRankFactor=t}),r("    rank",function(){!function(e){switch(e.graph().ranker){case"network-simplex":default:e_(e);break;case"tight-tree":Q(e),W(e);break;case"longest-path":Q(e)}}(F(n))}),r("    injectEdgeLabelProxies",function(){o.Z(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),o={rank:(n.node(e.w).rank-t.rank)/2+t.rank,e:e};j(n,"edge-proxy",o,"_ep")}})}),r("    removeEmptyRanks",function(){var e,r,t,i;e=O(f.Z(n.nodes(),function(e){return n.node(e).rank})),r=[],o.Z(n.nodes(),function(t){var o=n.node(t).rank-e;r[o]||(r[o]=[]),r[o].push(t)}),t=0,i=n.graph().nodeRankFactor,o.Z(r,function(e,r){L.Z(e)&&r%i!=0?--t:t&&o.Z(e,function(e){n.node(e).rank+=t})})}),r("    nestingGraph.cleanup",function(){var e;e=n.graph(),n.removeNode(e.nestingRoot),delete e.nestingRoot,o.Z(n.edges(),function(e){n.edge(e).nestingEdge&&n.removeEdge(e)})}),r("    normalizeRanks",function(){var e;e=O(f.Z(n.nodes(),function(e){return n.node(e).rank})),o.Z(n.nodes(),function(r){var t=n.node(r);u.Z(t,"rank")&&(t.rank-=e)})}),r("    assignRankMinMax",function(){var e;e=0,o.Z(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=N(e,t.maxRank))}),n.graph().maxRank=e}),r("    removeEdgeLabelProxies",function(){o.Z(n.nodes(),function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}),r("    normalize.run",function(){n.graph().dummyChains=[],o.Z(n.edges(),function(e){(function(e,n){var r,t,o,i=n.v,u=e.node(i).rank,a=n.w,d=e.node(a).rank,f=n.name,c=e.edge(n),s=c.labelRank;if(d!==u+1){for(e.removeEdge(n),o=0,++u;u<d;++o,++u)c.points=[],r=j(e,"edge",t={width:0,height:0,edgeLabel:c,edgeObj:n,rank:u},"_d"),u===s&&(t.width=c.width,t.height=c.height,t.dummy="edge-label",t.labelpos=c.labelpos),e.setEdge(i,r,{weight:c.weight},f),0===o&&e.graph().dummyChains.push(r),i=r;e.setEdge(i,a,{weight:c.weight},f)}})(n,e)})}),r("    parentDummyChains",function(){var e,r;e={},r=0,o.Z(n.children(),function t(i){var u=r;o.Z(n.children(i),t),e[i]={low:u,lim:r++}}),o.Z(n.graph().dummyChains,function(r){for(var t=n.node(r),o=t.edgeObj,i=function(e,n,r,t){var o,i,u=[],a=[],d=Math.min(n[r].low,n[t].low),f=Math.max(n[r].lim,n[t].lim);o=r;do u.push(o=e.parent(o));while(o&&(n[o].low>d||f>n[o].lim));for(i=o,o=t;(o=e.parent(o))!==i;)a.push(o);return{path:u.concat(a.reverse()),lca:i}}(n,e,o.v,o.w),u=i.path,a=i.lca,d=0,f=u[0],c=!0;r!==o.w;){if(t=n.node(r),c){for(;(f=u[d])!==a&&n.node(f).maxRank<t.rank;)d++;f===a&&(c=!1)}if(!c){for(;d<u.length-1&&n.node(f=u[d+1]).minRank<=t.rank;)d++;f=u[d]}n.setParent(r,f),r=n.successors(r)[0]}})}),r("    addBorderSegments",function(){o.Z(n.children(),function e(r){var t=n.children(r),i=n.node(r);if(t.length&&o.Z(t,e),u.Z(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,d=i.maxRank+1;a<d;++a)A(n,"borderLeft","_bl",r,i,a),A(n,"borderRight","_br",r,i,a)}})}),r("    order",function(){!function(e){var n=q(e),r=eW(e,c.Z(1,n+1),"inEdges"),t=eW(e,c.Z(n-1,-1,-1),"outEdges"),i=(a={},g=eu.Z(e.nodes(),function(n){return!e.children(n).length}),h=N(f.Z(g,function(n){return e.node(n).rank})),v=f.Z(c.Z(h+1),function(){return[]}),l=eQ(g,function(n){return e.node(n).rank}),o.Z(l,function n(r){u.Z(a,r)||(a[r]=!0,v[e.node(r).rank].push(r),o.Z(e.successors(r),n))}),v);eX(e,i);for(var a,g,h,v,l,Z,p=Number.POSITIVE_INFINITY,w=0,b=0;b<4;++w,++b){(function(e,n){var r=new s.k;o.Z(e,function(e){var t,i,a,c=e.graph().root,s=function e(n,r,t,i){var a,c,s,g,h,v,l,Z,p,w,b,y=n.children(r),k=n.node(r),x=k?k.borderLeft:void 0,E=k?k.borderRight:void 0,N={};x&&(y=eu.Z(y,function(e){return e!==x&&e!==E}));var _=(a=y,f.Z(a,function(e){var r=n.inEdges(e);if(!r.length)return{v:e};var t=eS.Z(r,function(e,r){var t=n.edge(r),o=n.node(r.v);return{sum:e.sum+t.weight*o.order,weight:e.weight+t.weight}},{sum:0,weight:0});return{v:e,barycenter:t.sum/t.weight,weight:t.weight}}));o.Z(_,function(r){if(n.children(r.v).length){var o=e(n,r.v,t,i);N[r.v]=o,u.Z(o,"barycenter")&&(L.Z(r.barycenter)?(r.barycenter=o.barycenter,r.weight=o.weight):(r.barycenter=(r.barycenter*r.weight+o.barycenter*o.weight)/(r.weight+o.weight),r.weight+=o.weight))}});var I=(c={},o.Z(_,function(e,n){var r=c[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};L.Z(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)}),o.Z(t.edges(),function(e){var n=c[e.v],r=c[e.w];L.Z(n)||L.Z(r)||(r.indegree++,n.out.push(c[e.w]))}),function(e){for(var n=[];e.length;){var r=e.pop();n.push(r),o.Z(r.in.reverse(),function(e){return function(n){!n.merged&&(L.Z(n.barycenter)||L.Z(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}(r)),o.Z(r.out,function(n){return function(r){r.in.push(n),0==--r.indegree&&e.push(r)}}(r))}return f.Z(eu.Z(n,function(e){return!e.merged}),function(e){return m.Z(e,["vs","i","barycenter","weight"])})}(eu.Z(c,function(e){return!e.indegree})));(function(e,n){o.Z(e,function(e){e.vs=d.Z(e.vs.map(function(e){return n[e]?n[e].vs:e}))})})(I,N);var R=(h=(s=function(e){return u.Z(e,"barycenter")},g={lhs:[],rhs:[]},o.Z(I,function(e){s(e)?g.lhs.push(e):g.rhs.push(e)}),g).lhs,v=eQ(g.rhs,function(e){return-e.i}),l=[],Z=0,p=0,w=0,h.sort(function(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}(!!i)),w=eU(l,v,w),o.Z(h,function(e){w+=e.vs.length,l.push(e.vs),Z+=e.barycenter*e.weight,p+=e.weight,w=eU(l,v,w)}),b={vs:d.Z(l)},p&&(b.barycenter=Z/p,b.weight=p),b);if(x&&(R.vs=d.Z([x,R.vs,E]),n.predecessors(x).length)){var M=n.node(n.predecessors(x)[0]),T=n.node(n.predecessors(E)[0]);u.Z(R,"barycenter")||(R.barycenter=0,R.weight=0),R.barycenter=(R.barycenter*R.weight+M.order+T.order)/(R.weight+2),R.weight+=2}return R}(e,c,r,n);o.Z(s.vs,function(n,r){e.node(n).order=r}),t=s.vs,a={},o.Z(t,function(n){for(var t,o,u=e.parent(n);u;){if((t=e.parent(u))?(o=a[t],a[t]=u):(o=i,i=u),o&&o!==u){r.setEdge(o,u);return}u=t}})})})(w%2?r:t,w%4>=2),i=V(e);var y,k=function(e,n){for(var r=0,t=1;t<n.length;++t)r+=function(e,n,r){for(var t=eG(r||[],f.Z(r,function(e,n){return n})||[],eF.Z),i=d.Z(f.Z(n,function(n){return eQ(f.Z(e.outEdges(n),function(n){return{pos:t[n.w],weight:e.edge(n).weight}}),"pos")})),u=1;u<r.length;)u<<=1;var a=2*u-1;u-=1;var c=f.Z(Array(a),function(){return 0}),s=0;return o.Z(i.forEach(function(e){var n=e.pos+u;c[n]+=e.weight;for(var r=0;n>0;)n%2&&(r+=c[n+1]),n=n-1>>1,c[n]+=e.weight;s+=e.weight*r})),s}(e,n[t-1],n[t]);return r}(e,i);k<p&&(b=0,y=i,Z=(0,ej.Z)(y,5),p=k)}eX(e,Z)}(n)}),r("    insertSelfEdges",function(){var e;e=V(n),o.Z(e,function(e){var r=0;o.Z(e,function(e,t){var i=n.node(e);i.order=t+r,o.Z(i.selfEdges,function(e){j(n,"selfedge",{width:e.label.width,height:e.label.height,rank:i.rank,order:t+ ++r,e:e.e,label:e.label},"_se")}),delete i.selfEdges})})}),r("    adjustCoordinateSystem",function(){var e;("lr"===(e=n.graph().rankdir.toLowerCase())||"rl"===e)&&D(n)}),r("    position",function(){var e,r,t,i,a,d,g,h,v,l,Z,p,m,b,y,k,x,E;k=V(y=e=F(e=n)),x=y.graph().ranksep,E=0,o.Z(k,function(e){var n=N(f.Z(e,function(e){return y.node(e).height}));o.Z(e,function(e){y.node(e).y=E+n/2}),E+=n+x}),i=V(r=e),d=w.Z((a={},eS.Z(i,function(e,n){var t=0,i=0,u=e.length,d=_(n);return o.Z(n,function(e,f){var c=function(e,n){if(e.node(n).dummy)return ei(e.predecessors(n),function(n){return e.node(n).dummy})}(r,e),s=c?r.node(c).order:u;(c||e===d)&&(o.Z(n.slice(i,f+1),function(e){o.Z(r.predecessors(e),function(n){var o=r.node(n),i=o.order;(i<t||s<i)&&!(o.dummy&&r.node(e).dummy)&&e3(a,n,e)})}),i=f+1,t=s)}),n}),a),function(e,n){var r={};function t(n,t,i,u,a){var d;o.Z(c.Z(t,i),function(t){d=n[t],e.node(d).dummy&&o.Z(e.predecessors(d),function(n){var t=e.node(n);t.dummy&&(t.order<u||t.order>a)&&e3(r,n,d)})})}return eS.Z(n,function(n,r){var i,u=-1,a=0;return o.Z(r,function(o,d){if("border"===e.node(o).dummy){var f=e.predecessors(o);f.length&&(i=e.node(f[0]).order,t(r,a,d,u,i),a=d,u=i)}t(r,a,r.length,i,n.length)}),r}),r}(r,i)),g={},o.Z(["u","d"],function(e){t="u"===e?i:eP.Z(i).reverse(),o.Z(["l","r"],function(n){"r"===n&&(t=f.Z(t,function(e){return eP.Z(e).reverse()}));var i,a,c,h,v=("u"===e?r.predecessors:r.successors).bind(r),l=(i=t,a={},c={},h={},o.Z(i,function(e){o.Z(e,function(e,n){a[e]=e,c[e]=e,h[e]=n})}),o.Z(i,function(e){var n=-1;o.Z(e,function(e){var r=v(e);if(r.length)for(var t=((r=eQ(r,function(e){return h[e]})).length-1)/2,o=Math.floor(t),i=Math.ceil(t);o<=i;++o){var f=r[o];c[e]===e&&n<h[f]&&!function(e,n,r){if(n>r){var t=n;n=r,r=t}return u.Z(e[n],r)}(d,e,f)&&(c[f]=e,c[e]=a[e]=a[f],n=h[f])}})}),{root:a,align:c}),Z=function(e,n,r,t,i){var a,d,f,c,g,h={},v=(f=new s.k,a=(c=e.graph()).nodesep,d=c.edgesep,g=function(e,n,r){var t,o,f=e.node(n),c=e.node(r);if(t=0+f.width/2,u.Z(f,"labelpos"))switch(f.labelpos.toLowerCase()){case"l":o=-f.width/2;break;case"r":o=f.width/2}if(o&&(t+=i?o:-o),o=0,t+=(f.dummy?d:a)/2+(c.dummy?d:a)/2+c.width/2,u.Z(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":o=c.width/2;break;case"r":o=-c.width/2}return o&&(t+=i?o:-o),o=0,t},o.Z(n,function(n){var t;o.Z(n,function(n){var o=r[n];if(f.setNode(o),t){var i=r[t],u=f.edge(i,o);f.setEdge(i,o,Math.max(g(e,n,t),u||0))}t=n})}),f),l=i?"borderLeft":"borderRight";function Z(e,n){for(var r=v.nodes(),t=r.pop(),o={};t;)o[t]?e(t):(o[t]=!0,r.push(t),r=r.concat(n(t))),t=r.pop()}return Z(function(e){h[e]=v.inEdges(e).reduce(function(e,n){return Math.max(e,h[n.v]+v.edge(n))},0)},v.predecessors.bind(v)),Z(function(n){var r=v.outEdges(n).reduce(function(e,n){return Math.min(e,h[n.w]-v.edge(n))},Number.POSITIVE_INFINITY),t=e.node(n);r!==Number.POSITIVE_INFINITY&&t.borderType!==l&&(h[n]=Math.max(h[n],r))},v.successors.bind(v)),o.Z(t,function(e){h[e]=h[r[e]]}),h}(r,t,l.root,l.align,"r"===n);"r"===n&&(Z=T(Z,function(e){return-e})),g[e+n]=Z})}),h=H(eP.Z(g),function(e){var n,t=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return n=function(e,n){var i=r.node(n).width/2;t=Math.max(e+i,t),o=Math.min(e-i,o)},null==e||(0,e1.Z)(e,(0,e0.Z)(n),e2.Z),t-o}),l=O(v=eP.Z(h)),Z=N(v),o.Z(["u","d"],function(e){o.Z(["l","r"],function(n){var r,t=e+n,o=g[t];if(o!==h){var i=eP.Z(o);(r="l"===n?l-O(i):Z-N(i))&&(g[t]=T(o,function(e){return e+r}))}})}),p=r.graph().align,m=T(g.ul,function(e,n){if(p)return g[p.toLowerCase()][n];var r=eQ(f.Z(g,n));return(r[1]+r[2])/2}),b=function(n,r){e.node(r).x=n},m&&(0,R.Z)(m,(0,e0.Z)(b))}),r("    positionSelfEdges",function(){o.Z(n.nodes(),function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),o=t.x+t.width/2,i=t.y,u=r.x-o,a=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:o+2*u/3,y:i-a},{x:o+5*u/6,y:i-a},{x:o+u,y:i},{x:o+5*u/6,y:i+a},{x:o+2*u/3,y:i+a}],r.label.x=r.x,r.label.y=r.y}})}),r("    removeBorderNodes",function(){o.Z(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),o=n.node(r.borderBottom),i=n.node(_(r.borderLeft)),u=n.node(_(r.borderRight));r.width=Math.abs(u.x-i.x),r.height=Math.abs(o.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}}),o.Z(n.nodes(),function(e){"border"===n.node(e).dummy&&n.removeNode(e)})}),r("    normalize.undo",function(){o.Z(n.graph().dummyChains,function(e){var r,t=n.node(e),o=t.edgeLabel;for(n.setEdge(t.edgeObj,o);t.dummy;)r=n.successors(e)[0],n.removeNode(e),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),e=r,t=n.node(e)})}),r("    fixupEdgeLabelCoords",function(){o.Z(n.edges(),function(e){var r=n.edge(e);if(u.Z(r,"x"))switch(("l"===r.labelpos||"r"===r.labelpos)&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}})}),r("    undoCoordinateSystem",function(){var e;("bt"===(e=n.graph().rankdir.toLowerCase())||"rl"===e)&&(o.Z(n.nodes(),function(e){J(n.node(e))}),o.Z(n.edges(),function(e){var r=n.edge(e);o.Z(r.points,J),u.Z(r,"y")&&J(r)})),("lr"===e||"rl"===e)&&(o.Z(n.nodes(),function(e){K(n.node(e))}),o.Z(n.edges(),function(e){var r=n.edge(e);o.Z(r.points,K),u.Z(r,"x")&&K(r)}),D(n))}),r("    translateGraph",function(){(function(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=e.graph(),d=a.marginx||0,f=a.marginy||0;function c(e){var o=e.x,u=e.y,a=e.width,d=e.height;n=Math.min(n,o-a/2),r=Math.max(r,o+a/2),t=Math.min(t,u-d/2),i=Math.max(i,u+d/2)}o.Z(e.nodes(),function(n){c(e.node(n))}),o.Z(e.edges(),function(n){var r=e.edge(n);u.Z(r,"x")&&c(r)}),n-=d,t-=f,o.Z(e.nodes(),function(r){var o=e.node(r);o.x-=n,o.y-=t}),o.Z(e.edges(),function(r){var i=e.edge(r);o.Z(i.points,function(e){e.x-=n,e.y-=t}),u.Z(i,"x")&&(i.x-=n),u.Z(i,"y")&&(i.y-=t)}),a.width=r-n+d,a.height=i-t+f})(n)}),r("    assignNodeIntersects",function(){o.Z(n.edges(),function(e){var r,t,o=n.edge(e),i=n.node(e.v),u=n.node(e.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=u,t=i),o.points.unshift(G(i,r)),o.points.push(G(u,t))})}),r("    reversePoints",function(){o.Z(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}),r("    acyclic.undo",function(){o.Z(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}})})}),r("  updateInputGraph",function(){o.Z(e.nodes(),function(r){var t=e.node(r),o=n.node(r);t&&(t.x=o.x,t.y=o.y,n.children(r).length&&(t.width=o.width,t.height=o.height))}),o.Z(e.edges(),function(r){var t=e.edge(r),o=n.edge(r);t.points=o.points,u.Z(o,"x")&&(t.x=o.x,t.y=o.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height})})}var e5=["nodesep","edgesep","ranksep","marginx","marginy"],e4={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},e6=["acyclicer","ranker","rankdir","align"],e7=["width","height"],e9={width:0,height:0},ne=["minlen","weight","width","height","labeloffset"],nn={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},nr=["labelpos"];function nt(e,n){return T(m.Z(e,n),Number)}function no(e){var n={};return o.Z(e,function(e,r){n[r.toLowerCase()]=e}),n}},605:function(e,n,r){var t=r(3739),o=r(8465);n.Z=function(e,n){var r=-1,i=(0,o.Z)(e)?Array(e.length):[];return(0,t.Z)(e,function(e,t,o){i[++r]=n(e,t,o)}),i}},8269:function(e,n,r){var t=r(8702),o=r(5002),i=r(2834),u=r(6930),a=Object.prototype,d=a.hasOwnProperty,f=(0,t.Z)(function(e,n){e=Object(e);var r=-1,t=n.length,f=t>2?n[2]:void 0;for(f&&(0,i.Z)(n[0],n[1],f)&&(t=1);++r<t;)for(var c=n[r],s=(0,u.Z)(c),g=-1,h=s.length;++g<h;){var v=s[g],l=e[v];(void 0===l||(0,o.Z)(l,a[v])&&!d.call(e,v))&&(e[v]=c[v])}return e});n.Z=f},1243:function(e,n,r){var t=r(9115);n.Z=function(e){return(null==e?0:e.length)?(0,t.Z)(e,1):[]}},4917:function(e,n,r){var t=r(7956),o=r(8891),i=r(605),u=r(4837);n.Z=function(e,n){return((0,u.Z)(e)?t.Z:i.Z)(e,(0,o.Z)(n,3))}},2153:function(e,n,r){r.d(n,{Z:function(){return Z}});var t,o=r(7198),i=r(6049),u=r(4717),a=r(3457),d=r(1654),f=r(2119),c=function(e,n,r,t){if(!(0,d.Z)(e))return e;n=(0,u.Z)(n,e);for(var o=-1,c=n.length,s=c-1,g=e;null!=g&&++o<c;){var h=(0,f.Z)(n[o]),v=r;if("__proto__"===h||"constructor"===h||"prototype"===h)break;if(o!=s){var l=g[h];void 0===(v=t?t(l,h,g):void 0)&&(v=(0,d.Z)(l)?l:(0,a.Z)(n[o+1])?[]:{})}(0,i.Z)(g,h,v),g=g[h]}return e},s=function(e,n,r){for(var t=-1,i=n.length,a={};++t<i;){var d=n[t],f=(0,o.Z)(e,d);r(f,d)&&c(a,(0,u.Z)(d,e),f)}return a},g=r(5649),h=r(1243),v=r(8054),l=r(3106),Z=(t=function(e,n){return null==e?{}:s(e,n,function(n,r){return(0,g.Z)(e,r)})},(0,l.Z)((0,v.Z)(t,void 0,h.Z),t+""))},3784:function(e,n,r){r.d(n,{Z:function(){return d}});var t=Math.ceil,o=Math.max,i=function(e,n,r,i){for(var u=-1,a=o(t((n-e)/(r||1)),0),d=Array(a);a--;)d[i?a:++u]=e,e+=r;return d},u=r(2834),a=r(7204),d=function(e,n,r){return r&&"number"!=typeof r&&(0,u.Z)(e,n,r)&&(n=r=void 0),e=(0,a.Z)(e),void 0===n?(n=e,e=0):n=(0,a.Z)(n),r=void 0===r?e<n?1:-1:(0,a.Z)(r),i(e,n,r,void 0)}},7204:function(e,n,r){r.d(n,{Z:function(){return l}});var t=/\s/,o=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n},i=/^\s+/,u=r(1654),a=r(1005),d=0/0,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,g=parseInt,h=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return d;if((0,u.Z)(e)){var n,r="function"==typeof e.valueOf?e.valueOf():e;e=(0,u.Z)(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=(n=e)?n.slice(0,o(n)+1).replace(i,""):n;var t=c.test(e);return t||s.test(e)?g(e.slice(2),t?2:8):f.test(e)?d:+e},v=1/0,l=function(e){return e?(e=h(e))===v||e===-v?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},303:function(e,n,r){var t=r(4581),o=0;n.Z=function(e){var n=++o;return(0,t.Z)(e)+n}}}]);