webpackHotUpdate(0,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(61);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      console.log(_this.props.text);\n      var data = JSON.parse(_this.props.text);\n      console.log(data);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"];\n      _this.getRow = function (i) {\n        return _this.testRows[i];\n      };\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  // newColStyle['height'] = '4em';\n                  hasText = truel;\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0ZXN0Q29sdW1ucyIsInRlc3RSb3dzIiwiZ2V0Um93IiwiaSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImxlbmd0aCIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcCIsImNvbHVtbiIsIm5ld0NvbFN0eWxlIiwidHlwZSIsImhhc1RleHQiLCJ0cnVlbCIsIm5hbWUiLCJuZXdSb3dTdHlsZSIsInJvdyIsInByb3BUeXBlcyIsIm1lc3NhZ2VUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7Ozs7OztJQUVOQyxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BRUpDLE0sR0FBUyxZQUFNO0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWSxNQUFLQyxLQUFMLENBQVdDLElBQXZCO0FBQ0EsVUFBTUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXLE1BQUtKLEtBQUwsQ0FBV0MsSUFBdEIsQ0FBYjtBQUNBSCxjQUFRQyxHQUFSLENBQVlHLElBQVo7QUFDQSxZQUFLRyxXQUFMLEdBQW1CSCxLQUFLLGFBQUwsQ0FBbkI7QUFDQSxZQUFLSSxRQUFMLEdBQWdCSixLQUFLLFVBQUwsQ0FBaEI7QUFDQSxZQUFLSyxNQUFMLEdBQWMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU8sTUFBS0YsUUFBTCxDQUFjRSxDQUFkLENBQVA7QUFBQSxPQUFkO0FBQ0EsVUFBSUMsZUFBZSxLQUFuQjtBQUNBLFVBQUlDLGVBQWUsTUFBS0wsV0FBTCxDQUFpQk0sTUFBakIsS0FBNEIsQ0FBL0M7QUFDQSxhQUFRO0FBQUE7QUFBQSxVQUFLLFdBQWEsTUFBS1gsS0FBTCxDQUFXWSxNQUFYLEtBQXNCLE1BQXRCLEdBQStCLGNBQS9CLEdBQWdELGVBQWxFLEVBQW1GLE9BQU8sTUFBS1osS0FBTCxDQUFXYSxNQUFYLEtBQXNCLElBQXRCLEdBQTZCLEVBQUNDLFNBQVMsTUFBVixFQUE3QixHQUFpRCxFQUEzSTtBQUNKO0FBQUE7QUFBQSxZQUFLLFdBQVUsY0FBZjtBQUNBO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZixFQUE0QixPQUFPLEVBQUNDLE9BQU8sTUFBS1YsV0FBTCxDQUFpQk0sTUFBakIsSUFBMkIsTUFBSSxFQUFKLEdBQU8sQ0FBbEMsQ0FBUixFQUFuQztBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFFBQWY7QUFDQyxvQkFBS04sV0FBTCxDQUFpQlcsR0FBakIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFRVCxDQUFSLEVBQWM7QUFDbEMsb0JBQUlVLGNBQWMsRUFBbEI7QUFDQSxvQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkQsOEJBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBO0FBQ0FFLDRCQUFVQyxLQUFWO0FBQ0Q7QUFDRCxvQkFBSVgsZ0JBQWdCRixLQUFLLENBQXpCLEVBQTJCO0FBQUVVLDhCQUFZLGFBQVosSUFBNkIsTUFBN0I7QUFBcUM7QUFDbEUsb0JBQUdWLElBQUksRUFBUCxFQUFVO0FBQ1IseUJBQU87QUFBQTtBQUFBLHNCQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBT1UsV0FBckM7QUFBbURELDJCQUFPSztBQUExRCxtQkFBUDtBQUNEO0FBQ0YsZUFYQTtBQURELGFBREY7QUFlRyxrQkFBS2hCLFFBQUwsQ0FBY1UsR0FBZCxDQUFrQixlQUFPO0FBQ3hCLGtCQUFJTyxjQUFjLEVBQWxCO0FBQ0Esa0JBQUlkLFlBQUosRUFBaUI7QUFBRWMsNEJBQVksUUFBWixJQUF3QixLQUF4QjtBQUE4QjtBQUNqRCxxQkFBUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU9BLFdBQWpDO0FBQ0wsc0JBQUtsQixXQUFMLENBQWlCVyxHQUFqQixDQUFxQixVQUFDQyxNQUFELEVBQVNULENBQVQsRUFBZTtBQUNuQyxzQkFBSVUsY0FBYyxFQUFsQjtBQUNBLHNCQUFHRCxPQUFPRSxJQUFQLEtBQWdCLE1BQW5CLEVBQTBCO0FBQ3hCRCxnQ0FBWSxPQUFaLElBQXVCLEdBQXZCO0FBQ0FBLGdDQUFZLFFBQVosSUFBd0IsS0FBeEI7QUFDRDtBQUNELHNCQUFJUixnQkFBZ0JGLEtBQUssQ0FBekIsRUFBMkI7QUFBRVUsZ0NBQVksYUFBWixJQUE2QixNQUE3QjtBQUFxQztBQUNsRSxzQkFBR1YsSUFBSSxFQUFQLEVBQVU7QUFDUiwyQkFBTztBQUFBO0FBQUEsd0JBQU0sV0FBVSxhQUFoQixFQUE4QixPQUFPVSxXQUFyQztBQUFtRE0sMEJBQUlQLE9BQU9LLElBQVg7QUFBbkQscUJBQVA7QUFDRDtBQUNGLGlCQVZBO0FBREssZUFBUjtBQWFELGFBaEJBO0FBZkg7QUFEQTtBQURJLE9BQVI7QUFxQ0QsSzs7Ozs7O0FBSUgxQixrQkFBa0I2QixTQUFsQixHQUE4QjlCLFVBQVUrQixXQUF4Qzs7a0JBRWU5QixpQiIsImZpbGUiOiI0OTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3REYXRhR3JpZCBmcm9tICdyZWFjdC1kYXRhLWdyaWQnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcblxuY2xhc3MgQ29sbGVjdGlvbk1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRleHQpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudGV4dCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy50ZXN0Q29sdW1ucyA9IGRhdGFbXCJjb2x1bW5fZGF0YVwiXTtcbiAgICB0aGlzLnRlc3RSb3dzID0gZGF0YVtcInJvd19kYXRhXCJdO1xuICAgIHRoaXMuZ2V0Um93ID0gKGkpID0+IHRoaXMudGVzdFJvd3NbaV07XG4gICAgbGV0IGNvbnRhaW5zVGV4dCA9IGZhbHNlO1xuICAgIGxldCBzaW5nbGVDb2x1bW4gPSB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YV90YWJsZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoICogKDM1MCsxMCsxKX19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4saSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0NvbFN0eWxlID0ge307XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgLy8gbmV3Q29sU3R5bGVbJ2hlaWdodCddID0gJzRlbSc7XG4gICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgaWYoaSA8IDUwKXtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdSb3dTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5zVGV4dCl7IG5ld1Jvd1N0eWxlWydoZWlnaHQnXSA9ICc0ZW0nfTtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJkYXRhX3Jvd1wiIHN0eWxlPXtuZXdSb3dTdHlsZX0+XG4gICAgICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbFN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWyd3aWR0aCddID0gMzUwO1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2hlaWdodCddID0gJzRlbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICBpZihpIDwgNTApe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuQ29sbGVjdGlvbk1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbGxlY3Rpb25NZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})