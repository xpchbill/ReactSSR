/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoginForm = exports.logout = exports.fetchCurrentUser = exports.fetchTodos = exports.submitTodo = exports.fetchUsers = undefined;

var _types = __webpack_require__(5);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: _types.FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var submitTodo = exports.submitTodo = function submitTodo(values, history) {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.post('/todos', values);

                        case 2:
                            res = _context2.sent;

                            history.push('/todos');
                            dispatch({
                                type: _types.FETCH_TODO,
                                payload: res.data
                            });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchTodos = exports.fetchTodos = function fetchTodos() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/todos');

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: _types.FETCH_TODOS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return api.get('/users/me');

                        case 2:
                            res = _context4.sent;

                            dispatch({
                                type: _types.FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function (_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }();
};

var logout = exports.logout = function logout() {
    return function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return api.delete('/users/me/token');

                        case 2:
                            res = _context5.sent;
                            return _context5.abrupt('return', dispatch({
                                type: _types.LOGOUT_USER,
                                payload: res
                            }));

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function (_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    }();
};

var setLoginForm = exports.setLoginForm = function setLoginForm(status) {
    return function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            return _context6.abrupt('return', dispatch({
                                type: _types.TOGGLE_LOGIN_FORM,
                                status: status
                            }));

                        case 1:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        }));

        return function (_x16) {
            return _ref6.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_TODO = exports.FETCH_TODO = "FETCH_TODO";
var FETCH_TODOS = exports.FETCH_TODOS = 'fetch_todos';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var LOGOUT_USER = exports.LOGOUT_USER = 'logout_user';
var TOGGLE_LOGIN_FORM = exports.TOGGLE_LOGIN_FORM = 'toggle_login_form';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(26);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(30);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _RegisterPage = __webpack_require__(31);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _UsersListPage = __webpack_require__(32);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(33);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _TodosListPage = __webpack_require__(34);

var _TodosListPage2 = _interopRequireDefault(_TodosListPage);

var _NewTodoPage = __webpack_require__(36);

var _NewTodoPage2 = _interopRequireDefault(_NewTodoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _RegisterPage2.default, {
        path: '/register'
    }), _extends({}, _TodosListPage2.default, {
        path: '/todos'
    }), _extends({}, _NewTodoPage2.default, {
        path: '/new'
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth.user) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            ' Loading... '
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return {
            auth: auth
        };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ label: 'Todo Title', name: 'text' }, { label: 'Content', name: 'content' }];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = __webpack_require__(16);

