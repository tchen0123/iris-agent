webpackHotUpdate(0,{

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(394);\n\nvar _redux = __webpack_require__(267);\n\nvar _types = __webpack_require__(274);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', title: '', args: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            var first_half = state.args.concat([]).slice(0, action.id);\n            var second_half = state.args.concat([]).slice(action.id + 1, state.args.length);\n            console.log(first_half.concat(second_half));\n            return _extends({}, state, { args: first_half.concat(second_half) });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJjb21tYW5kRWRpdFBhbmUiLCJuYW1lIiwiY29tbWFuZCIsImV4cGxhbmF0aW9uIiwidGVzdElucHV0IiwicHJldmlldyIsImVycm9yIiwiVVBEQVRFX0NPREVfRURJVE9SIiwibmV3X3N0YXRlIiwiQUREX0NPTU1BTkRfQVJHIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsImZpcnN0X2hhbGYiLCJzbGljZSIsInNlY29uZF9oYWxmIiwiaW5wdXRIaXN0b3J5IiwibmV3SWQiLCJBRERfSU5QVVRfSElTVE9SWSIsImN1cnJJZCIsIm1lc3NhZ2UiLCJNT1ZFX0lOUFVUX0hJU1RPUlkiLCJkaXJlY3Rpb24iLCJyb290UmVkdWNlciIsInJvdXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLEM7Ozs7OztBQUVaLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUNyQixlQUFPRCxLQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQUU7QUFDOUMsUUFBTUMsY0FBYyxFQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJSCxZQUFZSSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJYLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQW5CO0FBQ0FOLHFCQUFhUixFQUFFZSxHQUFGLENBQU1mLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQU4sQ0FBYjtBQUNIO0FBTjJDO0FBQUE7QUFBQTs7QUFBQTtBQU81Qyw2QkFBZ0JSLE9BQU9VLElBQXZCLDhIQUE2QjtBQUFBLGdC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QUM1Qix1QkFBT1UsS0FBUDtBQUNIO0FBQ0QrRCxvQkFBUS9ELE1BQU1pRSxNQUFOLElBQWdCLENBQXhCO0FBQ0EsZ0JBQUk5RSxPQUFPaUYsU0FBUCxLQUFxQixJQUF6QixFQUErQjtBQUMzQixvQkFBSUwsUUFBUy9ELE1BQU1TLE9BQU4sQ0FBY25CLE1BQWQsR0FBdUIsQ0FBcEMsRUFBd0M7QUFDcEN5RSw2QkFBUyxDQUFUO0FBQ0g7QUFDSixhQUpELE1BSU87QUFDSCxvQkFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ1pBLDZCQUFTLENBQVQ7QUFDSDtBQUNKO0FBQ0QsZ0NBQVcvRCxLQUFYLElBQWtCLFVBQVUrRCxLQUE1QjtBQUNKO0FBQ0ksbUJBQU8vRCxLQUFQO0FBdkJSO0FBeUJILENBM0JEOztBQTZCQSxJQUFNcUUsY0FBYyw0QkFBZ0I7QUFDaEM3RCw4QkFEZ0M7QUFFaENnQix3QkFGZ0M7QUFHaENFLDRCQUhnQztBQUloQ29DLDhCQUpnQztBQUtoQ3ZCLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDSSxvQ0FUZ0M7QUFVaEN5QjtBQVZnQyxDQUFoQixDQUFwQjs7a0JBYWVELFciLCJmaWxlIjoiNDU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm91dGVyUmVkdWNlciBhcyByb3V0aW5nIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWx1ZU9yTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlcyA9IChvbGRNZXNzYWdlcywgYWN0aW9uKSA9PiB7IC8vIHRleHQsIG9yaWdpbiA9ICd1c2VyJywgdHlwZSA9IG51bGwsIGFyZyA9IG51bGwpID0+IHtcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFtdO1xuICAgIGxldCBjdXJyZW50TWF4ID0gMDtcbiAgICBpZiAob2xkTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwJywgXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICAgICAgY3VycmVudE1heCA9IF8ubWF4KF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbSBvZiBhY3Rpb24udGV4dCkge1xuICAgICAgICBjdXJyZW50TWF4Kys7XG4gICAgICAgIG5ld01lc3NhZ2VzLnB1c2goeydvcmlnaW4nOiBhY3Rpb24ub3JpZ2luLCAndGV4dCc6IG0sICdpZCc6IGN1cnJlbnRNYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IHZhbHVlT3JOdWxsKGFjdGlvbi5zdGF0ZSksICdhcmcnOiB2YWx1ZU9yTnVsbChhY3Rpb24uYXJnKX0pO1xuICAgIH1cbiAgICByZXR1cm4gb2xkTWVzc2FnZXMuY29uY2F0KG5ld01lc3NhZ2VzKTtcbn07XG5cbmNvbnN0IGFwcGVuZE1lc3NhZ2VzQ29udm8gPSAoY29udm8sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGNvbnZvO1xuICAgIHJldHVybiB7IC4uLmNvbnZvLCBtZXNzYWdlczogYXBwZW5kTWVzc2FnZXMobWVzc2FnZXMsIGFjdGlvbiksIGFyZ3M6IGFjdGlvbi5hcmdfbWFwIH07XG59O1xuXG5jb25zdCBjb252ZXJzYXRpb24gPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogMCwgJ2FyZ3MnOiB7fSB9LCAnc3RhdGUnOiAnU1RBUlQnfSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBjdXJyZW50Q29udm8gfSA9IHN0YXRlO1xuICAgIGxldCBuZXdDb252bztcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0hJU1RPUlk6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252byk7XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uY29udmVyc2F0aW9uLmhpc3RvcnksIGN1cnJlbnRDb252bzogYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8sICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9TRVJWRVJfTUVTU0FHRTpcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDb252byA9IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGF0ZSA9PT0gJ1NUQVJUJykge1xuICAgICAgICAgICAgICAgIC8vIGhhcmRjb2Rpbmcgc29tZSBsb2dpYyBoZXJlIGZvciBzeW5jaW5nIGhpc3Rvcnkgd2l0aCBzZXJ2ZXIgb24gU1RBUlRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBzb21lIGNvbW1hbmRzIHRvIG92ZXJ3cml0ZSBoaXN0b3J5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgbGV0IHRoZUlkID0gYWN0aW9uLmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLm5ld0NvbnZvLCB0aXRsZTogYWN0aW9uLmxhYmVsLCBpZDogdGhlSWQgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uaGlzdG9yeS5jb25jYXQoW25ld0NvbnZvXSksICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IG5ld0NvbnZvLmlkICsgMSwgJ2FyZ3MnOiB7fSB9LCBzdGF0ZTogJ1NUQVJUJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkhJREVfQ09OVkVSU0FUSU9OOlxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IF8ubWFwKGhpc3RvcnksIGNvbnYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHsuLi5jb252fTtcbiAgICAgICAgICAgICAgICBpZiAoY29udi5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5oaWRkZW4gPSAhb3V0LmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4uY3VycmVudENvbnZvfTtcbiAgICAgICAgICAgIGlmIChuZXdDb252by5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8uaGlkZGVuID0gIW5ld0NvbnZvLmhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IG5ld0hpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBzdGF0ZS5zdGF0ZX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgdmFyaWFibGVzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfVkFSSUFCTEVTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi52YXJpYWJsZXM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgcHJlZGljdGlvbnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QUkVESUNUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucHJlZGljdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZG9jcyA9IChzdGF0ZSA9IHt0aXRsZTogJycsIGV4YW1wbGVzOiBbXSwgZGVzY3JpcHRpb246IFtdLCBzb3VyY2U6Jyd9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRvYztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBmdW5jdGlvblNlYXJjaCA9IChzdGF0ZSA9IHtzZWFyY2g6ICcnLCByZXN1bHRzOiBbXX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9GVU5DOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2VhcmNoOiBhY3Rpb24uc2VhcmNofTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9SRVNVTFRTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVzdWx0czogYWN0aW9uLnJlc3VsdHN9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGN1cnJlbnRJbnB1dCA9IChzdGF0ZSA9IHsnaW5wdXQnOiAnJ30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNUT1JFX0NVUlJFTlRfSU5QVVQ6XG4gICAgICByZXR1cm4geydpbnB1dCc6IGFjdGlvbi5jdXJyZW50SW5wdXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IG1pbmltaXplU3RhdGUgPSAoc3RhdGU9eydkb2NzJzogdHJ1ZSwgJ2NvZGVfZWRpdCc6dHJ1ZX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNFVF9ET0NTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2RvY3MnOiBhY3Rpb24uZG9jc307XG4gICAgY2FzZSB0eXBlcy5TRVRfQ09ERV9FRElUOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2NvZGVfZWRpdCc6IGFjdGlvbi5jb2RlX2VkaXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGNvbW1hbmRFZGl0UGFuZSA9IChzdGF0ZT17bmFtZTogJycsIHRpdGxlOiAnJywgYXJnczogW10sIGNvbW1hbmQ6ICcnLCBleHBsYW5hdGlvbjogJycsIHRlc3RJbnB1dDogJycsIHByZXZpZXc6JycsIGVycm9yOiAnJ30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT0RFX0VESVRPUjpcbiAgICAgIGxldCBuZXdfc3RhdGUgPSB7fTtcbiAgICAgIG5ld19zdGF0ZVthY3Rpb24ubmFtZV0gPSBhY3Rpb24udmFsdWU7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5uZXdfc3RhdGV9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogc3RhdGUuYXJncy5jb25jYXQoW3snYXJnX25hbWUnOiAnJywgJ2FyZ190eXBlJzogJycsICdhcmdfc3RyaW5nJzogJyd9XSl9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkRfQVJHOlxuICAgICAgbGV0IG5ld0FyZ3MgPSBzdGF0ZS5hcmdzLmNvbmNhdChbXSk7XG4gICAgICBuZXdBcmdzW2FjdGlvbi5pZF0gPSBhY3Rpb24udmFsdWVzO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogbmV3QXJnc307XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ09NTUFORF9BUkc6XG4gICAgICBsZXQgZmlyc3RfaGFsZiA9IHN0YXRlLmFyZ3MuY29uY2F0KFtdKS5zbGljZSgwLCBhY3Rpb24uaWQpO1xuICAgICAgbGV0IHNlY29uZF9oYWxmID0gc3RhdGUuYXJncy5jb25jYXQoW10pLnNsaWNlKGFjdGlvbi5pZCsxLHN0YXRlLmFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpcnN0X2hhbGYuY29uY2F0KHNlY29uZF9oYWxmKSk7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiBmaXJzdF9oYWxmLmNvbmNhdChzZWNvbmRfaGFsZil9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0SGlzdG9yeSA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycklkJzogbnVsbCwgJ3Nob3dIaXN0b3J5JzogZmFsc2UgfSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld0lkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkO1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwICYmIG5ld0lkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2hpc3RvcnknOiBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLm1lc3NhZ2VdLCAnY3VycklkJzogbmV3SWR9O1xuICAgICAgICBjYXNlIHR5cGVzLk1PVkVfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkIHx8IDA7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA8IChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjdXJySWQnOiBuZXdJZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb252ZXJzYXRpb24sXG4gICAgdmFyaWFibGVzLFxuICAgIHByZWRpY3Rpb25zLFxuICAgIGlucHV0SGlzdG9yeSxcbiAgICBjdXJyZW50SW5wdXQsXG4gICAgZG9jcyxcbiAgICBmdW5jdGlvblNlYXJjaCxcbiAgICBtaW5pbWl6ZVN0YXRlLFxuICAgIGNvbW1hbmRFZGl0UGFuZSxcbiAgICByb3V0aW5nXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmVkdWNlcnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})