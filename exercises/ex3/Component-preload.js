//@ui5-bundle com/myorg/myapp/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/json/JSONModel"],function(t,s,n){const e=s["support"];const i=t.extend("com.myorg.myapp.Component",{metadata:{manifest:"json"},init:function s(){t.prototype.init.call(this);this.getRouter().initialize();const e=new n("https://api.corona-zahlen.org/states");this.setModel(e)},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});
},
	"com/myorg/myapp/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){const t=n.extend("com.myorg.myapp.controller.App",{onInit:function n(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return t});
},
	"com/myorg/myapp/controller/Main.controller.js":function(){sap.ui.define(["sap/m/MessageBox","sap/ui/core/mvc/Controller"],function(o,e){const n=e.extend("com.myorg.myapp.controller.Main",{sayHello:function e(){o.show("Hello World!")}});return n});
},
	"com/myorg/myapp/i18n/i18n.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/i18n/i18n_de.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Inzidenz\\u00fcbersicht\nincidenceLabel=Inzidenz',
	"com/myorg/myapp/i18n/i18n_en.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.myorg.myapp","type":"application","i18n":"i18n/i18n.properties","title":"{{app_title}}","description":"{{app_description}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.myorg.myapp.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.97.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.f":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myapp.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.myorg.myapp.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"com/myorg/myapp/view/App.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"com/myorg/myapp/view/Main.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:grid="sap.ui.layout.cssgrid"\n\txmlns:mvc="sap.ui.core.mvc"><Page id="page" title="{i18n>title}"><content><f:GridList id="statesList" \n\t\t\t\titems="{path: \'/data\', sorter: {path: \'weekIncidence\', descending: true}}"\n\t\t\t\tnoDataText="No state data"><f:customLayout><grid:GridBoxLayout/></f:customLayout><f:items><CustomListItem><Title text="{name}"/></CustomListItem></f:items></f:GridList></content></Page></mvc:View>'
});