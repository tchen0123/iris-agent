webpackHotUpdate(0,{

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(41);\n\nvar _brace = __webpack_require__(1305);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1313);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(111);\n\nvar _python = __webpack_require__(88);\n\n__webpack_require__(1309);\n\n__webpack_require__(1310);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction onChange(newValue) {\n  console.log('change', newValue);\n}\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(_reactAce2.default, {\n          mode: 'python',\n          theme: 'github',\n          onChange: onChange,\n          name: 'command_editor',\n          editorProps: { $blockScrolling: true }\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\n// const mapStateToProps = (state) => ({\n//     search: state.functionSearch.search,\n//     results: state.functionSearch.results\n// });\n//\n// CommandEdit = connect(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ29tbWFuZEVkaXQiLCJyZW5kZXIiLCIkYmxvY2tTY3JvbGxpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDMUJDLFVBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCRixRQUFyQjtBQUNEOztJQUVLRyxXOzs7Ozs7Ozs7Ozs7OztnTUFFRkMsTSxHQUFTO0FBQUEsYUFDUDtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFFRTtBQUNFLGdCQUFLLFFBRFA7QUFFRSxpQkFBTSxRQUZSO0FBR0Usb0JBQVVMLFFBSFo7QUFJRSxnQkFBSyxnQkFKUDtBQUtFLHVCQUFhLEVBQUNNLGlCQUFpQixJQUFsQjtBQUxmO0FBRkYsT0FETztBQUFBLEs7Ozs7OztBQWFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWVGLFciLCJmaWxlIjoiMTMwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IHsgdXBkYXRlRnVuYywgdXBkYXRlUmVzdWx0cywgc3RvcmVDdXJyZW50SW5wdXQsIHNldERvY3MgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5mdW5jdGlvbiBvbkNoYW5nZShuZXdWYWx1ZSkge1xuICBjb25zb2xlLmxvZygnY2hhbmdlJyxuZXdWYWx1ZSk7XG59XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdFwiPlxuXG4gICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgZWRpdG9yUHJvcHM9e3skYmxvY2tTY3JvbGxpbmc6IHRydWV9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG59XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbi8vICAgICBzZWFyY2g6IHN0YXRlLmZ1bmN0aW9uU2VhcmNoLnNlYXJjaCxcbi8vICAgICByZXN1bHRzOiBzdGF0ZS5mdW5jdGlvblNlYXJjaC5yZXN1bHRzXG4vLyB9KTtcbi8vXG4vLyBDb21tYW5kRWRpdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tYW5kRWRpdCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRFZGl0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29tbWFuZEVkaXQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})