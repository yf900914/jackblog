angular.module('app.common.factory', []).factory('transferData', function () {
    var get, localStorage, set;
    localStorage = window.localStorage;
    set = function (key, data) {
        return localStorage[key] = JSON.stringify(data);
    };
    get = function (key) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        } else {
            return null;
        }
    };
    return {
        set: set,
        get: get
};
});

var calWinsize=function(doc,win){
    var  docEl=doc.documentElement;
    var recal=function(){
        if (docEl.clientWidth<=320){
            clientWidth=320;
        }else if(docEl.clientWidth>=640){
            clientWidth=640;
        }
        else {
            clientWidth=docEl.clientWidth;
        }
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		doc.body.style.fontSize = 20 * (clientWidth / 320) + 'px';
    }
    recal();
    doc.addEventListener('DOMContentLoaded', recal, true);
}