exports.default = function (req, res, next) {
    var token = req.session._token;
    _user.User.findByToken(token).then(function (user) {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch(function (e) {
        res.json({
            'status': 'error',
            message: 'Invalid Credintial'
        });
    });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _mongoose = __webpack_require__(7);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = __webpack_require__(52);

var _validator2 = _interopRequireDefault(_validator);

var _jsonwebtoken = __webpack_require__(53);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _lodash = __webpack_require__(10);

var _lodash2 = _interopRequireDefault(_lodash);

var _bcryptjs = __webpack_require__(54);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: _validator2.default.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    age: {
        type: Number,
        default: null
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
}, {
    usePushEach: true
});

UserSchema.methods.toJSON = function () {
    var userObject = this.toObject();
    return _lodash2.default.pick(userObject, ['_id', 'email', 'username']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = _jsonwebtoken2.default.sign({
        _id: user._id.toHexString(),
        access: access
    }, process.env.APP_KEY).toString();

    user.tokens.push({
        access: access,
        token: token
    });
    return user.save().then(function () {
        return token;
    });
};

UserSchema.methods.removeToken = function (token) {
    var user = this;
    return user.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    });
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;
    try {
        decoded = _jsonwebtoken2.default.verify(token, process.env.APP_KEY);
    } catch (e) {
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function (email, password) {
    var User = this;
    return User.findOne({
        email: email
    }).then(function (user) {
        if (!user) {
            return Promise.reject();
        }
        return new Promise(function (resolve, reject) {
            // Use bcrypt.compare to compare password and user.password
            _bcryptjs2.default.compare(password, user.password, function (err, res) {
                if (res) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

UserSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        _bcryptjs2.default.genSalt(10, function (err, salt) {
            _bcryptjs2.default.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = _mongoose2.default.model('User', UserSchema);

exports.User = User;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearCacheByKey = undefined;

var _md = __webpack_require__(56);

var _md2 = _interopRequireDefault(_md);

var _util = __webpack_require__(57);

var _util2 = _interopRequireDefault(_util);

var _redis = __webpack_require__(58);

var _redis2 = _interopRequireDefault(_redis);

var _mongoose = __webpack_require__(7);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Setup Redis Server to Cache Data
// look https://stackoverflow.com/questions/6476945/how-do-i-run-redis-on-windows/10525215#10525215
// to setup Redis for windows.
var redisURL = 'redis://127.0.0.1:6379';
var client = _redis2.default.createClient(redisURL);
var originalQueryExec = _mongoose2.default.Query.prototype.exec;

client.hget = _util2.default.promisify(client.hget);

var generateKey = function generateKey(query, collection) {
    var key = JSON.stringify(Object.assign({}, query, {
        collection: collection
    }));
    return (0, _md2.default)(key);
};

_mongoose2.default.Query.prototype.cache = function cache() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    return this;
};

_mongoose2.default.Query.prototype.exec = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var key,
            redisValue,
            doc,
            originalValue,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!this.useCache) {
                            _context.next = 16;
                            break;
                        }

                        // if you need delete all cache redis you can use client.flushall()
                        key = generateKey(this.getQuery(), this.mongooseCollection.name);
                        _context.next = 4;
                        return client.hget(this.hashKey, key);

                    case 4:
                        redisValue = _context.sent;

                        if (!redisValue) {
                            _context.next = 9;
                            break;
                        }

                        console.log('%s is founded from redis', key);
                        doc = JSON.parse(redisValue);
                        return _context.abrupt('return', Array.isArray(doc) ? doc.map(function (r) {
                            return new _this.model(r);
                        }) : new this.model(doc));

                    case 9:
                        _context.next = 11;
                        return originalQueryExec.apply(this, _args);

                    case 11:
                        originalValue = _context.sent;

                        client.hset(this.hashKey, key, JSON.stringify(originalValue));
                        return _context.abrupt('return', originalValue);

                    case 16:
                        return _context.abrupt('return', originalQueryExec.apply(this, _args));

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function exec() {
        return _ref.apply(this, arguments);
    }

    return exec;
}();

var clearCacheByKey = function clearCacheByKey(hashKey) {
    client.del(JSON.stringify(hashKey));
};

exports.clearCacheByKey = clearCacheByKey;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(8);

var _bodyParser = __webpack_require__(22);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieSession = __webpack_require__(23);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _config = __webpack_require__(24);

var _config2 = _interopRequireDefault(_config);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(40);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(43);

var _createStore2 = _interopRequireDefault(_createStore);

var _mongoose = __webpack_require__(49);

var _todoRoutes = __webpack_require__(50);

var _todoRoutes2 = _interopRequireDefault(_todoRoutes);

var _userRoutes = __webpack_require__(59);

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _cache = __webpack_require__(17);

var Cache = _interopRequireWildcard(_cache);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('./services/cache');

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use((0, _cookieSession2.default)({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY],
    name: "_token"
}));

app.use(_express2.default.static('public'));

(0, _todoRoutes2.default)(app);

(0, _userRoutes2.default)(app);

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req, res);
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(function (value) {
                    resolve(value);
                }).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function (val) {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(process.env.PORT, function () {
    console.log('Listening on prot ' + process.env.PORT);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = __webpack_require__(25);
    var envConfig = config[env];
    Object.keys(envConfig).forEach(function (key) {
        return process.env[key] = envConfig[key];
    });
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {"test":{"PORT":3000,"MONGODB_URI":"mongodb://localhost:27017/ReactSSR","APP_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","COOKIE_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","JWT_ACCESS_TOKEN":"auth"},"development":{"PORT":3000,"MONGODB_URI":"mongodb://localhost:27017/ReactSSR","APP_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","COOKIE_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","JWT_ACCESS_TOKEN":"auth"}}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _Header = __webpack_require__(27);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(3);

var _LoginFormModal = __webpack_require__(28);

var _LoginFormModal2 = _interopRequireDefault(_LoginFormModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        { id: 'page-container' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'div',
            { id: 'page-content', style: { margin: 0, minHeight: '388px' } },
            (0, _reactRouterConfig.renderRoutes)(route.routes)
        ),
        _react2.default.createElement(_LoginFormModal2.default, null)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }

};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            dropdownState: '_',
            showNavMenu: false
        };
        _this.toggleStateDropdownAccount = _this.toggleStateDropdownAccount.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'toggleStateDropdownAccount',
        value: function toggleStateDropdownAccount() {
            var _this2 = this;

            this.setState(function () {
                return {
                    dropdownState: _this2.state.dropdownState === '_' ? 'open' : '_'
                };
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            this.props.logout().then(function () {
                window.location.href = "/";
            });
        }
    }, {
        key: 'showNavMenu',
        value: function showNavMenu() {
            this.setState({
                showNavMenu: !this.state.showNavMenu
            });
        }
    }, {
        key: 'generateStyleNavAtMedia',
        value: function generateStyleNavAtMedia() {
            if (this.refs.collapse) {
                if (this.state.showNavMenu) {
                    return {
                        overflow: 'visible',
                        height: 'auto'
                    };
                } else {
                    return {
                        overflow: 'hidden',
                        height: '0'
                    };
                }
            }
            return {};
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { className: 'navbar navbar-inverse' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-inner remove-radius remove-box-shadow' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'a',
                            { ref: 'collapse', className: 'btn btn-navbar', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse', onClick: this.showNavMenu.bind(this) },
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'brand', to: '/' },
                            'Logo'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'nav-collapse collapse navbar-responsive-collapse', style: this.generateStyleNavAtMedia() },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav' },
                                _react2.default.createElement(
                                    'li',
                                    { className: '' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/' },
                                        'Home'
                                    )
                                ),
                                this.props.auth.user && _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/todos' },
                                        'My Todos'
                                    )
                                ),
                                this.props.auth.user && _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/new' },
                                        'New Todo'
                                    )
                                )
                            ),
                            this.props.auth.user ? _react2.default.createElement(
                                'ul',
                                { className: 'nav pull-right' },
                                _react2.default.createElement(
                                    'li',
                                    { className: "dropdown " + (this.state.dropdownState || ''), onClick: this.toggleStateDropdownAccount },
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'javascript:void(0)', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        this.props.auth.user.username,
                                        ' ',
                                        _react2.default.createElement('b', { className: 'caret' })
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2.default.createElement('li', { className: 'divider' }),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:void(0)', onClick: this.logout.bind(this) },
                                                'Logout'
                                            )
                                        )
                                    )
                                )
                            ) : _react2.default.createElement(
                                'ul',
                                { className: 'nav pull-right' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'javascript:void(0);', onClick: this.props.setLoginForm.bind(this, true) },
                                        'Login'
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'divider-vertical' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/register' },
                                        'Register'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

;

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    logout: _actions.logout,
    setLoginForm: _actions.setLoginForm
})(Header);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

var _reactBootstrap = __webpack_require__(29);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.state = {
            resError: false,
            errors: [],
            values: {}
        };
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'handleHide',
        value: function handleHide(cb) {
            var _this2 = this;

            this.props.setLoginForm(false).then(function () {
                _this2.setState({
                    values: {},
                    errors: [],
                    resError: false
                });
                _this2.refs.form.querySelectorAll('input').forEach(function (input) {
                    input.value = "";
                });

                cb && typeof cb === 'function' && cb();
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var _errors = [];
            var elements = this.refs.form.querySelectorAll('input');
            elements.forEach(function (ele) {
                _this3.handleInputValidation(ele, _errors);
            });
            if (_errors.length) return false;
            _axios2.default.post('/api/users/login', this.state.values).then(function (res) {
                if (res.data.status === "error") {
                    return _this3.setState({
                        resError: true
                    });
                }
                _this3.handleHide(function () {
                    return setTimeout(function () {
                        window.location.href = "/";
                    }, 200);
                });
            });
        }
    }, {
        key: 'validate',
        value: function validate(values) {
            var errors = {};
            if (!values.email) errors.email = 'Required';else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address';
            if (!values.password) errors.password = 'Required';
            return errors;
        }
    }, {
        key: 'handleInputValidation',
        value: function handleInputValidation(e) {
            var _errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var ele = e.hasOwnProperty('target') ? e.target : e;
            var errors = this.state.errors;
            var values = this.state.values;
            values[ele.name] = ele.value;
            var hasError = this.validate(values);
            if (hasError[ele.name]) _errors.push(hasError[ele.name]);
            errors[ele.name] = hasError[ele.name] || false;
            this.setState({
                values: values,
                errors: errors
            });
            return hasError[ele.name] || false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var errors = this.state.errors;

            return _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: this.props.loginFormStatus, onHide: this.handleHide.bind(this), bsSize: 'small' },
                this.head(),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-header' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'close', onClick: this.handleHide.bind(this) },
                        '\xD7'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-body' },
                    this.state.resError && _react2.default.createElement(
                        'div',
                        { className: 'alert alert-error' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'close', onClick: function onClick() {
                                    return _this4.setState({ resError: false });
                                } },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Error!'
                        ),
                        ' Invalid Credentials!'
                    ),
                    _react2.default.createElement(
                        'form',
                        { className: 'form-horizontal', id: 'login-form__modal', onSubmit: this.handleSubmit.bind(this), ref: 'form' },
                        _react2.default.createElement(
                            'div',
                            { className: 'control-group ' + (errors && errors.email && " error" || '') },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'email' },
                                'Email'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'controls' },
                                _react2.default.createElement('input', { name: 'email', type: 'text', onKeyUp: this.handleInputValidation.bind(this), onBlur: this.handleInputValidation.bind(this) }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'help-block' },
                                    errors && errors.email && _react2.default.createElement(
                                        'span',
                                        null,
                                        errors && errors.email
                                    ) || ''
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'control-group ' + (errors && errors.password && " error" || '') },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'password' },
                                'Password'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'controls' },
                                _react2.default.createElement('input', { name: 'password', type: 'password', onKeyUp: this.handleInputValidation.bind(this), onBlur: this.handleInputValidation.bind(this) }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'help-block' },
                                    errors && errors.password && _react2.default.createElement(
                                        'span',
                                        null,
                                        errors && errors.password
                                    ) || ''
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-footer' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default', type: 'submit', form: 'login-form__modal' },
                        'Login'
                    )
                )
            );
        }
    }, {
        key: 'head',
        value: function head() {
            return this.props.loginFormStatus && _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Company | Login'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Login Page' })
            );
        }
    }]);

    return LoginForm;
}(_react.Component);

