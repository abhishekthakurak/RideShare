parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"vmlv":[function(require,module,exports) {
module.exports="/car.3c90bb67.png";
},{}],"ktL1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./style.css");var e=n(require("../../../assets/car.png"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function a(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var i=function(){function n(e,t){r(this,n),this.header=e,this.children=t}return a(n,[{key:"render",value:function(){return"\n      <div class='page-wrap'>\n        <div class='content'>\n          <div class='header'>\n            <img class='logo' src=".concat(e.default," alt='Ride Sharing'/>\n            ").concat(this.header,"\n          </div>\n          <div css='child-wrap'>").concat(this.children,"</div\n        </div>\n      </div>\n    ")}}]),n}();exports.default=i;
},{"./style.css":"D9Nj","../../../assets/car.png":"vmlv"}],"u8Z0":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./style.css");var r=function(){function e(n){var r=n.id,a=n.btnText,i=n.className;t(this,e),this.id=r,this.btnText=a,this.className=i}return n(e,[{key:"render",value:function(){return"<button id=".concat(this.id,' class="btn ').concat(this.className,'"\n    }>').concat(this.btnText,"</button>")}}]),e}();exports.default=r;
},{"./style.css":"D9Nj"}],"t07s":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./style");var r=function(){function n(t){var r=t.questions,a=t.state;e(this,n),this.questions=r,this.state=a}return t(n,[{key:"getFormElements",value:function(e){var n=e.type,t=e.name,r=e.id,a=e.isError,o=e.placeholder,i=e.errorMsg;return"\n    <div class='input-wrap'>\n      <div class='field-lbl'>".concat(t,"</div>\n      <input\n        class='input'\n        value='").concat(this.state[r],"'\n        id='").concat(r,"'\n        placeholder='").concat(o,"'\n        type='").concat(n,"'\n      />\n      ").concat(a?'<span class="inp-error">'.concat(i,"</span>"):"","\n  </div>")}},{key:"render",value:function(){var e=this;return this.questions.map(function(n){return e.getFormElements(n)}).join("")}}]),n}();exports.default=r;
},{"./style":"D9Nj"}],"Nt6G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.phoneValidator=exports.emailValidator=void 0;var a=function(a){return a&&/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/.test(a)};exports.emailValidator=a;var e=function(a){return a&&/^[1-9]\d{9,9}$/.test(a)};exports.phoneValidator=e;
},{}],"hd1O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../utils/validatorsRegex"),r=[{id:"username",name:"Username",type:"text",placeholder:"10-digit mobile number or email ID",validate:function(r){return(0,e.emailValidator)(r)||(0,e.phoneValidator)(r)},errorMsg:"Invalid username!"},{id:"password",name:"Password",type:"password",placeholder:"password of length 6 or more",validate:function(e){return e&&e.trim().length>=6},errorMsg:"Invalid password!"}];exports.default=r;
},{"../../utils/validatorsRegex":"Nt6G"}],"b4oj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(r,e){var t=!0;return r.forEach(function(i,o){var a=i.validate,s=i.id;a(e[s],e)?r[o].isError=!1:(r[o].isError=!0,t=!1)}),{isValidated:t,questions:r}};exports.default=r;
},{}],"O2he":[function(require,module,exports) {
"use strict";function e(e){var r=e.username,s=e.password,t=JSON.parse(localStorage.getItem("users"));return t?t.filter(function(e){var t=e.email,a=e.mobileNumber;return e.password===s&&(t===r||a===r)}).length>0:null}function r(e){var r=e.username,s=e.password,t=JSON.parse(localStorage.getItem("users"));if(!t)return null;var a=!1;return t.forEach(function(e,o){var u=e.email,l=e.mobileNumber;u!==r&&l!==r||(a=!0,t[o].password=s)}),a&&localStorage.setItem("users",JSON.stringify(t)),a}function s(e){console.log("state",e);var r=e.username,s=e.mobileNumber,t=JSON.parse(localStorage.getItem("users"));t||(t=[]);var a=!1;return t.forEach(function(e){var t=e.email,o=e.mobileNumber;t!==r&&o!==s||(a=!0)}),a||(t.push(e),localStorage.setItem("users",JSON.stringify(t))),!a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkForUser=e,exports.updateUser=r,exports.addUser=s;
},{}],"Jg6N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../components/PageFrame")),t=r(require("../../components/Button")),s=r(require("../../components/Form")),n=r(require("./questions"));require("../../commonStyles/screensStyle.css");var i=r(require("../../utils/validate")),a=require("../../utils/storage");function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,s){return t&&u(e.prototype,t),s&&u(e,s),e}var d=function(){function r(e,t){o(this,r),this.reRender=e,this.isResetPassword=t,this.questions=n.default,this.actionFailedMsg=null,this.state={username:"",password:""},this.form=new s.default({questions:this.questions,state:this.state})}return c(r,[{key:"onInputChange",value:function(e,t){this.state[e]=t}},{key:"resetPassword",value:function(){(0,a.updateUser)(this.state)?window.open("/login","_self"):this.actionFailedMsg="Invalid user"}},{key:"userLogin",value:function(){(0,a.checkForUser)(this.state)?window.open("/search","_self"):this.actionFailedMsg="Username or Password is invalid"}},{key:"onLogin",value:function(){var e=(0,i.default)(this.questions,this.state),t=e.questions,s=e.isValidated;this.questions=t,s&&(this.isResetPassword?this.resetPassword():this.userLogin()),this.reRender()}},{key:"getLoginContent",value:function(){var e=new t.default({id:"login-btn",btnText:this.isResetPassword?"RESET PASSWORD":"LOGIN",className:this.isResetPassword?"btn-margin":""});return"\n    <div class='section'>\n      <div class='border-section'>\n      ".concat(this.actionFailedMsg?'<div class="error-prompt">'.concat(this.actionFailedMsg,"</div>"):"","\n\n        ").concat(this.form.render(),"\n        ").concat(this.isResetPassword?"":"<a class='fgt-pass' href='/forgot-password'>FORGOT PASSWORD?</a>","\n        ").concat(e.render(),"\n      </div>\n      <div class='footer-cta'>\n      ").concat(this.isResetPassword?"<a class='register' href='/login'>LOGIN NOW</a>":"Don't have an account <a class='register' href='/register'>REGISTER NOW</a>","\n      </div>\n    </div>\n    ")}},{key:"render",value:function(){return new e.default(this.isResetPassword?"Reset Password":"Login To App",this.getLoginContent()).render()}},{key:"attachListener",value:function(){var e=this,t=document.getElementById("app");t.onclick=function(t){"login-btn"===t.target.id&&e.onLogin()},t.oninput=function(t){e.onInputChange(t.target.id,t.target.value)}}}]),r}();exports.default=d;
},{"../../components/PageFrame":"ktL1","../../components/Button":"u8Z0","../../components/Form":"t07s","./questions":"hd1O","../../commonStyles/screensStyle.css":"D9Nj","../../utils/validate":"b4oj","../../utils/storage":"O2he"}],"fyC1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../utils/validatorsRegex"),r=[{id:"fullName",name:"Full Name",type:"text",placeholder:"enter your firstName & LastName",validate:function(e){return e&&e.trim().length>4},errorMsg:"Enter 4 or more characters!"},{id:"email",name:"Email Id",type:"text",placeholder:"enter your email ID",validate:function(r){return(0,e.emailValidator)(r)},errorMsg:"Invalid email!"},{id:"mobileNumber",name:"Mobile Number",type:"text",placeholder:"enter your 10-digit mobile number",validate:function(r){return(0,e.phoneValidator)(r)},errorMsg:"Invalid mobile number!"},{id:"password",name:"Password",type:"password",placeholder:"password of length 6 or more",validate:function(e){return e&&e.trim().length>=6},errorMsg:"Invalid password!"},{id:"reEnterPassword",name:"Re-enter Password",type:"password",placeholder:"re-enter your password",validate:function(e,r){return e&&r.password===e.trim()},errorMsg:"Re-enter password should match password!"},{id:"carModel",name:"Car Model",type:"text",placeholder:"Name the car you have",validate:function(e){return!!e},errorMsg:"Enter car model!"}];exports.default=r;
},{"../../utils/validatorsRegex":"Nt6G"}],"GMHq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("../../components/PageFrame")),t=a(require("../../components/Button")),n=a(require("../../components/Form")),i=a(require("./questions"));require("../../commonStyles/screensStyle.css");var r=a(require("../../utils/validate")),s=require("../../utils/storage");function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var c=function(){function a(e){o(this,a),this.reRender=e,this.questions=i.default,this.actionFailedMsg=null,this.state={fullName:"",email:"",mobileNumber:"",password:"",reEnterPassword:"",carModel:""},this.form=new n.default({questions:this.questions,state:this.state})}return l(a,[{key:"onInputChange",value:function(e,t){this.state[e]=t}},{key:"onRegister",value:function(){var e=(0,r.default)(this.questions,this.state),t=e.questions,n=e.isValidated;if(this.questions=t,n){if((0,s.addUser)(this.state))return void window.open("/login","_self");this.actionFailedMsg="Email or mobile already registered <br /> Please follow Login"}this.reRender()}},{key:"getRegisterContent",value:function(){var e=new t.default({id:"register-btn",btnText:"REGISTER",className:"btn-margin"});return"<div class='section'>\n    <div class='border-section'>\n      ".concat(this.actionFailedMsg?'<div class="error-prompt">'.concat(this.actionFailedMsg,"</div>"):"","\n      ").concat(this.form.render(),"\n      ").concat(e.render(),"\n    </div>\n    <div class='footer-cta'>\n    Already have an account?\n    <a class='register' href='/login'>LOGIN NOW</a>\n    </div>\n  </div>")}},{key:"render",value:function(){return new e.default("Register With App",this.getRegisterContent()).render()}},{key:"attachListener",value:function(){var e=this,t=document.getElementById("app");t.onclick=function(t){"register-btn"===t.target.id&&e.onRegister()},t.oninput=function(t){e.onInputChange(t.target.id,t.target.value)}}}]),a}();exports.default=c;
},{"../../components/PageFrame":"ktL1","../../components/Button":"u8Z0","../../components/Form":"t07s","./questions":"fyC1","../../commonStyles/screensStyle.css":"D9Nj","../../utils/validate":"b4oj","../../utils/storage":"O2he"}],"jzCQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../../components/PageFrame"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var u=function(){function n(){t(this,n)}return o(n,[{key:"getSearchContent",value:function(){return"<div>I am register</div>"}},{key:"render",value:function(){return new e.default("Pick A Ride",this.getSearchContent()).render()}}]),n}();exports.default=u;
},{"../../components/PageFrame":"ktL1"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e,r=a(require("./pages/Login/index.js")),t=a(require("./pages/Register")),n=a(require("./pages/Search"));function a(e){return e&&e.__esModule?e:{default:e}}function s(){switch(window.location.pathname){case"/":case"/login":e=new r.default(i);break;case"/register":e=new t.default(i);break;case"/search":e=new n.default(i);break;case"/forgot-password":e=new r.default(i,!0);break;default:return"<div>Oops! this page doesn't exist (code: 404)</div>"}return e.render()}function i(){document.getElementById("app").innerHTML=e.render()}function u(){document.getElementById("app").innerHTML=s(),e.attachListener()}u();
},{"./styles.css":"D9Nj","./pages/Login/index.js":"Jg6N","./pages/Register":"GMHq","./pages/Search":"jzCQ"}]},{},["H99C"], null)
//# sourceMappingURL=/src.6f38cc05.js.map