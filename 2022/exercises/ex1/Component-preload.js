//@ui5-bundle com/myorg/myapp/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,n){const s=n["support"];const i=t.extend("com.myorg.myapp.Component",{metadata:{manifest:"json"},init:function n(){t.prototype.init.call(this);this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!s.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});
},
	"com/myorg/myapp/controller/App.controller.js":function(){sap.ui.define(["./BaseController"],function(e){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const t=n(e);const o=t.extend("com.myorg.myapp.controller.App",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return o});
},
	"com/myorg/myapp/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){const o=e.extend("com.myorg.myapp.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"com/myorg/myapp/controller/Main.controller.js":function(){sap.ui.define(["sap/m/MessageBox","./BaseController"],function(e,o){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const t=n(o);const l=t.extend("com.myorg.myapp.controller.Main",{sayHello:function o(){e.show("Hello World!")}});return l});
},
	"com/myorg/myapp/i18n/i18n.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\nbtnText=Say Hello',
	"com/myorg/myapp/i18n/i18n_de.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\nbtnText=Sag Hallo',
	"com/myorg/myapp/i18n/i18n_en.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\nbtnText=Say Hello',
	"com/myorg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.myorg.myapp","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.myorg.myapp.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.113.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myapp.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.myorg.myapp.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"com/myorg/myapp/view/App.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"com/myorg/myapp/view/Main.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><MessagePage\n\t\ttitle="{i18n>appTitle}"\n\t\ttext="{i18n>appTitle}"\n\t\ticon="sap-icon://accept"\n\t\tid="page"\n\t\tdescription="{i18n>appDescription}"><buttons><Button\n\t\t\t\ttext="{i18n>btnText}"\n\t\t\t\tpress="sayHello" /></buttons></MessagePage></mvc:View>'
});