function mapStateToProps(state) {
    return {
        loginFormStatus: state.auth.loginFormStatus
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    setLoginForm: _actions.setLoginForm
})(LoginForm);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Company | Home'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Home Page' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(
                    'div',
                    { className: 'text-center', style: { marginTop: '200px' } },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Welcome'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Check out these awesome features'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

;

exports.default = {
    component: Home
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reduxForm = __webpack_require__(9);

var _reactHelmet = __webpack_require__(2);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
				_inherits(Register, _Component);

				function Register(props) {
								_classCallCheck(this, Register);

								var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

								_this.state = {
												resError: null
								};
								_this.onSubmit = _this.onSubmit.bind(_this);
								return _this;
				}

				_createClass(Register, [{
								key: 'onSubmit',
								value: function onSubmit(data) {
												var _this2 = this;

												this.setState({ resError: null });
												_axios2.default.post('/api/users', data).then(function (res) {
																if (res.data.hasOwnProperty('errors') || res.data.hasOwnProperty('errmsg')) {
																				_this2.setState({ resError: res.data.hasOwnProperty('errmsg') ? 'This Email already exists' : 'Server Error Please try agin' });
																				// this.props.destroy()
																} else {
																				window.location.href = "/";
																}
												});
								}
				}, {
								key: 'head',
								value: function head() {
												return _react2.default.createElement(
																_reactHelmet.Helmet,
																null,
																_react2.default.createElement(
																				'title',
																				null,
																				'Company | Register'
																),
																_react2.default.createElement('meta', { property: 'og:title', content: 'Register' })
												);
								}
				}, {
								key: 'render',
								value: function render() {
												var handleSubmit = this.props.handleSubmit;

												return _react2.default.createElement(
																'div',
																{ className: 'container' },
																this.head(),
																_react2.default.createElement(
																				'form',
																				{ className: 'form-horizontal form-box', onSubmit: handleSubmit(this.onSubmit), style: { overflow: 'hidden' } },
																				_react2.default.createElement(
																								'h4',
																								{ className: 'form-box-header' },
																								'Register'
																				),
																				_react2.default.createElement(_reduxForm.Field, {
																								name: 'username',
																								type: 'text',
																								component: renderField,
																								label: 'Username'
																				}),
																				_react2.default.createElement(_reduxForm.Field, {
																								name: 'email',
																								type: 'email',
																								component: renderField,
																								label: 'Email'
																				}),
																				this.state.resError && _react2.default.createElement(
																								'span',
																								{ className: 'red-text text-darken-4' },
																								this.state.resError
																				),
																				_react2.default.createElement(_reduxForm.Field, {
																								name: 'age',
																								type: 'number',
																								component: renderField,
																								label: 'Age'
																				}),
																				_react2.default.createElement(_reduxForm.Field, {
																								name: 'password',
																								type: 'password',
																								component: renderField,
																								label: 'Password'
																				}),
																				_react2.default.createElement(_reduxForm.Field, {
																								name: 'repassword',
																								type: 'password',
																								component: renderField,
																								label: 'Confirm Password'
																				}),
																				_react2.default.createElement(
																								'div',
																								{ className: 'form-actions' },
																								_react2.default.createElement(
																												'button',
																												{
																																type: 'submit',
																																disabled: false,
																																className: 'btn btn-success' },
																												'Submit'
																								)
																				)
																)
												);
								}
				}]);

				return Register;
}(_react.Component);

function mapStateToProps(state) {
				return {};
}

var renderField = function renderField(_ref) {
				var input = _ref.input,
				    label = _ref.label,
				    type = _ref.type,
				    _ref$meta = _ref.meta,
				    touched = _ref$meta.touched,
				    error = _ref$meta.error,
				    warning = _ref$meta.warning;
				return _react2.default.createElement(
								'div',
								{ className: 'control-group ' + (touched && (error && " error" || warning && " warning") || '') },
								_react2.default.createElement(
												'label',
												{ className: 'control-label', htmlFor: label },
												label
								),
								_react2.default.createElement(
												'div',
												{ className: 'controls' },
												_react2.default.createElement('input', _extends({}, input, { type: type })),
												_react2.default.createElement(
																'div',
																{ className: 'help-inline' },
																touched && (error && _react2.default.createElement(
																				'span',
																				null,
																				error
																) || warning && _react2.default.createElement(
																				'span',
																				null,
																				warning
																))
												)
								)
				);
};

var validate = function validate(values) {
				var errors = {};
				if (!values.username) errors.username = 'Required';else if (values.username.length < 6) errors.username = 'Must be 6 characters or than';

				if (!values.email) errors.email = 'Required';else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address';

				if (!values.age) errors.age = 'Required';else if (isNaN(Number(values.age))) errors.age = 'Must be a number';else if (Number(values.age) < 18) errors.age = 'Sorry, you must be at least 18 years old';

				if (!values.password) errors.password = 'Required';else if (values.password.length < 5) errors.password = 'Must be 6 characters or than';

				if (!values.repassword) errors.repassword = 'Required';else if (values.password && values.password.length > 0 && values.password !== values.repassword) errors.repassword = 'RE-Password does not match';

				return errors;
};

var warn = function warn(values) {
				var warnings = {};
				if (values.age < 19) warnings.age = 'Hmm, you seem a bit young...';
				if (values.password && values.password.length < 7) warnings.password = 'Password is Weak...';
				return warnings;
};

Register = (0, _reduxForm.reduxForm)({
				form: 'syncValidationUser',
				validate: validate,
				warn: warn
})(Register);

exports.default = {
				component: (0, _reactRedux.connect)(mapStateToProps, {})(Register)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.users.length + ' Users Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, {
        fetchUsers: _actions.fetchUsers
    })(UsersList)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Company | Ooops'
            ),
            _react2.default.createElement('meta', { property: 'og:title', content: 'Not Found Page' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'text-center', style: { marginTop: '200px' } },
            _react2.default.createElement(
                'h3',
                null,
                'Ooops, Route not found.'
            )
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _requireAuth = __webpack_require__(12);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _actions = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodosList = function (_Component) {
    _inherits(TodosList, _Component);

    function TodosList() {
        _classCallCheck(this, TodosList);

        return _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).apply(this, arguments));
    }

    _createClass(TodosList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchTodos();
        }
    }, {
        key: 'renderTodo',
        value: function renderTodo(_ref) {
            var text = _ref.text,
                content = _ref.content,
                _id = _ref._id,
                createdAt = _ref.createdAt;

            return _react2.default.createElement(
                'div',
                { className: 'span6', key: _id },
                _react2.default.createElement(
                    'div',
                    { className: 'media media-hover push' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0)', className: 'pull-left' },
                        _react2.default.createElement('img', { src: 'dist/img/placeholders/image_dark_120x120.png', className: 'media-object img-polaroid', alt: 'Image' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'media-body' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'media-heading' },
                            _react2.default.createElement(
                                'small',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'label label-success' },
                                    _react2.default.createElement('i', { className: 'icon-ok' })
                                )
                            ),
                            '\xA0',
                            text,
                            '\xA0',
                            _react2.default.createElement(
                                'small',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'label label-warning' },
                                    (0, _moment2.default)(createdAt).format('h:mm a')
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:void(0)' },
                            'http://example-link-1.com'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            content
                        )
                    )
                )
            );
        }
    }, {
        key: 'renderTodos',
        value: function renderTodos(todos) {
            var _this2 = this;

            todos = todos || this.props.todos.slice(0);
            var odTodos = todos.splice(0, 2);
            if (odTodos.length > 0) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'row-fluid' },
                        odTodos.map(function (todo) {
                            return _this2.renderTodo(todo);
                        })
                    ),
                    this.renderTodos(todos)
                );
            } else if (todos.length === this.props.todos.length) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'There are no data yet.'
                );
            }
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.todos.length + ' Todos Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Todos App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                this.renderSearchResult(),
                this.renderTodos()
            );
        }
    }, {
        key: 'renderSearchResult',
        value: function renderSearchResult() {
            return _react2.default.createElement(
                'div',
                { className: 'page-header page-header-top clearfix' },
                _react2.default.createElement(
                    'h4',
                    { className: 'pull-left' },
                    this.props.todos.length,
                    ' Todos Found'
                )
            );
        }
    }]);

    return TodosList;
}(_react.Component);

