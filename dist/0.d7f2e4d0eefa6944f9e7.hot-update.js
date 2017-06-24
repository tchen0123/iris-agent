webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(54);\n\nvar _python = __webpack_require__(80);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n// canal artefact wood angle coffee february media aunt tail load weapon jazz\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\nvar lookup_func = function lookup_func(dispatch, minimizeState, currMessages) {\n    dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n    if (currMessages.length > 0) {\n        print(currMessages);\n        (0, _python.updateDocs)(currMessages[0]);\n    } else {\n        (0, _python.updateDocs)(input.value);\n    }\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        minimizeState = _ref.minimizeState,\n        currMessages = _ref.currMessages;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    // dispatch(updateDocEvent({'doc':{'title':''}}));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } }),\n            _react2.default.createElement('img', { className: 'hintButton', width: '21px', src: 'http://0.0.0.0:8000/static/noun_89606.svg', onClick: function onClick() {\n                    return lookup_func(dispatch, minimizeState, currMessages);\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions,\n        minimizeState: state.minimizeState,\n        currMessages: state.conversation.currentConvo.messages\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzdHJpcFRleHQiLCJ0ZXh0IiwicmVwbGFjZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUlucHV0IiwibG9va3VwX2Z1bmMiLCJtaW5pbWl6ZVN0YXRlIiwiY3Vyck1lc3NhZ2VzIiwiZG9jcyIsInByaW50IiwiSW5wdXRCb3giLCJub2RlIiwicHJvcFR5cGVzIiwiZnVuYyIsImFueSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29udmVyc2F0aW9uIiwiY3VycmVudENvbnZvIiwibWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztJQUFZQSxDOzs7Ozs7QUFHWixJQUFJQyxjQUFKOztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxZQUFEO0FBQUEsV0FBa0JBLGFBQWFDLE1BQWIsS0FBd0IsSUFBMUM7QUFBQSxDQUFoQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNGLFlBQUQ7QUFBQSxXQUFrQkgsRUFBRU0sT0FBRixDQUFVSCxhQUFhSSxPQUFiLENBQXFCQyxLQUFyQixFQUFWLEVBQXdDTCxhQUFhQyxNQUFyRCxDQUFsQjtBQUFBLENBQTFCOztBQUVBLElBQU1LLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdQLFlBQVgsRUFBeUJRLENBQXpCLEVBQTRCQyxXQUE1QixFQUE0QztBQUMxRCxRQUFNQyxVQUFVRixFQUFFRSxPQUFGLElBQWFGLEVBQUVHLEtBQS9CO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLFFBQUlBLFlBQVksQ0FBaEIsRUFBa0I7QUFBRTtBQUNsQixZQUFHRCxZQUFZSyxNQUFaLEdBQXFCLENBQXhCLEVBQTBCO0FBQ3hCLGdCQUFJQyxZQUFZTixZQUFZLENBQVosRUFBZU8sSUFBZixDQUFvQkMsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBa0MsRUFBbEMsRUFBc0NBLE9BQXRDLENBQThDLElBQTlDLEVBQW9ELEVBQXBELENBQWhCO0FBQ0FuQixrQkFBTW9CLEtBQU4sR0FBY0gsU0FBZDtBQUNBLG9DQUFXakIsTUFBTW9CLEtBQWpCO0FBQ0Q7QUFDRFYsVUFBRVcsY0FBRjtBQUNEO0FBQ0QsUUFBSVQsWUFBWSxFQUFoQixFQUFvQjtBQUFFO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQU4saUJBQVMsNkJBQWlCLEVBQUMsYUFBYSxJQUFkLEVBQWpCLENBQVQ7QUFDQUssZ0JBQVFDLEdBQVIsQ0FBWWIsWUFBWjtBQUNBLFlBQUlELFFBQVFDLFlBQVIsQ0FBSixFQUEyQjtBQUN2Qlksb0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWCxrQkFBa0JGLFlBQWxCLENBQXRCO0FBQ0FGLGtCQUFNb0IsS0FBTixHQUFjaEIsa0JBQWtCRixZQUFsQixDQUFkO0FBQ0g7QUFDSixLQVJELE1BUU8sSUFBR1UsWUFBWSxFQUFmLEVBQW1CO0FBQUU7QUFDeEJFLGdCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNBTixpQkFBUyw2QkFBaUIsRUFBQyxhQUFhLE1BQWQsRUFBakIsQ0FBVDtBQUNBSyxnQkFBUUMsR0FBUixDQUFZYixZQUFaO0FBQ0EsWUFBSUQsUUFBUUMsWUFBUixDQUFKLEVBQTJCO0FBQ3ZCWSxvQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJYLGtCQUFrQkYsWUFBbEIsQ0FBdkI7QUFDQUYsa0JBQU1vQixLQUFOLEdBQWNoQixrQkFBa0JGLFlBQWxCLENBQWQ7QUFDSDtBQUNKO0FBQ0osQ0E1QkQ7QUE2QkE7QUFDQSxJQUFNb0IsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDYixRQUFELEVBQWM7QUFDaENBLGFBQVMsOEJBQWtCVCxNQUFNb0IsS0FBeEIsQ0FBVDtBQUNBLDRCQUFXcEIsTUFBTW9CLEtBQWpCO0FBQ0E7QUFDSCxDQUpEOztBQU1BLElBQU1HLGNBQWMsU0FBZEEsV0FBYyxDQUFDZCxRQUFELEVBQVdlLGFBQVgsRUFBMEJDLFlBQTFCLEVBQTJDO0FBQzdEaEIsYUFBUyxvQkFBUSxFQUFDaUIsTUFBSyxDQUFDRixjQUFjRSxJQUFyQixFQUFSLENBQVQ7QUFDQSxRQUFJRCxhQUFhVCxNQUFiLEdBQXNCLENBQTFCLEVBQTRCO0FBQzFCVyxjQUFNRixZQUFOO0FBQ0EsZ0NBQVdBLGFBQWEsQ0FBYixDQUFYO0FBQ0QsS0FIRCxNQUlJO0FBQ0YsZ0NBQVd6QixNQUFNb0IsS0FBakI7QUFDRDtBQUNGLENBVEQ7O0FBV0E7QUFDQSxJQUFJUSxXQUFXO0FBQUEsUUFBR25CLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFQLFlBQWIsUUFBYUEsWUFBYjtBQUFBLFFBQTJCUyxXQUEzQixRQUEyQkEsV0FBM0I7QUFBQSxRQUF3Q2EsYUFBeEMsUUFBd0NBLGFBQXhDO0FBQUEsUUFBdURDLFlBQXZELFFBQXVEQSxZQUF2RDtBQUFBLFdBQ1g7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLGNBQU0sVUFBVSxxQkFBSztBQUNqQmYsc0JBQUVXLGNBQUY7QUFDQVosNkJBQVMsdUJBQVcsRUFBQyxVQUFVLE1BQVgsRUFBbUIsUUFBUSxDQUFDVCxNQUFNb0IsS0FBUCxDQUEzQixFQUFYLENBQVQ7QUFDQVgsNkJBQVMsNEJBQWdCLEVBQUMsV0FBV1QsTUFBTW9CLEtBQWxCLEVBQWhCLENBQVQ7QUFDQVgsNkJBQVMsOEJBQWtCLEVBQWxCLENBQVQ7QUFDQTtBQUNBVCwwQkFBTW9CLEtBQU4sR0FBYyxFQUFkO0FBQ0gsaUJBUEQ7QUFRSSxxREFBTyxVQUFVO0FBQUEsMkJBQU1FLGNBQWNiLFFBQWQsQ0FBTjtBQUFBLGlCQUFqQixFQUFnRCxXQUFXLG1CQUFDQyxDQUFEO0FBQUEsMkJBQU9GLFdBQVVDLFFBQVYsRUFBb0JQLFlBQXBCLEVBQWtDUSxDQUFsQyxFQUFxQ0MsV0FBckMsQ0FBUDtBQUFBLGlCQUEzRCxFQUFxSCxNQUFLLE1BQTFILEVBQWlJLGFBQVksbUJBQTdJLEVBQWlLLEtBQUssbUJBQVE7QUFBQyw0QkFvQnpLWCxLQXBCeUssV0FBUTZCLElBQVI7QUFBYyxpQkFBN0wsR0FSSjtBQVNJLG1EQUFLLFdBQVUsWUFBZixFQUE0QixPQUFNLE1BQWxDLEVBQXlDLEtBQUksMkNBQTdDLEVBQXlGLFNBQVM7QUFBQSwyQkFBTU4sWUFBWWQsUUFBWixFQUFzQmUsYUFBdEIsRUFBcUNDLFlBQXJDLENBQU47QUFBQSxpQkFBbEc7QUFUSjtBQURKLEtBRFc7QUFBQSxDQUFmOztBQWVBRyxTQUFTRSxTQUFULEdBQXFCO0FBQ2pCckIsY0FBVSxpQkFBVXNCLElBREg7QUFFakI3QixrQkFBYyxpQkFBVThCLEdBRlA7QUFHakJyQixpQkFBYSxpQkFBVXFCO0FBSE4sQ0FBckI7O0FBTUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ2hDLHNCQUFjZ0MsTUFBTWhDLFlBRFk7QUFFaENTLHFCQUFhdUIsTUFBTXZCLFdBRmE7QUFHaENhLHVCQUFlVSxNQUFNVixhQUhXO0FBSWhDQyxzQkFBY1MsTUFBTUMsWUFBTixDQUFtQkMsWUFBbkIsQ0FBZ0NDO0FBSmQsS0FBWjtBQUFBLENBQXhCOztBQU9BLFFBRVFULFFBRlIsY0FBVyx5QkFBUUssZUFBUixFQUF5QkwsUUFBekIsQ0FBWDs7UUFFUUEsUSxHQUFBQSxRO1FBQVU1QixLLEdBQUFBLEsiLCJmaWxlIjoiMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxubGV0IGlucHV0O1xuXG5jb25zdCBub3ROdWxsID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5LmN1cnJJZCAhPT0gbnVsbDtcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gXy5yZXZlcnNlKGlucHV0SGlzdG9yeS5oaXN0b3J5LnNsaWNlKCkpW2lucHV0SGlzdG9yeS5jdXJySWRdO1xuXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgY29uc29sZS5sb2coa2V5Q29kZSk7XG4gICAgaWYgKGtleUNvZGUgPT09IDkpeyAvLyB0YWJcbiAgICAgIGlmKHByZWRpY3Rpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gcHJlZGljdGlvbnNbMF0udGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBzdHJpcFRleHQ7XG4gICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ3VwIGFycm93Jyk7XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlwbGF5JywgZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBjb25zb2xlLmxvZygnZG93biBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIGNhbmFsIGFydGVmYWN0IHdvb2QgYW5nbGUgY29mZmVlIGZlYnJ1YXJ5IG1lZGlhIGF1bnQgdGFpbCBsb2FkIHdlYXBvbiBqYXp6XG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGxvb2t1cF9mdW5jID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlLCBjdXJyTWVzc2FnZXMpID0+IHtcbiAgZGlzcGF0Y2goc2V0RG9jcyh7ZG9jczohbWluaW1pemVTdGF0ZS5kb2NzfSkpXG4gIGlmIChjdXJyTWVzc2FnZXMubGVuZ3RoID4gMCl7XG4gICAgcHJpbnQoY3Vyck1lc3NhZ2VzKTtcbiAgICB1cGRhdGVEb2NzKGN1cnJNZXNzYWdlc1swXSk7XG4gIH1cbiAgZWxzZXtcbiAgICB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbiAgfVxufVxuXG4vLyBpbnB1dCBnb2VzIGhlcmVcbmxldCBJbnB1dEJveCA9ICh7IGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIHByZWRpY3Rpb25zLCBtaW5pbWl6ZVN0YXRlLCBjdXJyTWVzc2FnZXMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0gfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoJycpKTtcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKHVwZGF0ZURvY0V2ZW50KHsnZG9jJzp7J3RpdGxlJzonJ319KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCl9IG9uS2V5RG93bj17KGUpID0+IG9uS2V5RG93bihkaXNwYXRjaCwgaW5wdXRIaXN0b3J5LCBlLCBwcmVkaWN0aW9ucyl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIG1lc3NhZ2UgaGVyZVwiIHJlZj17bm9kZSA9PiB7aW5wdXQgPSBub2RlO319PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpbnRCdXR0b25cIiB3aWR0aD1cIjIxcHhcIiBzcmM9XCJodHRwOi8vMC4wLjAuMDo4MDAwL3N0YXRpYy9ub3VuXzg5NjA2LnN2Z1wiIG9uQ2xpY2s9eygpID0+IGxvb2t1cF9mdW5jKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlLCBjdXJyTWVzc2FnZXMpfT48L2ltZz5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuSW5wdXRCb3gucHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dEhpc3Rvcnk6IFByb3BUeXBlcy5hbnksXG4gICAgcHJlZGljdGlvbnM6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBpbnB1dEhpc3Rvcnk6IHN0YXRlLmlucHV0SGlzdG9yeSxcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZSxcbiAgICBjdXJyTWVzc2FnZXM6IHN0YXRlLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8ubWVzc2FnZXMsXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})