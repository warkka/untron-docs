"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7327:function(e,l,t){t.d(l,{diagram:function(){return g}});var a=t(6336),i=t(4218),n=t(5625),o=t(1835),s=t(4015);t(7484),t(7967),t(7856),t(1316),t(6060);let d=e=>o.e.sanitizeText(e,(0,o.c)()),r={dividerMargin:10,padding:5,textHeight:10,curve:void 0},c=function(e,l,t,a){let i=Object.keys(e);o.l.info("keys:",i),o.l.info(e),i.forEach(function(i){var n,s;let r=e[i],c={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(n=(0,o.c)().flowchart)?void 0:n.padding)??(null==(s=(0,o.c)().class)?void 0:s.padding)};l.setNode(r.id,c),p(r.classes,l,t,a,r.id),o.l.info("setNode",c)})},p=function(e,l,t,a,i){let n=Object.keys(e);o.l.info("keys:",n),o.l.info(e),n.filter(l=>e[l].parent==i).forEach(function(t){var n,s;let r=e[t],c=r.cssClasses.join(" "),p=(0,o.k)(r.styles),b=r.label??r.id,f={labelStyle:p.labelStyle,shape:"class_box",labelText:d(b),classData:r,rx:0,ry:0,class:c,style:p.style,id:r.id,domId:r.domId,tooltip:a.db.getTooltip(r.id,i)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(n=(0,o.c)().flowchart)?void 0:n.padding)??(null==(s=(0,o.c)().class)?void 0:s.padding)};l.setNode(r.id,f),i&&l.setParent(r.id,i),o.l.info("setNode",f)})},b=function(e,l,t,a){o.l.info(e),e.forEach(function(e,n){var s,c;let p={labelStyle:"",shape:"note",labelText:d(e.text),noteData:e,rx:0,ry:0,class:"",style:"",id:e.id,domId:e.id,tooltip:"",type:"note",padding:(null==(s=(0,o.c)().flowchart)?void 0:s.padding)??(null==(c=(0,o.c)().class)?void 0:c.padding)};if(l.setNode(e.id,p),o.l.info("setNode",p),!e.class||!(e.class in a))return;let b=t+n,f={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,o.n)(r.curve,i.c_6)};l.setEdge(e.id,e.class,f,b)})},f=function(e,l){let t=(0,o.c)().flowchart,a=0;e.forEach(function(e){var n;a++;let s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${a}`,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:y(e.relation.type1),arrowTypeEnd:y(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,o.n)(null==t?void 0:t.curve,i.c_6)};if(o.l.info(s,e),void 0!==e.style){let l=(0,o.k)(e.style);s.style=l.style,s.labelStyle=l.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(n=(0,o.c)().flowchart)?void 0:n.htmlLabels)??(0,o.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(o.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),l.setEdge(e.id1,e.id2,s,a)})},u=async function(e,l,t,a){let d;o.l.info("Drawing class - ",l);let r=(0,o.c)().flowchart??(0,o.c)().class,u=(0,o.c)().securityLevel;o.l.info("config:",r);let y=(null==r?void 0:r.nodeSpacing)??50,g=(null==r?void 0:r.rankSpacing)??50,h=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:y,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),v=a.db.getNamespaces(),w=a.db.getClasses(),k=a.db.getRelations(),x=a.db.getNotes();o.l.info(k),c(v,h,l,a),p(w,h,l,a),f(k,h),b(x,h,k.length+1,w),"sandbox"===u&&(d=(0,i.Ys)("#i"+l));let m="sandbox"===u?(0,i.Ys)(d.nodes()[0].contentDocument.body):(0,i.Ys)("body"),T=m.select(`[id="${l}"]`),S=m.select("#"+l+" g");if(await (0,s.r)(S,h,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",l),o.u.insertTitle(T,"classTitleText",(null==r?void 0:r.titleTopMargin)??5,a.db.getDiagramTitle()),(0,o.o)(h,T,null==r?void 0:r.diagramPadding,null==r?void 0:r.useMaxWidth),!(null==r?void 0:r.htmlLabels)){let e="sandbox"===u?d.nodes()[0].contentDocument:document;for(let t of e.querySelectorAll('[id="'+l+'"] .edgeLabel .label')){let l=t.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",l.width),a.setAttribute("height",l.height),t.insertBefore(a,t.firstChild)}}};function y(e){let l;switch(e){case 0:l="aggregation";break;case 1:l="extension";break;case 2:l="composition";break;case 3:l="dependency";break;case 4:l="lollipop";break;default:l="none"}return l}let g={parser:a.p,db:a.d,renderer:{setConf:function(e){r={...r,...e}},draw:u},styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);