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


            onUpdate: function () {
                var that = this;
                var usuario = this.getView().byId("idusuario").getValue();
                var nome = this.getView().byId("idNome").getValue();
                var projesegw = this.getView().byId("idProjSegw").getValue();
                var email = this.getView().byId("idEmail").getValue();
 
                var oStrPath = this.getView().byId("idTableAluno").getSelectedContextPaths();

                var oDados = {
                    Usuario: usuario,
                    Nome: nome,
                    ProjetoSegw: projesegw,
                    Email: email
                }
 
                this.getView().getModel().update(oStrPath[0], oDados, {
                    success: function (oData, oReponse) {
                        sap.m.MessageBox.success(that.getView().getModel("i18n").getResourceBundle().getText("lblmsgUpdateOk"));
                        that.getView().byId("idusuario").setValue("");
                        that.getView().byId("idNome").setValue("");
                        that.getView().byId("idProjSegw").setValue("");
                        that.getView().byId("idEmail").setValue("");
                    },
                    error: function (oError) {
                        sap.m.MessageBox.error(that.getView().getModel("i18n").getResourceBundle().getText("lblmsgUpdateError"));
                    }
                });
            },




            onDelete: function() {
                var that = this;
                var sPath = this.getView().byId("idTableAluno").getSelectedContextPaths();

                this.getView().getModel().remove(sPath[0], { 
                    success: function(odata, oResponse){
                    sap.m.MessageBox.success(that.getView().getModel("i18n").getResourceBundle().getText("lblmsgRemoveOk"));
                    return;
                },
                error: function(oError){

                }

                })
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
