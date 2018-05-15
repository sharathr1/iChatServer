webpackJsonp([0], {

    /***/
    134:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return RegisterPage;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__chat_mainChat_chat__ = __webpack_require__(82);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(84);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(83);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__common_constant__ = __webpack_require__(49);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };






            /**
             * Generated class for the RegisterPage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            var RegisterPage = /** @class */ (function () {
                function RegisterPage(navCtrl, navParams, socket, http) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                    this.socket = socket;
                    this.http = http;
                    this.name = "";
                    this.email = "";
                    this.userName = localStorage.getItem("name");
                    this.userEmail = localStorage.getItem("email");
                    __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName =
                        localStorage.getItem("name") != "undefined" ?
                        localStorage.getItem("name") :
                        "";
                    __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail =
                        localStorage.getItem("email") != "undefined" ?
                        localStorage.getItem("email") :
                        "";
                    console.log("AppSettings.name : ", this.name);
                    console.log("AppSettings.email : ", this.email);
                    this.socket.connect();
                    console.log("this.socket : ", this.socket);
                    if (__WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName && __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail) {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_mainChat_chat__["a" /* ChatPage */ ]);
                    }
                }
                RegisterPage.prototype.registerUser = function () {
                    var _this = this;
                    this.http
                        .post(__WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].url + "register", {
                            dName: __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName,
                            email: __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail,
                            userID: this.socket.ioSocket.id
                        })
                        .subscribe(function (data) {
                                console.log("registerUser : ", data);
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_mainChat_chat__["a" /* ChatPage */ ]);
                            }, function (error) {
                                console.log("registerUser error : ", error);
                            } // error path
                        );
                };
                RegisterPage.prototype.setloginDetails = function (name, email) {
                    if (name && email) {
                        console.log("name : ", name, "email : ", email);
                        __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail = email;
                        __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName = name;
                        localStorage.setItem("name", __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName.toString());
                        localStorage.setItem("email", __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail.toString());
                        this.registerUser();
                    }
                };
                RegisterPage.prototype.ionViewDidLoad = function () {
                    console.log("ionViewDidLoad RegisterPage");
                };
                RegisterPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: "page-register",
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\register\register.html"*/ '<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>I-Chat (β) -- Sign-Up</ion-title>\n    <ion-title text-center></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-vertical>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input #name1 [(ngModel)]="name" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>email@tcs.com</ion-label>\n      <ion-input #email1 [(ngModel)]="email" type="text" ng></ion-input>\n    </ion-item>\n\n    <button margin-top ion-button (click)="setloginDetails(name, email)" [disabled]="name === \'\' || email===\'\'">Start Chat</button>\n\n  </ion-list>\n  <div class="notes-container">\n    <h2> NOTE !</h2>\n    <ul class="my-nav">\n      <li>User should register with proper Name & E-id.</li>\n      <li>Provider & Consumer both should be online for sharing files.</li>\n      <li>Users can only chat with registered users.</li>\n      <li> User\'s files & chat are not stored in server.</li>\n      <li> IP will be blacklisted for spam users.</li>\n    </ul>\n  </div>\n</ion-content>' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\register\register.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */ ],
                        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */ ],
                        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
                        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */ ]
                    ])
                ], RegisterPage);
                return RegisterPage;
            }());

            //# sourceMappingURL=register.js.map

            /***/
        }),

    /***/
    146:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return ChatProvider;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(79);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            /*
              Generated class for the ChatProvider provider.

              See https://angular.io/guide/dependency-injection for more info on providers
              and Angular DI.
            */
            var ChatProvider = /** @class */ (function () {
                function ChatProvider() {
                    this.emoji = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
                    this.ObsEmoji = this.emoji.asObservable();
                    console.log("Hello ChatProvider Provider");
                }
                ChatProvider.prototype.changeEmoji = function (emoji) {
                    this.emoji.next(emoji);
                };
                ChatProvider = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
                    __metadata("design:paramtypes", [])
                ], ChatProvider);
                return ChatProvider;
            }());

            //# sourceMappingURL=chatService.js.map

            /***/
        }),

    /***/
    183:
        /***/
        (function (module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncatched exception popping up in devtools
                return Promise.resolve().then(function () {
                    throw new Error("Cannot find module '" + req + "'.");
                });
            }
            webpackEmptyAsyncContext.keys = function () {
                return [];
            };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = 183;

            /***/
        }),

    /***/
    226:
        /***/
        (function (module, exports, __webpack_require__) {

            var map = {
                "../pages/app-routing-module/app-routing-module.module": [
                    227
                ],
                "../pages/page-not-found/page-not-found.module": [
                    345
                ],
                "../pages/register/register.module": [
                    346
                ]
            };

            function webpackAsyncContext(req) {
                var ids = map[req];
                if (!ids)
                    return Promise.reject(new Error("Cannot find module '" + req + "'."));
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(ids[0]);
                });
            };
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = 226;
            module.exports = webpackAsyncContext;

            /***/
        }),

    /***/
    227:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppRoutingModulePageModule", function () {
                return AppRoutingModulePageModule;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(418);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(421);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(134);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__chat_mainChat_chat__ = __webpack_require__(82);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found__ = __webpack_require__(344);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };







            var appRoutes = [{
                    path: 'registration',
                    component: __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */ ]
                },
                {
                    path: 'chat',
                    component: __WEBPACK_IMPORTED_MODULE_5__chat_mainChat_chat__["a" /* ChatPage */ ]
                },
                {
                    path: '',
                    redirectTo: '/registration',
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found__["a" /* PageNotFoundPage */ ]
                }
            ];
            var AppRoutingModulePageModule = /** @class */ (function () {
                function AppRoutingModulePageModule() {}
                AppRoutingModulePageModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                        declarations: [
                            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModulePage */ ],
                        ],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */ ].forChild(__WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModulePage */ ]),
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */ ].forRoot(appRoutes, {
                                enableTracing: false,
                                useHash: true
                                // preloadingStrategy: PreloadAllModules
                            })
                        ],
                        exports: [
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */ ]
                        ]
                    })
                ], AppRoutingModulePageModule);
                return AppRoutingModulePageModule;
            }());

            //# sourceMappingURL=app-routing-module.module.js.map

            /***/
        }),

    /***/
    241:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return SingleChatComponent;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(83);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(84);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__common_constant__ = __webpack_require__(49);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_angular2_indexeddb__ = __webpack_require__(443);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_angular2_indexeddb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_indexeddb__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(445);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6__mainChat_chat__ = __webpack_require__(82);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_8__emoji_emoji__ = __webpack_require__(342);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_9__chatService__ = __webpack_require__(146);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };










            /**
             * Generated class for the SingleChatComponent component.
             *
             * See https://angular.io/api/core/Component for more info on Angular
             * Components.
             */
            var SingleChatComponent = /** @class */ (function () {
                function SingleChatComponent(loadingCtrl, popoverCtrl, http, socket, chatPro) {
                    var _this = this;
                    this.loadingCtrl = loadingCtrl;
                    this.popoverCtrl = popoverCtrl;
                    this.http = http;
                    this.socket = socket;
                    this.chatPro = chatPro;
                    /*  @ViewChild(Content) content: Content;
                     */
                    this.textMsg = "";
                    this.pairId = "";
                    this.messages = []; // {"userID":"wferwvrewv", "pairID":"sadvdvv", "chat":"sdfevfv"}
                    this.pairUser = {};
                    this.user = {};
                    this.audio = new Audio("../../../assets/sound/ping.mp3");
                    this.isVisible = true;
                    this.loading = this.loadingCtrl.create({
                        spinner: 'hide',
                        content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
                    });
                    this.chatPage = new __WEBPACK_IMPORTED_MODULE_6__mainChat_chat__["a" /* ChatPage */ ](null, null, this.socket, this.http);
                    this.vis = (function () {
                        var stateKey, eventKey, keys = {
                            hidden: "visibilitychange",
                            webkitHidden: "webkitvisibilitychange",
                            mozHidden: "mozvisibilitychange",
                            msHidden: "msvisibilitychange"
                        };
                        for (stateKey in keys) {
                            if (stateKey in document) {
                                eventKey = keys[stateKey];
                                break;
                            }
                        }
                        return function (c) {
                            if (c)
                                document.addEventListener(eventKey, c);
                            return !document[stateKey];
                        };
                    })();
                    this.handleError = function (error) {
                        // Do messaging and error handling here
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(error);
                    };
                    this.headers = new Headers();
                    this.headers.set('Content-Type', 'multipart/form-data');
                    this.openDB();
                    this.user = __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ];
                    __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userEmail = localStorage.getItem("email");
                    __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userName = localStorage.getItem("name");
                    this.user = __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ];
                    this.socket.on("newMsg", function (data) {
                        console.log("receieve msg data : ", data);
                        //notify
                        if (data.userID != undefined) {
                            if (data.userID != _this.pairId) {
                                _this.chatPage.notifyUser(data.userID);
                            }
                        }
                        console.log('this.isVisible : ', _this.isVisible);
                        _this.addMessage(data);
                        _this.vis(function (e) {
                            if (e.target.visibilityState == "hidden") {
                                this.audio.play();
                            }
                        });
                        /*     if (this.isVisible) {
                               console.log('inside audio play inside audio play inside audio play');
                               this.audio.play();
                             }*/
                        if (data.email != _this.pairUser.email) {
                            _this.audio.play();
                        }
                    });
                    this.socket.on("download", this.receiveFile);
                    /*  this.vis(function (e) {
                        if (e.target.visibilityState == 'hidden') {
                          this.isVisible = false;
                        } else {
                          this.isVisible = true;
                        }
                      });*/
                    setTimeout(function () {
                        _this.chatPro.ObsEmoji.subscribe(function (emoji) {
                            console.log("clicked emoji : ", emoji);
                            if (emoji.toString().trim().length > 0) {
                                _this.textMsg += " :" + emoji + ": ";
                            }
                        });
                    }, 1000);
                }
                Object.defineProperty(SingleChatComponent.prototype, "selectedUser", {
                    set: function (data) {
                        console.log("selected user : ", data);
                        if (data) {
                            this.pairId = data.userID;
                            this.pairUser = data;
                            this.getUserMsg(data);
                            this.scrollToBottom();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                SingleChatComponent.prototype.keyPress = function (ee) {
                    if (ee.keyCode === 13 && !ee.shiftKey) {
                        console.log("Enter button pressed...", ee);
                        console.log(this.textMsg);
                        this.sendMessage();
                    }
                };
                SingleChatComponent.prototype.openDB = function () {
                    if (!("indexedDB" in window)) {
                        console.log("This browser doesn't support IndexedDB");
                        return;
                    }
                    this.db = new __WEBPACK_IMPORTED_MODULE_4_angular2_indexeddb__["AngularIndexedDB"]("chatDB", 1);
                    this.db.openDatabase(1, function (evt) {
                        console.log("evt : ", evt);
                        if (!evt.target.result.objectStoreNames.contains("people")) {
                            var objectStore = evt.currentTarget.result.createObjectStore("people", {
                                keyPath: "id",
                                autoIncrement: true
                            });
                            objectStore.createIndex("name", "name", {
                                unique: false
                            });
                            objectStore.createIndex("email", "email", {
                                unique: true
                            });
                        }
                    });
                };
                SingleChatComponent.prototype.addMsgToDb = function (data, msgArr, pairUser) {
                    var _this = this;
                    console.log("addMsgToDb : ", data);
                    var email = "",
                        name = "";
                    if (data.userID == this.socket.ioSocket.id) {
                        console.log("Message from paiered user ", data, pairUser);
                        email = pairUser.email;
                        name = pairUser.dName;
                    } else {
                        //Message received
                        console.log("Message from UP user ", data);
                        email = data.email;
                        name = data.dName;
                    }
                    this.db.getByIndex("people", "email", email).then(function (person) {
                        console.log("user already exist in db=> data ");
                        var arr = [];
                        if (person) {
                            console.log("got data for person : ", person);
                            arr = person.message;
                            arr.push(data);
                        } else {
                            arr.push(data);
                        }
                        _this.db
                            .update("people", {
                                id: email,
                                name: name,
                                email: email,
                                message: arr
                            })
                            .then(function (updated) {
                                console.log("msg updated in db : ", updated);
                            }, function (error) {
                                console.log("error while update in db : ", error);
                            });
                    }, function (error) {
                        console.log("this user does not exist in db : ", error);
                        _this.db
                            .add("people", {
                                name: data.dName,
                                email: data.email,
                                message: [data]
                            })
                            .then(function (success) {
                                console.log("message added in db : ", success);
                            });
                    });
                };
                SingleChatComponent.prototype.getUserMsg = function (pairUser) {
                    var _this = this;
                    console.log("user specidifc data : ", pairUser);
                    this.db.getByIndex("people", "email", pairUser.email).then(function (person) {
                        console.log("from db user specific data : ", person);
                        if (person)
                            _this.messages = person.message;
                        else
                            _this.messages = [];
                    }, function (error) {
                        console.log("error user specific data : ", error);
                    });
                };
                SingleChatComponent.prototype.sendMessage = function () {
                    var _this = this;
                    if (this.textMsg.trim().length == 0) {
                        return;
                    }
                    this.http
                        .post(__WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].url + "chats", {
                            userID: this.socket.ioSocket.id,
                            dName: __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userName,
                            email: __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userEmail,
                            pairID: this.pairId,
                            chat: this.textMsg
                        })
                        .subscribe(function (data) {
                            // console.log("message sent : ", data);
                            data.__proto__.pairUserEmail = _this.pairUser.email;
                            console.log("data.__proto__.pairUserEmail : ", data.pairUserEmail);
                            _this.addMessage(data);
                            _this.textMsg = "";
                        }, function (error) {
                            console.log("message sent error : ", error);
                        });
                };
                SingleChatComponent.prototype.addMessage = function (data) {
                    if (data.file) {
                        data.file = {};
                    }
                    // console.log("this.pairUser : ", this.pairUser, data);
                    //console.log("new msg : ", data);
                    if (this.pairUser.email == data.email ||
                        __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userEmail == data.email) {
                        this.messages.push(data);
                        this.addMsgToDb(data, this.messages, this.pairUser);
                    } else {
                        this.addMsgToDb(data, this.messages, this.pairUser);
                    }
                    this.scrollToBottom();
                };
                SingleChatComponent.prototype.scrollToBottom = function () {
                    setTimeout(function () {
                        var a = document.getElementsByClassName('scroll-content');
                        var b = a[2];
                        b.scrollTop = b.scrollHeight + 1;
                    }, 100);
                };
                // code for drag & drop
                // File being dragged has moved into the drop region
                SingleChatComponent.prototype.dragFileOverStart = function () {
                    console.log("dragFileOverStart");
                    /*    document.getElementsByClassName('custom-component-drop-zone')[0].style.position = "absloute !important";
                     */ // document.getElementsByClassName('content content-md')[3].style;
                    document.getElementsByTagName('ion-content')[3].childNodes[1].style.display = 'none';
                    /* b[0].style.display = 'none'*/
                };
                // File being dragged has moved out of the drop region
                SingleChatComponent.prototype.dragFileOverEnd = function () {
                    console.log("dragFileOverEnd");
                    /*    document.getElementsByClassName('custom-component-drop-zone')[0].style.position = "initial";
                     */
                };
                // File being dragged has been dropped and is valid
                SingleChatComponent.prototype.dragFileAccepted = function (acceptedFile) {
                    console.log("dragFileAccepted acceptedFile");
                    // console.log("dragFileAccepted", acceptedFile.file);
                    document.getElementsByTagName('ion-content')[3].childNodes[1].style.display = 'block';
                    var file = acceptedFile.file;
                    console.log("File name: " + file.name);
                    /*var fileupoload = {
                      userID: this.socket.ioSocket.id,
                      pairID: this.pairId,
                      email: AppSettings.userEmail,
                      dName: AppSettings.userName,
                      file: file,
                      filename: file.name
                    };
                    this.socket.emit("fileUpload", fileupoload);*/
                    /*    for(var pair of formData.entries()) {
                       console.log(pair[0]+ ', '+ pair[1]);
                    }*/
                    this.createform(file);
                };
                SingleChatComponent.prototype.sendFile = function (e) {
                    /*    console.log("File name: ", e);
        
                        console.log("File name: " + file.name);
                        var fileupoload = {
                          userID: this.socket.ioSocket.id,
                          pairID: this.pairId,
                          file: file,
                          filename: file.name
                        };
                        this.socket.emit("fileUpload", fileupoload);
                    */
                    console.log("File name: ", e);
                    var file = e.target.files[0];
                    this.createform(file);
                };
                SingleChatComponent.prototype.receiveFile = function (data) {
                    // var sampleBytes = new Int8Array(4096);
                    //console.log("download", data);
                    var saveByteArray = (function () {
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.style = "display: none";
                        return function (data, name) {
                            var blob = new Blob(data, {
                                    type: "octet/stream"
                                }),
                                url = window.URL.createObjectURL(blob);
                            a.href = url;
                            a.download = name;
                            a.click();
                            window.URL.revokeObjectURL(url);
                        };
                    })();
                    saveByteArray([data.file[0].buffer], data.filename);
                };
                SingleChatComponent.prototype.createform = function (file) {
                    var reqformData = new FormData();
                    reqformData.append('userID', this.socket.ioSocket.id);
                    reqformData.append('pairID', this.pairId);
                    reqformData.append('file', file);
                    reqformData.append('email', __WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].userEmail);
                    reqformData.append('filename', file.name);
                    this.postForm(reqformData);
                };
                SingleChatComponent.prototype.postForm = function (form) {
                    console.log("Calling postForm");
                    var httpOptions = {
                        headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */ ]({
                            'Content-Type': 'multipart/form-data'
                        })
                    };
                    $(".loader").css("display", 'block');
                    $("body").css("opacity", 0.5);
                    $("body").css("pointer-events", 'none');
                    return this.http.post(__WEBPACK_IMPORTED_MODULE_3__common_constant__["a" /* AppSettings */ ].url + "upload", form).subscribe(function (data) {
                        console.log("File uploadsed Sucessfully");
                        $('body').css('opacity', 1);
                        $("body").css("pointer-events", 'auto');
                        $(".loader").css("display", 'none');
                        /*        this.loading.dismiss();
                         */
                    }, function (error) {
                        console.log("message sent error : ", error);
                    });;
                };
                // File being dragged has been dropped and has been rejected
                SingleChatComponent.prototype.dragFileRejected = function (rejectedFile) {
                    console.log("dragFileRejected");
                };
                SingleChatComponent.prototype.presentLoadingDefault = function () {
                    var loading = this.loadingCtrl.create({
                        content: 'Please wait ... Uploading file to Server'
                    });
                    /* setTimeout(() => {
                       loading.dismiss();
                     }, 5000);*/
                };
                SingleChatComponent.prototype.presentLoadingCustom = function () {
                    var loading = this.loadingCtrl.create({
                        spinner: 'hide',
                        content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">\n            <div class=\"loader\"></div>\n        </div>\n      </div>",
                    });
                };
                SingleChatComponent.prototype.openPopover = function (myEvent) {
                    console.log("popover open called...");
                    var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__emoji_emoji__["a" /* EmojiComponent */ ]);
                    popover.present({
                        ev: myEvent
                    });
                    popover.onDidDismiss(function (data) {
                        console.log(data);
                        if (data != null) {
                            console.log("data from pop : ", data);
                        }
                    });
                };
                __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("selectedUser"),
                    __metadata("design:type", Object),
                    __metadata("design:paramtypes", [Object])
                ], SingleChatComponent.prototype, "selectedUser", null);
                SingleChatComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: "single-chat",
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\singleChat\single-chat.html"*/ '<!-- Generated template for the SingleChatComponent component -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title padding-left>{{pairUser.dName||\'\'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ng2FileDrop class="custom-component-drop-zone" (ng2FileDropHoverStart)="dragFileOverStart()" (ng2FileDropHoverEnd)="dragFileOverEnd()"\n  (ng2FileDropFileAccepted)="dragFileAccepted($event)" (ng2FileDropFileRejected)="dragFileRejected($event)" margin-top margin-bottom\n  padding-top padding-bottom *ngIf="pairUser.dName" style="height: -moz-calc(100% - 100px); height: -webkit-calc(100% - 100px); height: calc(100% - 100px); margin: 0 auto -117px; margin-top: 42px;">\n\n  <ion-card class="has-header mineMsg" [ngClass]="{mineMsg : message.email === user.userEmail, senderMsg:message.email !== user.userEmail}"\n    *ngFor="let message of messages">\n    <ion-card-content [ngClass]="{mineContent : message.email === user.userEmail, senderContent:message.email !== user.userEmail}">\n      <div *ngIf="message.email !== user.userEmail" [innerHTML]="message.chat | emojis"></div>\n      <div *ngIf="message.email == user.userEmail" [innerHTML]="message.chat | emojis"></div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<div class="loader"></div>\n\n<ion-footer *ngIf="pairUser.dName">\n  <ion-toolbar>\n    <ion-title>\n      <ion-icon class="emoticon" ios="ios-happy" md="md-happy" (click)="openPopover()"></ion-icon>\n\n      <ion-textarea [(ngModel)]="textMsg" placeholder="type your message here.." (keypress)="keyPress($event)" clearInput=true\n        autofocus autocomplete="on" clearOnEdit=true autocorrect="on"></ion-textarea>\n      <ion-icon name="send" class="sendBtn" (click)="sendMessage()"></ion-icon>\n      <input type="file" ion-icon="md-attach" id="file" name="file" (change)="sendFile($event)\n        " style="display: none; ">\n      <label for="file" class="fileLabel">\n        <ion-icon name="attach" class="attachIcon"></ion-icon>\n      </label>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\singleChat\single-chat.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* LoadingController */ ], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* PopoverController */ ],
                        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */ ], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_9__chatService__["a" /* ChatProvider */ ]
                    ])
                ], SingleChatComponent);
                return SingleChatComponent;
            }());

            //# sourceMappingURL=single-chat.js.map

            /***/
        }),

    /***/
    342:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return EmojiComponent;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1__singleChat_emojiList__ = __webpack_require__(343);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__chatService__ = __webpack_require__(146);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            /**
             * Generated class for the SingleChatComponent component.
             *
             * See https://angular.io/api/core/Component for more info on Angular
             * Components.
             */
            // @IonicPage()
            var EmojiComponent = /** @class */ (function () {
                function EmojiComponent(popoverCtrl, viewCtrl, navCtrl, navParams, chatPro) {
                    this.popoverCtrl = popoverCtrl;
                    this.viewCtrl = viewCtrl;
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                    this.chatPro = chatPro;
                    this.selected = [];
                    this.emojiList = __WEBPACK_IMPORTED_MODULE_1__singleChat_emojiList__["a" /* EmojiList */ ].emojiList;
                }
                EmojiComponent.prototype.selectedEmo = function (emo) {
                    this.chatPro.changeEmoji(emo);
                };
                EmojiComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: "emoji-view",
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\emoji\emoji.html"*/ '<!-- Generated template for the SingleChatComponent component -->\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title padding-left>Emojis</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <span *ngFor="let item of emojiList" [innerHTML]="\':\'+item+\':\' | emojis " style="width:40px;" (click)="selectedEmo(item)">\n  </span>\n</ion-content>' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\emoji\emoji.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* PopoverController */ ],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */ ],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */ ],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */ ],
                        __WEBPACK_IMPORTED_MODULE_3__chatService__["a" /* ChatProvider */ ]
                    ])
                ], EmojiComponent);
                return EmojiComponent;
            }());

            //# sourceMappingURL=emoji.js.map

            /***/
        }),

    /***/
    343:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return EmojiList;
            });
            var EmojiList = /** @class */ (function () {
                function EmojiList() {}
                EmojiList.emojiList = [
                    "bowtie",
                    "smile",
                    "laughing",
                    "blush",
                    "smiley",
                    "relaxed",
                    "smirk",
                    "heart_eyes",
                    "kissing_heart",
                    "kissing_closed_eyes",
                    "flushed",
                    "relieved",
                    "satisfied",
                    "grin",
                    "wink",
                    "stuck_out_tongue_winking_eye",
                    "stuck_out_tongue_closed_eyes",
                    "grinning",
                    "kissing",
                    "kissing_smiling_eyes",
                    "stuck_out_tongue",
                    "sleeping",
                    "worried",
                    "frowning",
                    "anguished",
                    "open_mouth",
                    "grimacing",
                    "confused",
                    "hushed",
                    "expressionless",
                    "unamused",
                    "sweat_smile",
                    "sweat",
                    "disappointed_relieved",
                    "weary",
                    "pensive",
                    "disappointed",
                    "confounded",
                    "fearful",
                    "cold_sweat",
                    "persevere",
                    "cry",
                    "sob",
                    "joy",
                    "astonished",
                    "scream",
                    "neckbeard",
                    "tired_face",
                    "angry",
                    "rage",
                    "triumph",
                    "sleepy",
                    "yum",
                    "mask",
                    "sunglasses",
                    "dizzy_face",
                    "imp",
                    "smiling_imp",
                    "neutral_face",
                    "no_mouth",
                    "innocent",
                    "alien",
                    "yellow_heart",
                    "blue_heart",
                    "purple_heart",
                    "heart",
                    "green_heart",
                    "broken_heart",
                    "heartbeat",
                    "heartpulse",
                    "two_hearts",
                    "revolving_hearts",
                    "cupid",
                    "sparkling_heart",
                    "sparkles",
                    "star",
                    "star2",
                    "dizzy",
                    "boom",
                    "collision",
                    "anger",
                    "exclamation",
                    "question",
                    "grey_exclamation",
                    "grey_question",
                    "zzz",
                    "dash",
                    "sweat_drops",
                    "notes",
                    "musical_note",
                    "fire",
                    "hankey",
                    "poop",
                    "shit",
                    "thumbsup",
                    "-1",
                    "thumbsdown",
                    "ok_hand",
                    "punch",
                    "facepunch",
                    "fist",
                    "v",
                    "wave",
                    "hand",
                    "raised_hand",
                    "open_hands",
                    "point_up",
                    "point_down",
                    "point_left",
                    "point_right",
                    "raised_hands",
                    "pray",
                    "point_up_2",
                    "clap",
                    "muscle",
                    "metal",
                    "fu",
                    "walking",
                    "runner",
                    "running",
                    "couple",
                    "family",
                    "two_men_holding_hands",
                    "two_women_holding_hands",
                    "dancer",
                    "dancers",
                    "ok_woman",
                    "no_good",
                    "information_desk_person",
                    "raising_hand",
                    "bride_with_veil",
                    "person_with_pouting_face",
                    "person_frowning",
                    "bow",
                    "couplekiss",
                    "couple_with_heart",
                    "massage",
                    "haircut",
                    "nail_care",
                    "boy",
                    "girl",
                    "woman",
                    "man",
                    "baby",
                    "older_woman",
                    "older_man",
                    "person_with_blond_hair",
                    "man_with_gua_pi_mao",
                    "man_with_turban",
                    "construction_worker",
                    "cop",
                    "angel",
                    "princess",
                    "smiley_cat",
                    "smile_cat",
                    "heart_eyes_cat",
                    "kissing_cat",
                    "smirk_cat",
                    "scream_cat",
                    "crying_cat_face",
                    "joy_cat",
                    "pouting_cat",
                    "japanese_ogre",
                    "japanese_goblin",
                    "see_no_evil",
                    "hear_no_evil",
                    "speak_no_evil",
                    "guardsman",
                    "skull",
                    "feet",
                    "lips",
                    "kiss",
                    "droplet",
                    "ear",
                    "eyes",
                    "nose",
                    "tongue",
                    "love_letter",
                    "bust_in_silhouette",
                    "busts_in_silhouette",
                    "speech_balloon",
                    "thought_balloon",
                    "feelsgood",
                    "finnadie",
                    "goberserk",
                    "godmode",
                    "hurtrealbad",
                    "rage1",
                    "rage2",
                    "rage3",
                    "rage4",
                    "suspect",
                    "trollface",
                    "sunny",
                    "umbrella",
                    "cloud",
                    "snowflake",
                    "snowman",
                    "zap",
                    "cyclone",
                    "foggy",
                    "ocean",
                    "cat",
                    "dog",
                    "mouse",
                    "hamster",
                    "rabbit",
                    "wolf",
                    "frog",
                    "tiger",
                    "koala",
                    "bear",
                    "pig",
                    "pig_nose",
                    "cow",
                    "boar",
                    "monkey_face",
                    "monkey",
                    "horse",
                    "racehorse",
                    "camel",
                    "sheep",
                    "elephant",
                    "panda_face",
                    "snake",
                    "bird",
                    "baby_chick",
                    "hatched_chick",
                    "hatching_chick",
                    "chicken",
                    "penguin",
                    "turtle",
                    "bug",
                    "honeybee",
                    "ant",
                    "beetle",
                    "snail",
                    "octopus",
                    "tropical_fish",
                    "fish",
                    "whale",
                    "whale2",
                    "dolphin",
                    "cow2",
                    "ram",
                    "rat",
                    "water_buffalo",
                    "tiger2",
                    "rabbit2",
                    "dragon",
                    "goat",
                    "rooster",
                    "dog2",
                    "pig2",
                    "mouse2",
                    "ox",
                    "dragon_face",
                    "blowfish",
                    "crocodile",
                    "dromedary_camel",
                    "leopard",
                    "cat2",
                    "poodle",
                    "paw_prints",
                    "bouquet",
                    "cherry_blossom",
                    "tulip",
                    "four_leaf_clover",
                    "rose",
                    "sunflower",
                    "hibiscus",
                    "maple_leaf",
                    "leaves",
                    "fallen_leaf",
                    "herb",
                    "mushroom",
                    "cactus",
                    "palm_tree",
                    "evergreen_tree",
                    "deciduous_tree",
                    "chestnut",
                    "seedling",
                    "blossom",
                    "ear_of_rice",
                    "shell",
                    "globe_with_meridians",
                    "sun_with_face",
                    "full_moon_with_face",
                    "new_moon_with_face",
                    "new_moon",
                    "waxing_crescent_moon",
                    "first_quarter_moon",
                    "waxing_gibbous_moon",
                    "full_moon",
                    "waning_gibbous_moon",
                    "last_quarter_moon",
                    "waning_crescent_moon",
                    "last_quarter_moon_with_face",
                    "first_quarter_moon_with_face",
                    "moon",
                    "earth_africa",
                    "earth_americas",
                    "earth_asia",
                    "volcano",
                    "milky_way",
                    "partly_sunny",
                    "octocat",
                    "squirrel",
                    "bamboo",
                    "gift_heart",
                    "dolls",
                    "school_satchel",
                    "mortar_board",
                    "flags",
                    "fireworks",
                    "sparkler",
                    "wind_chime",
                    "rice_scene",
                    "jack_o_lantern",
                    "ghost",
                    "santa",
                    "christmas_tree",
                    "gift",
                    "bell",
                    "no_bell",
                    "tanabata_tree",
                    "tada",
                    "confetti_ball",
                    "balloon",
                    "crystal_ball",
                    "cd",
                    "dvd",
                    "floppy_disk",
                    "camera",
                    "video_camera",
                    "movie_camera",
                    "computer",
                    "tv",
                    "iphone",
                    "phone",
                    "telephone",
                    "telephone_receiver",
                    "pager",
                    "fax",
                    "minidisc",
                    "vhs",
                    "sound",
                    "speaker",
                    "mute",
                    "loudspeaker",
                    "mega",
                    "hourglass",
                    "hourglass_flowing_sand",
                    "alarm_clock",
                    "watch",
                    "radio",
                    "satellite",
                    "loop",
                    "mag",
                    "mag_right",
                    "unlock",
                    "lock",
                    "lock_with_ink_pen",
                    "closed_lock_with_key",
                    "key",
                    "bulb",
                    "flashlight",
                    "high_brightness",
                    "low_brightness",
                    "electric_plug",
                    "battery",
                    "calling",
                    "email",
                    "mailbox",
                    "postbox",
                    "bath",
                    "bathtub",
                    "shower",
                    "toilet",
                    "wrench",
                    "nut_and_bolt",
                    "hammer",
                    "seat",
                    "moneybag",
                    "yen",
                    "dollar",
                    "pound",
                    "euro",
                    "credit_card",
                    "money_with_wings",
                    "e-mail",
                    "inbox_tray",
                    "outbox_tray",
                    "envelope",
                    "incoming_envelope",
                    "postal_horn",
                    "mailbox_closed",
                    "mailbox_with_mail",
                    "mailbox_with_no_mail",
                    "door",
                    "smoking",
                    "bomb",
                    "gun",
                    "hocho",
                    "pill",
                    "syringe",
                    "page_facing_up",
                    "page_with_curl",
                    "bookmark_tabs",
                    "bar_chart",
                    "chart_with_upwards_trend",
                    "chart_with_downwards_trend",
                    "scroll",
                    "clipboard",
                    "calendar",
                    "date",
                    "card_index",
                    "file_folder",
                    "open_file_folder",
                    "scissors",
                    "pushpin",
                    "paperclip",
                    "black_nib",
                    "pencil2",
                    "straight_ruler",
                    "triangular_ruler",
                    "closed_book",
                    "green_book",
                    "blue_book",
                    "orange_book",
                    "notebook",
                    "notebook_with_decorative_cover",
                    "ledger",
                    "books",
                    "bookmark",
                    "name_badge",
                    "microscope",
                    "telescope",
                    "newspaper",
                    "football",
                    "basketball",
                    "soccer",
                    "baseball",
                    "tennis",
                    "8ball",
                    "rugby_football",
                    "bowling",
                    "golf",
                    "mountain_bicyclist",
                    "bicyclist",
                    "horse_racing",
                    "snowboarder",
                    "swimmer",
                    "surfer",
                    "ski",
                    "spades",
                    "hearts",
                    "clubs",
                    "diamonds",
                    "gem",
                    "ring",
                    "trophy",
                    "musical_score",
                    "musical_keyboard",
                    "violin",
                    "space_invader",
                    "video_game",
                    "black_joker",
                    "flower_playing_cards",
                    "game_die",
                    "dart",
                    "mahjong",
                    "clapper",
                    "memo",
                    "pencil",
                    "book",
                    "art",
                    "microphone",
                    "headphones",
                    "trumpet",
                    "saxophone",
                    "guitar",
                    "shoe",
                    "sandal",
                    "high_heel",
                    "lipstick",
                    "boot",
                    "shirt",
                    "tshirt",
                    "necktie",
                    "womans_clothes",
                    "dress",
                    "running_shirt_with_sash",
                    "jeans",
                    "kimono",
                    "bikini",
                    "ribbon",
                    "tophat",
                    "crown",
                    "womans_hat",
                    "mans_shoe",
                    "closed_umbrella",
                    "briefcase",
                    "handbag",
                    "pouch",
                    "purse",
                    "eyeglasses",
                    "fishing_pole_and_fish",
                    "coffee",
                    "tea",
                    "sake",
                    "baby_bottle",
                    "beer",
                    "beers",
                    "cocktail",
                    "tropical_drink",
                    "wine_glass",
                    "fork_and_knife",
                    "pizza",
                    "hamburger",
                    "fries",
                    "poultry_leg",
                    "meat_on_bone",
                    "spaghetti",
                    "curry",
                    "fried_shrimp",
                    "bento",
                    "sushi",
                    "fish_cake",
                    "rice_ball",
                    "rice_cracker",
                    "rice",
                    "ramen",
                    "stew",
                    "oden",
                    "dango",
                    "egg",
                    "bread",
                    "doughnut",
                    "custard",
                    "icecream",
                    "ice_cream",
                    "shaved_ice",
                    "birthday",
                    "cake",
                    "cookie",
                    "chocolate_bar",
                    "candy",
                    "lollipop",
                    "honey_pot",
                    "apple",
                    "green_apple",
                    "tangerine",
                    "lemon",
                    "cherries",
                    "grapes",
                    "watermelon",
                    "strawberry",
                    "peach",
                    "melon",
                    "banana",
                    "pear",
                    "pineapple",
                    "sweet_potato",
                    "eggplant",
                    "tomato",
                    "corn",
                    "house",
                    "house_with_garden",
                    "school",
                    "office",
                    "post_office",
                    "hospital",
                    "bank",
                    "convenience_store",
                    "love_hotel",
                    "hotel",
                    "wedding",
                    "church",
                    "department_store",
                    "european_post_office",
                    "city_sunrise",
                    "city_sunset",
                    "japanese_castle",
                    "european_castle",
                    "tent",
                    "factory",
                    "tokyo_tower",
                    "japan",
                    "mount_fuji",
                    "sunrise_over_mountains",
                    "sunrise",
                    "stars",
                    "statue_of_liberty",
                    "bridge_at_night",
                    "carousel_horse",
                    "rainbow",
                    "ferris_wheel",
                    "fountain",
                    "roller_coaster",
                    "ship",
                    "speedboat",
                    "boat",
                    "sailboat",
                    "rowboat",
                    "anchor",
                    "rocket",
                    "airplane",
                    "helicopter",
                    "steam_locomotive",
                    "tram",
                    "mountain_railway",
                    "bike",
                    "aerial_tramway",
                    "suspension_railway",
                    "mountain_cableway",
                    "tractor",
                    "blue_car",
                    "oncoming_automobile",
                    "car",
                    "red_car",
                    "taxi",
                    "oncoming_taxi",
                    "articulated_lorry",
                    "bus",
                    "oncoming_bus",
                    "rotating_light",
                    "police_car",
                    "oncoming_police_car",
                    "fire_engine",
                    "ambulance",
                    "minibus",
                    "truck",
                    "train",
                    "station",
                    "train2",
                    "bullettrain_front",
                    "bullettrain_side",
                    "light_rail",
                    "monorail",
                    "railway_car",
                    "trolleybus",
                    "ticket",
                    "fuelpump",
                    "vertical_traffic_light",
                    "traffic_light",
                    "warning",
                    "construction",
                    "beginner",
                    "atm",
                    "slot_machine",
                    "busstop",
                    "barber",
                    "hotsprings",
                    "checkered_flag",
                    "crossed_flags",
                    "izakaya_lantern",
                    "moyai",
                    "circus_tent",
                    "performing_arts",
                    "round_pushpin",
                    "triangular_flag_on_post",
                    "jp",
                    "kr",
                    "cn",
                    "us",
                    "fr",
                    "es",
                    "it",
                    "ru",
                    "gb",
                    "uk",
                    "de",
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "keycap_ten",
                    "1234",
                    "zero",
                    "hash",
                    "symbols",
                    "arrow_backward",
                    "arrow_down",
                    "arrow_forward",
                    "arrow_left",
                    "capital_abcd",
                    "abcd",
                    "abc",
                    "arrow_lower_left",
                    "arrow_lower_right",
                    "arrow_right",
                    "arrow_up",
                    "arrow_upper_left",
                    "arrow_upper_right",
                    "arrow_double_down",
                    "arrow_double_up",
                    "arrow_down_small",
                    "arrow_heading_down",
                    "arrow_heading_up",
                    "leftwards_arrow_with_hook",
                    "arrow_right_hook",
                    "left_right_arrow",
                    "arrow_up_down",
                    "arrow_up_small",
                    "arrows_clockwise",
                    "arrows_counterclockwise",
                    "rewind",
                    "fast_forward",
                    "information_source",
                    "ok",
                    "twisted_rightwards_arrows",
                    "repeat",
                    "repeat_one",
                    "new",
                    "top",
                    "up",
                    "cool",
                    "free",
                    "ng",
                    "cinema",
                    "koko",
                    "signal_strength",
                    "u5272",
                    "u5408",
                    "u55b6",
                    "u6307",
                    "u6708",
                    "u6709",
                    "u6e80",
                    "u7121",
                    "u7533",
                    "u7a7a",
                    "u7981",
                    "sa",
                    "restroom",
                    "mens",
                    "womens",
                    "baby_symbol",
                    "no_smoking",
                    "parking",
                    "wheelchair",
                    "metro",
                    "baggage_claim",
                    "accept",
                    "wc",
                    "potable_water",
                    "put_litter_in_its_place",
                    "secret",
                    "congratulations",
                    "m",
                    "passport_control",
                    "left_luggage",
                    "customs",
                    "ideograph_advantage",
                    "cl",
                    "sos",
                    "id",
                    "no_entry_sign",
                    "underage",
                    "no_mobile_phones",
                    "do_not_litter",
                    "non-potable_water",
                    "no_bicycles",
                    "no_pedestrians",
                    "children_crossing",
                    "no_entry",
                    "eight_spoked_asterisk",
                    "eight_pointed_black_star",
                    "heart_decoration",
                    "vs",
                    "vibration_mode",
                    "mobile_phone_off",
                    "chart",
                    "currency_exchange",
                    "aries",
                    "taurus",
                    "gemini",
                    "cancer",
                    "leo",
                    "virgo",
                    "libra",
                    "scorpius",
                    "sagittarius",
                    "capricorn",
                    "aquarius",
                    "pisces",
                    "ophiuchus",
                    "six_pointed_star",
                    "negative_squared_cross_mark",
                    "a",
                    "b",
                    "ab",
                    "o2",
                    "diamond_shape_with_a_dot_inside",
                    "recycle",
                    "end",
                    "on",
                    "soon",
                    "clock1",
                    "clock130",
                    "clock10",
                    "clock1030",
                    "clock11",
                    "clock1130",
                    "clock12",
                    "clock1230",
                    "clock2",
                    "clock230",
                    "clock3",
                    "clock330",
                    "clock4",
                    "clock430",
                    "clock5",
                    "clock530",
                    "clock6",
                    "clock630",
                    "clock7",
                    "clock730",
                    "clock8",
                    "clock830",
                    "clock9",
                    "clock930",
                    "heavy_dollar_sign",
                    "copyright",
                    "registered",
                    "tm",
                    "x",
                    "heavy_exclamation_mark",
                    "bangbang",
                    "interrobang",
                    "o",
                    "heavy_multiplication_x",
                    "heavy_plus_sign",
                    "heavy_minus_sign",
                    "heavy_division_sign",
                    "white_flower",
                    "100",
                    "heavy_check_mark",
                    "ballot_box_with_check",
                    "radio_button",
                    "link",
                    "curly_loop",
                    "wavy_dash",
                    "part_alternation_mark",
                    "trident",
                    "black_square",
                    "white_square",
                    "white_check_mark",
                    "black_square_button",
                    "white_square_button",
                    "black_circle",
                    "white_circle",
                    "red_circle",
                    "large_blue_circle",
                    "large_blue_diamond",
                    "large_orange_diamond",
                    "small_blue_diamond",
                    "small_orange_diamond",
                    "small_red_triangle",
                    "small_red_triangle_down",
                    "shipit"
                ];
                return EmojiList;
            }());

            //# sourceMappingURL=emojiList.js.map

            /***/
        }),

    /***/
    344:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return PageNotFoundPage;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            /**
             * Generated class for the PageNotFoundPage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            var PageNotFoundPage = /** @class */ (function () {
                function PageNotFoundPage(navCtrl, navParams) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                }
                PageNotFoundPage.prototype.ionViewDidLoad = function () {
                    console.log('ionViewDidLoad PageNotFoundPage');
                };
                PageNotFoundPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: 'page-page-not-found',
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\page-not-found\page-not-found.html"*/ '<!--\n  Generated template for the PageNotFoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PageNotFound</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\page-not-found\page-not-found.html"*/ ,
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */ ], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */ ]])
                ], PageNotFoundPage);
                return PageNotFoundPage;
            }());

            //# sourceMappingURL=page-not-found.js.map

            /***/
        }),

    /***/
    345:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "PageNotFoundPageModule", function () {
                return PageNotFoundPageModule;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__page_not_found__ = __webpack_require__(344);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };



            var PageNotFoundPageModule = /** @class */ (function () {
                function PageNotFoundPageModule() {}
                PageNotFoundPageModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                        declarations: [
                            __WEBPACK_IMPORTED_MODULE_2__page_not_found__["a" /* PageNotFoundPage */ ],
                        ],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */ ].forChild(__WEBPACK_IMPORTED_MODULE_2__page_not_found__["a" /* PageNotFoundPage */ ]),
                        ],
                    })
                ], PageNotFoundPageModule);
                return PageNotFoundPageModule;
            }());

            //# sourceMappingURL=page-not-found.module.js.map

            /***/
        }),

    /***/
    346:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
                return RegisterPageModule;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(134);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };



            var RegisterPageModule = /** @class */ (function () {
                function RegisterPageModule() {}
                RegisterPageModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                        declarations: [
                            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */ ],
                        ],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */ ].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */ ]),
                        ],
                    })
                ], RegisterPageModule);
                return RegisterPageModule;
            }());

            //# sourceMappingURL=register.module.js.map

            /***/
        }),

    /***/
    393:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


            Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */ ])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */ ]);
            //# sourceMappingURL=main.js.map

            /***/
        }),

    /***/
    398:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return AppModule;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(83);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(386);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(389);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__ = __webpack_require__(736);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(737);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat_module__ = __webpack_require__(738);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_10__pages_register_register_module__ = __webpack_require__(346);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_11__pages_app_routing_module_app_routing_module_module__ = __webpack_require__(227);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_12__pages_page_not_found_page_not_found_module__ = __webpack_require__(345);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_13__common_constant__ = __webpack_require__(49);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };














            var AppModule = /** @class */ (function () {
                function AppModule() {}
                AppModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */ ]],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */ ],
                            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */ ],
                            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */ ].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */ ], {}, {
                                links: [{
                                        loadChildren: '../pages/app-routing-module/app-routing-module.module#AppRoutingModulePageModule',
                                        name: 'AppRoutingModulePage',
                                        segment: 'app-routing-module',
                                        priority: 'low',
                                        defaultHistory: []
                                    },
                                    {
                                        loadChildren: '../pages/page-not-found/page-not-found.module#PageNotFoundPageModule',
                                        name: 'PageNotFoundPage',
                                        segment: 'page-not-found',
                                        priority: 'low',
                                        defaultHistory: []
                                    },
                                    {
                                        loadChildren: '../pages/register/register.module#RegisterPageModule',
                                        name: 'RegisterPage',
                                        segment: 'register',
                                        priority: 'low',
                                        defaultHistory: []
                                    }
                                ]
                            }),
                            __WEBPACK_IMPORTED_MODULE_11__pages_app_routing_module_app_routing_module_module__["AppRoutingModulePageModule"],
                            __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat_module__["a" /* ChatPageModule */ ],
                            __WEBPACK_IMPORTED_MODULE_10__pages_register_register_module__["RegisterPageModule"],
                            __WEBPACK_IMPORTED_MODULE_12__pages_page_not_found_page_not_found_module__["PageNotFoundPageModule"],
                            __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__["a" /* FileDropModule */ ]
                        ],
                        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */ ]],
                        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */ ]],
                        providers: [
                            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */ ],
                            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */ ],
                            {
                                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                                useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */ ]
                            },
                            {
                                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"],
                                useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["HashLocationStrategy"]
                            },
                            __WEBPACK_IMPORTED_MODULE_13__common_constant__["a" /* AppSettings */ ]
                        ]
                    })
                ], AppModule);
                return AppModule;
            }());

            //# sourceMappingURL=app.module.js.map

            /***/
        }),

    /***/
    421:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return AppRoutingModulePage;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            /**
             * Generated class for the AppRoutingModulePage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            var AppRoutingModulePage = /** @class */ (function () {
                function AppRoutingModulePage(navCtrl, navParams) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                }
                AppRoutingModulePage.prototype.ionViewDidLoad = function () {
                    console.log('ionViewDidLoad AppRoutingModulePage');
                };
                AppRoutingModulePage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: 'page-app-routing-module',
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\app-routing-module\app-routing-module.html"*/ '<!--\n  Generated template for the AppRoutingModulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AppRoutingModule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\app-routing-module\app-routing-module.html"*/ ,
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */ ], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */ ]])
                ], AppRoutingModulePage);
                return AppRoutingModulePage;
            }());

            //# sourceMappingURL=app-routing-module.js.map

            /***/
        }),

    /***/
    440:
        /***/
        (function (module, exports) {

            /* (ignored) */

            /***/
        }),

    /***/
    49:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return AppSettings;
            });
            var AppSettings = /** @class */ (function () {
                function AppSettings() {}
                AppSettings.url = "http://3.209.196.136:3000/";
                //"https://i-chat-u.herokuapp.com/"; // "http://192.168.0.102:9090/"; //192.168.0.102
                AppSettings.userName = localStorage.getItem("name") ?
                    localStorage.getItem("name") :
                    "";
                AppSettings.userEmail = localStorage.getItem("email") ?
                    localStorage.getItem("email") :
                    "";
                return AppSettings;
            }());

            //# sourceMappingURL=constant.js.map

            /***/
        }),

    /***/
    737:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return MyApp;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(134);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__common_constant__ = __webpack_require__(49);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };







            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
            var MyApp = /** @class */ (function () {
                function MyApp(platform, statusBar, splashScreen) {
                    // rootPage: any = AppSettings.userEmail && AppSettings.userName
                    //   ? ChatPage
                    //   : RegisterPage;
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */ ];
                    platform.ready().then(function () {
                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        statusBar.styleDefault();
                        splashScreen.hide();
                        console.log("AppSettings.userEmail : ", __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userEmail);
                        console.log("AppSettings.userName : ", __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].userName);
                    });
                }
                MyApp = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\app\app.html"*/ '<ion-nav [root]="rootPage"></ion-nav>\n' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\app\app.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */ ],
                        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */ ],
                        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */ ]
                    ])
                ], MyApp);
                return MyApp;
            }());

            //# sourceMappingURL=app.component.js.map

            /***/
        }),

    /***/
    738:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return ChatPageModule;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__mainChat_chat__ = __webpack_require__(82);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3__singleChat_single_chat__ = __webpack_require__(241);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(84);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__common_constant__ = __webpack_require__(49);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6_ng2_file_drop__ = __webpack_require__(739);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6_ng2_file_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_drop__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_7_ng2_emoji__ = __webpack_require__(745);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_8__singleChat_emojiList__ = __webpack_require__(343);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_9__chatService__ = __webpack_require__(146);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_10__emoji_emoji__ = __webpack_require__(342);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };











            var config = {
                url: __WEBPACK_IMPORTED_MODULE_5__common_constant__["a" /* AppSettings */ ].url,
                options: {}
            };
            var ChatPageModule = /** @class */ (function () {
                function ChatPageModule() {}
                ChatPageModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                        declarations: [__WEBPACK_IMPORTED_MODULE_3__singleChat_single_chat__["a" /* SingleChatComponent */ ], __WEBPACK_IMPORTED_MODULE_2__mainChat_chat__["a" /* ChatPage */ ], __WEBPACK_IMPORTED_MODULE_10__emoji_emoji__["a" /* EmojiComponent */ ]],
                        exports: [__WEBPACK_IMPORTED_MODULE_2__mainChat_chat__["a" /* ChatPage */ ], __WEBPACK_IMPORTED_MODULE_3__singleChat_single_chat__["a" /* SingleChatComponent */ ], __WEBPACK_IMPORTED_MODULE_10__emoji_emoji__["a" /* EmojiComponent */ ]],
                        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__singleChat_single_chat__["a" /* SingleChatComponent */ ], __WEBPACK_IMPORTED_MODULE_10__emoji_emoji__["a" /* EmojiComponent */ ]],
                        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */ ].forChild(__WEBPACK_IMPORTED_MODULE_2__mainChat_chat__["a" /* ChatPage */ ]), __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["SocketIoModule"].forRoot(config), __WEBPACK_IMPORTED_MODULE_6_ng2_file_drop__["Ng2FileDropModule"], __WEBPACK_IMPORTED_MODULE_7_ng2_emoji__["a" /* Ng2EmojiModule */ ].forRoot()],
                        providers: [__WEBPACK_IMPORTED_MODULE_8__singleChat_emojiList__["a" /* EmojiList */ ], __WEBPACK_IMPORTED_MODULE_9__chatService__["a" /* ChatProvider */ ]]
                    })
                ], ChatPageModule);
                return ChatPageModule;
            }());

            //# sourceMappingURL=chat.module.js.map

            /***/
        }),

    /***/
    82:
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return ChatPage;
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__singleChat_single_chat__ = __webpack_require__(241);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(84);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(83);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_6__common_constant__ = __webpack_require__(49);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };








            /**
             * Generated class for the ChatPage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            // @IonicPage()
            var ChatPage = /** @class */ (function () {
                /* toggle(userID) {
       this.showicon = true;
       console.log(this.showNotification + " Msg Notification : ", userID);
       this.showNotification = !this.showNotification;
       //$("#" + userID).show();
       document.getElementById(userID).style.display = 'block'
       console.log(this.showNotification + " Msg Notification : ", userID);
       console.log(this.showicon, "  showicon : ");
       if (this.showNotification) {
         document.getElementById(userID).style.display = 'block'
       } else {
         document.getElementById(userID).style.display = 'none'
       }
   
     }*/
                function ChatPage(navCtrl, navParams, socket, http) {
                    var _this = this;
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                    this.socket = socket;
                    this.http = http;
                    this.singleChatPage = __WEBPACK_IMPORTED_MODULE_2__singleChat_single_chat__["a" /* SingleChatComponent */ ];
                    this.shouldShowCancel = true;
                    this.userList = [];
                    this.backupUserList = [];
                    this.myInput = "";
                    this.userLogin = "Welcome " + localStorage.getItem("name");
                    this.username = localStorage.getItem("name");
                    // notification
                    this.showNotification = false;
                    this.showicon = false;
                    this.username = localStorage.getItem("name");
                    this.userList = [];
                    this.socket.connect();
                    console.log("this.socketId : ", this.socket.ioSocket.id);
                    this.registerUser(__WEBPACK_IMPORTED_MODULE_6__common_constant__["a" /* AppSettings */ ].userName, __WEBPACK_IMPORTED_MODULE_6__common_constant__["a" /* AppSettings */ ].userEmail, this.socket, this.http);
                    this.getUserList();
                    this.getUsers().subscribe(function (users) {
                        console.log("users ioSocket.id ... ", _this.socket.ioSocket.id);
                        _this.filterUserList(users);
                    });
                }
                ChatPage.prototype.selectUser = function (user) {
                    this.selectedUser = user;
                    $("#" + user.userID).hide();
                };
                ChatPage.prototype.notifyUser = function (userID) {
                    console.log("notifyUser : ", userID + " :: " + this.showNotification);
                    this.showicon = true;
                    this.showNotification = true;
                    if (this.showNotification) {
                        if (document.getElementById(userID) != null)
                            document.getElementById(userID).style.display = 'block';
                    } else {
                        if (document.getElementById(userID) != null)
                            document.getElementById(userID).style.display = 'none';
                    }
                };
                ChatPage.prototype.reorderItems = function (indexes) {
                    this.userList = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* reorderArray */ ])(this.userList, indexes);
                };
                ChatPage.prototype.filterUserList = function (users) {
                    console.log("before filter userList : ", users);
                    this.backupUserList = this.userList = users.filter(function (item) {
                        return item.email != __WEBPACK_IMPORTED_MODULE_6__common_constant__["a" /* AppSettings */ ].userEmail;
                    });
                    console.log(" afetr filter userList : ", this.userList);
                };
                ChatPage.prototype.ionViewDidLoad = function () {
                    console.log("ionViewDidLoad ChatPage");
                };
                ChatPage.prototype.registerUser = function (userName, userEmail, socket, http) {
                    setTimeout(function () {
                        console.log("this.socket.ioSocket.id with timeout @registration : ", socket.ioSocket.id);
                        http
                            .post(__WEBPACK_IMPORTED_MODULE_6__common_constant__["a" /* AppSettings */ ].url + "register", {
                                dName: userName,
                                email: userEmail,
                                userID: socket.ioSocket.id
                            })
                            .subscribe(function (data) {
                                    console.log("registerUser : ", data);
                                }, function (error) {
                                    console.log("registerUser error : ", error);
                                } // error path
                            );
                    }, 2000);
                };
                ChatPage.prototype.getUserList = function () {
                    var _this = this;
                    this.http.get(__WEBPACK_IMPORTED_MODULE_6__common_constant__["a" /* AppSettings */ ].url + "getUserList").subscribe(function (data) {
                            console.log("userList : ", data);
                            _this.filterUserList(data);
                        }, function (error) {
                            console.log("getUserList error : ", error);
                        } // error path
                    );
                };
                ChatPage.prototype.getUsers = function () {
                    var _this = this;
                    var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                        _this.socket.on("userList", function (data) {
                            console.log("observable data : ", data, observer);
                            observer.next(data);
                        });
                    });
                    return observable;
                };
                ChatPage.prototype.onInput = function (ev) {
                    var val = ev.target.value;
                    if (val && val.trim() && val.trim() != "") {
                        this.userList = this.userList.filter(function (i) {
                            return i.dName.toLowerCase().indexOf(val.toLowerCase()) > -1;
                        });
                    }
                };
                ChatPage.prototype.onCancel = function () {
                    this.userList = this.backupUserList;
                };
                ChatPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                        selector: "page-chat",
                        template: /*ion-inline-start:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\mainChat\chat.html"*/ '<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div class="title-ichat">\n    <ion-toolbar style="background-color: rgba(44, 136, 204, 0.34);">\n      <span class="title-container"><ion-title item-left>iChat (β) </ion-title> </span>\n      <span class="username-container">{{userLogin}}</span>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-split-pane ion-fixed>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar>\n          <ion-searchbar [(ngModel)]="myInput" autocomplete="on" [showCancelButton]="true" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n          </ion-searchbar>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n          <ion-item *ngFor="let item of userList" (click)="selectUser(item)">{{ item.dName }}\n            <span id="{{item.userID}}" style="display:  none;" class="notification">  \n              <ion-icon name="notifications"></ion-icon>\n            </span>\n          </ion-item>\n\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <!-- the main content -->\n    <!-- <ion-nav [root]="singleChatPage" main #content></ion-nav> -->\n    <div main #content style="width: 100%">\n      <single-chat [selectedUser]="selectedUser"></single-chat>\n    </div>\n\n\n  </ion-split-pane>\n\n</ion-content>' /*ion-inline-end:"C:\Users\999951.TCSGEGDC\Documents\TCS Internal\IonicChatApp\I-Chatv3\src\pages\chat\mainChat\chat.html"*/
                    }),
                    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */ ] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */ ]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */ ] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */ ]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */ ] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */ ]) === "function" && _d || Object])
                ], ChatPage);
                return ChatPage;
                var _a, _b, _c, _d;
            }());

            //# sourceMappingURL=chat.js.map

            /***/
        })

}, [393]);
//# sourceMappingURL=main.js.map