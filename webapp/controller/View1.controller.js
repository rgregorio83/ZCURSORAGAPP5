sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zcursoragapp5.zcursoragapp5.controller.View1", {
            onInit: function () {

            },

            onCreate: function() {
                var that = this;
                var usuario  = this.getView().byId("idusuario").getValue();
                var nome     = this.getView().byId("idNome").getValue();
                var projsegw = this.getView().byId("idProjSegw").getValue();
                var email    = this.getView().byId("idEmail").getValue();

                if(!usuario){
                    sap.m.MessageBox.error(this.getView().getModel("i18n").getResourceBundle().getText("lblmsgerroruser"));
                    return;
                }

                var oDados = {
                    Usuario: usuario,
                    Nome: nome,
                    ProjetoSegw: projsegw,
                    Email: email                
                }

                this.getView().getModel().create('/AlunoFioriSet', oDados, { 
                    success: function(oData, oResponse){
                         sap.m.MessageBox.success(that.getView().getModel("i18n").getResourceBundle().getText("lblmsgCreateOk"));
                         usuario  = that.getView().byId("idusuario").setValue("");
                         nome     = that.getView().byId("idNome").setValue("");
                         projsegw = that.getView().byId("idProjSegw").setValue("");
                         email    = that.getView().byId("idEmail").setValue("");
                    },
                    error: function (oError){
                         sap.m.MessageBox.error(that.getView().getModel("i18n").getResourceBundle().getText("lblmsgCreateError"))
                    }
                });
            }
        });
    });
