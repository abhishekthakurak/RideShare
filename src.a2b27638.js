// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/PageFrame/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/car.png":[function(require,module,exports) {
module.exports = "/car.63095aa0.png";
},{}],"src/components/PageFrame/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _car = _interopRequireDefault(require("../../../assets/car.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageFrame = /*#__PURE__*/function () {
  function PageFrame(header, children) {
    _classCallCheck(this, PageFrame);

    this.header = header;
    this.children = children;
  }

  _createClass(PageFrame, [{
    key: "render",
    value: function render() {
      return "\n      <div class='page-wrap'>\n        <div class='content'>\n          <div class='header'>\n            <img class='logo' src=".concat(_car.default, " alt='Ride Sharing'/>\n            ").concat(this.header, "\n          </div>\n          <div css='child-wrap'>").concat(this.children, "</div\n        </div>\n      </div>\n    ");
    }
  }]);

  return PageFrame;
}();

exports.default = PageFrame;
},{"./style.css":"src/components/PageFrame/style.css","../../../assets/car.png":"assets/car.png"}],"src/components/Button/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(_ref) {
    var id = _ref.id,
        btnText = _ref.btnText,
        className = _ref.className;

    _classCallCheck(this, Button);

    this.id = id;
    this.btnText = btnText;
    this.className = className;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return "<button id=".concat(this.id, " class=\"btn ").concat(this.className, "\"\n    }>").concat(this.btnText, "</button>");
    }
  }]);

  return Button;
}();

exports.default = Button;
},{"./style.css":"src/components/Button/style.css"}],"src/components/Form/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Form/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(_ref) {
    var questions = _ref.questions,
        state = _ref.state;

    _classCallCheck(this, Form);

    this.questions = questions;
    this.state = state;
  }

  _createClass(Form, [{
    key: "getFormElements",
    value: function getFormElements(question) {
      var type = question.type,
          name = question.name,
          id = question.id,
          isError = question.isError,
          placeholder = question.placeholder,
          errorMsg = question.errorMsg;
      return "\n    <div class='input-wrap'>\n      <div class='field-lbl'>".concat(name, "</div>\n      <input\n        class='input'\n        value='").concat(this.state[id], "'\n        id='").concat(id, "'\n        placeholder='").concat(placeholder, "'\n        type='").concat(type, "'\n      />\n      ").concat(isError ? "<span class=\"inp-error\">".concat(errorMsg, "</span>") : "", "\n  </div>");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return this.questions.map(function (question) {
        return _this.getFormElements(question);
      }).join("");
    }
  }]);

  return Form;
}();

exports.default = Form;
},{"./style":"src/components/Form/style.css"}],"src/utils/validatorsRegex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneValidator = exports.emailValidator = void 0;

var emailValidator = function emailValidator(email) {
  return email && /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/.test(email);
};

exports.emailValidator = emailValidator;

var phoneValidator = function phoneValidator(phone) {
  return phone && /^[1-9]\d{9,9}$/.test(phone);
};

exports.phoneValidator = phoneValidator;
},{}],"src/pages/Login/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validatorsRegex = require("../../utils/validatorsRegex");

// Form Fields
var _default = [{
  id: "username",
  name: "Username",
  type: "text",
  placeholder: "10-digit mobile number or email ID",
  validate: function validate(value) {
    return (0, _validatorsRegex.emailValidator)(value) || (0, _validatorsRegex.phoneValidator)(value);
  },
  errorMsg: "Invalid username!"
}, {
  id: "password",
  name: "Password",
  type: "password",
  placeholder: "password of length 6 or more",
  validate: function validate(value) {
    return value && value.trim().length >= 6;
  },
  errorMsg: "Invalid password!"
}];
exports.default = _default;
},{"../../utils/validatorsRegex":"src/utils/validatorsRegex.js"}],"src/commonStyles/screensStyle.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/utils/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// check for valid user
var _default = function _default(questions, state) {
  var isValidated = true;
  questions.forEach(function (_ref, index) {
    var validate = _ref.validate,
        id = _ref.id;

    if (!validate(state[id], state)) {
      questions[index].isError = true;
      isValidated = false;
    } else {
      questions[index].isError = false;
    }
  });
  return {
    isValidated: isValidated,
    questions: questions
  };
};

