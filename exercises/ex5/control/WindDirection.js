"use strict";sap.ui.define(["sap/ui/core/Control"],function(e){const t=e.extend("com.myorg.myapp.control.WindDirection",{renderer:{apiVersion:2,render:(e,t)=>{e.openStart("div",t);e.style("font-size","2rem");e.style("width","2rem");e.style("height","2rem");e.style("display","inline-block");e.style("color","blue");e.style("transform-origin","center");e.style("transform",`rotate(${t.getDirection()+90}deg)`);e.openEnd();e.text("➢");e.close("div")}},metadata:{properties:{direction:"float"}},constructor:function t(r,o){e.prototype.constructor.call(this,r,o)}});return t});
//# sourceMappingURL=WindDirection.js.map