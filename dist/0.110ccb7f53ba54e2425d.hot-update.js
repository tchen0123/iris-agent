webpackHotUpdate(0,{

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(394);\n\nvar _redux = __webpack_require__(267);\n\nvar _types = __webpack_require__(274);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', title: '', args: '', command: '', explanation: '', testInput: '' };\n    var action = arguments[1];\n\n    return state;\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJjb21tYW5kRWRpdFBhbmUiLCJuYW1lIiwiY29tbWFuZCIsImV4cGxhbmF0aW9uIiwidGVzdElucHV0IiwiaW5wdXRIaXN0b3J5IiwibmV3SWQiLCJBRERfSU5QVVRfSElTVE9SWSIsImN1cnJJZCIsIm1lc3NhZ2UiLCJNT1ZFX0lOUFVUX0hJU1RPUlkiLCJkaXJlY3Rpb24iLCJyb290UmVkdWNlciIsInJvdXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLEM7Ozs7OztBQUVaLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUNyQixlQUFPRCxLQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQUU7QUFDOUMsUUFBTUMsY0FBYyxFQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJSCxZQUFZSSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJYLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQW5CO0FBQ0FOLHFCQUFhUixFQUFFZSxHQUFGLENBQU1mLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQU4sQ0FBYjtBQUNIO0FBTjJDO0FBQUE7QUFBQTs7QUFBQTtBQU81Qyw2QkFBZ0JSLE9BQU9VLElBQXZCLDhIQUE2QjtBQUFBLGdCQUFsQkgsQ0FBa0I7O0FBQ3pCTDtBQUNBRCx3QkFBWVUsSUFBWixDQUFpQixFQUFDLFVBQVVYLE9BQU9ZLE1BQWxCLEVBQTBCLFFBQVFMLENBQWxDLEVBQXFDLE1BQU1MLFVBQTNDO0FBQ0MseUJBQVNQLFlBQVlLLE9BQU9hLEtBQW5CLENBRFYsRUFDcUMsT0FBT2xCLFlBQVlLLE9BQU9jLEdB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NkJBQVMsQ0FBVDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNELGdDQUFXbkQsS0FBWCxJQUFrQixVQUFVbUQsS0FBNUI7QUFDSjtBQUNJLG1CQUFPbkQsS0FBUDtBQXZCUjtBQXlCSCxDQTNCRDs7QUE2QkEsSUFBTXlELGNBQWMsNEJBQWdCO0FBQ2hDakQsOEJBRGdDO0FBRWhDZ0Isd0JBRmdDO0FBR2hDRSw0QkFIZ0M7QUFJaEN3Qiw4QkFKZ0M7QUFLaENYLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDaUI7QUFUZ0MsQ0FBaEIsQ0FBcEI7O2tCQVllRCxXIiwiZmlsZSI6IjQ1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsdWVPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4geyAvLyB0ZXh0LCBvcmlnaW4gPSAndXNlcicsIHR5cGUgPSBudWxsLCBhcmcgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlc0NvbnZvID0gKGNvbnZvLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb252bztcbiAgICByZXR1cm4geyAuLi5jb252bywgbWVzc2FnZXM6IGFwcGVuZE1lc3NhZ2VzKG1lc3NhZ2VzLCBhY3Rpb24pLCBhcmdzOiBhY3Rpb24uYXJnX21hcCB9O1xufTtcblxuY29uc3QgY29udmVyc2F0aW9uID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IDAsICdhcmdzJzoge30gfSwgJ3N0YXRlJzogJ1NUQVJUJ30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgY3VycmVudENvbnZvIH0gPSBzdGF0ZTtcbiAgICBsZXQgbmV3Q29udm87XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmNvbnZlcnNhdGlvbi5oaXN0b3J5LCBjdXJyZW50Q29udm86IGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKSwgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfU0VSVkVSX01FU1NBR0U6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q29udm8gPSBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhdGUgPT09ICdTVEFSVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXJkY29kaW5nIHNvbWUgbG9naWMgaGVyZSBmb3Igc3luY2luZyBoaXN0b3J5IHdpdGggc2VydmVyIG9uIFNUQVJUXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3Mgc29tZSBjb21tYW5kcyB0byBvdmVyd3JpdGUgaGlzdG9yeSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIGxldCB0aGVJZCA9IGFjdGlvbi5oaXN0b3J5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuZXdDb252byA9IHsuLi5uZXdDb252bywgdGl0bGU6IGFjdGlvbi5sYWJlbCwgaWQ6IHRoZUlkIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmhpc3RvcnkuY29uY2F0KFtuZXdDb252b10pLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiBuZXdDb252by5pZCArIDEsICdhcmdzJzoge30gfSwgc3RhdGU6ICdTVEFSVCcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBhY3Rpb24uc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5ISURFX0NPTlZFUlNBVElPTjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBfLm1hcChoaXN0b3J5LCBjb252ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB7Li4uY29udn07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnYuaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQuaGlkZGVuID0gIW91dC5oaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLmN1cnJlbnRDb252b307XG4gICAgICAgICAgICBpZiAobmV3Q29udm8uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvLmhpZGRlbiA9ICFuZXdDb252by5oaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBuZXdIaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogc3RhdGUuc3RhdGV9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHZhcmlhYmxlcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1ZBUklBQkxFUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24udmFyaWFibGVzO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHByZWRpY3Rpb25zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUFJFRElDVElPTlM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnByZWRpY3Rpb25zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGRvY3MgPSAoc3RhdGUgPSB7dGl0bGU6ICcnLCBleGFtcGxlczogW10sIGRlc2NyaXB0aW9uOiBbXSwgc291cmNlOicnfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ET0NTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kb2M7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZnVuY3Rpb25TZWFyY2ggPSAoc3RhdGUgPSB7c2VhcmNoOiAnJywgcmVzdWx0czogW119LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfRlVOQzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaDogYWN0aW9uLnNlYXJjaH07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfUkVTVUxUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3VsdHM6IGFjdGlvbi5yZXN1bHRzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjdXJyZW50SW5wdXQgPSAoc3RhdGUgPSB7J2lucHV0JzogJyd9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVUOlxuICAgICAgcmV0dXJuIHsnaW5wdXQnOiBhY3Rpb24uY3VycmVudElucHV0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBtaW5pbWl6ZVN0YXRlID0gKHN0YXRlPXsnZG9jcyc6IHRydWUsICdjb2RlX2VkaXQnOnRydWV9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TRVRfRE9DUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdkb2NzJzogYWN0aW9uLmRvY3N9O1xuICAgIGNhc2UgdHlwZXMuU0VUX0NPREVfRURJVDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjb2RlX2VkaXQnOiBhY3Rpb24uY29kZV9lZGl0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjb21tYW5kRWRpdFBhbmUgPSAoc3RhdGU9e25hbWU6ICcnLCB0aXRsZTogJycsIGFyZ3M6ICcnLCBjb21tYW5kOiAnJywgZXhwbGFuYXRpb246ICcnLCB0ZXN0SW5wdXQ6ICcnfSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGlucHV0SGlzdG9yeSA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycklkJzogbnVsbCwgJ3Nob3dIaXN0b3J5JzogZmFsc2UgfSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld0lkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkO1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwICYmIG5ld0lkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2hpc3RvcnknOiBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLm1lc3NhZ2VdLCAnY3VycklkJzogbmV3SWR9O1xuICAgICAgICBjYXNlIHR5cGVzLk1PVkVfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkIHx8IDA7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA8IChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjdXJySWQnOiBuZXdJZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb252ZXJzYXRpb24sXG4gICAgdmFyaWFibGVzLFxuICAgIHByZWRpY3Rpb25zLFxuICAgIGlucHV0SGlzdG9yeSxcbiAgICBjdXJyZW50SW5wdXQsXG4gICAgZG9jcyxcbiAgICBmdW5jdGlvblNlYXJjaCxcbiAgICBtaW5pbWl6ZVN0YXRlLFxuICAgIHJvdXRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})