exports.default = _default;
},{}],"src/utils/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForUser = checkForUser;
exports.updateUser = updateUser;
exports.addUser = addUser;

function checkForUser(_ref) {
  var username = _ref.username,
      password = _ref.password;
  var users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    return null;
  }

  return users.filter(function (_ref2) {
    var storeEmail = _ref2.email,
        storeMobileNumber = _ref2.mobileNumber,
        storePassword = _ref2.password;
    return storePassword === password && (storeEmail === username || storeMobileNumber === username);
  }).length > 0;
}

function updateUser(_ref3) {
  var username = _ref3.username,
      password = _ref3.password;
  var users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    return null;
  }

  var userFound = false;
  users.forEach(function (user, index) {
    var storeEmail = user.email,
        storeMobileNumber = user.mobileNumber;

    if (storeEmail === username || storeMobileNumber === username) {
      userFound = true;
      users[index].password = password;
    }
  });

  if (userFound) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  return userFound;
} // add user if username and mobile does not match with some other user


function addUser(state) {
  console.log('state', state);
  var username = state.username,
      mobileNumber = state.mobileNumber;
  var users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    users = [];
  }

  var userFound = false;
  users.forEach(function (user) {
    var storeEmail = user.email,
        storeMobileNumber = user.mobileNumber;

    if (storeEmail === username || storeMobileNumber === mobileNumber) {
      userFound = true;
    }
  });

  if (!userFound) {
    users.push(state);
    localStorage.setItem('users', JSON.stringify(users));
  }

  return !userFound;
}
},{}],"src/pages/Login/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PageFrame = _interopRequireDefault(require("../../components/PageFrame"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Form = _interopRequireDefault(require("../../components/Form"));

var _questions = _interopRequireDefault(require("./questions"));

require("../../commonStyles/screensStyle.css");

var _validate2 = _interopRequireDefault(require("../../utils/validate"));

var _storage = require("../../utils/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Tried making this similar to react thing because it is easy to understand
    as people do have this mental model :-)
**/
var Login = /*#__PURE__*/function () {
  function Login(reRender, isResetPassword) {
    _classCallCheck(this, Login);

    this.reRender = reRender;
    this.isResetPassword = isResetPassword;
    this.questions = _questions.default;
    this.actionFailedMsg = null;
    this.state = {
      username: "",
      password: ""
    };
    this.form = new _Form.default({
      questions: this.questions,
      state: this.state
    });
  }

  _createClass(Login, [{
    key: "onInputChange",
    value: function onInputChange(id, value) {
      this.state[id] = value;
    }
  }, {
    key: "resetPassword",
    value: function resetPassword() {
      if ((0, _storage.updateUser)(this.state)) {
        window.open("/login", "_self");
        return;
      }

      this.actionFailedMsg = 'Invalid user';
    }
  }, {
    key: "userLogin",
    value: function userLogin() {
      if ((0, _storage.checkForUser)(this.state)) {
        window.open("/search", "_self");
        return;
      }

      this.actionFailedMsg = 'Username or Password is invalid';
    }
  }, {
    key: "onLogin",
    value: function onLogin() {
      var _validate = (0, _validate2.default)(this.questions, this.state),
          questions = _validate.questions,
          isValidated = _validate.isValidated;

      this.questions = questions;

      if (isValidated) {
        if (this.isResetPassword) {
          this.resetPassword();
        } else {
          this.userLogin();
        }
      }

      this.reRender();
    }
  }, {
    key: "getLoginContent",
    value: function getLoginContent() {
      var loginBtn = new _Button.default({
        id: "login-btn",
        btnText: this.isResetPassword ? "RESET PASSWORD" : "LOGIN",
        className: this.isResetPassword ? 'btn-margin' : ''
      });
      return "\n    <div class='section'>\n      <div class='border-section'>\n      ".concat(this.actionFailedMsg ? "<div class=\"error-prompt\">".concat(this.actionFailedMsg, "</div>") : "", "\n\n        ").concat(this.form.render(), "\n        ").concat(!this.isResetPassword ? "<a class='fgt-pass' href='/forgot-password'>FORGOT PASSWORD?</a>" : '', "\n        ").concat(loginBtn.render(), "\n      </div>\n      <div class='footer-cta'>\n      ").concat(!this.isResetPassword ? "Don't have an account <a class='register' href='/register'>REGISTER NOW</a>" : "<a class='register' href='/login'>LOGIN NOW</a>", "\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var pageFrame = new _PageFrame.default(this.isResetPassword ? "Reset Password" : "Login To App", this.getLoginContent());
      return pageFrame.render();
    }
  }, {
    key: "attachListener",
    value: function attachListener() {
      var _this = this;

      // delegating events
      var containerDiv = document.getElementById("app"); // attaching events on the top

      containerDiv.onclick = function (event) {
        if (event.target.id === "login-btn") {
          _this.onLogin();
        }
      };

      containerDiv.oninput = function (event) {
        _this.onInputChange(event.target.id, event.target.value);
      };
    }
  }]);

  return Login;
}();

exports.default = Login;
},{"../../components/PageFrame":"src/components/PageFrame/index.js","../../components/Button":"src/components/Button/index.js","../../components/Form":"src/components/Form/index.js","./questions":"src/pages/Login/questions.js","../../commonStyles/screensStyle.css":"src/commonStyles/screensStyle.css","../../utils/validate":"src/utils/validate.js","../../utils/storage":"src/utils/storage.js"}],"src/pages/Register/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validatorsRegex = require("../../utils/validatorsRegex");

