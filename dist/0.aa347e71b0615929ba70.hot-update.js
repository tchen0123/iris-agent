webpackHotUpdate(0,{

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(41);\n\nvar _brace = __webpack_require__(1305);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1313);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(111);\n\nvar _python = __webpack_require__(88);\n\n__webpack_require__(1309);\n\n__webpack_require__(1310);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction onChange(newValue) {\n  console.log('change', newValue);\n}\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          'div',\n          { className: 'label' },\n          'Command name:'\n        ),\n        _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'label' },\n          'Command title:'\n        ),\n        _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'label' },\n          'The python command:'\n        ),\n        _react2.default.createElement(_reactAce2.default, {\n          mode: 'python',\n          width: '100%',\n          height: '300px',\n          theme: 'github',\n          onChange: onChange,\n          name: 'command_editor',\n          editorProps: { $blockScrolling: true }\n        }),\n        _react2.default.createElement(\n          'div',\n          { className: 'label' },\n          'The explanation:'\n        ),\n        _react2.default.createElement(_reactAce2.default, {\n          mode: 'python',\n          width: '100%',\n          height: '300px',\n          theme: 'github',\n          onChange: onChange,\n          name: 'explanation_editor',\n          editorProps: { $blockScrolling: true }\n        }),\n        _react2.default.createElement('div', { className: 'clear' })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\n// const mapStateToProps = (state) => ({\n//     search: state.functionSearch.search,\n//     results: state.functionSearch.results\n// });\n//\n// CommandEdit = connect(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ29tbWFuZEVkaXQiLCJyZW5kZXIiLCIkYmxvY2tTY3JvbGxpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDMUJDLFVBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCRixRQUFyQjtBQUNEOztJQUVLRyxXOzs7Ozs7Ozs7Ozs7OztnTUFFRkMsTSxHQUFTO0FBQUEsYUFDUDtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBREY7QUFFRSxpREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSx1QkFBL0IsR0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FIRjtBQUlFLGlEQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLHVCQUEvQixHQUpGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFDRSxnQkFBSyxRQURQO0FBRUUsaUJBQU0sTUFGUjtBQUdFLGtCQUFPLE9BSFQ7QUFJRSxpQkFBTSxRQUpSO0FBS0Usb0JBQVVMLFFBTFo7QUFNRSxnQkFBSyxnQkFOUDtBQU9FLHVCQUFhLEVBQUNNLGlCQUFpQixJQUFsQjtBQVBmLFVBTkY7QUFlRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBZkY7QUFnQkU7QUFDRSxnQkFBSyxRQURQO0FBRUUsaUJBQU0sTUFGUjtBQUdFLGtCQUFPLE9BSFQ7QUFJRSxpQkFBTSxRQUpSO0FBS0Usb0JBQVVOLFFBTFo7QUFNRSxnQkFBSyxvQkFOUDtBQU9FLHVCQUFhLEVBQUNNLGlCQUFpQixJQUFsQjtBQVBmLFVBaEJGO0FBeUJFLCtDQUFLLFdBQVUsT0FBZjtBQXpCRixPQURPO0FBQUEsSzs7Ozs7O0FBOEJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWVGLFciLCJmaWxlIjoiMTMwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IHsgdXBkYXRlRnVuYywgdXBkYXRlUmVzdWx0cywgc3RvcmVDdXJyZW50SW5wdXQsIHNldERvY3MgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5mdW5jdGlvbiBvbkNoYW5nZShuZXdWYWx1ZSkge1xuICBjb25zb2xlLmxvZygnY2hhbmdlJyxuZXdWYWx1ZSk7XG59XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCBuYW1lOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZF90d29fbnVtYmVyc1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIHRpdGxlOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgcHl0aG9uIGNvbW1hbmQ6PC9kaXY+XG4gICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgZWRpdG9yUHJvcHM9e3skYmxvY2tTY3JvbGxpbmc6IHRydWV9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIGV4cGxhbmF0aW9uOjwvZGl2PlxuICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiZXhwbGFuYXRpb25fZWRpdG9yXCJcbiAgICAgICAgICBlZGl0b3JQcm9wcz17eyRibG9ja1Njcm9sbGluZzogdHJ1ZX19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxufVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4vLyAgICAgc2VhcmNoOiBzdGF0ZS5mdW5jdGlvblNlYXJjaC5zZWFyY2gsXG4vLyAgICAgcmVzdWx0czogc3RhdGUuZnVuY3Rpb25TZWFyY2gucmVzdWx0c1xuLy8gfSk7XG4vL1xuLy8gQ29tbWFuZEVkaXQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWFuZEVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kRWRpdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbW1hbmRFZGl0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})