'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*{\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.base__hr-right-left-ease{\r\n    margin-top: 4px;\r\n    margin-bottom: 5px;\r\n    background-image: -webkit-gradient(linear,left top,transparent top,from(transparent),color-stop(#d4dadb),to(transparent));\r\n    background-image: -webkit-linear-gradient(left,transparent,#d4dadb,transparent);\r\n    background-image: -o-linear-gradient(left,transparent,#d4dadb,transparent);\r\n    background-image: linear-gradient(to right,transparent,#d4dadb,transparent);\r\n    \r\n    box-sizing: content-box;\r\n    border: 0px;\r\n    height: 1px;\r\n    max-width: 100%;\r\n    max-width: 100%;\r\n}\r\n.base__hr-right-ease{\r\n    margin-top: 4px;\r\n    margin-bottom: 5px;\r\n    background-image: -webkit-gradient(linear,left top,grey top,from(transparent),color-stop(#d4dadb),to(transparent));\r\n    background-image: -webkit-linear-gradient(left,grey,#d4dadb,transparent);\r\n    background-image: -o-linear-gradient(left,grey,#d4dadb,transparent);\r\n    background-image: linear-gradient(to right,grey,#d4dadb,transparent);\r\n    box-sizing: content-box;\r\n    border: 0px;\r\n    height: 1px;\r\n    max-width: 100%;\r\n    max-width: 100%;\r\n}\r\n:root{\r\n\r\n    --main-color:#11101d;\r\n    --primary-color:#1d1b31;\r\n    --secondary-color:#fff;\r\n    --main-company-color:#ffce00;\r\n    --border-radius:5px;\r\n    --box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);\r\n}\r\n\r\n.dashboard__list-container {\r\n    background: var(--secondary-color);\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    width: 100%;\r\n    min-height: 20px;\r\n    margin: 10px 0px 0px 0px;\r\n    padding: 0px 0px 8px 0px;\r\n}\r\n.dashboard__list-container .dashboard__list-section-title {\r\n    padding: 10px;\r\n}\r\n.dashboard__list-container .dashboard__list-section-title hr {\r\n    width: 60% !important;\r\n}\r\n@media screen and (max-width: 800px) {\r\n    .dashboard__list-container .dashboard__list-section-title hr {\r\n        width: 100% !important;\r\n   }\r\n}\r\n.dashboard__list-container .dashboard__list-section-items {\r\n    overflow-x: auto;\r\n}\r\n.dashboard__list-container .dashboard__list-section-items .dashboard__list-item {\r\n    min-width: 300px;\r\n    padding: 5px 5px 8px 14px;\r\n}\r\n.dashboard__list-container .dashboard__list-section-items .dashboard__list-item .dashboard__list-name {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    min-height: 40px;\r\n    word-break: break-word;\r\n    color: #3699ff;\r\n}\r\n.dashboard__list-container .dashboard__list-section-items .dashboard__list-item .dashboard__list-name svg {\r\n    height: 20px;\r\n    margin-right: 14px;\r\n}\r\n.dashboard__list-container .dashboard__list-section-items .dashboard__list-item .dashboard__list-date p {\r\n    margin-left: 25px;\r\n    font-size: 12px;\r\n    opacity: 0.7;\r\n}\r\n";
styleInject(css_248z);

// Aqui hago una resetriccion que mi componente el tipo de objeto que se le pasara deberia tener 
// por lo menos las propiedades de Item para funcinar
//ref: https://www.benmvp.com/blog/generic-react-components-typescript/
var SimpleList = function (_a) {
    var title = _a.title, iconA = _a.iconA, items = _a.items;
    return (React__default["default"].createElement("div", { className: "dashboard__list-container" },
        React__default["default"].createElement("div", { className: "dashboard__list-section-title" },
            React__default["default"].createElement("h4", null, title),
            React__default["default"].createElement("hr", { className: "base__hr-right-ease" })),
        React__default["default"].createElement("div", { className: "dashboard__list-section-items" }, items.map(function (item, index) { return (React__default["default"].createElement("div", { key: index },
            React__default["default"].createElement("div", { className: "dashboard__list-item" },
                React__default["default"].createElement("div", { className: "dashboard__list-name" },
                    iconA,
                    React__default["default"].createElement("p", null, item.name)),
                React__default["default"].createElement("div", { className: "dashboard__list-date" },
                    React__default["default"].createElement("p", null,
                        "Creado el ",
                        item.date))),
            React__default["default"].createElement("hr", { className: "base__hr-right-left-ease" }))); }))));
};

exports.SimpleList = SimpleList;
//# sourceMappingURL=index.js.map