var _default = [{
  id: "fullName",
  name: "Full Name",
  type: "text",
  placeholder: "enter your firstName & LastName",
  validate: function validate(value) {
    return value && value.trim().length > 4;
  },
  errorMsg: "Enter 4 or more characters!"
}, {
  id: "email",
  name: "Email Id",
  type: "text",
  placeholder: "enter your email ID",
  validate: function validate(value) {
    return (0, _validatorsRegex.emailValidator)(value);
  },
  errorMsg: "Invalid email!"
}, {
  id: "mobileNumber",
  name: "Mobile Number",
  type: "text",
  placeholder: "enter your 10-digit mobile number",
  validate: function validate(value) {
    return (0, _validatorsRegex.phoneValidator)(value);
  },
  errorMsg: "Invalid mobile number!"
}, {
  id: "password",
  name: "Password",
  type: "password",
  placeholder: "password of length 6 or more",
  validate: function validate(value) {
    return value && value.trim().length >= 6;
  },
  errorMsg: "Invalid password!"
}, {
  id: "reEnterPassword",
  name: "Re-enter Password",
  type: "password",
  placeholder: "re-enter your password",
  validate: function validate(value, state) {
    return value && state.password === value.trim();
  },
  errorMsg: "Re-enter password should match password!"
}, {
  id: "carModel",
  name: "Car Model",
  type: "text",
  placeholder: "Name the car you have",
  validate: function validate(value) {
    return !!value;
  },
  errorMsg: "Enter car model!"
}];
exports.default = _default;
},{"../../utils/validatorsRegex":"src/utils/validatorsRegex.js"}],"src/pages/Register/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PageFrame = _interopRequireDefault(require("../../components/PageFrame"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Form = _interopRequireDefault(require("../../components/Form"));

var _questions = _interopRequireDefault(require("./questions"));

require("../../commonStyles/screensStyle.css");

var _validate2 = _interopRequireDefault(require("../../utils/validate"));

