webpackHotUpdate(0,{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(166);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(text) {\n  return function () {\n    var stripText = text.replace(/{/g, '').replace(/}/g, '');\n    input.value = stripText;\n    (0, _python.updateHint)(stripText);\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"].slice(0, 5);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column', style: singleColumn || i == 0 ? { 'border-left': 'none' } : {} },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsInRleHQiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwiaW5wdXQiLCJ2YWx1ZSIsIlRhYmxlU2VsZWN0TWVzc2FnZSIsInJlbmRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsInRlc3RDb2x1bW5zIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImxlbmd0aCIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcCIsImNvbHVtbiIsImkiLCJ0eXBlIiwibmFtZSIsIm5ld1Jvd1N0eWxlIiwibmV3Q29sU3R5bGUiLCJyb3ciLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOztBQUNaOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFNBQU8sWUFBTTtBQUNULFFBQUlDLFlBQVlELEtBQUtFLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBQXVCQSxPQUF2QixDQUErQixJQUEvQixFQUFxQyxFQUFyQyxDQUFoQjtBQUNBQyxVQUFNQyxLQUFOLEdBQWNILFNBQWQ7QUFDQSw0QkFBV0EsU0FBWDtBQUNILEdBSkQ7QUFLSCxDQU5EOztJQVFNSSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BRUpDLE0sR0FBUyxZQUFNO0FBQ2IsVUFBTUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXLE1BQUtDLEtBQUwsQ0FBV1YsSUFBdEIsQ0FBYjtBQUNBLFlBQUtXLFdBQUwsR0FBbUJKLEtBQUssYUFBTCxDQUFuQjtBQUNBLFlBQUtLLFFBQUwsR0FBZ0JMLEtBQUssVUFBTCxFQUFpQk0sS0FBakIsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBaEI7QUFDQSxVQUFJQyxlQUFlLEtBQW5CO0FBQ0EsVUFBSUMsZUFBZSxNQUFLSixXQUFMLENBQWlCSyxNQUFqQixLQUE0QixDQUEvQztBQUNBLGFBQVE7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLTixLQUFMLENBQVdPLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLUCxLQUFMLENBQVdRLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0o7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU8sRUFBQ0MsT0FBTyxNQUFLVCxXQUFMLENBQWlCSyxNQUFqQixJQUEyQixNQUFJLEVBQUosR0FBTyxDQUFsQyxDQUFSLEVBQW5DO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsUUFBZjtBQUNDLG9CQUFLTCxXQUFMLENBQWlCVSxHQUFqQixDQUFxQixVQUFDQyxNQUFELEVBQVFDLENBQVIsRUFBYztBQUNsQyxvQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QlYsaUNBQWUsSUFBZjtBQUNEO0FBQ0QsdUJBQU87QUFBQTtBQUFBLG9CQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBT0MsZ0JBQWdCUSxLQUFLLENBQXJCLEdBQXlCLEVBQUMsZUFBZSxNQUFoQixFQUF6QixHQUFtRCxFQUF4RjtBQUE2RkQseUJBQU9HO0FBQXBHLGlCQUFQO0FBQ0QsZUFMQTtBQURELGFBREY7QUFTRyxrQkFBS2IsUUFBTCxDQUFjUyxHQUFkLENBQWtCLGVBQU87QUFDeEIsa0JBQUlLLGNBQWMsRUFBbEI7QUFDQSxrQkFBSVosWUFBSixFQUFpQjtBQUFFWSw0QkFBWSxRQUFaLElBQXdCLEtBQXhCO0FBQThCO0FBQ2pELHFCQUFRO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBT0EsV0FBakM7QUFDTCxzQkFBS2YsV0FBTCxDQUFpQlUsR0FBakIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDbkMsc0JBQUlJLGNBQWMsRUFBbEI7QUFDQSxzQkFBR0wsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkcsZ0NBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBQSxnQ0FBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxzQkFBSVosZ0JBQWdCUSxLQUFLLENBQXpCLEVBQTJCO0FBQUVJLGdDQUFZLGFBQVosSUFBNkIsTUFBN0I7QUFBcUM7QUFDbEUseUJBQU87QUFBQTtBQUFBLHNCQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBT0EsV0FBckM7QUFBbURDLHdCQUFJTixPQUFPRyxJQUFYO0FBQW5ELG1CQUFQO0FBQ0QsaUJBUkE7QUFESyxlQUFSO0FBV0QsYUFkQTtBQVRIO0FBREE7QUFESSxPQUFSO0FBNkJELEs7Ozs7OztBQUlIcEIsbUJBQW1Cd0IsU0FBbkIsR0FBK0IvQixVQUFVZ0MsV0FBekM7O2tCQUVlekIsa0IiLCJmaWxlIjoiMTI1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuXG5jb25zdCBzZXRJbnB1dCA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICB1cGRhdGVIaW50KHN0cmlwVGV4dCk7XG4gICAgfTtcbn07XG5cbmNsYXNzIFRhYmxlU2VsZWN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudGV4dCk7XG4gICAgdGhpcy50ZXN0Q29sdW1ucyA9IGRhdGFbXCJjb2x1bW5fZGF0YVwiXTtcbiAgICB0aGlzLnRlc3RSb3dzID0gZGF0YVtcInJvd19kYXRhXCJdLnNsaWNlKDAsNSk7XG4gICAgbGV0IGNvbnRhaW5zVGV4dCA9IGZhbHNlO1xuICAgIGxldCBzaW5nbGVDb2x1bW4gPSB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YV90YWJsZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoICogKDM1MCsxMCsxKX19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4saSkgPT4ge1xuICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgY29udGFpbnNUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIHN0eWxlPXtzaW5nbGVDb2x1bW4gfHwgaSA9PSAwID8geydib3JkZXItbGVmdCc6ICdub25lJ30gOiB7fX0+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlQ29sdW1uIHx8IGkgPT0gMCl7IG5ld0NvbFN0eWxlWydib3JkZXItbGVmdCddID0gJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuXG5UYWJsZVNlbGVjdE1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNlbGVjdE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})