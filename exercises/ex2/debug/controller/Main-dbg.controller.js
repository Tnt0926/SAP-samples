"use strict";

sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (__BaseController, JSONModel) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.myorg.myapp.controller
   */
  const Main = BaseController.extend("com.myorg.myapp.controller.Main", {
    onInit: function _onInit() {
      const model = new JSONModel();
      this.setModel(model);
      void this.loadWeatherData();
    },
    loadWeatherData: async function _loadWeatherData() {
      let lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "49.31";
      let lon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "8.64";
      // default coordinates: Walldorf
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const jsonData = await response.json();
      this.getModel().setData(jsonData);
    }
  });
  return Main;
});