var _storage = require("../../utils/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Register = /*#__PURE__*/function () {
  function Register(reRender) {
    _classCallCheck(this, Register);

    this.reRender = reRender;
    this.questions = _questions.default;
    this.actionFailedMsg = null;
    this.state = {
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      reEnterPassword: "",
      carModel: ""
    };
    this.form = new _Form.default({
      questions: this.questions,
      state: this.state
    });
  }

  _createClass(Register, [{
    key: "onInputChange",
    value: function onInputChange(id, value) {
      this.state[id] = value;
    }
  }, {
    key: "onRegister",
    value: function onRegister() {
      var _validate = (0, _validate2.default)(this.questions, this.state),
          questions = _validate.questions,
          isValidated = _validate.isValidated;

      this.questions = questions;

      if (isValidated) {
        if ((0, _storage.addUser)(this.state)) {
          window.open("/login", "_self");
          return;
        }

        this.actionFailedMsg = 'Email or mobile already registered <br /> Please follow Login';
      }

      this.reRender();
    }
  }, {
    key: "getRegisterContent",
    value: function getRegisterContent() {
      var registerBtn = new _Button.default({
        id: "register-btn",
        btnText: "REGISTER",
        className: 'btn-margin'
      });
      return "<div class='section'>\n    <div class='border-section'>\n      ".concat(this.actionFailedMsg ? "<div class=\"error-prompt\">".concat(this.actionFailedMsg, "</div>") : "", "\n      ").concat(this.form.render(), "\n      ").concat(registerBtn.render(), "\n    </div>\n    <div class='footer-cta'>\n    Already have an account?\n    <a class='register' href='/login'>LOGIN NOW</a>\n    </div>\n  </div>");
    }
  }, {
    key: "render",
    value: function render() {
      var pageFrame = new _PageFrame.default("Register With App", this.getRegisterContent());
      return pageFrame.render();
    }
  }, {
    key: "attachListener",
    value: function attachListener() {
      var _this = this;

      var containerDiv = document.getElementById("app");

      containerDiv.onclick = function (event) {
        if (event.target.id === "register-btn") {
          _this.onRegister();
        }
      };

      containerDiv.oninput = function (event) {
        _this.onInputChange(event.target.id, event.target.value);
      };
    }
  }]);

  return Register;
}();

exports.default = Register;
},{"../../components/PageFrame":"src/components/PageFrame/index.js","../../components/Button":"src/components/Button/index.js","../../components/Form":"src/components/Form/index.js","./questions":"src/pages/Register/questions.js","../../commonStyles/screensStyle.css":"src/commonStyles/screensStyle.css","../../utils/validate":"src/utils/validate.js","../../utils/storage":"src/utils/storage.js"}],"src/pages/Search/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PageFrame = _interopRequireDefault(require("../../components/PageFrame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);
  }

  _createClass(Search, [{
    key: "getSearchContent",
    value: function getSearchContent() {
      return "<div>I am register</div>";
    }
  }, {
    key: "render",
    value: function render() {
      var pageFrame = new _PageFrame.default("Pick A Ride", this.getSearchContent());
      return pageFrame.render();
    }
  }]);

  return Search;
}();

exports.default = Search;
},{"../../components/PageFrame":"src/components/PageFrame/index.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var _index = _interopRequireDefault(require("./pages/Login/index.js"));

var _Register = _interopRequireDefault(require("./pages/Register"));

var _Search = _interopRequireDefault(require("./pages/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component; // fetch component based on path

function getRouteBasedComponent() {
  var path = window.location.pathname;

  switch (path) {
    case "/":
    case "/login":
      component = new _index.default(reRender);
      break;

    case "/register":
      component = new _Register.default(reRender);
      break;

    case "/search":
      component = new _Search.default(reRender);
      break;

    case "/forgot-password":
      component = new _index.default(reRender, true);
      break;

    default:
      return "<div>Oops! this page doesn't exist (code: 404)</div>";
  }

  return component.render();
} // we have to manually render application so we have to pass this


function reRender() {
  document.getElementById("app").innerHTML = component.render();
}

function render() {
  document.getElementById("app").innerHTML = getRouteBasedComponent();
  component.attachListener(); // attach listener only once
}

render();
},{"./styles.css":"src/styles.css","./pages/Login/index.js":"src/pages/Login/index.js","./pages/Register":"src/pages/Register/index.js","./pages/Search":"src/pages/Search/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50897" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map