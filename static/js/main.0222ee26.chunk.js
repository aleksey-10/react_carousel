(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),m=a(2),l=a(3),o=a(5),c=a(4),u=a(1),p=(a(13),function(t){return t.match(/(\d+).png/)[1]}),g=function(t){return r.a.createElement("ul",{className:"Carousel__list",style:{transform:"translate(".concat(-t.translate,"px)"),transition:"transform ".concat(t.animationDuration,"ms"),marginLeft:"".concat(t.marginLeft,"px")}},t.images.map((function(e,a){return r.a.createElement("li",{key:p(e)},r.a.createElement("img",{src:e,alt:p(e),style:{width:t.width}}))})))},f=function(t){var e=t.handleClick;return r.a.createElement("div",{className:"Carousel__buttons"},r.a.createElement("button",{className:"Carousel__button",type:"button",onClick:function(){return e(!1)}},"Prev"),r.a.createElement("button",{className:"Carousel__button",type:"button",onClick:e},"Next"))},h=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={translate:0,width:t.props.itemWidth*t.props.step,frameWidth:t.props.itemWidth*t.props.frameSize,images:t.props.images,maxTranslate:t.props.itemWidth*(t.props.images.length-t.props.step),minTranslate:0,marginLeft:0},t.images=t.props.images,t.getTranslateFinite=function(e){return e>t.state.maxTranslate?t.state.maxTranslate:e<0?0:e},t.getTranslateInfinite=function(e){return e>t.state.maxTranslate&&t.setState((function(e){return{images:[].concat(Object(u.a)(e.images.filter((function(e,a){return a>t.props.frameSize-1}))),Object(u.a)(e.images.filter((function(e,a){return a<t.props.frameSize})))),marginLeft:e.marginLeft+e.frameWidth,maxTranslate:e.maxTranslate+e.frameWidth,minTranslate:e.minTranslate+e.frameWidth}})),e<t.state.minTranslate&&t.setState((function(e){return{images:[].concat(Object(u.a)(e.images.filter((function(a,n){return n>e.images.length-t.props.frameSize-1}))),Object(u.a)(e.images.filter((function(a,n){return n<e.images.length-t.props.frameSize})))),marginLeft:e.marginLeft-e.frameWidth,maxTranslate:e.maxTranslate-e.frameWidth,minTranslate:e.minTranslate-e.frameWidth}})),e},t.handleClick=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=t.state.translate+(e?t.state.frameWidth:-t.state.frameWidth),n=t.props.infinite?t.getTranslateFinite(a):t.getTranslateInfinite(a);t.setState((function(t){return{translate:n}}))},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Carousel",style:{width:this.state.width}},r.a.createElement(g,{images:this.state.images,translate:this.state.translate,animationDuration:this.props.animationDuration,width:this.props.itemWidth,marginLeft:this.state.marginLeft}),r.a.createElement(f,{handleClick:this.handleClick}))}}]),a}(r.a.Component),d=h;h.defaultProps={step:3,animationDuration:1e3,infinite:!1};var b=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.images;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Carousel with ",t.length," images"),r.a.createElement(d,{images:this.state.images,step:3,frameSize:3,itemWidth:200,animationDuration:600,infinite:!1}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0222ee26.chunk.js.map