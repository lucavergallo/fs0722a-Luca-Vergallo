var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Reddito = /** @class */ (function () {
    //utilizzo constructor per impostare le varibili 
    function Reddito(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return Reddito;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = this.redditoannuolordo * this.codredd / 100;
        return utileTasse;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var tasseInps = this.getUtileTasse() * this.tasseinps / 100;
        return tasseInps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var tasseIrpef = this.getUtileTasse() * this.tasseirpef / 100;
        return tasseIrpef;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var redditoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return redditoNetto;
    };
    return Lavoratore;
}(Reddito));
var Commerciante = new Lavoratore(78, 40000, 25, 5);
var Artigiano = new Lavoratore(67, 30000, 30, 3);
var Ristoratore = new Lavoratore(40, 60000, 22, 4);
console.log("Commerciante: Utile tasse di ".concat(Commerciante.getUtileTasse(), " \u20AC - Tasse inps di ").concat(Commerciante.getTasseInps(), " \u20AC - Tasse irpef di ").concat(Commerciante.getTasseIrpef(), " \u20AC - Reddito netto uguale a ").concat(Commerciante.getRedditoAnnuoNetto(), " \u20AC"));
console.log("Artigiano: Utile tasse di ".concat(Artigiano.getUtileTasse(), " \u20AC - Tasse inps di ").concat(Artigiano.getTasseInps(), " \u20AC - Tasse irpef di ").concat(Artigiano.getTasseIrpef(), " \u20AC - Reddito netto uguale a ").concat(Artigiano.getRedditoAnnuoNetto(), " \u20AC"));
console.log("Ristoratore: Utile tasse di ".concat(Ristoratore.getUtileTasse(), " \u20AC - Tasse inps di ").concat(Ristoratore.getTasseInps(), " \u20AC - Tasse irpef di ").concat(Ristoratore.getTasseIrpef(), " \u20AC - Reddito netto uguale a ").concat(Ristoratore.getRedditoAnnuoNetto(), " \u20AC"));
