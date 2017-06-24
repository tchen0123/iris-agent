webpackHotUpdate(0,{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _index = __webpack_require__(167);\n\nvar _python = __webpack_require__(126);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            input.value = predictions[0].text;\n            (0, _python.updateHint)(input.value);\n        }\n    }\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n// canal artefact wood angle coffee february media aunt tail load weapon jazz\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    // dispatch(updateDocEvent({'doc':{'title':''}}));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZSIsInRleHQiLCJvbkNoYW5nZUlucHV0IiwiSW5wdXRCb3giLCJwcmV2ZW50RGVmYXVsdCIsIm5vZGUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYW55IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxDOzs7Ozs7QUFHWixJQUFJQyxjQUFKOztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxZQUFEO0FBQUEsV0FBa0JBLGFBQWFDLE1BQWIsS0FBd0IsSUFBMUM7QUFBQSxDQUFoQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNGLFlBQUQ7QUFBQSxXQUFrQkgsRUFBRU0sT0FBRixDQUFVSCxhQUFhSSxPQUFiLENBQXFCQyxLQUFyQixFQUFWLEVBQXdDTCxhQUFhQyxNQUFyRCxDQUFsQjtBQUFBLENBQTFCOztBQUVBLElBQU1LLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdQLFlBQVgsRUFBeUJRLENBQXpCLEVBQTRCQyxXQUE1QixFQUE0QztBQUMxRCxRQUFNQyxVQUFVRixFQUFFRSxPQUFGLElBQWFGLEVBQUVHLEtBQS9CO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLFFBQUlBLFlBQVksQ0FBaEIsRUFBa0I7QUFBRTtBQUNsQixZQUFHRCxZQUFZSyxNQUFaLEdBQXFCLENB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OlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmxldCBpbnB1dDtcblxuY29uc3Qgbm90TnVsbCA9IChpbnB1dEhpc3RvcnkpID0+IGlucHV0SGlzdG9yeS5jdXJySWQgIT09IG51bGw7XG5jb25zdCBnZXRDdXJyZW50SGlzdG9yeSA9IChpbnB1dEhpc3RvcnkpID0+IF8ucmV2ZXJzZShpbnB1dEhpc3RvcnkuaGlzdG9yeS5zbGljZSgpKVtpbnB1dEhpc3RvcnkuY3VycklkXTtcblxuY29uc3Qgb25LZXlEb3duID0gKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKSA9PiB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xuICAgIGNvbnNvbGUubG9nKGtleUNvZGUpO1xuICAgIGlmIChrZXlDb2RlID09PSA5KXsgLy8gdGFiXG4gICAgICBpZihwcmVkaWN0aW9ucy5sZW5ndGggPiAwKXtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBwcmVkaWN0aW9uc1swXS50ZXh0O1xuICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cCBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ3VwJ30pKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRIaXN0b3J5KTtcbiAgICAgICAgaWYgKG5vdE51bGwoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd24gYXJyb3cnKTtcbiAgICAgICAgZGlzcGF0Y2gobW92ZUlucHV0SGlzdG9yeSh7J2RpcmVjdGlvbic6ICdkb3duJ30pKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRIaXN0b3J5KTtcbiAgICAgICAgaWYgKG5vdE51bGwoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXknLCBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBjYW5hbCBhcnRlZmFjdCB3b29kIGFuZ2xlIGNvZmZlZSBmZWJydWFyeSBtZWRpYSBhdW50IHRhaWwgbG9hZCB3ZWFwb24gamF6elxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0b3JlQ3VycmVudElucHV0KGlucHV0LnZhbHVlKSk7XG4gICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlRG9jcyhpbnB1dC52YWx1ZSk7XG59O1xuXG4vLyBpbnB1dCBnb2VzIGhlcmVcbmxldCBJbnB1dEJveCA9ICh7IGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIHByZWRpY3Rpb25zIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9ib3hcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkTWVzc2FnZSh7J29yaWdpbic6ICd1c2VyJywgJ3RleHQnOiBbaW5wdXQudmFsdWVdIH0pKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZElucHV0SGlzdG9yeSh7J21lc3NhZ2UnOiBpbnB1dC52YWx1ZX0pKTtcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKHVwZGF0ZURvY0V2ZW50KHsnZG9jJzp7J3RpdGxlJzonJ319KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCl9IG9uS2V5RG93bj17KGUpID0+IG9uS2V5RG93bihkaXNwYXRjaCwgaW5wdXRIaXN0b3J5LCBlLCBwcmVkaWN0aW9ucyl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIG1lc3NhZ2UgaGVyZVwiIHJlZj17bm9kZSA9PiB7aW5wdXQgPSBub2RlO319PjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj47XG5cbklucHV0Qm94LnByb3BUeXBlcyA9IHtcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRIaXN0b3J5OiBQcm9wVHlwZXMuYW55LFxuICAgIHByZWRpY3Rpb25zOiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgaW5wdXRIaXN0b3J5OiBzdGF0ZS5pbnB1dEhpc3RvcnksXG4gICAgcHJlZGljdGlvbnM6IHN0YXRlLnByZWRpY3Rpb25zXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})