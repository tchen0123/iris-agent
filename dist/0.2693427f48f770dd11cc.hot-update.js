webpackHotUpdate(0,{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(61);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(73);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, active, text) {\n  var onlyOne = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  return function () {\n    if (active === true) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      if (onlyOne === true) {\n        _InputBox.input.value = text;\n      } else if (_InputBox.input.value.includes(text)) {\n        var items = _InputBox.input.value.split(\",\").map(function (x) {\n          return x.replace(/^\\s+|\\s+$/g, '');\n        });\n        var findIndex = items.indexOf(text);\n        if (findIndex > -1) {\n          items.splice(findIndex, 1);\n        }\n        _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n      } else {\n        if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n      }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      var hasText = false;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  // newColStyle['height'] = '4em';\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', onClick: setInput(_this.props.dispatch, _this.props.active, column.name, _this.props.onlyOne), style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.active && _this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#eee';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwiYWN0aXZlIiwidGV4dCIsIm9ubHlPbmUiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJpbmNsdWRlcyIsIml0ZW1zIiwic3BsaXQiLCJtYXAiLCJ4IiwiZmluZEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImpvaW4iLCJUYWJsZVNlbGVjdE1lc3NhZ2UiLCJyZW5kZXIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicHJvcHMiLCJ0ZXN0Q29sdW1ucyIsImNvbE1hcCIsImkiLCJsZW5ndGgiLCJuYW1lIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImhhc1RleHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudElucHV0Iiwib3JpZ2luIiwiaGlkZGVuIiwiZGlzcGxheSIsIndpZHRoIiwiY29sdW1uIiwibmV3Q29sU3R5bGUiLCJ0eXBlIiwicm93IiwibmV3Um93U3R5bGUiLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFtQkMsSUFBbkIsRUFBNkM7QUFBQSxNQUFwQkMsT0FBb0IsdUVBQVYsS0FBVTs7QUFDMUQsU0FBTyxZQUFNO0FBQ1QsUUFBR0YsV0FBVyxJQUFkLEVBQW1CO0FBQ2pCLFVBQUlHLFlBQVlGLEtBQUtHLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBQXVCQSxPQUF2QixDQUErQixJQUEvQixFQUFx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Q0FBWSxhQUFaLElBQTZCLE1BQTdCO0FBQXFDO0FBQ2xFLHNCQUFJaEIsSUFBSSxFQUFSLEVBQVc7QUFDVCwyQkFBTztBQUFBO0FBQUEsd0JBQU0sV0FBVSxhQUFoQixFQUE4QixPQUFPZ0IsV0FBckM7QUFBbURFLDBCQUFJSCxPQUFPYixJQUFYO0FBQW5ELHFCQUFQO0FBQ0Q7QUFDRixpQkFiQTtBQURLLGVBQVI7QUFnQkQsYUFuQkE7QUFkSDtBQURBO0FBREksT0FBUjtBQXVDRCxLOzs7Ozs7QUFJSFYsbUJBQW1CNEIsU0FBbkIsR0FBK0I5QyxVQUFVK0MsV0FBekM7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2Isa0JBQWNhLE1BQU1iLFlBQU4sQ0FBbUJjO0FBREQsR0FBWjtBQUFBLENBQXhCOztBQUlBaEMscUJBQXFCLHlCQUFROEIsZUFBUixFQUF5QjlCLGtCQUF6QixDQUFyQjs7a0JBRWVBLGtCIiwiZmlsZSI6IjUwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5pbXBvcnQgeyBzdG9yZUN1cnJlbnRJbnB1dCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbmNvbnN0IHNldElucHV0ID0gKGRpc3BhdGNoLCBhY3RpdmUsIHRleHQsIG9ubHlPbmUgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgICAgaWYob25seU9uZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICAgIGxldCBmaW5kSW5kZXggPSBpdGVtcy5pbmRleE9mKHRleHQpO1xuICAgICAgICAgICAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbXMuam9pbihcIiwgXCIpOy8vIGlucHV0LnZhbHVlLnJlcGxhY2UoUmVnRXhwKHRlc3QrXCIsfFwidGVzdCksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlICsgXCIsIFwiICsgc3RyaXBUZXh0O1xuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnRleHQpO1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy5jb2xNYXAgPSB7fTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbE1hcFtpXSA9IHRoaXMudGVzdENvbHVtbnNbaV0ubmFtZTtcbiAgICB9XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXS5zbGljZSgwLDMpO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbnRJbnB1dCk7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZSB0YWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfdGFibGVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCAqICgzNTArMTArMSl9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLGkpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgIC8vIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgaWYgKGkgPCA1MCl7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIG9uQ2xpY2s9e3NldElucHV0KHRoaXMucHJvcHMuZGlzcGF0Y2gsIHRoaXMucHJvcHMuYWN0aXZlLCBjb2x1bW4ubmFtZSwgdGhpcy5wcm9wcy5vbmx5T25lKX0gc3R5bGU9e25ld0NvbFN0eWxlfT57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAoKHJvdyxpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmN1cnJlbnRJbnB1dC5pbmNsdWRlcyh0aGlzLmNvbE1hcFtpXSkpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9ICcjZWVlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgICAgIGlmIChpIDwgNTApe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuVGFibGVTZWxlY3RNZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGN1cnJlbnRJbnB1dDogc3RhdGUuY3VycmVudElucHV0LmlucHV0XG59KTtcblxuVGFibGVTZWxlY3RNZXNzYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYmxlU2VsZWN0TWVzc2FnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2VsZWN0TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlU2VsZWN0TWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})