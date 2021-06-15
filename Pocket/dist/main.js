/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import warmUp from \"./warmup\";\nconst warmUp = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    let clockContainer = document.querySelector('#clock');\n    let clockChildren = Array.from(clockContainer.children);\n    if (clockChildren.length === 0) {\n      warmUp.htmlGenerator(timeString, document.querySelector('#clock'));\n    } else {\n      document.querySelector(\"#clock p\").textContent = timeString;\n    }\n    // Use console.log to print it.\n    // console.log(timeString);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  let arr = [];\n  Object.keys(dogs).forEach(key => {\n    let a = document.createElement(\"a\");\n    a.innerHTML = key;\n    a.setAttribute('href', dogs[key]);\n    let li = document.createElement(\"li\");\n    li.classList.add('dog-link');\n    li.classList.add('hidden');\n    li.appendChild(a);\n    arr.push(li);\n  })\n  return arr;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n  let ul = document.querySelector('.drop-down-dog-list');\n  let nav = document.querySelector('.drop-down-dog-nav');\n  dogLinks.forEach(link => ul.appendChild(link))\n  nav.addEventListener('mouseenter', handleEnter);\n  nav.addEventListener('mouseleave', handleLeave);\n}\n\nfunction handleEnter() {\n  let dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach(link => link.classList.remove('hidden'))\n}\n\nfunction handleLeave() {\n  let dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach(link => link.classList.add('hidden'))\n}\n\nattachDogLinks();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("class ToDoItem {\n  constructor(todoText, done=false) {\n    this.done = done;\n    this.todoText = todoText;\n  }\n\n  generateElement() {\n    let outerdiv = document.createElement('li');\n    let label = document.createElement('span');\n    let checkBox = document.createElement('input');\n    checkBox.setAttribute('type', 'checkbox');\n    this.done ? checkBox.checked = true : null;\n    checkBox.addEventListener('click', this.checkBoxClicked);\n    let p = document.createElement('span');\n    p.textContent = this.todoText;\n    label.appendChild(checkBox);\n    outerdiv.appendChild(label);\n    outerdiv.appendChild(p);\n    return outerdiv;\n  }\n  checkBoxClicked(e) {\n    this.done = e.target.checked;\n    console.log(this.done);\n  }\n}\n\n\nclass ToDoList {\n  constructor() {\n    this.todos = [];\n    this.ul = document.querySelector('.todos'); \n    this.todoForm = document.querySelector('.add-todo-form');\n    this.todoForm.addEventListener('submit', this.addTodo.bind(this));\n    this.populateList();\n  }\n\n  addTodo(e) {\n    e.preventDefault();\n    let input = document.querySelector(\"[name='add-todo']\")\n    let inputText = input.value;\n    let todoitem = new ToDoItem(inputText);\n    this.todos.push(todoitem);\n    // console.log(JSON.stringify(this.todos));\n    let todosJSON = this.todos.map(el => {let o = new Object(); o.todoText = el.todoText; o.done = el.done; return o;} )\n    // console.log(todosJSON);\n    localStorage.setItem(\"todosArr\", JSON.stringify(todosJSON))\n\n    input.value = '';\n    this.populateList();\n  }\n\n  populateList() {\n    removeAllChildNodes(this.ul);\n    let todosJSON = JSON.parse(localStorage.getItem(\"todosArr\"));\n    console.log(localStorage);\n    // console.log(todosJSON);\n    this.todos = [];\n    Object.keys(todosJSON).forEach(key => {\n      this.todos.push(new ToDoItem(todosJSON[key].todoText, todosJSON[key].done));\n    })\n    this.todos.forEach(todo => {\n      this.ul.appendChild(todo.generateElement());\n    })\n\n  }\n  \n}\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nconst toDoList = new ToDoList();\nconsole.log(toDoList)\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let p = document.createElement(\"p\");\n  p.textContent = string;\n  htmlElement.appendChild(p);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;