function mapStateToProps(state) {
    return {
        todos: state.todos,
        auth: state.auth
    };
}

function loadData(store) {
    return store.dispatch((0, _actions.fetchTodos)());
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, {
        fetchTodos: _actions.fetchTodos
    })((0, _requireAuth2.default)(TodosList))
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _requireAuth = __webpack_require__(12);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _TodoForm = __webpack_require__(37);

var _TodoForm2 = _interopRequireDefault(_TodoForm);

var _TodoFormReview = __webpack_require__(39);

var _TodoFormReview2 = _interopRequireDefault(_TodoFormReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTodo = function (_Component) {
    _inherits(NewTodo, _Component);

    function NewTodo(props) {
        _classCallCheck(this, NewTodo);

        var _this = _possibleConstructorReturn(this, (NewTodo.__proto__ || Object.getPrototypeOf(NewTodo)).call(this, props));

        _this.state = {
            showFormReview: false,
            lastAction: 'add'
        };
        return _this;
    }

    _createClass(NewTodo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Company | New Todo'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'NewTodo' })
            );
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this2 = this;

            if (this.state.showFormReview) {
                return _react2.default.createElement(_TodoFormReview2.default, { onCancel: function onCancel() {
                        return _this2.setState({ showFormReview: false });
                    } });
            }

            return _react2.default.createElement(_TodoForm2.default, { onTodoSubmit: function onTodoSubmit() {
                    return _this2.setState({ showFormReview: true });
                } });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                this.head(),
                this.renderContent()
            );
        }
    }]);

    return NewTodo;
}(_react.Component);

