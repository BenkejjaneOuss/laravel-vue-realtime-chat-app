(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    };
  },
  watch: {
    $route: {
      handler: function handler(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  computed: {
    load: function load() {
      if (this.loading == false) {
        return 'Create account';
      } else {
        return '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>';
      }
    }
  },
  methods: {
    register: function register() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (!_this.errors.any()) {
          _this.loading = true;
          axios.post('/api/register', _this.form).then(function (res) {
            if (res.data.success) {
              _this.loading = false;
              var token = res.data.token;
              localStorage.setItem('access_token', token);

              _this.$router.push({
                path: _this.redirect || '/chats'
              });
            } else {
              _this.loading = false;
              var type = 'error';
              var title = 'Error!';
              var text = res.data.msg !== '' ? res.data.msg : 'Please retry later';

              _this.$swal.fire({
                icon: type,
                title: title,
                text: text,
                showConfirmButton: false,
                showCloseButton: true
              });
            }
          })["catch"](function (e) {
            console.log('createForm', e);
            _this.loading = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title" }, [_vm._v("Register")]),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { action: "#" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.register($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    class: {
                      "form-control": true,
                      "form-control-danger": _vm.errors.has("name")
                    },
                    attrs: { type: "text", id: "name", name: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("name"),
                          expression: "errors.has('name')"
                        }
                      ],
                      staticClass: "form-control-feedback"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("name")))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    class: {
                      "form-control": true,
                      "form-control-danger": _vm.errors.has("email")
                    },
                    attrs: { type: "email", id: "email", name: "email" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("email"),
                          expression: "errors.has('email')"
                        }
                      ],
                      staticClass: "form-control-feedback"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6",
                        expression: "'required|min:6'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    class: {
                      "form-control": true,
                      "form-control-danger": _vm.errors.has("email")
                    },
                    attrs: {
                      type: "password",
                      id: "password",
                      name: "password"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("password"),
                          expression: "errors.has('password')"
                        }
                      ],
                      staticClass: "form-control-feedback"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("password")))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "confirm_password" } }, [
                    _vm._v("Confirm Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.confirm_password,
                        expression: "form.confirm_password"
                      }
                    ],
                    class: {
                      "form-control": true,
                      "form-control-danger": _vm.errors.has("confirm_password")
                    },
                    attrs: {
                      type: "password",
                      id: "confirm_password",
                      name: "confirm_password"
                    },
                    domProps: { value: _vm.form.confirm_password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "confirm_password",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("confirm_password"),
                          expression: "errors.has('confirm_password')"
                        }
                      ],
                      staticClass: "form-control-feedback"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("confirm_password")))]
                  )
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn btn-primary btn-block",
                  attrs: { type: "submit" },
                  domProps: { innerHTML: _vm._s(_vm.load) }
                })
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=aacc3324& */ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=aacc3324& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);