exports.default = {
    component: (0, _reactRedux.connect)(null, {})((0, _requireAuth2.default)(NewTodo))
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(10);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(4);

var _TodoField = __webpack_require__(38);

var _TodoField2 = _interopRequireDefault(_TodoField);

var _formFields = __webpack_require__(13);

var _formFields2 = _interopRequireDefault(_formFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_Component) {
    _inherits(TodoForm, _Component);

    function TodoForm() {
        _classCallCheck(this, TodoForm);

        return _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).apply(this, arguments));
    }

    _createClass(TodoForm, [{
        key: 'renderFields',
        value: function renderFields() {
            return _lodash2.default.map(_formFields2.default, function (_ref) {
                var label = _ref.label,
                    name = _ref.name;

                return _react2.default.createElement(_reduxForm.Field, {
                    key: name,
                    component: _TodoField2.default,
                    type: 'text',
                    label: label,
                    name: name
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var handleSubmit = this.props.handleSubmit;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { className: 'form-horizontal form-box', onSubmit: handleSubmit(this.props.onTodoSubmit), style: { overflow: 'hidden' } },
                    _react2.default.createElement(
                        'h4',
                        { className: 'form-box-header' },
                        'Create New Private Todo'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'step' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wizard-steps row-fluid' },
                            _react2.default.createElement(
                                'div',
                                { className: "span4 text-center active" },
                                '1. Add Valid Data'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'span4 text-center' },
                                '2. Review'
                            )
                        ),
                        this.renderFields()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-actions' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/todos', className: 'btn btn-danger' },
                            'back'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-success' },
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return TodoForm;
}(_react.Component);

var validate = function validate(values) {
    var errors = {};
    if (!values.text) errors.text = 'Required';
    if (!values.content) errors.content = 'Required';
    return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'todoForm',
    validate: validate,
    destroyOnUnmount: false
})(TodoForm);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        { className: 'control-group ' + (touched && error && " error" || '') },
        _react2.default.createElement(
            'label',
            { className: 'control-label', htmlFor: label },
            label
        ),
        _react2.default.createElement(
            'div',
            { className: 'controls' },
            _react2.default.createElement('input', _extends({}, input, { type: type })),
            _react2.default.createElement(
                'div',
                { className: 'help-inline' },
                touched && error && _react2.default.createElement(
                    'span',
                    null,
                    error
                )
            )
        )
    );
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _formFields = __webpack_require__(13);

var _formFields2 = _interopRequireDefault(_formFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoFormReview = function (_Component) {
    _inherits(TodoFormReview, _Component);

    function TodoFormReview() {
        _classCallCheck(this, TodoFormReview);

        return _possibleConstructorReturn(this, (TodoFormReview.__proto__ || Object.getPrototypeOf(TodoFormReview)).apply(this, arguments));
    }

    _createClass(TodoFormReview, [{
        key: 'onSubmit',
        value: function onSubmit(event) {
            event.preventDefault();
            var _props = this.props,
                submitTodo = _props.submitTodo,
                history = _props.history,
                formValues = _props.formValues;

            submitTodo(formValues, history);
        }
    }, {
        key: 'renderFields',
        value: function renderFields() {
            var formValues = this.props.formValues;

            return _.map(_formFields2.default, function (_ref) {
                var name = _ref.name,
                    label = _ref.label;

                return _react2.default.createElement(
                    'div',
                    { className: 'control-group', key: label },
                    _react2.default.createElement(
                        'label',
                        { className: 'control-label', htmlFor: label },
                        label
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'controls' },
                        _react2.default.createElement(
                            'div',
                            null,
                            formValues[name]
                        )
                    )
                );
            });
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons() {
            var onCancel = this.props.onCancel;

            return _react2.default.createElement(
                'div',
                { className: 'form-actions' },
                _react2.default.createElement(
                    'button',
                    { className: 'btn btn-danger', onClick: onCancel },
                    'back'
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-success' },
                    'Save'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'form-horizontal form-box', onSubmit: this.onSubmit.bind(this), style: { overflow: 'hidden' } },
                _react2.default.createElement(
                    'h4',
                    { className: 'form-box-header' },
                    'Please confirm your entries'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'step' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wizard-steps row-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: "span4 text-center" },
                            '1. Add Valid Data'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'span4 text-center active' },
                            '2. Review'
                        )
                    ),
                    this.renderFields()
                ),
                this.renderButtons()
            );
        }
    }]);

    return TodoFormReview;
}(_react.Component);

function mapStateToProps(state) {
    return {
        formValues: state.form.todoForm.values
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    submitTodo: _actions.submitTodo
})((0, _reactRouterDom.withRouter)(TodoFormReview));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(41);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(42);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(2);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n\n    <!DOCTYPE html>\n    <html class="no-js">\n    <head>\n        <meta charset="utf-8">\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <meta name="viewport" content="width=device-width,initial-scale=1">\n        <link rel="shortcut icon" href="dist/img/favicon.ico">\n        <link rel="apple-touch-icon" href="dist/img/apple-touch-icon.png">\n        <link rel="apple-touch-icon" sizes="57x57" href="dist/img/apple-touch-icon-57x57-precomposed.png">\n        <link rel="apple-touch-icon" sizes="72x72" href="dist/img/apple-touch-icon-72x72-precomposed.png">\n        <link rel="apple-touch-icon" sizes="114x114" href="dist/img/apple-touch-icon-114x114-precomposed.png">\n        <link rel="apple-touch-icon-precomposed" href="dist/img/apple-touch-icon-precomposed.png">\n        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic">\n        <link rel="stylesheet" href="dist/css/bootstrap.css">\n        <link rel="stylesheet" href="dist/css/plugins.css">\n        <link rel="stylesheet" href="dist/css/main.css">\n        <link rel="stylesheet" href="dist/css/themes.css">\n        <script src="dist/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>\n    </head>\n    <body>\n        <div id="root">' + content + '</div>\n\n        <!-- Jquery library from Google ... -->\n        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>\n        <!-- ... but if something goes wrong get Jquery from local file -->\n        <script>!window.jQuery && document.write(unescape(\'%3Cscript src="dist/js/vendor/jquery-1.9.1.min.js"%3E%3C/script%3E\'));</script>\n\n        <!-- Bootstrap.js -->\n        <script src="dist/js/vendor/bootstrap.min.js"></script>\n\n        <!--\n        Include Google Maps API for global use.\n        If you don\'t want to use  Google Maps API globally, just remove this line and the gmaps.js plugin from js/plugins.js (you can put it in a seperate file)\n        Then iclude them both in the pages you would like to use the google maps functionality\n        -->\n        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>\n\n        <!-- Jquery plugins and custom javascript code -->\n        <script src="dist/js/plugins.js"></script>\n        <script src="dist/js/main.js"></script>\n        <!-- Javascript code only for this page -->\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n        <script src="dist/js/app.js"></script>\n    </body>\n    </html>\n  ';
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(44);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(45);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
    var axiosInstance = _axios2.default.create({
        baseURL: req.protocol + '://' + req.hostname + (process.env.PORT ? ':' + process.env.PORT : '') + '/api',
        headers: {
            "cookie": req.get('cookie') || ''
        }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _reduxForm = __webpack_require__(9);

var _usersReducer = __webpack_require__(46);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _todosReducer = __webpack_require__(47);

var _todosReducer2 = _interopRequireDefault(_todosReducer);

var _authReducer = __webpack_require__(48);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    users: _usersReducer2.default,
    todos: _todosReducer2.default,
    auth: _authReducer2.default
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(5);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _types.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(5);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _types.FETCH_TODO:
            return [].concat([action.payload], state);
        case _types.FETCH_TODOS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types.FETCH_CURRENT_USER:
            return _extends({}, state, {
                user: action.payload.data.status === 'success' && action.payload.data.user || false
            });
        case _types.LOGOUT_USER:
            return _extends({}, state, {
                user: false
            });
        case _types.TOGGLE_LOGIN_FORM:
            return _extends({}, state, {
                loginFormStatus: action.status || false
            });
        default:
            return state;
    }
};

var _types = __webpack_require__(5);

var INITIAL_STATE = {
    user: null,
    loginFormStatus: false
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mongoose = undefined;

var _mongoose = __webpack_require__(7);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI);
exports.mongoose = _mongoose2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todo = __webpack_require__(51);

var _authenticate = __webpack_require__(15);

var _authenticate2 = _interopRequireDefault(_authenticate);

var _clearCache = __webpack_require__(55);

var _clearCache2 = _interopRequireDefault(_clearCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (app) {

    app.get('/api/todos', _authenticate2.default, function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var todos;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _todo.Todo.find({
                                _creator: req.user._id
                            }).cache({
                                key: req.user._id
                            });

                        case 2:
                            todos = _context.sent;

                            res.json(todos);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());

    app.post('/api/todos', _authenticate2.default, _clearCache2.default, function (req, res) {
        var todo = new _todo.Todo({
            text: req.body.text,
            content: req.body.content,
            _creator: req.user._id
        });

        todo.save().then(function (todo) {
            res.json(todo);
        }).catch(function (e) {
            res.json(e);
        });
    });
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Todo = undefined;

var _mongoose = __webpack_require__(7);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = _mongoose2.default.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Number,
        default: new Date().getTime()
    },
    _creator: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

exports.Todo = Todo;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cache = __webpack_require__(17);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return next();

                    case 2:
                        (0, _cache.clearCacheByKey)(req.user._id);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(10);

var _lodash2 = _interopRequireDefault(_lodash);

var _user = __webpack_require__(16);

var _authenticate = __webpack_require__(15);

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    app.post('/api/users', function (req, res) {
        var body = _lodash2.default.pick(req.body, ['username', 'email', 'age', 'password']);
        var user = new _user.User(body);
        user.save().then(function () {
            return user.generateAuthToken();
        }).then(function (token) {
            req.session = {
                _token: token
            };
            res.json(user);
        }).catch(function (e) {
            res.json(e);
        });
    });

    app.get('/api/users/me', _authenticate2.default, function (req, res) {
        res.json({
            'status': 'success',
            user: req.user
        });
    });

    app.post('/api/users/login', function (req, res) {
        var body = _lodash2.default.pick(req.body, ['email', 'password']);
        _user.User.findByCredentials(body.email, body.password).then(function (user) {
            return user.generateAuthToken().then(function (token) {
                req.session = {
                    _token: token
                };
                res.json(user);
            });
        }).catch(function (e) {
            res.json({
                status: "error",
                error: "Invalid Credentials!"
            });
        });
    });

    app.get('/api/users/email/:email', function (req, res) {
        _user.User.findOne({
            email: req.params.email
        }).then(function (user) {
            if (!user) {
                promise.reject();
            }
            res.json({
                status: "success"
            });
        }).catch(function (e) {
            res.json({
                status: "error",
                error: "Invalid Email!"
            });
        });
    });

    app.delete('/api/users/me/token', _authenticate2.default, function (req, res) {
        req.user.removeToken(req.token).then(function () {
            res.status(200).json({
                'status': 'success'
            });
        }, function () {
            res.status(400).send();
        });
    });
};

/***/ })
/******/ ]);