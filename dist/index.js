"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/locales/ar.json
var require_ar = __commonJS({
  "src/locales/ar.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        nextPage: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
        pageOf: "\u0645\u0646"
      },
      leftPanel: {
        previews: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0635\u0641\u062D\u0627\u062A",
        search: "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
        bookmarks: "\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0637\u0637",
        annotations: "\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A"
      },
      toolbar: {
        rotateCounterclockwise: "\u062A\u062F\u0648\u064A\u0631 \u0639\u0643\u0633 \u0627\u062A\u062C\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629",
        rotateClockwise: "\u062A\u062F\u0648\u064A\u0631 \u0628\u0627\u062A\u062C\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629",
        zoomLevel: "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0643\u0628\u064A\u0631",
        print: "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
        fullscreen: "\u0639\u0631\u0636 \u0628\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629",
        exitFullscreen: "\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629",
        download: "\u062A\u0646\u0632\u064A\u0644 PDF"
      },
      search: {
        title: "\u0628\u062D\u062B",
        placeholder: "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0646\u062F...",
        matches: "\u0646\u062A\u0627\u0626\u062C",
        noResults: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C",
        searching: "\u062C\u0627\u0631\u064A \u0627\u0644\u0628\u062D\u062B...",
        previousResult: "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        nextResult: "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
        page: "\u0635\u0641\u062D\u0629",
        incompleteDocumentError: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0628\u062D\u062B. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0628\u0639\u062F \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0628\u0627\u0644\u0643\u0627\u0645\u0644.",
        waitLoading: "\u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631 \u062D\u062A\u0649 \u064A\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0642\u0628\u0644 \u0627\u0644\u0628\u062D\u062B."
      },
      bookmarks: {
        outline: "\u0627\u0644\u0645\u062E\u0637\u0637",
        bookmarks: "\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",
        noOutline: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062E\u0637\u0637 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
        addBookmark: "\u0625\u0636\u0627\u0641\u0629 \u0625\u0634\u0627\u0631\u0629 \u0645\u0631\u062C\u0639\u064A\u0629",
        save: "\u062D\u0641\u0638",
        cancel: "\u0625\u0644\u063A\u0627\u0621",
        noBookmarks: "\u0644\u0645 \u062A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0625\u0634\u0627\u0631\u0627\u062A \u0645\u0631\u062C\u0639\u064A\u0629 \u0628\u0639\u062F",
        bookmarkTitle: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",
        deleteBookmark: "\u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629:"
      },
      annotations: {
        title: "\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A",
        addNote: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062D\u0638\u0629",
        addHighlight: "\u0625\u0636\u0627\u0641\u0629 \u062A\u0638\u0644\u064A\u0644",
        addDrawing: "\u0625\u0636\u0627\u0641\u0629 \u0631\u0633\u0645",
        note: "\u0645\u0644\u0627\u062D\u0638\u0629",
        highlight: "\u062A\u0638\u0644\u064A\u0644",
        drawing: "\u0631\u0633\u0645",
        noAnnotations: "\u0644\u0645 \u062A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0639\u062F. \u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0623\u0639\u0644\u0627\u0647 \u0644\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0646\u062F.",
        addNoteHint: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062D\u0638\u0629...",
        page: "\u0635\u0641\u062D\u0629",
        cancel: "\u0625\u0644\u063A\u0627\u0621",
        colorSetTo: "\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0644\u0648\u0646 \u0625\u0644\u0649",
        noContent: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649",
        delete: "\u062D\u0630\u0641 \u0627\u0644\u062A\u0639\u0644\u064A\u0642"
      },
      info: {
        title: "\u0645\u0639\u0644\u0648\u0645\u0627\u062A",
        close: "\u0625\u063A\u0644\u0627\u0642 \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A"
      },
      locale: {
        selectLanguage: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0644\u063A\u0629",
        changeTo: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629 \u0625\u0644\u0649"
      },
      credits: {
        createdWith: "\u062A\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621 \u0628\u0648\u0627\u0633\u0637\u0629",
        by: "\u0628\u0648\u0627\u0633\u0637\u0629"
      }
    };
  }
});

// src/locales/bg.json
var require_bg = __commonJS({
  "src/locales/bg.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u041F\u0440\u0435\u0434\u0438\u0448\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        nextPage: "\u0421\u043B\u0435\u0434\u0432\u0430\u0449\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        pageOf: "\u043E\u0442"
      },
      leftPanel: {
        previews: "\u041F\u0440\u0435\u0433\u043B\u0435\u0434 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438",
        search: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435 \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        bookmarks: "\u041E\u0442\u043C\u0435\u0442\u043A\u0438 \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        annotations: "\u0410\u043D\u043E\u0442\u0430\u0446\u0438\u0438"
      },
      toolbar: {
        rotateCounterclockwise: "\u0417\u0430\u0432\u044A\u0440\u0442\u0430\u043D\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0447\u0430\u0441\u043E\u0432\u043D\u0438\u043A\u043E\u0432\u0430\u0442\u0430 \u0441\u0442\u0440\u0435\u043B\u043A\u0430",
        rotateClockwise: "\u0417\u0430\u0432\u044A\u0440\u0442\u0430\u043D\u0435 \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043D\u0438\u043A\u043E\u0432\u0430\u0442\u0430 \u0441\u0442\u0440\u0435\u043B\u043A\u0430",
        zoomLevel: "\u041D\u0438\u0432\u043E \u043D\u0430 \u043C\u0430\u0449\u0430\u0431\u0438\u0440\u0430\u043D\u0435",
        print: "\u041F\u0435\u0447\u0430\u0442 \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        fullscreen: "\u0426\u044F\u043B \u0435\u043A\u0440\u0430\u043D",
        exitFullscreen: "\u0418\u0437\u0445\u043E\u0434 \u043E\u0442 \u0446\u044F\u043B \u0435\u043A\u0440\u0430\u043D",
        download: "\u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 PDF"
      },
      search: {
        title: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435",
        placeholder: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435 \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430...",
        matches: "\u0441\u044A\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F",
        noResults: "\u041D\u044F\u043C\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438",
        searching: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435...",
        previousResult: "\u041F\u0440\u0435\u0434\u0438\u0448\u0435\u043D \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442",
        nextResult: "\u0421\u043B\u0435\u0434\u0432\u0430\u0449 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442",
        page: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        incompleteDocumentError: "\u0412\u044A\u0437\u043D\u0438\u043A\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E. \u041C\u043E\u043B\u044F, \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E \u0441\u043B\u0435\u0434 \u043F\u044A\u043B\u043D\u043E\u0442\u043E \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430.",
        waitLoading: "\u041C\u043E\u043B\u044F, \u0438\u0437\u0447\u0430\u043A\u0430\u0439\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044A\u0442 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u0438 \u043D\u0430\u043F\u044A\u043B\u043D\u043E \u043F\u0440\u0435\u0434\u0438 \u0442\u044A\u0440\u0441\u0435\u043D\u0435."
      },
      bookmarks: {
        outline: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        bookmarks: "\u041E\u0442\u043C\u0435\u0442\u043A\u0438",
        noOutline: "\u041D\u044F\u043C\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0432 \u0442\u043E\u0437\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
        addBookmark: "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043E\u0442\u043C\u0435\u0442\u043A\u0430",
        save: "\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435",
        cancel: "\u041E\u0442\u043A\u0430\u0437",
        noBookmarks: "\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u0438 \u043E\u0442\u043C\u0435\u0442\u043A\u0438",
        bookmarkTitle: "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435 \u043D\u0430 \u043E\u0442\u043C\u0435\u0442\u043A\u0430\u0442\u0430",
        deleteBookmark: "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0442\u043C\u0435\u0442\u043A\u0430:"
      },
      annotations: {
        title: "\u0410\u043D\u043E\u0442\u0430\u0446\u0438\u0438",
        addNote: "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0430",
        addHighlight: "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435",
        addDrawing: "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0440\u0438\u0441\u0443\u043D\u043A\u0430",
        note: "\u0411\u0435\u043B\u0435\u0436\u043A\u0430",
        highlight: "\u041C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435",
        drawing: "\u0420\u0438\u0441\u0443\u043D\u043A\u0430",
        noAnnotations: "\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u0438 \u0430\u043D\u043E\u0442\u0430\u0446\u0438\u0438. \u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438\u0442\u0435 \u043F\u043E-\u0433\u043E\u0440\u0435, \u0437\u0430 \u0434\u0430 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u0435 \u0430\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u043A\u044A\u043C \u0432\u0430\u0448\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442.",
        addNoteHint: "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0430...",
        page: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        cancel: "\u041E\u0442\u043A\u0430\u0437",
        colorSetTo: "\u0417\u0430\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0446\u0432\u044F\u0442",
        noContent: "\u041D\u044F\u043C\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435",
        delete: "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0430\u043D\u043E\u0442\u0430\u0446\u0438\u044F"
      },
      info: {
        title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        close: "\u0417\u0430\u0442\u0432\u0430\u0440\u044F\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B"
      },
      locale: {
        selectLanguage: "\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u0435\u0437\u0438\u043A",
        changeTo: "\u041F\u0440\u043E\u043C\u044F\u043D\u0430 \u043D\u0430 \u0435\u0437\u0438\u043A\u0430 \u043D\u0430"
      },
      credits: {
        createdWith: "\u0421\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E \u0441",
        by: "\u043E\u0442"
      }
    };
  }
});

// src/locales/bn.json
var require_bn = __commonJS({
  "src/locales/bn.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0986\u0997\u09C7\u09B0 \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE",
        nextPage: "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0 \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE",
        pageOf: "\u098F\u09B0"
      },
      leftPanel: {
        previews: "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE\u09B0 \u09AA\u09CD\u09B0\u09BF\u09AD\u09BF\u0989",
        search: "\u09A8\u09A5\u09BF \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8",
        bookmarks: "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u098F\u09AC\u0982 \u09B0\u09C2\u09AA\u09B0\u09C7\u0996\u09BE",
        annotations: "\u099F\u09C0\u0995\u09BE"
      },
      toolbar: {
        rotateCounterclockwise: "\u0998\u09A1\u09BC\u09BF\u09B0 \u0995\u09BE\u0981\u099F\u09BE\u09B0 \u09AC\u09BF\u09AA\u09B0\u09C0\u09A4 \u09A6\u09BF\u0995\u09C7 \u0998\u09CB\u09B0\u09BE\u09A8",
        rotateClockwise: "\u0998\u09A1\u09BC\u09BF\u09B0 \u0995\u09BE\u0981\u099F\u09BE\u09B0 \u09A6\u09BF\u0995\u09C7 \u0998\u09CB\u09B0\u09BE\u09A8",
        zoomLevel: "\u099C\u09C1\u09AE \u09B8\u09CD\u09A4\u09B0",
        print: "\u09A8\u09A5\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F \u0995\u09B0\u09C1\u09A8",
        fullscreen: "\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8",
        exitFullscreen: "\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8 \u09A5\u09C7\u0995\u09C7 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A5\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
        download: "\u09AA\u09BF\u09A1\u09BF\u098F\u09AB \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09C1\u09A8"
      },
      search: {
        title: "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8",
        placeholder: "\u09A8\u09A5\u09BF\u09A4\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8...",
        matches: "\u09AE\u09BF\u09B2",
        noResults: "\u0995\u09CB\u09A8 \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
        searching: "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...",
        previousResult: "\u0986\u0997\u09C7\u09B0 \u09AB\u09B2\u09BE\u09AB\u09B2",
        nextResult: "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0 \u09AB\u09B2\u09BE\u09AB\u09B2",
        page: "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE",
        incompleteDocumentError: "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC \u098F\u0995\u099F\u09BF \u09A4\u09CD\u09B0\u09C1\u099F\u09BF \u0998\u099F\u09C7\u099B\u09C7\u0964 \u09A8\u09A5\u09BF \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3\u09B0\u09C2\u09AA\u09C7 \u09B2\u09CB\u09A1 \u09B9\u0993\u09AF\u09BC\u09BE\u09B0 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
        waitLoading: "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09BE\u09B0 \u0986\u0997\u09C7 \u09A8\u09A5\u09BF \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3\u09B0\u09C2\u09AA\u09C7 \u09B2\u09CB\u09A1 \u09B9\u0993\u09AF\u09BC\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964"
      },
      bookmarks: {
        outline: "\u09B0\u09C2\u09AA\u09B0\u09C7\u0996\u09BE",
        bookmarks: "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995",
        noOutline: "\u098F\u0987 \u09A8\u09A5\u09BF\u09A4\u09C7 \u0995\u09CB\u09A8 \u09B0\u09C2\u09AA\u09B0\u09C7\u0996\u09BE \u0989\u09AA\u09B2\u09AC\u09CD\u09A7 \u09A8\u09C7\u0987",
        addBookmark: "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
        save: "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
        cancel: "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09C1\u09A8",
        noBookmarks: "\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8 \u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF",
        bookmarkTitle: "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE",
        deleteBookmark: "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09AE\u09C1\u099B\u09C1\u09A8:"
      },
      annotations: {
        title: "\u099F\u09C0\u0995\u09BE",
        addNote: "\u09A8\u09CB\u099F \u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
        addHighlight: "\u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F \u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
        addDrawing: "\u09A1\u09CD\u09B0\u09AF\u09BC\u09BF\u0982 \u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
        note: "\u09A8\u09CB\u099F",
        highlight: "\u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F",
        drawing: "\u09A1\u09CD\u09B0\u09AF\u09BC\u09BF\u0982",
        noAnnotations: "\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8 \u099F\u09C0\u0995\u09BE \u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09A5\u09BF\u09A4\u09C7 \u099F\u09C0\u0995\u09BE \u09AF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u0989\u09AA\u09B0\u09C7\u09B0 \u099F\u09C1\u09B2 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
        addNoteHint: "\u098F\u0995\u099F\u09BF \u09A8\u09CB\u099F \u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8...",
        page: "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE",
        cancel: "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09C1\u09A8",
        colorSetTo: "\u09B0\u0999 \u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8",
        noContent: "\u0995\u09CB\u09A8 \u09AC\u09BF\u09B7\u09AF\u09BC\u09AC\u09B8\u09CD\u09A4\u09C1 \u09A8\u09C7\u0987",
        delete: "\u099F\u09C0\u0995\u09BE \u09AE\u09C1\u099B\u09C1\u09A8"
      },
      info: {
        title: "\u09A4\u09A5\u09CD\u09AF",
        close: "\u09A4\u09A5\u09CD\u09AF \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8"
      },
      locale: {
        selectLanguage: "\u09AD\u09BE\u09B7\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8",
        changeTo: "\u09AD\u09BE\u09B7\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8"
      },
      credits: {
        createdWith: "\u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u09A4\u09C8\u09B0\u09BF",
        by: "\u09A6\u09CD\u09AC\u09BE\u09B0\u09BE"
      }
    };
  }
});

// src/locales/ca.json
var require_ca = __commonJS({
  "src/locales/ca.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "P\xE0gina anterior",
        nextPage: "P\xE0gina seg\xFCent",
        pageOf: "de"
      },
      leftPanel: {
        previews: "Previsualitzaci\xF3 de p\xE0gines",
        search: "Cerca al document",
        bookmarks: "Marcadors i esquema",
        annotations: "Anotacions"
      },
      toolbar: {
        rotateCounterclockwise: "Gira en sentit antihorari",
        rotateClockwise: "Gira en sentit horari",
        zoomLevel: "Nivell de zoom",
        print: "Imprimeix document",
        fullscreen: "Pantalla completa",
        exitFullscreen: "Surt de pantalla completa",
        download: "Descarrega PDF"
      },
      search: {
        title: "Cerca",
        placeholder: "Cerca al document...",
        matches: "coincid\xE8ncies",
        noResults: "No s'han trobat resultats",
        searching: "Cercant...",
        previousResult: "Resultat anterior",
        nextResult: "Resultat seg\xFCent",
        page: "P\xE0gina",
        incompleteDocumentError: "S'ha produ\xEFt un error durant la cerca. Torneu-ho a provar despr\xE9s que el document s'hagi carregat completament.",
        waitLoading: "Espereu que el document es carregui completament abans de cercar."
      },
      bookmarks: {
        outline: "Esquema",
        bookmarks: "Marcadors",
        noOutline: "No hi ha esquema disponible en aquest document",
        addBookmark: "Afegeix marcador",
        save: "Desa",
        cancel: "Cancel\xB7la",
        noBookmarks: "Encara no s'han afegit marcadors",
        bookmarkTitle: "T\xEDtol del marcador",
        deleteBookmark: "Elimina marcador:"
      },
      annotations: {
        title: "Anotacions",
        addNote: "Afegeix nota",
        addHighlight: "Afegeix ressaltat",
        addDrawing: "Afegeix dibuix",
        note: "Nota",
        highlight: "Ressaltat",
        drawing: "Dibuix",
        noAnnotations: "Encara no s'han afegit anotacions. Utilitzeu les eines anteriors per afegir anotacions al vostre document.",
        addNoteHint: "Afegeix una nota...",
        page: "P\xE0gina",
        cancel: "Cancel\xB7la",
        colorSetTo: "Estableix color a",
        noContent: "Sense contingut",
        delete: "Elimina anotaci\xF3"
      },
      info: {
        title: "Informaci\xF3",
        close: "Tanca el panell d'informaci\xF3"
      },
      locale: {
        selectLanguage: "Selecciona idioma",
        changeTo: "Canvia idioma a"
      },
      credits: {
        createdWith: "Creat amb",
        by: "per"
      }
    };
  }
});

// src/locales/cs.json
var require_cs = __commonJS({
  "src/locales/cs.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "P\u0159edchoz\xED str\xE1nka",
        nextPage: "Dal\u0161\xED str\xE1nka",
        pageOf: "z"
      },
      leftPanel: {
        previews: "N\xE1hledy str\xE1nek",
        search: "Prohledat dokument",
        bookmarks: "Z\xE1lo\u017Eky a osnova",
        annotations: "Pozn\xE1mky"
      },
      toolbar: {
        rotateCounterclockwise: "Oto\u010Dit proti sm\u011Bru hodinov\xFDch ru\u010Di\u010Dek",
        rotateClockwise: "Oto\u010Dit ve sm\u011Bru hodinov\xFDch ru\u010Di\u010Dek",
        zoomLevel: "\xDArove\u0148 p\u0159ibl\xED\u017Een\xED",
        print: "Tisknout dokument",
        fullscreen: "Cel\xE1 obrazovka",
        exitFullscreen: "Ukon\u010Dit re\u017Eim cel\xE9 obrazovky",
        download: "St\xE1hnout PDF"
      },
      search: {
        title: "Hledat",
        placeholder: "Hledat v dokumentu...",
        matches: "shod",
        noResults: "\u017D\xE1dn\xE9 v\xFDsledky nenalezeny",
        searching: "Vyhled\xE1v\xE1n\xED...",
        previousResult: "P\u0159edchoz\xED v\xFDsledek",
        nextResult: "Dal\u0161\xED v\xFDsledek",
        page: "Str\xE1nka",
        incompleteDocumentError: "P\u0159i vyhled\xE1v\xE1n\xED do\u0161lo k chyb\u011B. Zkuste to znovu po \xFApln\xE9m na\u010Dten\xED dokumentu.",
        waitLoading: "P\u0159ed vyhled\xE1v\xE1n\xEDm po\u010Dkejte na \xFApln\xE9 na\u010Dten\xED dokumentu."
      },
      bookmarks: {
        outline: "Osnova",
        bookmarks: "Z\xE1lo\u017Eky",
        noOutline: "V tomto dokumentu nen\xED k dispozici \u017E\xE1dn\xE1 osnova",
        addBookmark: "P\u0159idat z\xE1lo\u017Eku",
        save: "Ulo\u017Eit",
        cancel: "Zru\u0161it",
        noBookmarks: "Zat\xEDm nebyly p\u0159id\xE1ny \u017E\xE1dn\xE9 z\xE1lo\u017Eky",
        bookmarkTitle: "N\xE1zev z\xE1lo\u017Eky",
        deleteBookmark: "Odstranit z\xE1lo\u017Eku:"
      },
      annotations: {
        title: "Pozn\xE1mky",
        addNote: "P\u0159idat pozn\xE1mku",
        addHighlight: "P\u0159idat zv\xFDrazn\u011Bn\xED",
        addDrawing: "P\u0159idat kresbu",
        note: "Pozn\xE1mka",
        highlight: "Zv\xFDrazn\u011Bn\xED",
        drawing: "Kresba",
        noAnnotations: "Zat\xEDm nebyly p\u0159id\xE1ny \u017E\xE1dn\xE9 pozn\xE1mky. Pou\u017Eijte v\xFD\u0161e uveden\xE9 n\xE1stroje k p\u0159id\xE1n\xED pozn\xE1mek do dokumentu.",
        addNoteHint: "P\u0159idat pozn\xE1mku...",
        page: "Str\xE1nka",
        cancel: "Zru\u0161it",
        colorSetTo: "Nastavit barvu na",
        noContent: "\u017D\xE1dn\xFD obsah",
        delete: "Odstranit pozn\xE1mku"
      },
      info: {
        title: "Informace",
        close: "Zav\u0159\xEDt informa\u010Dn\xED panel"
      },
      locale: {
        selectLanguage: "Vybrat jazyk",
        changeTo: "Zm\u011Bnit jazyk na"
      },
      credits: {
        createdWith: "Vytvo\u0159eno pomoc\xED",
        by: "od"
      }
    };
  }
});

// src/locales/de.json
var require_de = __commonJS({
  "src/locales/de.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Vorherige Seite",
        nextPage: "N\xE4chste Seite",
        pageOf: "von"
      },
      leftPanel: {
        previews: "Seitenvorschau",
        search: "Dokument durchsuchen",
        bookmarks: "Lesezeichen und Gliederung",
        annotations: "Anmerkungen"
      },
      toolbar: {
        rotateCounterclockwise: "Gegen den Uhrzeigersinn drehen",
        rotateClockwise: "Im Uhrzeigersinn drehen",
        zoomLevel: "Zoomstufe",
        print: "Dokument drucken",
        fullscreen: "Vollbildmodus",
        exitFullscreen: "Vollbildmodus beenden",
        download: "PDF herunterladen"
      },
      search: {
        title: "Suchen",
        placeholder: "Im Dokument suchen...",
        matches: "Treffer",
        noResults: "Keine Ergebnisse gefunden",
        searching: "Suche l\xE4uft...",
        previousResult: "Vorheriges Ergebnis",
        nextResult: "N\xE4chstes Ergebnis",
        page: "Seite",
        incompleteDocumentError: "Bei der Suche ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut, nachdem das Dokument vollst\xE4ndig geladen wurde.",
        waitLoading: "Bitte warten Sie, bis das Dokument vollst\xE4ndig geladen ist, bevor Sie suchen."
      },
      bookmarks: {
        outline: "Gliederung",
        bookmarks: "Lesezeichen",
        noOutline: "Keine Gliederung in diesem Dokument verf\xFCgbar",
        addBookmark: "Lesezeichen hinzuf\xFCgen",
        save: "Speichern",
        cancel: "Abbrechen",
        noBookmarks: "Noch keine Lesezeichen hinzugef\xFCgt",
        bookmarkTitle: "Lesezeichentitel",
        deleteBookmark: "Lesezeichen l\xF6schen:"
      },
      annotations: {
        title: "Anmerkungen",
        addNote: "Notiz hinzuf\xFCgen",
        addHighlight: "Hervorhebung hinzuf\xFCgen",
        addDrawing: "Zeichnung hinzuf\xFCgen",
        note: "Notiz",
        highlight: "Hervorhebung",
        drawing: "Zeichnung",
        noAnnotations: "Noch keine Anmerkungen hinzugef\xFCgt. Verwenden Sie die obigen Werkzeuge, um Anmerkungen zu Ihrem Dokument hinzuzuf\xFCgen.",
        addNoteHint: "Eine Notiz hinzuf\xFCgen...",
        page: "Seite",
        cancel: "Abbrechen",
        colorSetTo: "Farbe festlegen auf",
        noContent: "Kein Inhalt",
        delete: "Anmerkung l\xF6schen"
      },
      info: {
        title: "Info",
        close: "Info-Panel schlie\xDFen"
      },
      locale: {
        selectLanguage: "Sprache ausw\xE4hlen",
        changeTo: "Sprache \xE4ndern zu"
      },
      credits: {
        createdWith: "Erstellt mit",
        by: "von"
      }
    };
  }
});

// src/locales/el.json
var require_el = __commonJS({
  "src/locales/el.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1",
        nextPage: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1",
        pageOf: "\u03B1\u03C0\u03CC"
      },
      leftPanel: {
        previews: "\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03C9\u03BD",
        search: "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03B5\u03B3\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5",
        bookmarks: "\u03A3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B5\u03C2 \u03BA\u03B1\u03B9 \u03C0\u03B5\u03C1\u03AF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1",
        annotations: "\u03A3\u03C7\u03BF\u03BB\u03B9\u03B1\u03C3\u03BC\u03BF\u03AF"
      },
      toolbar: {
        rotateCounterclockwise: "\u03A0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03B1\u03C1\u03B9\u03C3\u03C4\u03B5\u03C1\u03CC\u03C3\u03C4\u03C1\u03BF\u03C6\u03B1",
        rotateClockwise: "\u03A0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03B4\u03B5\u03BE\u03B9\u03CC\u03C3\u03C4\u03C1\u03BF\u03C6\u03B1",
        zoomLevel: "\u0395\u03C0\u03AF\u03C0\u03B5\u03B4\u03BF \u03BC\u03B5\u03B3\u03AD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2",
        print: "\u0395\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7 \u03B5\u03B3\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5",
        fullscreen: "\u03A0\u03BB\u03AE\u03C1\u03B7\u03C2 \u03BF\u03B8\u03CC\u03BD\u03B7",
        exitFullscreen: "\u0388\u03BE\u03BF\u03B4\u03BF\u03C2 \u03B1\u03C0\u03CC \u03C0\u03BB\u03AE\u03C1\u03B7 \u03BF\u03B8\u03CC\u03BD\u03B7",
        download: "\u039B\u03AE\u03C8\u03B7 PDF"
      },
      search: {
        title: "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7",
        placeholder: "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03C3\u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF...",
        matches: "\u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1",
        noResults: "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1",
        searching: "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7...",
        previousResult: "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1",
        nextResult: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1",
        page: "\u03A3\u03B5\u03BB\u03AF\u03B4\u03B1",
        incompleteDocumentError: "\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7. \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03B1\u03C6\u03BF\u03CD \u03C6\u03BF\u03C1\u03C4\u03C9\u03B8\u03B5\u03AF \u03C0\u03BB\u03AE\u03C1\u03C9\u03C2 \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF.",
        waitLoading: "\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03C0\u03B5\u03C1\u03B9\u03BC\u03AD\u03BD\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C6\u03BF\u03C1\u03C4\u03C9\u03B8\u03B5\u03AF \u03C0\u03BB\u03AE\u03C1\u03C9\u03C2 \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF \u03C0\u03C1\u03B9\u03BD \u03C4\u03B7\u03BD \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7."
      },
      bookmarks: {
        outline: "\u03A0\u03B5\u03C1\u03AF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1",
        bookmarks: "\u03A3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B5\u03C2",
        noOutline: "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF \u03C0\u03B5\u03C1\u03AF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF",
        addBookmark: "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B7",
        save: "\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7",
        cancel: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
        noBookmarks: "\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03B5\u03B8\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 \u03C3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B5\u03C2",
        bookmarkTitle: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u03C3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B7",
        deleteBookmark: "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B7:"
      },
      annotations: {
        title: "\u03A3\u03C7\u03BF\u03BB\u03B9\u03B1\u03C3\u03BC\u03BF\u03AF",
        addNote: "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7\u03C2",
        addHighlight: "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03B5\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2",
        addDrawing: "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03C7\u03B5\u03B4\u03AF\u03BF\u03C5",
        note: "\u03A3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7",
        highlight: "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7",
        drawing: "\u03A3\u03C7\u03AD\u03B4\u03B9\u03BF",
        noAnnotations: "\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03B5\u03B8\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 \u03C3\u03C7\u03BF\u03BB\u03B9\u03B1\u03C3\u03BC\u03BF\u03AF. \u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9 \u03B5\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B8\u03AD\u03C3\u03B5\u03C4\u03B5 \u03C3\u03C7\u03BF\u03BB\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD\u03C2 \u03C3\u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03CC \u03C3\u03B1\u03C2.",
        addNoteHint: "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7\u03C2...",
        page: "\u03A3\u03B5\u03BB\u03AF\u03B4\u03B1",
        cancel: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
        colorSetTo: "\u039F\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C7\u03C1\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03C3\u03B5",
        noContent: "\u03A7\u03C9\u03C1\u03AF\u03C2 \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF",
        delete: "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C3\u03C7\u03BF\u03BB\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD"
      },
      info: {
        title: "\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",
        close: "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03B9\u03CE\u03BD"
      },
      locale: {
        selectLanguage: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1\u03C2",
        changeTo: "\u0391\u03BB\u03BB\u03B1\u03B3\u03AE \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1\u03C2 \u03C3\u03B5"
      },
      credits: {
        createdWith: "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 \u03BC\u03B5",
        by: "\u03B1\u03C0\u03CC"
      }
    };
  }
});

// src/locales/en.json
var require_en = __commonJS({
  "src/locales/en.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Previous page",
        nextPage: "Next page",
        pageOf: "of"
      },
      leftPanel: {
        previews: "Page Previews",
        search: "Search document",
        bookmarks: "Bookmarks and outline",
        annotations: "Annotations"
      },
      toolbar: {
        rotateCounterclockwise: "Rotate counterclockwise",
        rotateClockwise: "Rotate clockwise",
        zoomLevel: "Zoom level",
        print: "Print document",
        fullscreen: "Enter fullscreen",
        exitFullscreen: "Exit fullscreen",
        download: "Download PDF"
      },
      search: {
        title: "Search",
        placeholder: "Search in document...",
        matches: "matches",
        noResults: "No results found",
        searching: "Searching...",
        previousResult: "Previous result",
        nextResult: "Next result",
        page: "Page",
        incompleteDocumentError: "There was an error while searching. Please try again after the document is fully loaded.",
        waitLoading: "Please wait for the document to fully load before searching."
      },
      bookmarks: {
        outline: "Outline",
        bookmarks: "Bookmarks",
        noOutline: "No outline available in this document",
        addBookmark: "Add Bookmark",
        save: "Save",
        cancel: "Cancel",
        noBookmarks: "No bookmarks added yet",
        bookmarkTitle: "Bookmark title",
        deleteBookmark: "Delete bookmark:"
      },
      annotations: {
        title: "Annotations",
        addNote: "Add note",
        addHighlight: "Add highlight",
        addDrawing: "Add drawing",
        note: "Note",
        highlight: "Highlight",
        drawing: "Drawing",
        noAnnotations: "No annotations added yet. Use the tools above to add annotations to your document.",
        addNoteHint: "Add a note...",
        page: "Page",
        cancel: "Cancel",
        colorSetTo: "Set color to",
        noContent: "No content",
        delete: "Delete annotation"
      },
      info: {
        title: "Info",
        close: "Close Info Panel"
      },
      locale: {
        selectLanguage: "Select Language",
        changeTo: "Change language to"
      },
      credits: {
        createdWith: "Created with",
        by: "by"
      }
    };
  }
});

// src/locales/es.json
var require_es = __commonJS({
  "src/locales/es.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "P\xE1gina anterior",
        nextPage: "P\xE1gina siguiente",
        pageOf: "de"
      },
      leftPanel: {
        previews: "Vista previa de p\xE1ginas",
        search: "Buscar documento",
        bookmarks: "Marcadores y esquema",
        annotations: "Anotaciones"
      },
      toolbar: {
        rotateCounterclockwise: "Rotar en sentido antihorario",
        rotateClockwise: "Rotar en sentido horario",
        zoomLevel: "Nivel de zoom",
        print: "Imprimir documento",
        fullscreen: "Pantalla completa",
        exitFullscreen: "Salir de pantalla completa",
        download: "Descargar PDF"
      },
      search: {
        title: "Buscar",
        placeholder: "Buscar en el documento...",
        matches: "coincidencias",
        noResults: "No se encontraron resultados",
        searching: "Buscando...",
        previousResult: "Resultado anterior",
        nextResult: "Siguiente resultado",
        page: "P\xE1gina",
        incompleteDocumentError: "Hubo un error durante la b\xFAsqueda. Int\xE9ntelo de nuevo despu\xE9s de que el documento est\xE9 completamente cargado.",
        waitLoading: "Espere a que el documento se cargue completamente antes de buscar."
      },
      bookmarks: {
        outline: "Esquema",
        bookmarks: "Marcadores",
        noOutline: "No hay esquema disponible en este documento",
        addBookmark: "A\xF1adir marcador",
        save: "Guardar",
        cancel: "Cancelar",
        noBookmarks: "A\xFAn no se han a\xF1adido marcadores",
        bookmarkTitle: "T\xEDtulo del marcador",
        deleteBookmark: "Eliminar marcador:"
      },
      annotations: {
        title: "Anotaciones",
        addNote: "A\xF1adir nota",
        addHighlight: "A\xF1adir resaltado",
        addDrawing: "A\xF1adir dibujo",
        note: "Nota",
        highlight: "Resaltado",
        drawing: "Dibujo",
        noAnnotations: "A\xFAn no se han a\xF1adido anotaciones. Utilice las herramientas anteriores para a\xF1adir anotaciones a su documento.",
        addNoteHint: "A\xF1adir una nota...",
        page: "P\xE1gina",
        cancel: "Cancelar",
        colorSetTo: "Establecer color a",
        noContent: "Sin contenido",
        delete: "Eliminar anotaci\xF3n"
      },
      info: {
        title: "Informaci\xF3n",
        close: "Cerrar panel de informaci\xF3n"
      },
      locale: {
        selectLanguage: "Seleccionar idioma",
        changeTo: "Cambiar idioma a"
      },
      credits: {
        createdWith: "Creado con",
        by: "por"
      }
    };
  }
});

// src/locales/fi.json
var require_fi = __commonJS({
  "src/locales/fi.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Edellinen sivu",
        nextPage: "Seuraava sivu",
        pageOf: "/"
      },
      leftPanel: {
        previews: "Sivujen esikatselut",
        search: "Etsi asiakirjasta",
        bookmarks: "Kirjanmerkit ja j\xE4sennys",
        annotations: "Huomautukset"
      },
      toolbar: {
        rotateCounterclockwise: "Kierr\xE4 vastap\xE4iv\xE4\xE4n",
        rotateClockwise: "Kierr\xE4 my\xF6t\xE4p\xE4iv\xE4\xE4n",
        zoomLevel: "Zoomaustaso",
        print: "Tulosta asiakirja",
        fullscreen: "Koko n\xE4ytt\xF6",
        exitFullscreen: "Poistu koko n\xE4yt\xF6st\xE4",
        download: "Lataa PDF"
      },
      search: {
        title: "Etsi",
        placeholder: "Etsi asiakirjasta...",
        matches: "osumaa",
        noResults: "Ei tuloksia",
        searching: "Etsit\xE4\xE4n...",
        previousResult: "Edellinen tulos",
        nextResult: "Seuraava tulos",
        page: "Sivu",
        incompleteDocumentError: "Hakemisen aikana tapahtui virhe. Yrit\xE4 uudelleen, kun asiakirja on latautunut kokonaan.",
        waitLoading: "Odota, ett\xE4 asiakirja on latautunut kokonaan ennen hakemista."
      },
      bookmarks: {
        outline: "J\xE4sennys",
        bookmarks: "Kirjanmerkit",
        noOutline: "T\xE4ss\xE4 asiakirjassa ei ole j\xE4sennyst\xE4",
        addBookmark: "Lis\xE4\xE4 kirjanmerkki",
        save: "Tallenna",
        cancel: "Peruuta",
        noBookmarks: "Ei viel\xE4 kirjanmerkkej\xE4",
        bookmarkTitle: "Kirjanmerkin otsikko",
        deleteBookmark: "Poista kirjanmerkki:"
      },
      annotations: {
        title: "Huomautukset",
        addNote: "Lis\xE4\xE4 muistiinpano",
        addHighlight: "Lis\xE4\xE4 korostus",
        addDrawing: "Lis\xE4\xE4 piirros",
        note: "Muistiinpano",
        highlight: "Korostus",
        drawing: "Piirros",
        noAnnotations: "Ei viel\xE4 huomautuksia. K\xE4yt\xE4 yll\xE4 olevia ty\xF6kaluja lis\xE4t\xE4ksesi huomautuksia asiakirjaasi.",
        addNoteHint: "Lis\xE4\xE4 muistiinpano...",
        page: "Sivu",
        cancel: "Peruuta",
        colorSetTo: "Aseta v\xE4riksi",
        noContent: "Ei sis\xE4lt\xF6\xE4",
        delete: "Poista huomautus"
      },
      info: {
        title: "Tiedot",
        close: "Sulje tietopaneeli"
      },
      locale: {
        selectLanguage: "Valitse kieli",
        changeTo: "Vaihda kieleksi"
      },
      credits: {
        createdWith: "Luotu k\xE4ytt\xE4en",
        by: "tekij\xE4"
      }
    };
  }
});

// src/locales/fr.json
var require_fr = __commonJS({
  "src/locales/fr.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Page pr\xE9c\xE9dente",
        nextPage: "Page suivante",
        pageOf: "sur"
      },
      leftPanel: {
        previews: "Aper\xE7us de pages",
        search: "Rechercher dans le document",
        bookmarks: "Signets et plan",
        annotations: "Annotations"
      },
      toolbar: {
        rotateCounterclockwise: "Rotation antihoraire",
        rotateClockwise: "Rotation horaire",
        zoomLevel: "Niveau de zoom",
        print: "Imprimer le document",
        fullscreen: "Plein \xE9cran",
        exitFullscreen: "Quitter le plein \xE9cran",
        download: "T\xE9l\xE9charger le PDF"
      },
      search: {
        title: "Rechercher",
        placeholder: "Rechercher dans le document...",
        matches: "correspondances",
        noResults: "Aucun r\xE9sultat trouv\xE9",
        searching: "Recherche en cours...",
        previousResult: "R\xE9sultat pr\xE9c\xE9dent",
        nextResult: "R\xE9sultat suivant",
        page: "Page",
        incompleteDocumentError: "Une erreur s'est produite lors de la recherche. Veuillez r\xE9essayer apr\xE8s le chargement complet du document.",
        waitLoading: "Veuillez attendre que le document soit enti\xE8rement charg\xE9 avant de rechercher."
      },
      bookmarks: {
        outline: "Plan",
        bookmarks: "Signets",
        noOutline: "Aucun plan disponible dans ce document",
        addBookmark: "Ajouter un signet",
        save: "Enregistrer",
        cancel: "Annuler",
        noBookmarks: "Aucun signet ajout\xE9 pour l'instant",
        bookmarkTitle: "Titre du signet",
        deleteBookmark: "Supprimer le signet :"
      },
      annotations: {
        title: "Annotations",
        addNote: "Ajouter une note",
        addHighlight: "Ajouter un surlignage",
        addDrawing: "Ajouter un dessin",
        note: "Note",
        highlight: "Surlignage",
        drawing: "Dessin",
        noAnnotations: "Aucune annotation ajout\xE9e pour l'instant. Utilisez les outils ci-dessus pour ajouter des annotations \xE0 votre document.",
        addNoteHint: "Ajouter une note...",
        page: "Page",
        cancel: "Annuler",
        colorSetTo: "D\xE9finir la couleur \xE0",
        noContent: "Pas de contenu",
        delete: "Supprimer l'annotation"
      },
      info: {
        title: "Informations",
        close: "Fermer le panneau d'informations"
      },
      locale: {
        selectLanguage: "S\xE9lectionner la langue",
        changeTo: "Changer la langue en"
      },
      credits: {
        createdWith: "Cr\xE9\xE9 avec",
        by: "par"
      }
    };
  }
});

// src/locales/he.json
var require_he = __commonJS({
  "src/locales/he.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u05D3\u05E3 \u05E7\u05D5\u05D3\u05DD",
        nextPage: "\u05D3\u05E3 \u05D4\u05D1\u05D0",
        pageOf: "\u05DE\u05EA\u05D5\u05DA"
      },
      leftPanel: {
        previews: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u05E9\u05DC \u05D3\u05E4\u05D9\u05DD",
        search: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D1\u05DE\u05E1\u05DE\u05DA",
        bookmarks: "\u05E1\u05D9\u05DE\u05E0\u05D9\u05D5\u05EA \u05D5\u05DE\u05EA\u05D5\u05D5\u05D4",
        annotations: "\u05D4\u05E2\u05E8\u05D5\u05EA"
      },
      toolbar: {
        rotateCounterclockwise: "\u05E1\u05D5\u05D1\u05D1 \u05E0\u05D2\u05D3 \u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E9\u05E2\u05D5\u05DF",
        rotateClockwise: "\u05E1\u05D5\u05D1\u05D1 \u05E2\u05DD \u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E9\u05E2\u05D5\u05DF",
        zoomLevel: "\u05E8\u05DE\u05EA \u05D4\u05D2\u05D3\u05DC\u05D4",
        print: "\u05D4\u05D3\u05E4\u05E1 \u05DE\u05E1\u05DE\u05DA",
        fullscreen: "\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0",
        exitFullscreen: "\u05E6\u05D0 \u05DE\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0",
        download: "\u05D4\u05D5\u05E8\u05D3 PDF"
      },
      search: {
        title: "\u05D7\u05D9\u05E4\u05D5\u05E9",
        placeholder: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D1\u05DE\u05E1\u05DE\u05DA...",
        matches: "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA",
        noResults: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA",
        searching: "\u05DE\u05D7\u05E4\u05E9...",
        previousResult: "\u05EA\u05D5\u05E6\u05D0\u05D4 \u05E7\u05D5\u05D3\u05DE\u05EA",
        nextResult: "\u05EA\u05D5\u05E6\u05D0\u05D4 \u05D4\u05D1\u05D0\u05D4",
        page: "\u05D3\u05E3",
        incompleteDocumentError: "\u05D0\u05D9\u05E8\u05E2\u05D4 \u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E2\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9. \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05DC\u05D0\u05D7\u05E8 \u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05DE\u05E1\u05DE\u05DA \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5.",
        waitLoading: "\u05D0\u05E0\u05D0 \u05D4\u05DE\u05EA\u05DF \u05DC\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05DE\u05E1\u05DE\u05DA \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9."
      },
      bookmarks: {
        outline: "\u05DE\u05EA\u05D5\u05D5\u05D4",
        bookmarks: "\u05E1\u05D9\u05DE\u05E0\u05D9\u05D5\u05EA",
        noOutline: "\u05D0\u05D9\u05DF \u05DE\u05EA\u05D5\u05D5\u05D4 \u05D6\u05DE\u05D9\u05DF \u05D1\u05DE\u05E1\u05DE\u05DA \u05D6\u05D4",
        addBookmark: "\u05D4\u05D5\u05E1\u05E3 \u05E1\u05D9\u05DE\u05E0\u05D9\u05D9\u05D4",
        save: "\u05E9\u05DE\u05D5\u05E8",
        cancel: "\u05D1\u05D8\u05DC",
        noBookmarks: "\u05D8\u05E8\u05DD \u05E0\u05D5\u05E1\u05E4\u05D5 \u05E1\u05D9\u05DE\u05E0\u05D9\u05D5\u05EA",
        bookmarkTitle: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05E1\u05D9\u05DE\u05E0\u05D9\u05D9\u05D4",
        deleteBookmark: "\u05DE\u05D7\u05E7 \u05E1\u05D9\u05DE\u05E0\u05D9\u05D9\u05D4:"
      },
      annotations: {
        title: "\u05D4\u05E2\u05E8\u05D5\u05EA",
        addNote: "\u05D4\u05D5\u05E1\u05E3 \u05D4\u05E2\u05E8\u05D4",
        addHighlight: "\u05D4\u05D5\u05E1\u05E3 \u05D4\u05D3\u05D2\u05E9\u05D4",
        addDrawing: "\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05E8",
        note: "\u05D4\u05E2\u05E8\u05D4",
        highlight: "\u05D4\u05D3\u05D2\u05E9\u05D4",
        drawing: "\u05E6\u05D9\u05D5\u05E8",
        noAnnotations: "\u05D8\u05E8\u05DD \u05E0\u05D5\u05E1\u05E4\u05D5 \u05D4\u05E2\u05E8\u05D5\u05EA. \u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05DC\u05D9\u05DD \u05DC\u05E2\u05D9\u05DC \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05DE\u05E1\u05DE\u05DA \u05E9\u05DC\u05DA.",
        addNoteHint: "\u05D4\u05D5\u05E1\u05E3 \u05D4\u05E2\u05E8\u05D4...",
        page: "\u05D3\u05E3",
        cancel: "\u05D1\u05D8\u05DC",
        colorSetTo: "\u05D4\u05D2\u05D3\u05E8 \u05E6\u05D1\u05E2 \u05DC",
        noContent: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05DB\u05DF",
        delete: "\u05DE\u05D7\u05E7 \u05D4\u05E2\u05E8\u05D4"
      },
      info: {
        title: "\u05DE\u05D9\u05D3\u05E2",
        close: "\u05E1\u05D2\u05D5\u05E8 \u05D7\u05DC\u05D5\u05E0\u05D9\u05EA \u05DE\u05D9\u05D3\u05E2"
      },
      locale: {
        selectLanguage: "\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D4",
        changeTo: "\u05E9\u05E0\u05D4 \u05E9\u05E4\u05D4 \u05DC"
      },
      credits: {
        createdWith: "\u05E0\u05D5\u05E6\u05E8 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",
        by: "\u05E2\u05DC \u05D9\u05D3\u05D9"
      }
    };
  }
});

// src/locales/hi.json
var require_hi = __commonJS({
  "src/locales/hi.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u092A\u093F\u091B\u0932\u093E \u092A\u0943\u0937\u094D\u0920",
        nextPage: "\u0905\u0917\u0932\u093E \u092A\u0943\u0937\u094D\u0920",
        pageOf: "\u0915\u093E"
      },
      leftPanel: {
        previews: "\u092A\u0943\u0937\u094D\u0920 \u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928",
        search: "\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0916\u094B\u091C\u0947\u0902",
        bookmarks: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0914\u0930 \u0930\u0942\u092A\u0930\u0947\u0916\u093E",
        annotations: "\u091F\u093F\u092A\u094D\u092A\u0923\u093F\u092F\u093E\u0901"
      },
      toolbar: {
        rotateCounterclockwise: "\u0918\u0921\u093C\u0940 \u0915\u0940 \u0935\u093F\u092A\u0930\u0940\u0924 \u0926\u093F\u0936\u093E \u092E\u0947\u0902 \u0918\u0941\u092E\u093E\u090F\u0901",
        rotateClockwise: "\u0918\u0921\u093C\u0940 \u0915\u0940 \u0926\u093F\u0936\u093E \u092E\u0947\u0902 \u0918\u0941\u092E\u093E\u090F\u0901",
        zoomLevel: "\u091C\u093C\u0942\u092E \u0938\u094D\u0924\u0930",
        print: "\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092A\u094D\u0930\u093F\u0902\u091F \u0915\u0930\u0947\u0902",
        fullscreen: "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928",
        exitFullscreen: "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0938\u0947 \u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0947\u0902",
        download: "PDF \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
      },
      search: {
        title: "\u0916\u094B\u091C",
        placeholder: "\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092E\u0947\u0902 \u0916\u094B\u091C\u0947\u0902...",
        matches: "\u092E\u093F\u0932\u093E\u0928",
        noResults: "\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
        searching: "\u0916\u094B\u091C \u0930\u0939\u093E \u0939\u0948...",
        previousResult: "\u092A\u093F\u091B\u0932\u093E \u092A\u0930\u093F\u0923\u093E\u092E",
        nextResult: "\u0905\u0917\u0932\u093E \u092A\u0930\u093F\u0923\u093E\u092E",
        page: "\u092A\u0943\u0937\u094D\u0920",
        incompleteDocumentError: "\u0916\u094B\u091C \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u090F\u0915 \u0924\u094D\u0930\u0941\u091F\u093F \u0939\u0941\u0908\u0964 \u0915\u0943\u092A\u092F\u093E \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0932\u094B\u0921 \u0939\u094B\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964",
        waitLoading: "\u0916\u094B\u091C \u0915\u0930\u0928\u0947 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u0943\u092A\u092F\u093E \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0915\u0947 \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0932\u094B\u0921 \u0939\u094B\u0928\u0947 \u0915\u0940 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964"
      },
      bookmarks: {
        outline: "\u0930\u0942\u092A\u0930\u0947\u0916\u093E",
        bookmarks: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915",
        noOutline: "\u0907\u0938 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092E\u0947\u0902 \u0915\u094B\u0908 \u0930\u0942\u092A\u0930\u0947\u0916\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948",
        addBookmark: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u091C\u094B\u0921\u093C\u0947\u0902",
        save: "\u0938\u0939\u0947\u091C\u0947\u0902",
        cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",
        noBookmarks: "\u0905\u092D\u0940 \u0924\u0915 \u0915\u094B\u0908 \u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0928\u0939\u0940\u0902 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E",
        bookmarkTitle: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0936\u0940\u0930\u094D\u0937\u0915",
        deleteBookmark: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0939\u091F\u093E\u090F\u0901:"
      },
      annotations: {
        title: "\u091F\u093F\u092A\u094D\u092A\u0923\u093F\u092F\u093E\u0901",
        addNote: "\u0928\u094B\u091F \u091C\u094B\u0921\u093C\u0947\u0902",
        addHighlight: "\u0939\u093E\u0907\u0932\u093E\u0907\u091F \u091C\u094B\u0921\u093C\u0947\u0902",
        addDrawing: "\u0921\u094D\u0930\u0949\u0907\u0902\u0917 \u091C\u094B\u0921\u093C\u0947\u0902",
        note: "\u0928\u094B\u091F",
        highlight: "\u0939\u093E\u0907\u0932\u093E\u0907\u091F",
        drawing: "\u0921\u094D\u0930\u0949\u0907\u0902\u0917",
        noAnnotations: "\u0905\u092D\u0940 \u0924\u0915 \u0915\u094B\u0908 \u091F\u093F\u092A\u094D\u092A\u0923\u0940 \u0928\u0939\u0940\u0902 \u091C\u094B\u0921\u093C\u0940 \u0917\u0908 \u0939\u0948\u0964 \u0905\u092A\u0928\u0947 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092E\u0947\u0902 \u091F\u093F\u092A\u094D\u092A\u0923\u093F\u092F\u093E\u0901 \u091C\u094B\u0921\u093C\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u090A\u092A\u0930 \u0926\u093F\u090F \u0917\u090F \u091F\u0942\u0932 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902\u0964",
        addNoteHint: "\u090F\u0915 \u0928\u094B\u091F \u091C\u094B\u0921\u093C\u0947\u0902...",
        page: "\u092A\u0943\u0937\u094D\u0920",
        cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",
        colorSetTo: "\u0930\u0902\u0917 \u0938\u0947\u091F \u0915\u0930\u0947\u0902",
        noContent: "\u0915\u094B\u0908 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0928\u0939\u0940\u0902",
        delete: "\u091F\u093F\u092A\u094D\u092A\u0923\u0940 \u0939\u091F\u093E\u090F\u0901"
      },
      info: {
        title: "\u091C\u093E\u0928\u0915\u093E\u0930\u0940",
        close: "\u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092A\u0948\u0928\u0932 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
      },
      locale: {
        selectLanguage: "\u092D\u093E\u0937\u093E \u091A\u0941\u0928\u0947\u0902",
        changeTo: "\u092D\u093E\u0937\u093E \u092C\u0926\u0932\u0947\u0902"
      },
      credits: {
        createdWith: "\u0915\u0947 \u0938\u093E\u0925 \u092C\u0928\u093E\u092F\u093E \u0917\u092F\u093E",
        by: "\u0926\u094D\u0935\u093E\u0930\u093E"
      }
    };
  }
});

// src/locales/id.json
var require_id = __commonJS({
  "src/locales/id.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Halaman sebelumnya",
        nextPage: "Halaman berikutnya",
        pageOf: "dari"
      },
      leftPanel: {
        previews: "Pratinjau Halaman",
        search: "Cari dokumen",
        bookmarks: "Bookmark dan kerangka",
        annotations: "Anotasi"
      },
      toolbar: {
        rotateCounterclockwise: "Putar berlawanan arah jarum jam",
        rotateClockwise: "Putar searah jarum jam",
        zoomLevel: "Tingkat zoom",
        print: "Cetak dokumen",
        fullscreen: "Layar penuh",
        exitFullscreen: "Keluar dari layar penuh",
        download: "Unduh PDF"
      },
      search: {
        title: "Cari",
        placeholder: "Cari dalam dokumen...",
        matches: "hasil",
        noResults: "Tidak ditemukan hasil",
        searching: "Mencari...",
        previousResult: "Hasil sebelumnya",
        nextResult: "Hasil berikutnya",
        page: "Halaman",
        incompleteDocumentError: "Terjadi kesalahan saat mencari. Silakan coba lagi setelah dokumen dimuat sepenuhnya.",
        waitLoading: "Harap tunggu dokumen dimuat sepenuhnya sebelum mencari."
      },
      bookmarks: {
        outline: "Kerangka",
        bookmarks: "Bookmark",
        noOutline: "Tidak ada kerangka yang tersedia dalam dokumen ini",
        addBookmark: "Tambah bookmark",
        save: "Simpan",
        cancel: "Batal",
        noBookmarks: "Belum ada bookmark yang ditambahkan",
        bookmarkTitle: "Judul bookmark",
        deleteBookmark: "Hapus bookmark:"
      },
      annotations: {
        title: "Anotasi",
        addNote: "Tambah catatan",
        addHighlight: "Tambah sorotan",
        addDrawing: "Tambah gambar",
        note: "Catatan",
        highlight: "Sorotan",
        drawing: "Gambar",
        noAnnotations: "Belum ada anotasi yang ditambahkan. Gunakan alat di atas untuk menambahkan anotasi ke dokumen Anda.",
        addNoteHint: "Tambahkan catatan...",
        page: "Halaman",
        cancel: "Batal",
        colorSetTo: "Atur warna menjadi",
        noContent: "Tidak ada konten",
        delete: "Hapus anotasi"
      },
      info: {
        title: "Info",
        close: "Tutup Panel Info"
      },
      locale: {
        selectLanguage: "Pilih Bahasa",
        changeTo: "Ubah bahasa ke"
      },
      credits: {
        createdWith: "Dibuat dengan",
        by: "oleh"
      }
    };
  }
});

// src/locales/it.json
var require_it = __commonJS({
  "src/locales/it.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Pagina precedente",
        nextPage: "Pagina successiva",
        pageOf: "di"
      },
      leftPanel: {
        previews: "Anteprime pagine",
        search: "Cerca nel documento",
        bookmarks: "Segnalibri e struttura",
        annotations: "Annotazioni"
      },
      toolbar: {
        rotateCounterclockwise: "Ruota in senso antiorario",
        rotateClockwise: "Ruota in senso orario",
        zoomLevel: "Livello di zoom",
        print: "Stampa documento",
        fullscreen: "Schermo intero",
        exitFullscreen: "Esci da schermo intero",
        download: "Scarica PDF"
      },
      search: {
        title: "Cerca",
        placeholder: "Cerca nel documento...",
        matches: "corrispondenze",
        noResults: "Nessun risultato trovato",
        searching: "Ricerca in corso...",
        previousResult: "Risultato precedente",
        nextResult: "Risultato successivo",
        page: "Pagina",
        incompleteDocumentError: "Si \xE8 verificato un errore durante la ricerca. Riprova dopo che il documento \xE8 stato completamente caricato.",
        waitLoading: "Attendi il caricamento completo del documento prima di effettuare la ricerca."
      },
      bookmarks: {
        outline: "Struttura",
        bookmarks: "Segnalibri",
        noOutline: "Nessuna struttura disponibile in questo documento",
        addBookmark: "Aggiungi segnalibro",
        save: "Salva",
        cancel: "Annulla",
        noBookmarks: "Nessun segnalibro aggiunto finora",
        bookmarkTitle: "Titolo del segnalibro",
        deleteBookmark: "Elimina segnalibro:"
      },
      annotations: {
        title: "Annotazioni",
        addNote: "Aggiungi nota",
        addHighlight: "Aggiungi evidenziazione",
        addDrawing: "Aggiungi disegno",
        note: "Nota",
        highlight: "Evidenziazione",
        drawing: "Disegno",
        noAnnotations: "Nessuna annotazione aggiunta finora. Usa gli strumenti sopra per aggiungere annotazioni al tuo documento.",
        addNoteHint: "Aggiungi una nota...",
        page: "Pagina",
        cancel: "Annulla",
        colorSetTo: "Imposta colore a",
        noContent: "Nessun contenuto",
        delete: "Elimina annotazione"
      },
      info: {
        title: "Informazioni",
        close: "Chiudi pannello informazioni"
      },
      locale: {
        selectLanguage: "Seleziona lingua",
        changeTo: "Cambia lingua in"
      },
      credits: {
        createdWith: "Creato con",
        by: "da"
      }
    };
  }
});

// src/locales/ja.json
var require_ja = __commonJS({
  "src/locales/ja.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u524D\u306E\u30DA\u30FC\u30B8",
        nextPage: "\u6B21\u306E\u30DA\u30FC\u30B8",
        pageOf: "/"
      },
      leftPanel: {
        previews: "\u30DA\u30FC\u30B8\u30D7\u30EC\u30D3\u30E5\u30FC",
        search: "\u6587\u66F8\u3092\u691C\u7D22",
        bookmarks: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3068\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
        annotations: "\u6CE8\u91C8"
      },
      toolbar: {
        rotateCounterclockwise: "\u53CD\u6642\u8A08\u56DE\u308A\u306B\u56DE\u8EE2",
        rotateClockwise: "\u6642\u8A08\u56DE\u308A\u306B\u56DE\u8EE2",
        zoomLevel: "\u30BA\u30FC\u30E0\u30EC\u30D9\u30EB",
        print: "\u6587\u66F8\u3092\u5370\u5237",
        fullscreen: "\u5168\u753B\u9762\u8868\u793A",
        exitFullscreen: "\u5168\u753B\u9762\u8868\u793A\u3092\u7D42\u4E86",
        download: "PDF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
      },
      search: {
        title: "\u691C\u7D22",
        placeholder: "\u6587\u66F8\u5185\u3092\u691C\u7D22...",
        matches: "\u4E00\u81F4",
        noResults: "\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
        searching: "\u691C\u7D22\u4E2D...",
        previousResult: "\u524D\u306E\u7D50\u679C",
        nextResult: "\u6B21\u306E\u7D50\u679C",
        page: "\u30DA\u30FC\u30B8",
        incompleteDocumentError: "\u691C\u7D22\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u6587\u66F8\u304C\u5B8C\u5168\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u5F8C\u306B\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        waitLoading: "\u691C\u7D22\u3059\u308B\u524D\u306B\u6587\u66F8\u304C\u5B8C\u5168\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u307E\u3067\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"
      },
      bookmarks: {
        outline: "\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
        bookmarks: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF",
        noOutline: "\u3053\u306E\u6587\u66F8\u306B\u306F\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3\u304C\u3042\u308A\u307E\u305B\u3093",
        addBookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u8FFD\u52A0",
        save: "\u4FDD\u5B58",
        cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        noBookmarks: "\u307E\u3060\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
        bookmarkTitle: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u30BF\u30A4\u30C8\u30EB",
        deleteBookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u524A\u9664:"
      },
      annotations: {
        title: "\u6CE8\u91C8",
        addNote: "\u30E1\u30E2\u3092\u8FFD\u52A0",
        addHighlight: "\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u8FFD\u52A0",
        addDrawing: "\u63CF\u753B\u3092\u8FFD\u52A0",
        note: "\u30E1\u30E2",
        highlight: "\u30CF\u30A4\u30E9\u30A4\u30C8",
        drawing: "\u63CF\u753B",
        noAnnotations: "\u307E\u3060\u6CE8\u91C8\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u4E0A\u8A18\u306E\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u6587\u66F8\u306B\u6CE8\u91C8\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        addNoteHint: "\u30E1\u30E2\u3092\u8FFD\u52A0...",
        page: "\u30DA\u30FC\u30B8",
        cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        colorSetTo: "\u8272\u3092\u8A2D\u5B9A",
        noContent: "\u5185\u5BB9\u306A\u3057",
        delete: "\u6CE8\u91C8\u3092\u524A\u9664"
      },
      info: {
        title: "\u60C5\u5831",
        close: "\u60C5\u5831\u30D1\u30CD\u30EB\u3092\u9589\u3058\u308B"
      },
      locale: {
        selectLanguage: "\u8A00\u8A9E\u3092\u9078\u629E",
        changeTo: "\u8A00\u8A9E\u3092\u5909\u66F4"
      },
      credits: {
        createdWith: "\u4F5C\u6210",
        by: "\u63D0\u4F9B"
      }
    };
  }
});

// src/locales/jp_JP.json
var require_jp_JP = __commonJS({
  "src/locales/jp_JP.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u524D\u306E\u30DA\u30FC\u30B8",
        nextPage: "\u6B21\u306E\u30DA\u30FC\u30B8",
        pageOf: "/"
      },
      leftPanel: {
        previews: "\u30DA\u30FC\u30B8\u30D7\u30EC\u30D3\u30E5\u30FC",
        search: "\u6587\u66F8\u3092\u691C\u7D22",
        bookmarks: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3068\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
        annotations: "\u6CE8\u91C8"
      },
      toolbar: {
        rotateCounterclockwise: "\u53CD\u6642\u8A08\u56DE\u308A\u306B\u56DE\u8EE2",
        rotateClockwise: "\u6642\u8A08\u56DE\u308A\u306B\u56DE\u8EE2",
        zoomLevel: "\u30BA\u30FC\u30E0\u30EC\u30D9\u30EB",
        print: "\u6587\u66F8\u3092\u5370\u5237",
        fullscreen: "\u5168\u753B\u9762\u8868\u793A",
        exitFullscreen: "\u5168\u753B\u9762\u8868\u793A\u3092\u7D42\u4E86",
        download: "PDF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
      },
      search: {
        title: "\u691C\u7D22",
        placeholder: "\u6587\u66F8\u5185\u3092\u691C\u7D22...",
        matches: "\u4E00\u81F4",
        noResults: "\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
        searching: "\u691C\u7D22\u4E2D...",
        previousResult: "\u524D\u306E\u7D50\u679C",
        nextResult: "\u6B21\u306E\u7D50\u679C",
        page: "\u30DA\u30FC\u30B8",
        incompleteDocumentError: "\u691C\u7D22\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u6587\u66F8\u304C\u5B8C\u5168\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u5F8C\u306B\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        waitLoading: "\u691C\u7D22\u3059\u308B\u524D\u306B\u6587\u66F8\u304C\u5B8C\u5168\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u307E\u3067\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"
      },
      bookmarks: {
        outline: "\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
        bookmarks: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF",
        noOutline: "\u3053\u306E\u6587\u66F8\u306B\u306F\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3\u304C\u3042\u308A\u307E\u305B\u3093",
        addBookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u8FFD\u52A0",
        save: "\u4FDD\u5B58",
        cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        noBookmarks: "\u307E\u3060\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
        bookmarkTitle: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u30BF\u30A4\u30C8\u30EB",
        deleteBookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u524A\u9664:"
      },
      annotations: {
        title: "\u6CE8\u91C8",
        addNote: "\u30E1\u30E2\u3092\u8FFD\u52A0",
        addHighlight: "\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u8FFD\u52A0",
        addDrawing: "\u63CF\u753B\u3092\u8FFD\u52A0",
        note: "\u30E1\u30E2",
        highlight: "\u30CF\u30A4\u30E9\u30A4\u30C8",
        drawing: "\u63CF\u753B",
        noAnnotations: "\u307E\u3060\u6CE8\u91C8\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u4E0A\u8A18\u306E\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u6587\u66F8\u306B\u6CE8\u91C8\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        addNoteHint: "\u30E1\u30E2\u3092\u8FFD\u52A0...",
        page: "\u30DA\u30FC\u30B8",
        cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        colorSetTo: "\u8272\u3092\u8A2D\u5B9A",
        noContent: "\u5185\u5BB9\u306A\u3057",
        delete: "\u6CE8\u91C8\u3092\u524A\u9664"
      },
      info: {
        title: "\u60C5\u5831",
        close: "\u60C5\u5831\u30D1\u30CD\u30EB\u3092\u9589\u3058\u308B"
      },
      locale: {
        selectLanguage: "\u8A00\u8A9E\u3092\u9078\u629E",
        changeTo: "\u8A00\u8A9E\u3092\u5909\u66F4"
      },
      credits: {
        createdWith: "\u4F5C\u6210",
        by: "\u63D0\u4F9B"
      }
    };
  }
});

// src/locales/ko.json
var require_ko = __commonJS({
  "src/locales/ko.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\uC774\uC804 \uD398\uC774\uC9C0",
        nextPage: "\uB2E4\uC74C \uD398\uC774\uC9C0",
        pageOf: "/"
      },
      leftPanel: {
        previews: "\uD398\uC774\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30",
        search: "\uBB38\uC11C \uAC80\uC0C9",
        bookmarks: "\uBD81\uB9C8\uD06C \uBC0F \uAC1C\uC694",
        annotations: "\uC8FC\uC11D"
      },
      toolbar: {
        rotateCounterclockwise: "\uC2DC\uACC4 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uD68C\uC804",
        rotateClockwise: "\uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uD68C\uC804",
        zoomLevel: "\uD655\uB300/\uCD95\uC18C \uC218\uC900",
        print: "\uBB38\uC11C \uC778\uC1C4",
        fullscreen: "\uC804\uCCB4 \uD654\uBA74",
        exitFullscreen: "\uC804\uCCB4 \uD654\uBA74 \uC885\uB8CC",
        download: "PDF \uB2E4\uC6B4\uB85C\uB4DC"
      },
      search: {
        title: "\uAC80\uC0C9",
        placeholder: "\uBB38\uC11C\uC5D0\uC11C \uAC80\uC0C9...",
        matches: "\uC77C\uCE58",
        noResults: "\uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C",
        searching: "\uAC80\uC0C9 \uC911...",
        previousResult: "\uC774\uC804 \uACB0\uACFC",
        nextResult: "\uB2E4\uC74C \uACB0\uACFC",
        page: "\uD398\uC774\uC9C0",
        incompleteDocumentError: "\uAC80\uC0C9 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uBB38\uC11C\uAC00 \uC644\uC804\uD788 \uB85C\uB4DC\uB41C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
        waitLoading: "\uAC80\uC0C9\uD558\uAE30 \uC804\uC5D0 \uBB38\uC11C\uAC00 \uC644\uC804\uD788 \uB85C\uB4DC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."
      },
      bookmarks: {
        outline: "\uAC1C\uC694",
        bookmarks: "\uBD81\uB9C8\uD06C",
        noOutline: "\uC774 \uBB38\uC11C\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAC1C\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
        addBookmark: "\uBD81\uB9C8\uD06C \uCD94\uAC00",
        save: "\uC800\uC7A5",
        cancel: "\uCDE8\uC18C",
        noBookmarks: "\uC544\uC9C1 \uCD94\uAC00\uB41C \uBD81\uB9C8\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
        bookmarkTitle: "\uBD81\uB9C8\uD06C \uC81C\uBAA9",
        deleteBookmark: "\uBD81\uB9C8\uD06C \uC0AD\uC81C:"
      },
      annotations: {
        title: "\uC8FC\uC11D",
        addNote: "\uBA54\uBAA8 \uCD94\uAC00",
        addHighlight: "\uAC15\uC870 \uD45C\uC2DC \uCD94\uAC00",
        addDrawing: "\uADF8\uB9BC \uCD94\uAC00",
        note: "\uBA54\uBAA8",
        highlight: "\uAC15\uC870 \uD45C\uC2DC",
        drawing: "\uADF8\uB9BC",
        noAnnotations: "\uC544\uC9C1 \uCD94\uAC00\uB41C \uC8FC\uC11D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC704\uC758 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBB38\uC11C\uC5D0 \uC8FC\uC11D\uC744 \uCD94\uAC00\uD558\uC138\uC694.",
        addNoteHint: "\uBA54\uBAA8 \uCD94\uAC00...",
        page: "\uD398\uC774\uC9C0",
        cancel: "\uCDE8\uC18C",
        colorSetTo: "\uC0C9\uC0C1 \uC124\uC815",
        noContent: "\uB0B4\uC6A9 \uC5C6\uC74C",
        delete: "\uC8FC\uC11D \uC0AD\uC81C"
      },
      info: {
        title: "\uC815\uBCF4",
        close: "\uC815\uBCF4 \uD328\uB110 \uB2EB\uAE30"
      },
      locale: {
        selectLanguage: "\uC5B8\uC5B4 \uC120\uD0DD",
        changeTo: "\uC5B8\uC5B4 \uBCC0\uACBD"
      },
      credits: {
        createdWith: "\uC81C\uC791",
        by: "\uC81C\uACF5"
      }
    };
  }
});

// src/locales/mr.json
var require_mr = __commonJS({
  "src/locales/mr.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u092E\u093E\u0917\u0940\u0932 \u092A\u0943\u0937\u094D\u0920",
        nextPage: "\u092A\u0941\u0922\u0940\u0932 \u092A\u0943\u0937\u094D\u0920",
        pageOf: "\u092A\u0948\u0915\u0940"
      },
      leftPanel: {
        previews: "\u092A\u0943\u0937\u094D\u0920 \u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928\u0947",
        search: "\u0926\u0938\u094D\u0924\u0910\u0935\u091C \u0936\u094B\u0927\u093E",
        bookmarks: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0906\u0923\u093F \u0930\u0942\u092A\u0930\u0947\u0937\u093E",
        annotations: "\u091F\u093F\u092A\u094D\u092A\u0923\u094D\u092F\u093E"
      },
      toolbar: {
        rotateCounterclockwise: "\u0918\u0921\u094D\u092F\u093E\u0933\u093E\u091A\u094D\u092F\u093E \u0935\u093F\u0930\u0941\u0926\u094D\u0927 \u0926\u093F\u0936\u0947\u0928\u0947 \u092B\u093F\u0930\u0935\u093E",
        rotateClockwise: "\u0918\u0921\u094D\u092F\u093E\u0933\u093E\u091A\u094D\u092F\u093E \u0926\u093F\u0936\u0947\u0928\u0947 \u092B\u093F\u0930\u0935\u093E",
        zoomLevel: "\u091D\u0942\u092E \u0938\u094D\u0924\u0930",
        print: "\u0926\u0938\u094D\u0924\u0910\u0935\u091C \u092A\u094D\u0930\u093F\u0902\u091F \u0915\u0930\u093E",
        fullscreen: "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928",
        exitFullscreen: "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u092E\u0927\u0942\u0928 \u092C\u093E\u0939\u0947\u0930 \u092A\u0921\u093E",
        download: "PDF \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u093E"
      },
      search: {
        title: "\u0936\u094B\u0927",
        placeholder: "\u0926\u0938\u094D\u0924\u0910\u0935\u091C\u093E\u0924 \u0936\u094B\u0927\u093E...",
        matches: "\u091C\u0941\u0933\u0923\u094D\u092F\u093E",
        noResults: "\u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u092A\u0930\u093F\u0923\u093E\u092E \u0938\u093E\u092A\u0921\u0932\u0947 \u0928\u093E\u0939\u0940\u0924",
        searching: "\u0936\u094B\u0927\u0924 \u0906\u0939\u0947...",
        previousResult: "\u092E\u093E\u0917\u0940\u0932 \u092A\u0930\u093F\u0923\u093E\u092E",
        nextResult: "\u092A\u0941\u0922\u0940\u0932 \u092A\u0930\u093F\u0923\u093E\u092E",
        page: "\u092A\u0943\u0937\u094D\u0920",
        incompleteDocumentError: "\u0936\u094B\u0927 \u0915\u0930\u0924\u093E\u0928\u093E \u090F\u0915 \u0924\u094D\u0930\u0941\u091F\u0940 \u0906\u0932\u0940. \u0915\u0943\u092A\u092F\u093E \u0926\u0938\u094D\u0924\u0910\u0935\u091C \u092A\u0942\u0930\u094D\u0923\u092A\u0923\u0947 \u0932\u094B\u0921 \u091D\u093E\u0932\u094D\u092F\u093E\u0928\u0902\u0924\u0930 \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E.",
        waitLoading: "\u0936\u094B\u0927\u0923\u094D\u092F\u093E\u092A\u0942\u0930\u094D\u0935\u0940 \u0915\u0943\u092A\u092F\u093E \u0926\u0938\u094D\u0924\u0910\u0935\u091C \u092A\u0942\u0930\u094D\u0923\u092A\u0923\u0947 \u0932\u094B\u0921 \u0939\u094B\u0923\u094D\u092F\u093E\u091A\u0940 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u093E."
      },
      bookmarks: {
        outline: "\u0930\u0942\u092A\u0930\u0947\u0937\u093E",
        bookmarks: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915",
        noOutline: "\u092F\u093E \u0926\u0938\u094D\u0924\u0910\u0935\u091C\u093E\u0924 \u0915\u094B\u0923\u0924\u0940\u0939\u0940 \u0930\u0942\u092A\u0930\u0947\u0937\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940",
        addBookmark: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u091C\u094B\u0921\u093E",
        save: "\u091C\u0924\u0928 \u0915\u0930\u093E",
        cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u093E",
        noBookmarks: "\u0905\u0926\u094D\u092F\u093E\u092A \u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u091C\u094B\u0921\u0932\u0947\u0932\u0947 \u0928\u093E\u0939\u0940\u0924",
        bookmarkTitle: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0936\u0940\u0930\u094D\u0937\u0915",
        deleteBookmark: "\u092C\u0941\u0915\u092E\u093E\u0930\u094D\u0915 \u0939\u091F\u0935\u093E:"
      },
      annotations: {
        title: "\u091F\u093F\u092A\u094D\u092A\u0923\u094D\u092F\u093E",
        addNote: "\u091F\u0940\u092A \u091C\u094B\u0921\u093E",
        addHighlight: "\u0939\u093E\u092F\u0932\u093E\u0907\u091F \u091C\u094B\u0921\u093E",
        addDrawing: "\u0930\u0947\u0916\u093E\u091A\u093F\u0924\u094D\u0930 \u091C\u094B\u0921\u093E",
        note: "\u091F\u0940\u092A",
        highlight: "\u0939\u093E\u092F\u0932\u093E\u0907\u091F",
        drawing: "\u0930\u0947\u0916\u093E\u091A\u093F\u0924\u094D\u0930",
        noAnnotations: "\u0905\u0926\u094D\u092F\u093E\u092A \u0915\u094B\u0923\u0924\u094D\u092F\u093E\u0939\u0940 \u091F\u093F\u092A\u094D\u092A\u0923\u094D\u092F\u093E \u091C\u094B\u0921\u0932\u094D\u092F\u093E \u0928\u093E\u0939\u0940\u0924. \u0924\u0941\u092E\u091A\u094D\u092F\u093E \u0926\u0938\u094D\u0924\u0910\u0935\u091C\u093E\u0924 \u091F\u093F\u092A\u094D\u092A\u0923\u094D\u092F\u093E \u091C\u094B\u0921\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0935\u0930\u0940\u0932 \u0938\u093E\u0927\u0928\u0947 \u0935\u093E\u092A\u0930\u093E.",
        addNoteHint: "\u091F\u0940\u092A \u091C\u094B\u0921\u093E...",
        page: "\u092A\u0943\u0937\u094D\u0920",
        cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u093E",
        colorSetTo: "\u0930\u0902\u0917 \u0938\u0947\u091F \u0915\u0930\u093E",
        noContent: "\u0915\u094B\u0923\u0924\u093E\u0939\u0940 \u092E\u091C\u0915\u0942\u0930 \u0928\u093E\u0939\u0940",
        delete: "\u091F\u093F\u092A\u094D\u092A\u0923\u0940 \u0939\u091F\u0935\u093E"
      },
      info: {
        title: "\u092E\u093E\u0939\u093F\u0924\u0940",
        close: "\u092E\u093E\u0939\u093F\u0924\u0940 \u092A\u0945\u0928\u0947\u0932 \u092C\u0902\u0926 \u0915\u0930\u093E"
      },
      locale: {
        selectLanguage: "\u092D\u093E\u0937\u093E \u0928\u093F\u0935\u0921\u093E",
        changeTo: "\u092D\u093E\u0937\u093E \u092C\u0926\u0932\u093E"
      },
      credits: {
        createdWith: "\u0938\u0939 \u0924\u092F\u093E\u0930 \u0915\u0947\u0932\u0947",
        by: "\u0926\u094D\u0935\u093E\u0930\u0947"
      }
    };
  }
});

// src/locales/ms.json
var require_ms = __commonJS({
  "src/locales/ms.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Halaman sebelumnya",
        nextPage: "Halaman seterusnya",
        pageOf: "daripada"
      },
      leftPanel: {
        previews: "Pratonton Halaman",
        search: "Cari dokumen",
        bookmarks: "Penanda dan rangka",
        annotations: "Anotasi"
      },
      toolbar: {
        rotateCounterclockwise: "Putar lawan arah jam",
        rotateClockwise: "Putar ikut arah jam",
        zoomLevel: "Tahap zum",
        print: "Cetak dokumen",
        fullscreen: "Skrin penuh",
        exitFullscreen: "Keluar dari skrin penuh",
        download: "Muat turun PDF"
      },
      search: {
        title: "Cari",
        placeholder: "Cari dalam dokumen...",
        matches: "padanan",
        noResults: "Tiada hasil ditemui",
        searching: "Mencari...",
        previousResult: "Hasil sebelumnya",
        nextResult: "Hasil seterusnya",
        page: "Halaman",
        incompleteDocumentError: "Berlaku ralat semasa mencari. Sila cuba lagi selepas dokumen dimuat sepenuhnya.",
        waitLoading: "Sila tunggu dokumen dimuat sepenuhnya sebelum mencari."
      },
      bookmarks: {
        outline: "Rangka",
        bookmarks: "Penanda",
        noOutline: "Tiada rangka tersedia dalam dokumen ini",
        addBookmark: "Tambah penanda",
        save: "Simpan",
        cancel: "Batal",
        noBookmarks: "Belum ada penanda ditambah",
        bookmarkTitle: "Tajuk penanda",
        deleteBookmark: "Padam penanda:"
      },
      annotations: {
        title: "Anotasi",
        addNote: "Tambah nota",
        addHighlight: "Tambah sorotan",
        addDrawing: "Tambah lukisan",
        note: "Nota",
        highlight: "Sorotan",
        drawing: "Lukisan",
        noAnnotations: "Belum ada anotasi ditambah. Gunakan alat di atas untuk menambah anotasi ke dokumen anda.",
        addNoteHint: "Tambah nota...",
        page: "Halaman",
        cancel: "Batal",
        colorSetTo: "Tetapkan warna kepada",
        noContent: "Tiada kandungan",
        delete: "Padam anotasi"
      },
      info: {
        title: "Maklumat",
        close: "Tutup Panel Maklumat"
      },
      locale: {
        selectLanguage: "Pilih Bahasa",
        changeTo: "Tukar bahasa kepada"
      },
      credits: {
        createdWith: "Dicipta dengan",
        by: "oleh"
      }
    };
  }
});

// src/locales/nl.json
var require_nl = __commonJS({
  "src/locales/nl.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Vorige pagina",
        nextPage: "Volgende pagina",
        pageOf: "van"
      },
      leftPanel: {
        previews: "Paginavoorbeelden",
        search: "Document doorzoeken",
        bookmarks: "Bladwijzers en overzicht",
        annotations: "Aantekeningen"
      },
      toolbar: {
        rotateCounterclockwise: "Linksom draaien",
        rotateClockwise: "Rechtsom draaien",
        zoomLevel: "Zoomniveau",
        print: "Document afdrukken",
        fullscreen: "Volledig scherm",
        exitFullscreen: "Volledig scherm verlaten",
        download: "PDF downloaden"
      },
      search: {
        title: "Zoeken",
        placeholder: "Zoeken in document...",
        matches: "overeenkomsten",
        noResults: "Geen resultaten gevonden",
        searching: "Zoeken...",
        previousResult: "Vorig resultaat",
        nextResult: "Volgend resultaat",
        page: "Pagina",
        incompleteDocumentError: "Er is een fout opgetreden tijdens het zoeken. Probeer het opnieuw nadat het document volledig is geladen.",
        waitLoading: "Wacht tot het document volledig is geladen voordat u zoekt."
      },
      bookmarks: {
        outline: "Overzicht",
        bookmarks: "Bladwijzers",
        noOutline: "Geen overzicht beschikbaar in dit document",
        addBookmark: "Bladwijzer toevoegen",
        save: "Opslaan",
        cancel: "Annuleren",
        noBookmarks: "Nog geen bladwijzers toegevoegd",
        bookmarkTitle: "Bladwijzertitel",
        deleteBookmark: "Bladwijzer verwijderen:"
      },
      annotations: {
        title: "Aantekeningen",
        addNote: "Notitie toevoegen",
        addHighlight: "Markering toevoegen",
        addDrawing: "Tekening toevoegen",
        note: "Notitie",
        highlight: "Markering",
        drawing: "Tekening",
        noAnnotations: "Nog geen aantekeningen toegevoegd. Gebruik de bovenstaande tools om aantekeningen aan uw document toe te voegen.",
        addNoteHint: "Voeg een notitie toe...",
        page: "Pagina",
        cancel: "Annuleren",
        colorSetTo: "Kleur instellen op",
        noContent: "Geen inhoud",
        delete: "Aantekening verwijderen"
      },
      info: {
        title: "Info",
        close: "Infopaneel sluiten"
      },
      locale: {
        selectLanguage: "Taal selecteren",
        changeTo: "Taal wijzigen naar"
      },
      credits: {
        createdWith: "Gemaakt met",
        by: "door"
      }
    };
  }
});

// src/locales/no.json
var require_no = __commonJS({
  "src/locales/no.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Forrige side",
        nextPage: "Neste side",
        pageOf: "av"
      },
      leftPanel: {
        previews: "Sideforh\xE5ndsvisninger",
        search: "S\xF8k i dokument",
        bookmarks: "Bokmerker og disposisjon",
        annotations: "Merknader"
      },
      toolbar: {
        rotateCounterclockwise: "Roter mot klokken",
        rotateClockwise: "Roter med klokken",
        zoomLevel: "Zoom-niv\xE5",
        print: "Skriv ut dokument",
        fullscreen: "Fullskjerm",
        exitFullscreen: "Avslutt fullskjerm",
        download: "Last ned PDF"
      },
      search: {
        title: "S\xF8k",
        placeholder: "S\xF8k i dokumentet...",
        matches: "treff",
        noResults: "Ingen resultater funnet",
        searching: "S\xF8ker...",
        previousResult: "Forrige resultat",
        nextResult: "Neste resultat",
        page: "Side",
        incompleteDocumentError: "Det oppstod en feil under s\xF8ket. Pr\xF8v igjen etter at dokumentet er fullstendig lastet.",
        waitLoading: "Vennligst vent til dokumentet er fullstendig lastet f\xF8r du s\xF8ker."
      },
      bookmarks: {
        outline: "Disposisjon",
        bookmarks: "Bokmerker",
        noOutline: "Ingen disposisjon tilgjengelig i dette dokumentet",
        addBookmark: "Legg til bokmerke",
        save: "Lagre",
        cancel: "Avbryt",
        noBookmarks: "Ingen bokmerker lagt til enn\xE5",
        bookmarkTitle: "Bokmerketittel",
        deleteBookmark: "Slett bokmerke:"
      },
      annotations: {
        title: "Merknader",
        addNote: "Legg til notat",
        addHighlight: "Legg til utheving",
        addDrawing: "Legg til tegning",
        note: "Notat",
        highlight: "Utheving",
        drawing: "Tegning",
        noAnnotations: "Ingen merknader lagt til enn\xE5. Bruk verkt\xF8yene ovenfor for \xE5 legge til merknader i dokumentet ditt.",
        addNoteHint: "Legg til et notat...",
        page: "Side",
        cancel: "Avbryt",
        colorSetTo: "Sett farge til",
        noContent: "Ingen innhold",
        delete: "Slett merknad"
      },
      info: {
        title: "Informasjon",
        close: "Lukk informasjonspanel"
      },
      locale: {
        selectLanguage: "Velg spr\xE5k",
        changeTo: "Endre spr\xE5k til"
      },
      credits: {
        createdWith: "Laget med",
        by: "av"
      }
    };
  }
});

// src/locales/pa.json
var require_pa = __commonJS({
  "src/locales/pa.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0A2A\u0A3F\u0A1B\u0A32\u0A3E \u0A2A\u0A70\u0A28\u0A3E",
        nextPage: "\u0A05\u0A17\u0A32\u0A3E \u0A2A\u0A70\u0A28\u0A3E",
        pageOf: "\u0A26\u0A3E"
      },
      leftPanel: {
        previews: "\u0A2A\u0A70\u0A28\u0A3E \u0A1D\u0A32\u0A15",
        search: "\u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A16\u0A4B\u0A1C\u0A4B",
        bookmarks: "\u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15 \u0A05\u0A24\u0A47 \u0A30\u0A42\u0A2A-\u0A30\u0A47\u0A16\u0A3E",
        annotations: "\u0A1F\u0A3F\u0A71\u0A2A\u0A23\u0A40\u0A06\u0A02"
      },
      toolbar: {
        rotateCounterclockwise: "\u0A18\u0A5C\u0A40 \u0A26\u0A40 \u0A09\u0A32\u0A1F \u0A26\u0A3F\u0A38\u0A3C\u0A3E \u0A35\u0A3F\u0A71\u0A1A \u0A18\u0A41\u0A2E\u0A3E\u0A13",
        rotateClockwise: "\u0A18\u0A5C\u0A40 \u0A26\u0A40 \u0A26\u0A3F\u0A38\u0A3C\u0A3E \u0A35\u0A3F\u0A71\u0A1A \u0A18\u0A41\u0A2E\u0A3E\u0A13",
        zoomLevel: "\u0A1C\u0A3C\u0A42\u0A2E \u0A2A\u0A71\u0A27\u0A30",
        print: "\u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A2A\u0A4D\u0A30\u0A3F\u0A70\u0A1F \u0A15\u0A30\u0A4B",
        fullscreen: "\u0A2A\u0A42\u0A30\u0A40 \u0A38\u0A15\u0A30\u0A40\u0A28",
        exitFullscreen: "\u0A2A\u0A42\u0A30\u0A40 \u0A38\u0A15\u0A30\u0A40\u0A28 \u0A24\u0A4B\u0A02 \u0A2C\u0A3E\u0A39\u0A30 \u0A28\u0A3F\u0A15\u0A32\u0A4B",
        download: "PDF \u0A21\u0A3E\u0A0A\u0A28\u0A32\u0A4B\u0A21 \u0A15\u0A30\u0A4B"
      },
      search: {
        title: "\u0A16\u0A4B\u0A1C",
        placeholder: "\u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A35\u0A3F\u0A71\u0A1A \u0A16\u0A4B\u0A1C\u0A4B...",
        matches: "\u0A2E\u0A47\u0A32",
        noResults: "\u0A15\u0A4B\u0A08 \u0A28\u0A24\u0A40\u0A1C\u0A47 \u0A28\u0A39\u0A40\u0A02 \u0A2E\u0A3F\u0A32\u0A47",
        searching: "\u0A16\u0A4B\u0A1C \u0A15\u0A40\u0A24\u0A40 \u0A1C\u0A3E \u0A30\u0A39\u0A40 \u0A39\u0A48...",
        previousResult: "\u0A2A\u0A3F\u0A1B\u0A32\u0A3E \u0A28\u0A24\u0A40\u0A1C\u0A3E",
        nextResult: "\u0A05\u0A17\u0A32\u0A3E \u0A28\u0A24\u0A40\u0A1C\u0A3E",
        page: "\u0A2A\u0A70\u0A28\u0A3E",
        incompleteDocumentError: "\u0A16\u0A4B\u0A1C \u0A15\u0A30\u0A26\u0A47 \u0A38\u0A2E\u0A47\u0A02 \u0A07\u0A71\u0A15 \u0A17\u0A32\u0A24\u0A40 \u0A39\u0A4B\u0A08 \u0A38\u0A40\u0964 \u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A26\u0A47 \u0A2A\u0A42\u0A30\u0A40 \u0A24\u0A30\u0A4D\u0A39\u0A3E\u0A02 \u0A32\u0A4B\u0A21 \u0A39\u0A4B\u0A23 \u0A24\u0A4B\u0A02 \u0A2C\u0A3E\u0A05\u0A26 \u0A26\u0A41\u0A2C\u0A3E\u0A30\u0A3E \u0A15\u0A4B\u0A38\u0A3C\u0A3F\u0A38\u0A3C \u0A15\u0A30\u0A4B\u0964",
        waitLoading: "\u0A16\u0A4B\u0A1C \u0A15\u0A30\u0A28 \u0A24\u0A4B\u0A02 \u0A2A\u0A39\u0A3F\u0A32\u0A3E\u0A02 \u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A26\u0A47 \u0A2A\u0A42\u0A30\u0A40 \u0A24\u0A30\u0A4D\u0A39\u0A3E\u0A02 \u0A32\u0A4B\u0A21 \u0A39\u0A4B\u0A23 \u0A26\u0A40 \u0A09\u0A21\u0A40\u0A15 \u0A15\u0A30\u0A4B\u0964"
      },
      bookmarks: {
        outline: "\u0A30\u0A42\u0A2A-\u0A30\u0A47\u0A16\u0A3E",
        bookmarks: "\u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15",
        noOutline: "\u0A07\u0A38 \u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A35\u0A3F\u0A71\u0A1A \u0A15\u0A4B\u0A08 \u0A30\u0A42\u0A2A-\u0A30\u0A47\u0A16\u0A3E \u0A09\u0A2A\u0A32\u0A2C\u0A27 \u0A28\u0A39\u0A40\u0A02 \u0A39\u0A48",
        addBookmark: "\u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15 \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A4B",
        save: "\u0A38\u0A41\u0A30\u0A71\u0A16\u0A3F\u0A05\u0A24 \u0A15\u0A30\u0A4B",
        cancel: "\u0A30\u0A71\u0A26 \u0A15\u0A30\u0A4B",
        noBookmarks: "\u0A05\u0A1C\u0A47 \u0A24\u0A71\u0A15 \u0A15\u0A4B\u0A08 \u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15 \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A28\u0A39\u0A40\u0A02 \u0A15\u0A40\u0A24\u0A47 \u0A17\u0A0F",
        bookmarkTitle: "\u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15 \u0A26\u0A3E \u0A38\u0A3F\u0A30\u0A32\u0A47\u0A16",
        deleteBookmark: "\u0A2C\u0A41\u0A71\u0A15\u0A2E\u0A3E\u0A30\u0A15 \u0A2E\u0A3F\u0A1F\u0A3E\u0A13:"
      },
      annotations: {
        title: "\u0A1F\u0A3F\u0A71\u0A2A\u0A23\u0A40\u0A06\u0A02",
        addNote: "\u0A28\u0A4B\u0A1F \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A4B",
        addHighlight: "\u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A4B",
        addDrawing: "\u0A21\u0A30\u0A3E\u0A07\u0A70\u0A17 \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A4B",
        note: "\u0A28\u0A4B\u0A1F",
        highlight: "\u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F",
        drawing: "\u0A21\u0A30\u0A3E\u0A07\u0A70\u0A17",
        noAnnotations: "\u0A05\u0A1C\u0A47 \u0A24\u0A71\u0A15 \u0A15\u0A4B\u0A08 \u0A1F\u0A3F\u0A71\u0A2A\u0A23\u0A40\u0A06\u0A02 \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A28\u0A39\u0A40\u0A02 \u0A15\u0A40\u0A24\u0A40\u0A06\u0A02 \u0A17\u0A08\u0A06\u0A02\u0964 \u0A06\u0A2A\u0A23\u0A47 \u0A26\u0A38\u0A24\u0A3E\u0A35\u0A47\u0A1C\u0A3C \u0A35\u0A3F\u0A71\u0A1A \u0A1F\u0A3F\u0A71\u0A2A\u0A23\u0A40\u0A06\u0A02 \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A28 \u0A32\u0A08 \u0A09\u0A71\u0A2A\u0A30 \u0A26\u0A3F\u0A71\u0A24\u0A47 \u0A1F\u0A42\u0A32 \u0A26\u0A40 \u0A35\u0A30\u0A24\u0A4B\u0A02 \u0A15\u0A30\u0A4B\u0964",
        addNoteHint: "\u0A07\u0A71\u0A15 \u0A28\u0A4B\u0A1F \u0A38\u0A3C\u0A3E\u0A2E\u0A32 \u0A15\u0A30\u0A4B...",
        page: "\u0A2A\u0A70\u0A28\u0A3E",
        cancel: "\u0A30\u0A71\u0A26 \u0A15\u0A30\u0A4B",
        colorSetTo: "\u0A30\u0A70\u0A17 \u0A38\u0A48\u0A71\u0A1F \u0A15\u0A30\u0A4B",
        noContent: "\u0A15\u0A4B\u0A08 \u0A38\u0A2E\u0A71\u0A17\u0A30\u0A40 \u0A28\u0A39\u0A40\u0A02",
        delete: "\u0A1F\u0A3F\u0A71\u0A2A\u0A23\u0A40 \u0A2E\u0A3F\u0A1F\u0A3E\u0A13"
      },
      info: {
        title: "\u0A1C\u0A3E\u0A23\u0A15\u0A3E\u0A30\u0A40",
        close: "\u0A1C\u0A3E\u0A23\u0A15\u0A3E\u0A30\u0A40 \u0A2A\u0A48\u0A28\u0A32 \u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B"
      },
      locale: {
        selectLanguage: "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E \u0A1A\u0A41\u0A23\u0A4B",
        changeTo: "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E \u0A2C\u0A26\u0A32\u0A4B"
      },
      credits: {
        createdWith: "\u0A28\u0A3E\u0A32 \u0A2C\u0A23\u0A3E\u0A07\u0A06 \u0A17\u0A3F\u0A06",
        by: "\u0A26\u0A41\u0A06\u0A30\u0A3E"
      }
    };
  }
});

// src/locales/pl.json
var require_pl = __commonJS({
  "src/locales/pl.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Poprzednia strona",
        nextPage: "Nast\u0119pna strona",
        pageOf: "z"
      },
      leftPanel: {
        previews: "Podgl\u0105d stron",
        search: "Przeszukaj dokument",
        bookmarks: "Zak\u0142adki i konspekt",
        annotations: "Adnotacje"
      },
      toolbar: {
        rotateCounterclockwise: "Obr\xF3\u0107 w lewo",
        rotateClockwise: "Obr\xF3\u0107 w prawo",
        zoomLevel: "Poziom powi\u0119kszenia",
        print: "Drukuj dokument",
        fullscreen: "Pe\u0142ny ekran",
        exitFullscreen: "Wyjd\u017A z pe\u0142nego ekranu",
        download: "Pobierz PDF"
      },
      search: {
        title: "Szukaj",
        placeholder: "Szukaj w dokumencie...",
        matches: "dopasowa\u0144",
        noResults: "Nie znaleziono wynik\xF3w",
        searching: "Wyszukiwanie...",
        previousResult: "Poprzedni wynik",
        nextResult: "Nast\u0119pny wynik",
        page: "Strona",
        incompleteDocumentError: "Wyst\u0105pi\u0142 b\u0142\u0105d podczas wyszukiwania. Spr\xF3buj ponownie po ca\u0142kowitym za\u0142adowaniu dokumentu.",
        waitLoading: "Poczekaj na ca\u0142kowite za\u0142adowanie dokumentu przed rozpocz\u0119ciem wyszukiwania."
      },
      bookmarks: {
        outline: "Konspekt",
        bookmarks: "Zak\u0142adki",
        noOutline: "Brak dost\u0119pnego konspektu w tym dokumencie",
        addBookmark: "Dodaj zak\u0142adk\u0119",
        save: "Zapisz",
        cancel: "Anuluj",
        noBookmarks: "Nie dodano jeszcze zak\u0142adek",
        bookmarkTitle: "Tytu\u0142 zak\u0142adki",
        deleteBookmark: "Usu\u0144 zak\u0142adk\u0119:"
      },
      annotations: {
        title: "Adnotacje",
        addNote: "Dodaj notatk\u0119",
        addHighlight: "Dodaj wyr\xF3\u017Cnienie",
        addDrawing: "Dodaj rysunek",
        note: "Notatka",
        highlight: "Wyr\xF3\u017Cnienie",
        drawing: "Rysunek",
        noAnnotations: "Nie dodano jeszcze adnotacji. U\u017Cyj powy\u017Cszych narz\u0119dzi, aby doda\u0107 adnotacje do dokumentu.",
        addNoteHint: "Dodaj notatk\u0119...",
        page: "Strona",
        cancel: "Anuluj",
        colorSetTo: "Ustaw kolor na",
        noContent: "Brak tre\u015Bci",
        delete: "Usu\u0144 adnotacj\u0119"
      },
      info: {
        title: "Informacje",
        close: "Zamknij panel informacyjny"
      },
      locale: {
        selectLanguage: "Wybierz j\u0119zyk",
        changeTo: "Zmie\u0144 j\u0119zyk na"
      },
      credits: {
        createdWith: "Utworzono przy u\u017Cyciu",
        by: "przez"
      }
    };
  }
});

// src/locales/pt.json
var require_pt = __commonJS({
  "src/locales/pt.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "P\xE1gina anterior",
        nextPage: "Pr\xF3xima p\xE1gina",
        pageOf: "de"
      },
      leftPanel: {
        previews: "Pr\xE9-visualiza\xE7\xF5es de p\xE1gina",
        search: "Pesquisar documento",
        bookmarks: "Marcadores e estrutura",
        annotations: "Anota\xE7\xF5es"
      },
      toolbar: {
        rotateCounterclockwise: "Rodar no sentido anti-hor\xE1rio",
        rotateClockwise: "Rodar no sentido hor\xE1rio",
        zoomLevel: "N\xEDvel de zoom",
        print: "Imprimir documento",
        fullscreen: "Entrar em tela cheia",
        exitFullscreen: "Sair da tela cheia",
        download: "Baixar PDF"
      },
      search: {
        title: "Pesquisar",
        placeholder: "Pesquisar no documento...",
        matches: "correspond\xEAncias",
        noResults: "Nenhum resultado encontrado",
        searching: "Pesquisando...",
        previousResult: "Resultado anterior",
        nextResult: "Pr\xF3ximo resultado",
        page: "P\xE1gina",
        incompleteDocumentError: "Ocorreu um erro durante a pesquisa. Por favor, tente novamente ap\xF3s o documento ser totalmente carregado.",
        waitLoading: "Aguarde o documento carregar completamente antes de pesquisar."
      },
      bookmarks: {
        outline: "Estrutura",
        bookmarks: "Marcadores",
        noOutline: "Nenhuma estrutura dispon\xEDvel neste documento",
        addBookmark: "Adicionar marcador",
        save: "Salvar",
        cancel: "Cancelar",
        noBookmarks: "Nenhum marcador adicionado ainda",
        bookmarkTitle: "T\xEDtulo do marcador",
        deleteBookmark: "Excluir marcador:"
      },
      annotations: {
        title: "Anota\xE7\xF5es",
        addNote: "Adicionar nota",
        addHighlight: "Adicionar destaque",
        addDrawing: "Adicionar desenho",
        note: "Nota",
        highlight: "Destaque",
        drawing: "Desenho",
        noAnnotations: "Nenhuma anota\xE7\xE3o adicionada ainda. Use as ferramentas acima para adicionar anota\xE7\xF5es ao seu documento.",
        addNoteHint: "Adicionar uma nota...",
        page: "P\xE1gina",
        cancel: "Cancelar",
        colorSetTo: "Definir cor para",
        noContent: "Sem conte\xFAdo",
        delete: "Excluir anota\xE7\xE3o"
      },
      info: {
        title: "Informa\xE7\xF5es",
        close: "Fechar painel de informa\xE7\xF5es"
      },
      locale: {
        selectLanguage: "Selecionar idioma",
        changeTo: "Mudar idioma para"
      },
      credits: {
        createdWith: "Criado com",
        by: "por"
      }
    };
  }
});

// src/locales/ro.json
var require_ro = __commonJS({
  "src/locales/ro.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Pagina anterioar\u0103",
        nextPage: "Pagina urm\u0103toare",
        pageOf: "din"
      },
      leftPanel: {
        previews: "Previzualiz\u0103ri pagini",
        search: "Caut\u0103 \xEEn document",
        bookmarks: "Semne de carte \u0219i structur\u0103",
        annotations: "Adnot\u0103ri"
      },
      toolbar: {
        rotateCounterclockwise: "Rotire \xEEn sens invers acelor de ceasornic",
        rotateClockwise: "Rotire \xEEn sensul acelor de ceasornic",
        zoomLevel: "Nivel de zoom",
        print: "Imprim\u0103 documentul",
        fullscreen: "Ecran complet",
        exitFullscreen: "Ie\u0219ire din ecran complet",
        download: "Descarc\u0103 PDF"
      },
      search: {
        title: "Caut\u0103",
        placeholder: "Caut\u0103 \xEEn document...",
        matches: "potriviri",
        noResults: "Nu s-au g\u0103sit rezultate",
        searching: "Se caut\u0103...",
        previousResult: "Rezultatul anterior",
        nextResult: "Rezultatul urm\u0103tor",
        page: "Pagina",
        incompleteDocumentError: "A ap\u0103rut o eroare \xEEn timpul c\u0103ut\u0103rii. V\u0103 rug\u0103m s\u0103 \xEEncerca\u021Bi din nou dup\u0103 ce documentul este complet \xEEnc\u0103rcat.",
        waitLoading: "V\u0103 rug\u0103m s\u0103 a\u0219tepta\u021Bi \xEEnc\u0103rcarea complet\u0103 a documentului \xEEnainte de a c\u0103uta."
      },
      bookmarks: {
        outline: "Structur\u0103",
        bookmarks: "Semne de carte",
        noOutline: "Nu exist\u0103 structur\u0103 disponibil\u0103 \xEEn acest document",
        addBookmark: "Adaug\u0103 semn de carte",
        save: "Salveaz\u0103",
        cancel: "Anuleaz\u0103",
        noBookmarks: "Nu au fost ad\u0103ugate \xEEnc\u0103 semne de carte",
        bookmarkTitle: "Titlu semn de carte",
        deleteBookmark: "\u0218terge semn de carte:"
      },
      annotations: {
        title: "Adnot\u0103ri",
        addNote: "Adaug\u0103 not\u0103",
        addHighlight: "Adaug\u0103 eviden\u021Biere",
        addDrawing: "Adaug\u0103 desen",
        note: "Not\u0103",
        highlight: "Eviden\u021Biere",
        drawing: "Desen",
        noAnnotations: "Nu au fost ad\u0103ugate \xEEnc\u0103 adnot\u0103ri. Utiliza\u021Bi instrumentele de mai sus pentru a ad\u0103uga adnot\u0103ri la documentul dvs.",
        addNoteHint: "Adaug\u0103 o not\u0103...",
        page: "Pagina",
        cancel: "Anuleaz\u0103",
        colorSetTo: "Seteaz\u0103 culoarea la",
        noContent: "F\u0103r\u0103 con\u021Binut",
        delete: "\u0218terge adnotarea"
      },
      info: {
        title: "Informa\u021Bii",
        close: "\xCEnchide panoul de informa\u021Bii"
      },
      locale: {
        selectLanguage: "Selecteaz\u0103 limba",
        changeTo: "Schimb\u0103 limba \xEEn"
      },
      credits: {
        createdWith: "Creat cu",
        by: "de"
      }
    };
  }
});

// src/locales/ru.json
var require_ru = __commonJS({
  "src/locales/ru.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        nextPage: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        pageOf: "\u0438\u0437"
      },
      leftPanel: {
        previews: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
        search: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0443",
        bookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        annotations: "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438"
      },
      toolbar: {
        rotateCounterclockwise: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0438",
        rotateClockwise: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0435",
        zoomLevel: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430",
        print: "\u041F\u0435\u0447\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        fullscreen: "\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
        exitFullscreen: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
        download: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF"
      },
      search: {
        title: "\u041F\u043E\u0438\u0441\u043A",
        placeholder: "\u041F\u043E\u0438\u0441\u043A \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435...",
        matches: "\u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439",
        noResults: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
        searching: "\u041F\u043E\u0438\u0441\u043A...",
        previousResult: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        nextResult: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        page: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        incompleteDocumentError: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u043D\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430.",
        waitLoading: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0434\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u043F\u043E\u043B\u043D\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0438\u0441\u043A\u043E\u043C."
      },
      bookmarks: {
        outline: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        bookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
        noOutline: "\u0412 \u044D\u0442\u043E\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B",
        addBookmark: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443",
        save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
        cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
        noBookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B",
        bookmarkTitle: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
        deleteBookmark: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443:"
      },
      annotations: {
        title: "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438",
        addNote: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443",
        addHighlight: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
        addDrawing: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A",
        note: "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
        highlight: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
        drawing: "\u0420\u0438\u0441\u0443\u043D\u043E\u043A",
        noAnnotations: "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0432\u044B\u0448\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0443.",
        addNoteHint: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443...",
        page: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
        colorSetTo: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442",
        noContent: "\u041D\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E",
        delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044E"
      },
      info: {
        title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C"
      },
      locale: {
        selectLanguage: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044F\u0437\u044B\u043A",
        changeTo: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u043D\u0430"
      },
      credits: {
        createdWith: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
        by: "\u043E\u0442"
      }
    };
  }
});

// src/locales/sv.json
var require_sv = __commonJS({
  "src/locales/sv.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "F\xF6reg\xE5ende sida",
        nextPage: "N\xE4sta sida",
        pageOf: "av"
      },
      leftPanel: {
        previews: "Sidf\xF6rhandsvisningar",
        search: "S\xF6k i dokument",
        bookmarks: "Bokm\xE4rken och disposition",
        annotations: "Anteckningar"
      },
      toolbar: {
        rotateCounterclockwise: "Rotera moturs",
        rotateClockwise: "Rotera medurs",
        zoomLevel: "Zoomniv\xE5",
        print: "Skriv ut dokument",
        fullscreen: "Fullsk\xE4rm",
        exitFullscreen: "Avsluta fullsk\xE4rm",
        download: "Ladda ner PDF"
      },
      search: {
        title: "S\xF6k",
        placeholder: "S\xF6k i dokumentet...",
        matches: "tr\xE4ffar",
        noResults: "Inga resultat hittades",
        searching: "S\xF6ker...",
        previousResult: "F\xF6reg\xE5ende resultat",
        nextResult: "N\xE4sta resultat",
        page: "Sida",
        incompleteDocumentError: "Ett fel uppstod vid s\xF6kning. F\xF6rs\xF6k igen efter att dokumentet har laddats helt.",
        waitLoading: "V\xE4nta tills dokumentet har laddats helt innan du s\xF6ker."
      },
      bookmarks: {
        outline: "Disposition",
        bookmarks: "Bokm\xE4rken",
        noOutline: "Ingen disposition tillg\xE4nglig i detta dokument",
        addBookmark: "L\xE4gg till bokm\xE4rke",
        save: "Spara",
        cancel: "Avbryt",
        noBookmarks: "Inga bokm\xE4rken har lagts till \xE4n",
        bookmarkTitle: "Bokm\xE4rkestitel",
        deleteBookmark: "Ta bort bokm\xE4rke:"
      },
      annotations: {
        title: "Anteckningar",
        addNote: "L\xE4gg till anteckning",
        addHighlight: "L\xE4gg till markering",
        addDrawing: "L\xE4gg till ritning",
        note: "Anteckning",
        highlight: "Markering",
        drawing: "Ritning",
        noAnnotations: "Inga anteckningar har lagts till \xE4n. Anv\xE4nd verktygen ovan f\xF6r att l\xE4gga till anteckningar i ditt dokument.",
        addNoteHint: "L\xE4gg till en anteckning...",
        page: "Sida",
        cancel: "Avbryt",
        colorSetTo: "St\xE4ll in f\xE4rg till",
        noContent: "Inget inneh\xE5ll",
        delete: "Ta bort anteckning"
      },
      info: {
        title: "Information",
        close: "St\xE4ng informationspanel"
      },
      locale: {
        selectLanguage: "V\xE4lj spr\xE5k",
        changeTo: "\xC4ndra spr\xE5k till"
      },
      credits: {
        createdWith: "Skapad med",
        by: "av"
      }
    };
  }
});

// src/locales/sw.json
var require_sw = __commonJS({
  "src/locales/sw.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Ukurasa uliopita",
        nextPage: "Ukurasa unaofuata",
        pageOf: "kati ya"
      },
      leftPanel: {
        previews: "Hakikisho za Kurasa",
        search: "Tafuta hati",
        bookmarks: "Alamisho na muhtasari",
        annotations: "Maelezo"
      },
      toolbar: {
        rotateCounterclockwise: "Zungusha kinyume cha saa",
        rotateClockwise: "Zungusha kulingana na saa",
        zoomLevel: "Kiwango cha ukuza",
        print: "Chapisha hati",
        fullscreen: "Skrini kamili",
        exitFullscreen: "Toka skrini kamili",
        download: "Pakua PDF"
      },
      search: {
        title: "Tafuta",
        placeholder: "Tafuta katika hati...",
        matches: "matokeo",
        noResults: "Hakuna matokeo yaliyopatikana",
        searching: "Inatafuta...",
        previousResult: "Tokeo lililopita",
        nextResult: "Tokeo linalofuata",
        page: "Ukurasa",
        incompleteDocumentError: "Kulikuwa na hitilafu wakati wa kutafuta. Tafadhali jaribu tena baada ya hati kupakiwa kikamilifu.",
        waitLoading: "Tafadhali subiri hati ipakiwe kikamilifu kabla ya kutafuta."
      },
      bookmarks: {
        outline: "Muhtasari",
        bookmarks: "Alamisho",
        noOutline: "Hakuna muhtasari unapatikana katika hati hii",
        addBookmark: "Ongeza alamisho",
        save: "Hifadhi",
        cancel: "Ghairi",
        noBookmarks: "Bado hakuna alamisho zilizoongezwa",
        bookmarkTitle: "Kichwa cha alamisho",
        deleteBookmark: "Futa alamisho:"
      },
      annotations: {
        title: "Maelezo",
        addNote: "Ongeza dokezo",
        addHighlight: "Ongeza mwangaza",
        addDrawing: "Ongeza mchoro",
        note: "Dokezo",
        highlight: "Mwangaza",
        drawing: "Mchoro",
        noAnnotations: "Bado hakuna maelezo yaliyoongezwa. Tumia zana hapo juu kuongeza maelezo kwenye hati yako.",
        addNoteHint: "Ongeza dokezo...",
        page: "Ukurasa",
        cancel: "Ghairi",
        colorSetTo: "Weka rangi kuwa",
        noContent: "Hakuna maudhui",
        delete: "Futa maelezo"
      },
      info: {
        title: "Maelezo",
        close: "Funga Paneli ya Maelezo"
      },
      locale: {
        selectLanguage: "Chagua Lugha",
        changeTo: "Badilisha lugha kuwa"
      },
      credits: {
        createdWith: "Imeundwa na",
        by: "na"
      }
    };
  }
});

// src/locales/ta.json
var require_ta = __commonJS({
  "src/locales/ta.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0BAE\u0BC1\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF \u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
        nextPage: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
        pageOf: "\u0B87\u0BB2\u0BCD"
      },
      leftPanel: {
        previews: "\u0BAA\u0B95\u0BCD\u0B95 \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BCB\u0B9F\u0BCD\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        search: "\u0B86\u0BB5\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1",
        bookmarks: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BB5\u0BB0\u0BC8\u0BB5\u0BC1",
        annotations: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"
      },
      toolbar: {
        rotateCounterclockwise: "\u0B8E\u0BA4\u0BBF\u0BB0\u0BCD \u0BA4\u0BBF\u0B9A\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B9A\u0BC1\u0BB4\u0BB1\u0BCD\u0BB1\u0BC1",
        rotateClockwise: "\u0B95\u0B9F\u0BBF\u0B95\u0BBE\u0BB0 \u0BA4\u0BBF\u0B9A\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B9A\u0BC1\u0BB4\u0BB1\u0BCD\u0BB1\u0BC1",
        zoomLevel: "\u0BAA\u0BC6\u0BB0\u0BBF\u0BA4\u0BBE\u0B95\u0BCD\u0B95\u0BC1 \u0B85\u0BB3\u0BB5\u0BC1",
        print: "\u0B86\u0BB5\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 \u0B85\u0B9A\u0BCD\u0B9A\u0BBF\u0B9F\u0BC1",
        fullscreen: "\u0BAE\u0BC1\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC8",
        exitFullscreen: "\u0BAE\u0BC1\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC8\u0BAF\u0BBF\u0BB2\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1 \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1",
        download: "PDF \u0BAA\u0BA4\u0BBF\u0BB5\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0BAE\u0BCD"
      },
      search: {
        title: "\u0BA4\u0BC7\u0B9F\u0BB2\u0BCD",
        placeholder: "\u0B86\u0BB5\u0BA3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1...",
        matches: "\u0BAA\u0BCA\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        noResults: "\u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
        searching: "\u0BA4\u0BC7\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...",
        previousResult: "\u0BAE\u0BC1\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
        nextResult: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
        page: "\u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
        incompleteDocumentError: "\u0BA4\u0BC7\u0B9F\u0BC1\u0BAE\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BAA\u0BBF\u0BB4\u0BC8 \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0B86\u0BB5\u0BA3\u0BAE\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1\u0BAE\u0BC8\u0BAF\u0BBE\u0B95 \u0B8F\u0BB1\u0BCD\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAA\u0BBF\u0BB1\u0B95\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
        waitLoading: "\u0BA4\u0BC7\u0B9F\u0BC1\u0BB5\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD \u0B86\u0BB5\u0BA3\u0BAE\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1\u0BAE\u0BC8\u0BAF\u0BBE\u0B95 \u0B8F\u0BB1\u0BCD\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD \u0BB5\u0BB0\u0BC8 \u0B95\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD."
      },
      bookmarks: {
        outline: "\u0BB5\u0BB0\u0BC8\u0BB5\u0BC1",
        bookmarks: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF\u0B95\u0BB3\u0BCD",
        noOutline: "\u0B87\u0BA8\u0BCD\u0BA4 \u0B86\u0BB5\u0BA3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BB5\u0BB0\u0BC8\u0BB5\u0BC1 \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
        addBookmark: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF \u0B9A\u0BC7\u0BB0\u0BCD",
        save: "\u0B9A\u0BC7\u0BAE\u0BBF",
        cancel: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD",
        noBookmarks: "\u0B87\u0BA4\u0BC1\u0BB5\u0BB0\u0BC8 \u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
        bookmarkTitle: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1",
        deleteBookmark: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0B95\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC8 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1:"
      },
      annotations: {
        title: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
        addNote: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B9A\u0BC7\u0BB0\u0BCD",
        addHighlight: "\u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BAE\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD",
        addDrawing: "\u0BB5\u0BB0\u0BC8\u0BB5\u0BC1 \u0B9A\u0BC7\u0BB0\u0BCD",
        note: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1",
        highlight: "\u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BAE\u0BCD",
        drawing: "\u0BB5\u0BB0\u0BC8\u0BB5\u0BC1",
        noAnnotations: "\u0B87\u0BA4\u0BC1\u0BB5\u0BB0\u0BC8 \u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B86\u0BB5\u0BA3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95 \u0BAE\u0BC7\u0BB2\u0BC7 \u0B89\u0BB3\u0BCD\u0BB3 \u0B95\u0BB0\u0BC1\u0BB5\u0BBF\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD.",
        addNoteHint: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B9A\u0BC7\u0BB0\u0BCD...",
        page: "\u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
        cancel: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD",
        colorSetTo: "\u0BA8\u0BBF\u0BB1\u0BA4\u0BCD\u0BA4\u0BC8 \u0B85\u0BAE\u0BC8",
        noContent: "\u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
        delete: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC8 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1"
      },
      info: {
        title: "\u0BA4\u0B95\u0BB5\u0BB2\u0BCD",
        close: "\u0BA4\u0B95\u0BB5\u0BB2\u0BCD \u0BAA\u0BB2\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0BAE\u0BC2\u0B9F\u0BC1"
      },
      locale: {
        selectLanguage: "\u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
        changeTo: "\u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1"
      },
      credits: {
        createdWith: "\u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
        by: "\u0BAE\u0BC2\u0BB2\u0BAE\u0BCD"
      }
    };
  }
});

// src/locales/te.json
var require_te = __commonJS({
  "src/locales/te.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0C2E\u0C41\u0C28\u0C41\u0C2A\u0C1F\u0C3F \u0C2A\u0C47\u0C1C\u0C40",
        nextPage: "\u0C24\u0C26\u0C41\u0C2A\u0C30\u0C3F \u0C2A\u0C47\u0C1C\u0C40",
        pageOf: "\u0C2F\u0C4A\u0C15\u0C4D\u0C15"
      },
      leftPanel: {
        previews: "\u0C2A\u0C47\u0C1C\u0C40 \u0C2A\u0C4D\u0C30\u0C3F\u0C35\u0C4D\u0C2F\u0C42\u0C32\u0C41",
        search: "\u0C2A\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        bookmarks: "\u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D\u200C\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C30\u0C42\u0C2A\u0C30\u0C47\u0C16",
        annotations: "\u0C35\u0C4D\u0C2F\u0C3E\u0C16\u0C4D\u0C2F\u0C3E\u0C28\u0C3E\u0C32\u0C41"
      },
      toolbar: {
        rotateCounterclockwise: "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C02\u0C21\u0C3F",
        rotateClockwise: "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C02\u0C21\u0C3F",
        zoomLevel: "\u0C1C\u0C42\u0C2E\u0C4D \u0C38\u0C4D\u0C25\u0C3E\u0C2F\u0C3F",
        print: "\u0C2A\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2E\u0C41\u0C26\u0C4D\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        fullscreen: "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C38\u0C4D\u0C15\u0C4D\u0C30\u0C40\u0C28\u0C4D",
        exitFullscreen: "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C38\u0C4D\u0C15\u0C4D\u0C30\u0C40\u0C28\u0C4D \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C28\u0C3F\u0C37\u0C4D\u0C15\u0C4D\u0C30\u0C2E\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        download: "PDF \u0C21\u0C4C\u0C28\u0C4D\u200C\u0C32\u0C4B\u0C21\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F"
      },
      search: {
        title: "\u0C36\u0C4B\u0C27\u0C28",
        placeholder: "\u0C2A\u0C24\u0C4D\u0C30\u0C02\u0C32\u0C4B \u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F...",
        matches: "\u0C38\u0C30\u0C3F\u0C2A\u0C4B\u0C32\u0C3F\u0C15\u0C32\u0C41",
        noResults: "\u0C2B\u0C32\u0C3F\u0C24\u0C3E\u0C32\u0C41 \u0C15\u0C28\u0C41\u0C17\u0C4A\u0C28\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41",
        searching: "\u0C36\u0C4B\u0C27\u0C3F\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F...",
        previousResult: "\u0C2E\u0C41\u0C28\u0C41\u0C2A\u0C1F\u0C3F \u0C2B\u0C32\u0C3F\u0C24\u0C02",
        nextResult: "\u0C24\u0C26\u0C41\u0C2A\u0C30\u0C3F \u0C2B\u0C32\u0C3F\u0C24\u0C02",
        page: "\u0C2A\u0C47\u0C1C\u0C40",
        incompleteDocumentError: "\u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C47\u0C1F\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C41 \u0C32\u0C4B\u0C2A\u0C02 \u0C38\u0C02\u0C2D\u0C35\u0C3F\u0C02\u0C1A\u0C3F\u0C02\u0C26\u0C3F. \u0C2A\u0C24\u0C4D\u0C30\u0C02 \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F\u0C17\u0C3E \u0C32\u0C4B\u0C21\u0C4D \u0C05\u0C2F\u0C3F\u0C28 \u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24 \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
        waitLoading: "\u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C41\u0C02\u0C26\u0C41 \u0C2A\u0C24\u0C4D\u0C30\u0C02 \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F\u0C17\u0C3E \u0C32\u0C4B\u0C21\u0C4D \u0C05\u0C2F\u0C4D\u0C2F\u0C47 \u0C35\u0C30\u0C15\u0C41 \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C35\u0C47\u0C1A\u0C3F \u0C09\u0C02\u0C21\u0C02\u0C21\u0C3F."
      },
      bookmarks: {
        outline: "\u0C30\u0C42\u0C2A\u0C30\u0C47\u0C16",
        bookmarks: "\u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D\u200C\u0C32\u0C41",
        noOutline: "\u0C08 \u0C2A\u0C24\u0C4D\u0C30\u0C02\u0C32\u0C4B \u0C30\u0C42\u0C2A\u0C30\u0C47\u0C16 \u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41\u0C32\u0C4B \u0C32\u0C47\u0C26\u0C41",
        addBookmark: "\u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        save: "\u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        cancel: "\u0C30\u0C26\u0C4D\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        noBookmarks: "\u0C07\u0C02\u0C15\u0C3E \u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D\u200C\u0C32\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41",
        bookmarkTitle: "\u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D \u0C36\u0C40\u0C30\u0C4D\u0C37\u0C3F\u0C15",
        deleteBookmark: "\u0C2C\u0C41\u0C15\u0C4D\u200C\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C4D\u200C\u0C28\u0C41 \u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F:"
      },
      annotations: {
        title: "\u0C35\u0C4D\u0C2F\u0C3E\u0C16\u0C4D\u0C2F\u0C3E\u0C28\u0C3E\u0C32\u0C41",
        addNote: "\u0C17\u0C2E\u0C28\u0C3F\u0C15 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        addHighlight: "\u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        addDrawing: "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        note: "\u0C17\u0C2E\u0C28\u0C3F\u0C15",
        highlight: "\u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D",
        drawing: "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02",
        noAnnotations: "\u0C07\u0C02\u0C15\u0C3E \u0C35\u0C4D\u0C2F\u0C3E\u0C16\u0C4D\u0C2F\u0C3E\u0C28\u0C3E\u0C32\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41. \u0C2E\u0C40 \u0C2A\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C35\u0C4D\u0C2F\u0C3E\u0C16\u0C4D\u0C2F\u0C3E\u0C28\u0C3E\u0C32\u0C28\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2A\u0C48\u0C28 \u0C09\u0C28\u0C4D\u0C28 \u0C38\u0C3E\u0C27\u0C28\u0C3E\u0C32\u0C28\u0C41 \u0C09\u0C2A\u0C2F\u0C4B\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
        addNoteHint: "\u0C17\u0C2E\u0C28\u0C3F\u0C15 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F...",
        page: "\u0C2A\u0C47\u0C1C\u0C40",
        cancel: "\u0C30\u0C26\u0C4D\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        colorSetTo: "\u0C30\u0C02\u0C17\u0C41\u0C28\u0C41 \u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        noContent: "\u0C35\u0C3F\u0C37\u0C2F\u0C02 \u0C32\u0C47\u0C26\u0C41",
        delete: "\u0C35\u0C4D\u0C2F\u0C3E\u0C16\u0C4D\u0C2F\u0C3E\u0C28\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F"
      },
      info: {
        title: "\u0C38\u0C2E\u0C3E\u0C1A\u0C3E\u0C30\u0C02",
        close: "\u0C38\u0C2E\u0C3E\u0C1A\u0C3E\u0C30 \u0C2A\u0C4D\u0C2F\u0C3E\u0C28\u0C46\u0C32\u0C4D\u200C\u0C28\u0C41 \u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C02\u0C21\u0C3F"
      },
      locale: {
        selectLanguage: "\u0C2D\u0C3E\u0C37\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
        changeTo: "\u0C2D\u0C3E\u0C37\u0C28\u0C41 \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C02\u0C21\u0C3F"
      },
      credits: {
        createdWith: "\u0C24\u0C4B \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
        by: "\u0C26\u0C4D\u0C35\u0C3E\u0C30\u0C3E"
      }
    };
  }
});

// src/locales/th.json
var require_th = __commonJS({
  "src/locales/th.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u0E2B\u0E19\u0E49\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",
        nextPage: "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B",
        pageOf: "\u0E08\u0E32\u0E01"
      },
      leftPanel: {
        previews: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
        search: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
        bookmarks: "\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01\u0E41\u0E25\u0E30\u0E40\u0E04\u0E49\u0E32\u0E42\u0E04\u0E23\u0E07",
        annotations: "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A"
      },
      toolbar: {
        rotateCounterclockwise: "\u0E2B\u0E21\u0E38\u0E19\u0E17\u0E27\u0E19\u0E40\u0E02\u0E47\u0E21\u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32",
        rotateClockwise: "\u0E2B\u0E21\u0E38\u0E19\u0E15\u0E32\u0E21\u0E40\u0E02\u0E47\u0E21\u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32",
        zoomLevel: "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E0B\u0E39\u0E21",
        print: "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
        fullscreen: "\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D",
        exitFullscreen: "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E42\u0E2B\u0E21\u0E14\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D",
        download: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF"
      },
      search: {
        title: "\u0E04\u0E49\u0E19\u0E2B\u0E32",
        placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E43\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23...",
        matches: "\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
        noResults: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
        searching: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E04\u0E49\u0E19\u0E2B\u0E32...",
        previousResult: "\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",
        nextResult: "\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E16\u0E31\u0E14\u0E44\u0E1B",
        page: "\u0E2B\u0E19\u0E49\u0E32",
        incompleteDocumentError: "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E13\u0E30\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
        waitLoading: "\u0E42\u0E1B\u0E23\u0E14\u0E23\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E49\u0E19\u0E2B\u0E32"
      },
      bookmarks: {
        outline: "\u0E40\u0E04\u0E49\u0E32\u0E42\u0E04\u0E23\u0E07",
        bookmarks: "\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01",
        noOutline: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E04\u0E49\u0E32\u0E42\u0E04\u0E23\u0E07\u0E43\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E19\u0E35\u0E49",
        addBookmark: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01",
        save: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        cancel: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
        noBookmarks: "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E21",
        bookmarkTitle: "\u0E0A\u0E37\u0E48\u0E2D\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01",
        deleteBookmark: "\u0E25\u0E1A\u0E1A\u0E38\u0E4A\u0E01\u0E21\u0E32\u0E23\u0E4C\u0E01:"
      },
      annotations: {
        title: "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A",
        addNote: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        addHighlight: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E2E\u0E44\u0E25\u0E15\u0E4C",
        addDrawing: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E27\u0E32\u0E14",
        note: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
        highlight: "\u0E44\u0E2E\u0E44\u0E25\u0E15\u0E4C",
        drawing: "\u0E01\u0E32\u0E23\u0E27\u0E32\u0E14",
        noAnnotations: "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E21 \u0E43\u0E0A\u0E49\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E43\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
        addNoteHint: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01...",
        page: "\u0E2B\u0E19\u0E49\u0E32",
        cancel: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
        colorSetTo: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E40\u0E1B\u0E47\u0E19",
        noContent: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
        delete: "\u0E25\u0E1A\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A"
      },
      info: {
        title: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
        close: "\u0E1B\u0E34\u0E14\u0E41\u0E1C\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"
      },
      locale: {
        selectLanguage: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E29\u0E32",
        changeTo: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E40\u0E1B\u0E47\u0E19"
      },
      credits: {
        createdWith: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22",
        by: "\u0E42\u0E14\u0E22"
      }
    };
  }
});

// src/locales/tr.json
var require_tr = __commonJS({
  "src/locales/tr.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\xD6nceki sayfa",
        nextPage: "Sonraki sayfa",
        pageOf: "/"
      },
      leftPanel: {
        previews: "Sayfa \xD6nizlemeleri",
        search: "Belge ara",
        bookmarks: "Yer imleri ve anahat",
        annotations: "A\xE7\u0131klamalar"
      },
      toolbar: {
        rotateCounterclockwise: "Saat y\xF6n\xFCn\xFCn tersine d\xF6nd\xFCr",
        rotateClockwise: "Saat y\xF6n\xFCnde d\xF6nd\xFCr",
        zoomLevel: "Yak\u0131nla\u015Ft\u0131rma seviyesi",
        print: "Belgeyi yazd\u0131r",
        fullscreen: "Tam ekran",
        exitFullscreen: "Tam ekrandan \xE7\u0131k",
        download: "PDF'i indir"
      },
      search: {
        title: "Ara",
        placeholder: "Belgede ara...",
        matches: "e\u015Fle\u015Fme",
        noResults: "Sonu\xE7 bulunamad\u0131",
        searching: "Aran\u0131yor...",
        previousResult: "\xD6nceki sonu\xE7",
        nextResult: "Sonraki sonu\xE7",
        page: "Sayfa",
        incompleteDocumentError: "Arama s\u0131ras\u0131nda bir hata olu\u015Ftu. L\xFCtfen belge tamamen y\xFCklendikten sonra tekrar deneyin.",
        waitLoading: "Aramadan \xF6nce l\xFCtfen belgenin tamamen y\xFCklenmesini bekleyin."
      },
      bookmarks: {
        outline: "Anahat",
        bookmarks: "Yer imleri",
        noOutline: "Bu belgede kullan\u0131labilir anahat yok",
        addBookmark: "Yer imi ekle",
        save: "Kaydet",
        cancel: "\u0130ptal",
        noBookmarks: "Hen\xFCz yer imi eklenmedi",
        bookmarkTitle: "Yer imi ba\u015Fl\u0131\u011F\u0131",
        deleteBookmark: "Yer imini sil:"
      },
      annotations: {
        title: "A\xE7\u0131klamalar",
        addNote: "Not ekle",
        addHighlight: "Vurgu ekle",
        addDrawing: "\xC7izim ekle",
        note: "Not",
        highlight: "Vurgu",
        drawing: "\xC7izim",
        noAnnotations: "Hen\xFCz a\xE7\u0131klama eklenmedi. Belgenize a\xE7\u0131klama eklemek i\xE7in yukar\u0131daki ara\xE7lar\u0131 kullan\u0131n.",
        addNoteHint: "Not ekle...",
        page: "Sayfa",
        cancel: "\u0130ptal",
        colorSetTo: "Rengi ayarla",
        noContent: "\u0130\xE7erik yok",
        delete: "A\xE7\u0131klamay\u0131 sil"
      },
      info: {
        title: "Bilgi",
        close: "Bilgi panelini kapat"
      },
      locale: {
        selectLanguage: "Dil se\xE7",
        changeTo: "Dili de\u011Fi\u015Ftir"
      },
      credits: {
        createdWith: "\u0130le olu\u015Fturuldu",
        by: "taraf\u0131ndan"
      }
    };
  }
});

// src/locales/uk.json
var require_uk = __commonJS({
  "src/locales/uk.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        nextPage: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        pageOf: "\u0437"
      },
      leftPanel: {
        previews: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A",
        search: "\u041F\u043E\u0448\u0443\u043A \u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456",
        bookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0442\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        annotations: "\u0410\u043D\u043E\u0442\u0430\u0446\u0456\u0457"
      },
      toolbar: {
        rotateCounterclockwise: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0442\u0438 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438",
        rotateClockwise: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0437\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u044E \u0441\u0442\u0440\u0456\u043B\u043A\u043E\u044E",
        zoomLevel: "\u0420\u0456\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443",
        print: "\u0414\u0440\u0443\u043A\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
        fullscreen: "\u041F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
        exitFullscreen: "\u0412\u0438\u0439\u0442\u0438 \u0437 \u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443",
        download: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 PDF"
      },
      search: {
        title: "\u041F\u043E\u0448\u0443\u043A",
        placeholder: "\u041F\u043E\u0448\u0443\u043A \u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456...",
        matches: "\u0437\u0431\u0456\u0433\u0456\u0432",
        noResults: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        searching: "\u041F\u043E\u0448\u0443\u043A...",
        previousResult: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        nextResult: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        page: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        incompleteDocumentError: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u043F\u043E\u0448\u0443\u043A\u0443 \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u043F\u0456\u0441\u043B\u044F \u043F\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430.",
        waitLoading: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0434\u043E\u0447\u0435\u043A\u0430\u0439\u0442\u0435\u0441\u044F \u043F\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0448\u0443\u043A\u043E\u043C."
      },
      bookmarks: {
        outline: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
        bookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
        noOutline: "\u0423 \u0446\u044C\u043E\u043C\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456 \u043D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438",
        addBookmark: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443",
        save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        noBookmarks: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u043E",
        bookmarkTitle: "\u041D\u0430\u0437\u0432\u0430 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
        deleteBookmark: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443:"
      },
      annotations: {
        title: "\u0410\u043D\u043E\u0442\u0430\u0446\u0456\u0457",
        addNote: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0438\u043C\u0456\u0442\u043A\u0443",
        addHighlight: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        addDrawing: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0430\u043B\u044E\u043D\u043E\u043A",
        note: "\u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0430",
        highlight: "\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        drawing: "\u041C\u0430\u043B\u044E\u043D\u043E\u043A",
        noAnnotations: "\u0410\u043D\u043E\u0442\u0430\u0446\u0456\u0457 \u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0430\u043D\u043E. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u0432\u0438\u0449\u0435, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0430\u043D\u043E\u0442\u0430\u0446\u0456\u0457 \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430.",
        addNoteHint: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0438\u043C\u0456\u0442\u043A\u0443...",
        page: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        colorSetTo: "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440",
        noContent: "\u041D\u0435\u043C\u0430\u0454 \u0432\u043C\u0456\u0441\u0442\u0443",
        delete: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0430\u043D\u043E\u0442\u0430\u0446\u0456\u044E"
      },
      info: {
        title: "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F",
        close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C"
      },
      locale: {
        selectLanguage: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043C\u043E\u0432\u0443",
        changeTo: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u043E\u0432\u0443 \u043D\u0430"
      },
      credits: {
        createdWith: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E",
        by: "\u0432\u0456\u0434"
      }
    };
  }
});

// src/locales/vi.json
var require_vi = __commonJS({
  "src/locales/vi.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "Trang tr\u01B0\u1EDBc",
        nextPage: "Trang sau",
        pageOf: "/"
      },
      leftPanel: {
        previews: "Xem tr\u01B0\u1EDBc trang",
        search: "T\xECm ki\u1EBFm t\xE0i li\u1EC7u",
        bookmarks: "D\u1EA5u trang v\xE0 \u0111\u1EC1 c\u01B0\u01A1ng",
        annotations: "Ch\xFA th\xEDch"
      },
      toolbar: {
        rotateCounterclockwise: "Xoay ng\u01B0\u1EE3c chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
        rotateClockwise: "Xoay theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
        zoomLevel: "M\u1EE9c \u0111\u1ED9 ph\xF3ng to",
        print: "In t\xE0i li\u1EC7u",
        fullscreen: "To\xE0n m\xE0n h\xECnh",
        exitFullscreen: "Tho\xE1t to\xE0n m\xE0n h\xECnh",
        download: "T\u1EA3i xu\u1ED1ng PDF"
      },
      search: {
        title: "T\xECm ki\u1EBFm",
        placeholder: "T\xECm ki\u1EBFm trong t\xE0i li\u1EC7u...",
        matches: "k\u1EBFt qu\u1EA3",
        noResults: "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3",
        searching: "\u0110ang t\xECm ki\u1EBFm...",
        previousResult: "K\u1EBFt qu\u1EA3 tr\u01B0\u1EDBc",
        nextResult: "K\u1EBFt qu\u1EA3 ti\u1EBFp theo",
        page: "Trang",
        incompleteDocumentError: "\u0110\xE3 x\u1EA3y ra l\u1ED7i khi t\xECm ki\u1EBFm. Vui l\xF2ng th\u1EED l\u1EA1i sau khi t\xE0i li\u1EC7u \u0111\u01B0\u1EE3c t\u1EA3i ho\xE0n to\xE0n.",
        waitLoading: "Vui l\xF2ng \u0111\u1EE3i t\xE0i li\u1EC7u t\u1EA3i ho\xE0n to\xE0n tr\u01B0\u1EDBc khi t\xECm ki\u1EBFm."
      },
      bookmarks: {
        outline: "\u0110\u1EC1 c\u01B0\u01A1ng",
        bookmarks: "D\u1EA5u trang",
        noOutline: "Kh\xF4ng c\xF3 \u0111\u1EC1 c\u01B0\u01A1ng trong t\xE0i li\u1EC7u n\xE0y",
        addBookmark: "Th\xEAm d\u1EA5u trang",
        save: "L\u01B0u",
        cancel: "H\u1EE7y",
        noBookmarks: "Ch\u01B0a c\xF3 d\u1EA5u trang n\xE0o \u0111\u01B0\u1EE3c th\xEAm",
        bookmarkTitle: "Ti\xEAu \u0111\u1EC1 d\u1EA5u trang",
        deleteBookmark: "X\xF3a d\u1EA5u trang:"
      },
      annotations: {
        title: "Ch\xFA th\xEDch",
        addNote: "Th\xEAm ghi ch\xFA",
        addHighlight: "Th\xEAm \u0111\xE1nh d\u1EA5u",
        addDrawing: "Th\xEAm b\u1EA3n v\u1EBD",
        note: "Ghi ch\xFA",
        highlight: "\u0110\xE1nh d\u1EA5u",
        drawing: "B\u1EA3n v\u1EBD",
        noAnnotations: "Ch\u01B0a c\xF3 ch\xFA th\xEDch n\xE0o \u0111\u01B0\u1EE3c th\xEAm. S\u1EED d\u1EE5ng c\xE1c c\xF4ng c\u1EE5 \u1EDF tr\xEAn \u0111\u1EC3 th\xEAm ch\xFA th\xEDch v\xE0o t\xE0i li\u1EC7u c\u1EE7a b\u1EA1n.",
        addNoteHint: "Th\xEAm ghi ch\xFA...",
        page: "Trang",
        cancel: "H\u1EE7y",
        colorSetTo: "\u0110\u1EB7t m\xE0u th\xE0nh",
        noContent: "Kh\xF4ng c\xF3 n\u1ED9i dung",
        delete: "X\xF3a ch\xFA th\xEDch"
      },
      info: {
        title: "Th\xF4ng tin",
        close: "\u0110\xF3ng b\u1EA3ng th\xF4ng tin"
      },
      locale: {
        selectLanguage: "Ch\u1ECDn ng\xF4n ng\u1EEF",
        changeTo: "Thay \u0111\u1ED5i ng\xF4n ng\u1EEF th\xE0nh"
      },
      credits: {
        createdWith: "\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",
        by: "b\u1EDFi"
      }
    };
  }
});

// src/locales/zh-CN.json
var require_zh_CN = __commonJS({
  "src/locales/zh-CN.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u4E0A\u4E00\u9875",
        nextPage: "\u4E0B\u4E00\u9875",
        pageOf: "/"
      },
      leftPanel: {
        previews: "\u9875\u9762\u9884\u89C8",
        search: "\u641C\u7D22\u6587\u6863",
        bookmarks: "\u4E66\u7B7E\u548C\u5927\u7EB2",
        annotations: "\u6CE8\u91CA"
      },
      toolbar: {
        rotateCounterclockwise: "\u9006\u65F6\u9488\u65CB\u8F6C",
        rotateClockwise: "\u987A\u65F6\u9488\u65CB\u8F6C",
        zoomLevel: "\u7F29\u653E\u7EA7\u522B",
        print: "\u6253\u5370\u6587\u6863",
        fullscreen: "\u8FDB\u5165\u5168\u5C4F",
        exitFullscreen: "\u9000\u51FA\u5168\u5C4F",
        download: "\u4E0B\u8F7DPDF"
      },
      search: {
        title: "\u641C\u7D22",
        placeholder: "\u5728\u6587\u6863\u4E2D\u641C\u7D22...",
        matches: "\u5339\u914D\u9879",
        noResults: "\u672A\u627E\u5230\u7ED3\u679C",
        searching: "\u641C\u7D22\u4E2D...",
        previousResult: "\u4E0A\u4E00\u4E2A\u7ED3\u679C",
        nextResult: "\u4E0B\u4E00\u4E2A\u7ED3\u679C",
        page: "\u9875\u9762",
        incompleteDocumentError: "\u641C\u7D22\u65F6\u51FA\u9519\u3002\u8BF7\u5728\u6587\u6863\u5B8C\u5168\u52A0\u8F7D\u540E\u91CD\u8BD5\u3002",
        waitLoading: "\u8BF7\u7B49\u5F85\u6587\u6863\u5B8C\u5168\u52A0\u8F7D\u540E\u518D\u641C\u7D22\u3002"
      },
      bookmarks: {
        outline: "\u5927\u7EB2",
        bookmarks: "\u4E66\u7B7E",
        noOutline: "\u6B64\u6587\u6863\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u5927\u7EB2",
        addBookmark: "\u6DFB\u52A0\u4E66\u7B7E",
        save: "\u4FDD\u5B58",
        cancel: "\u53D6\u6D88",
        noBookmarks: "\u5C1A\u672A\u6DFB\u52A0\u4E66\u7B7E",
        bookmarkTitle: "\u4E66\u7B7E\u6807\u9898",
        deleteBookmark: "\u5220\u9664\u4E66\u7B7E:"
      },
      annotations: {
        title: "\u6CE8\u91CA",
        addNote: "\u6DFB\u52A0\u7B14\u8BB0",
        addHighlight: "\u6DFB\u52A0\u9AD8\u4EAE",
        addDrawing: "\u6DFB\u52A0\u7ED8\u56FE",
        note: "\u7B14\u8BB0",
        highlight: "\u9AD8\u4EAE",
        drawing: "\u7ED8\u56FE",
        noAnnotations: "\u5C1A\u672A\u6DFB\u52A0\u6CE8\u91CA\u3002\u4F7F\u7528\u4E0A\u9762\u7684\u5DE5\u5177\u5411\u6587\u6863\u6DFB\u52A0\u6CE8\u91CA\u3002",
        addNoteHint: "\u6DFB\u52A0\u7B14\u8BB0...",
        page: "\u9875\u9762",
        cancel: "\u53D6\u6D88",
        colorSetTo: "\u8BBE\u7F6E\u989C\u8272\u4E3A",
        noContent: "\u65E0\u5185\u5BB9",
        delete: "\u5220\u9664\u6CE8\u91CA"
      },
      info: {
        title: "\u4FE1\u606F",
        close: "\u5173\u95ED\u4FE1\u606F\u9762\u677F"
      },
      locale: {
        selectLanguage: "\u9009\u62E9\u8BED\u8A00",
        changeTo: "\u66F4\u6539\u8BED\u8A00\u4E3A"
      },
      credits: {
        createdWith: "\u521B\u5EFA\u5DE5\u5177",
        by: "\u4F5C\u8005"
      }
    };
  }
});

// src/locales/zh_TW.json
var require_zh_TW = __commonJS({
  "src/locales/zh_TW.json"(exports2, module2) {
    module2.exports = {
      navigation: {
        previousPage: "\u4E0A\u4E00\u9801",
        nextPage: "\u4E0B\u4E00\u9801",
        pageOf: "/"
      },
      leftPanel: {
        previews: "\u9801\u9762\u9810\u89BD",
        search: "\u641C\u5C0B\u6587\u4EF6",
        bookmarks: "\u66F8\u7C64\u548C\u5927\u7DB1",
        annotations: "\u8A3B\u89E3"
      },
      toolbar: {
        rotateCounterclockwise: "\u9006\u6642\u91DD\u65CB\u8F49",
        rotateClockwise: "\u9806\u6642\u91DD\u65CB\u8F49",
        zoomLevel: "\u7E2E\u653E\u7D1A\u5225",
        print: "\u5217\u5370\u6587\u4EF6",
        fullscreen: "\u9032\u5165\u5168\u87A2\u5E55",
        exitFullscreen: "\u9000\u51FA\u5168\u87A2\u5E55",
        download: "\u4E0B\u8F09PDF"
      },
      search: {
        title: "\u641C\u5C0B",
        placeholder: "\u5728\u6587\u4EF6\u4E2D\u641C\u5C0B...",
        matches: "\u5339\u914D\u9805",
        noResults: "\u672A\u627E\u5230\u7D50\u679C",
        searching: "\u641C\u5C0B\u4E2D...",
        previousResult: "\u4E0A\u4E00\u500B\u7D50\u679C",
        nextResult: "\u4E0B\u4E00\u500B\u7D50\u679C",
        page: "\u9801\u9762",
        incompleteDocumentError: "\u641C\u5C0B\u6642\u51FA\u932F\u3002\u8ACB\u5728\u6587\u4EF6\u5B8C\u5168\u8F09\u5165\u5F8C\u91CD\u8A66\u3002",
        waitLoading: "\u8ACB\u7B49\u5F85\u6587\u4EF6\u5B8C\u5168\u8F09\u5165\u5F8C\u518D\u641C\u5C0B\u3002"
      },
      bookmarks: {
        outline: "\u5927\u7DB1",
        bookmarks: "\u66F8\u7C64",
        noOutline: "\u6B64\u6587\u4EF6\u4E2D\u6C92\u6709\u53EF\u7528\u7684\u5927\u7DB1",
        addBookmark: "\u6DFB\u52A0\u66F8\u7C64",
        save: "\u5132\u5B58",
        cancel: "\u53D6\u6D88",
        noBookmarks: "\u5C1A\u672A\u6DFB\u52A0\u66F8\u7C64",
        bookmarkTitle: "\u66F8\u7C64\u6A19\u984C",
        deleteBookmark: "\u522A\u9664\u66F8\u7C64:"
      },
      annotations: {
        title: "\u8A3B\u89E3",
        addNote: "\u6DFB\u52A0\u7B46\u8A18",
        addHighlight: "\u6DFB\u52A0\u9AD8\u4EAE",
        addDrawing: "\u6DFB\u52A0\u7E6A\u5716",
        note: "\u7B46\u8A18",
        highlight: "\u9AD8\u4EAE",
        drawing: "\u7E6A\u5716",
        noAnnotations: "\u5C1A\u672A\u6DFB\u52A0\u8A3B\u89E3\u3002\u4F7F\u7528\u4E0A\u9762\u7684\u5DE5\u5177\u5411\u6587\u4EF6\u6DFB\u52A0\u8A3B\u89E3\u3002",
        addNoteHint: "\u6DFB\u52A0\u7B46\u8A18...",
        page: "\u9801\u9762",
        cancel: "\u53D6\u6D88",
        colorSetTo: "\u8A2D\u7F6E\u984F\u8272\u70BA",
        noContent: "\u7121\u5167\u5BB9",
        delete: "\u522A\u9664\u8A3B\u89E3"
      },
      info: {
        title: "\u8CC7\u8A0A",
        close: "\u95DC\u9589\u8CC7\u8A0A\u9762\u677F"
      },
      locale: {
        selectLanguage: "\u9078\u64C7\u8A9E\u8A00",
        changeTo: "\u66F4\u6539\u8A9E\u8A00\u70BA"
      },
      credits: {
        createdWith: "\u5275\u5EFA\u5DE5\u5177",
        by: "\u4F5C\u8005"
      }
    };
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AdexViewer: () => AdexViewer_default
});
module.exports = __toCommonJS(index_exports);

// src/AdexViewer.tsx
var import_react = require("react");
var import_react_pdf = require("react-pdf");
var import_TextLayer = require("react-pdf/dist/esm/Page/TextLayer.css");
var import_AnnotationLayer = require("react-pdf/dist/esm/Page/AnnotationLayer.css");
var import_jsx_runtime = require("react/jsx-runtime");

// import("./locales/**/*.json") in src/AdexViewer.tsx
var globImport_locales_json = __glob({
  "./locales/ar.json": () => Promise.resolve().then(() => __toESM(require_ar())),
  "./locales/bg.json": () => Promise.resolve().then(() => __toESM(require_bg())),
  "./locales/bn.json": () => Promise.resolve().then(() => __toESM(require_bn())),
  "./locales/ca.json": () => Promise.resolve().then(() => __toESM(require_ca())),
  "./locales/cs.json": () => Promise.resolve().then(() => __toESM(require_cs())),
  "./locales/de.json": () => Promise.resolve().then(() => __toESM(require_de())),
  "./locales/el.json": () => Promise.resolve().then(() => __toESM(require_el())),
  "./locales/en.json": () => Promise.resolve().then(() => __toESM(require_en())),
  "./locales/es.json": () => Promise.resolve().then(() => __toESM(require_es())),
  "./locales/fi.json": () => Promise.resolve().then(() => __toESM(require_fi())),
  "./locales/fr.json": () => Promise.resolve().then(() => __toESM(require_fr())),
  "./locales/he.json": () => Promise.resolve().then(() => __toESM(require_he())),
  "./locales/hi.json": () => Promise.resolve().then(() => __toESM(require_hi())),
  "./locales/id.json": () => Promise.resolve().then(() => __toESM(require_id())),
  "./locales/it.json": () => Promise.resolve().then(() => __toESM(require_it())),
  "./locales/ja.json": () => Promise.resolve().then(() => __toESM(require_ja())),
  "./locales/jp_JP.json": () => Promise.resolve().then(() => __toESM(require_jp_JP())),
  "./locales/ko.json": () => Promise.resolve().then(() => __toESM(require_ko())),
  "./locales/mr.json": () => Promise.resolve().then(() => __toESM(require_mr())),
  "./locales/ms.json": () => Promise.resolve().then(() => __toESM(require_ms())),
  "./locales/nl.json": () => Promise.resolve().then(() => __toESM(require_nl())),
  "./locales/no.json": () => Promise.resolve().then(() => __toESM(require_no())),
  "./locales/pa.json": () => Promise.resolve().then(() => __toESM(require_pa())),
  "./locales/pl.json": () => Promise.resolve().then(() => __toESM(require_pl())),
  "./locales/pt.json": () => Promise.resolve().then(() => __toESM(require_pt())),
  "./locales/ro.json": () => Promise.resolve().then(() => __toESM(require_ro())),
  "./locales/ru.json": () => Promise.resolve().then(() => __toESM(require_ru())),
  "./locales/sv.json": () => Promise.resolve().then(() => __toESM(require_sv())),
  "./locales/sw.json": () => Promise.resolve().then(() => __toESM(require_sw())),
  "./locales/ta.json": () => Promise.resolve().then(() => __toESM(require_ta())),
  "./locales/te.json": () => Promise.resolve().then(() => __toESM(require_te())),
  "./locales/th.json": () => Promise.resolve().then(() => __toESM(require_th())),
  "./locales/tr.json": () => Promise.resolve().then(() => __toESM(require_tr())),
  "./locales/uk.json": () => Promise.resolve().then(() => __toESM(require_uk())),
  "./locales/vi.json": () => Promise.resolve().then(() => __toESM(require_vi())),
  "./locales/zh-CN.json": () => Promise.resolve().then(() => __toESM(require_zh_CN())),
  "./locales/zh_TW.json": () => Promise.resolve().then(() => __toESM(require_zh_TW()))
});

// src/AdexViewer.tsx
import_react_pdf.pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf.pdfjs.version}/pdf.worker.min.js`;
var AdexViewer = ({
  data,
  credits,
  showSidebar,
  showToolbar = true,
  showControls = {
    navigation: true,
    zoom: true,
    fullscreen: true,
    download: true,
    info: true,
    sidebarButton: true,
    rotation: true,
    print: true,
    search: true,
    bookmarks: true,
    annotations: true
  },
  defaultValues = {
    zoom: 1.25,
    page: 1,
    fullscreen: false
  },
  responsive = {
    mobileBreakpoint: 768,
    hideSidebarOnMobile: true,
    reduceToolbarOnMobile: true
  },
  textOptions = {
    enableSelection: true,
    enableCopy: true
  },
  localization = [
    { locale: "en", title: "English", active: false },
    { locale: "ar", title: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", active: false },
    { locale: "bg", title: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", active: false },
    { locale: "bn", title: "\u09AC\u09BE\u0982\u09B2\u09BE", active: false },
    { locale: "ca", title: "Catal\xE0", active: false },
    { locale: "cs", title: "\u010Ce\u0161tina", active: false },
    { locale: "de", title: "Deutsch", active: false },
    { locale: "el", title: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", active: false },
    { locale: "es", title: "Espa\xF1ol", active: false },
    { locale: "fi", title: "Suomi", active: false },
    { locale: "fr", title: "Fran\xE7ais", active: false },
    { locale: "he", title: "\u05E2\u05D1\u05E8\u05D9\u05EA", active: false },
    { locale: "hi", title: "\u0939\u093F\u0928\u094D\u0926\u0940", active: true },
    { locale: "id", title: "Bahasa Indonesia", active: false },
    { locale: "it", title: "Italiano", active: false },
    { locale: "ja", title: "\u65E5\u672C\u8A9E", active: false },
    { locale: "jp_JP", title: "\u65E5\u672C\u8A9E", active: false },
    { locale: "ko", title: "\uD55C\uAD6D\uC5B4", active: false },
    { locale: "mr", title: "\u092E\u0930\u093E\u0920\u0940", active: false },
    { locale: "ms", title: "Bahasa Melayu", active: false },
    { locale: "nl", title: "Nederlands", active: false },
    { locale: "no", title: "Norsk", active: false },
    { locale: "pa", title: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", active: false },
    { locale: "pl", title: "Polski", active: false },
    { locale: "pt", title: "Portugu\xEAs", active: false },
    { locale: "ro", title: "Rom\xE2n\u0103", active: false },
    { locale: "ru", title: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", active: false },
    { locale: "sv", title: "Svenska", active: false },
    { locale: "sw", title: "Kiswahili", active: false },
    { locale: "ta", title: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", active: false },
    { locale: "te", title: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", active: false },
    { locale: "th", title: "\u0E44\u0E17\u0E22", active: false },
    { locale: "tr", title: "T\xFCrk\xE7e", active: false },
    { locale: "uk", title: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", active: false },
    { locale: "vi", title: "Ti\u1EBFng Vi\u1EC7t", active: false },
    { locale: "zh-CN", title: "\u7B80\u4F53\u4E2D\u6587", active: false },
    { locale: "zh_TW", title: "\u7E41\u9AD4\u4E2D\u6587", active: false }
  ],
  printOptions = {
    printBackground: true,
    pageRangeEnabled: true
  }
}) => {
  var _a;
  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
  const [numPages, setNumPages] = (0, import_react.useState)(null);
  const [pageNumber, setPageNumber] = (0, import_react.useState)(defaultValues.page || 1);
  const [scale, setScale] = (0, import_react.useState)(defaultValues.zoom || 1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = (0, import_react.useState)(null);
  const [fullScreenView, setFullScreenView] = (0, import_react.useState)(defaultValues.fullscreen || false);
  const [sidebar, setSidebar] = (0, import_react.useState)(showSidebar || false);
  const [previewNumber, setPreviewNumber] = (0, import_react.useState)(defaultValues.page || 1);
  const [retryCount, setRetryCount] = (0, import_react.useState)(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = (0, import_react.useState)(5);
  const viewerRef = (0, import_react.useRef)(null);
  const pageRefs = (0, import_react.useRef)({});
  const previewRef = (0, import_react.useRef)(null);
  const printIframeRef = (0, import_react.useRef)(null);
  const showCredits = credits != null ? credits : true;
  const [metadata, setMetadata] = (0, import_react.useState)(null);
  const [showInfo, setShowInfo] = (0, import_react.useState)(false);
  const [showLocaleOption, setShowLocaleOption] = (0, import_react.useState)(false);
  const [isPrinting, setIsPrinting] = (0, import_react.useState)(false);
  const maxRetries = 5;
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  const [locale, setLocale] = (0, import_react.useState)("en");
  const [localizationData, setLocalizationData] = (0, import_react.useState)({});
  const [pageRotations, setPageRotations] = (0, import_react.useState)({});
  const [isTextLayerEnabled, setIsTextLayerEnabled] = (0, import_react.useState)(
    Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy)
  );
  const [originalZoom, setOriginalZoom] = (0, import_react.useState)(null);
  const [showSearch, setShowSearch] = (0, import_react.useState)(false);
  const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
  const [searchResults, setSearchResults] = (0, import_react.useState)([]);
  const [currentSearchResult, setCurrentSearchResult] = (0, import_react.useState)(-1);
  const [isSearching, setIsSearching] = (0, import_react.useState)(false);
  const [pdfDocument, setPdfDocument] = (0, import_react.useState)(null);
  const searchInputRef = (0, import_react.useRef)(null);
  const [showSearchSidebar, setShowSearchSidebar] = (0, import_react.useState)(false);
  const searchResultsRef = (0, import_react.useRef)(null);
  const [documentOutline, setDocumentOutline] = (0, import_react.useState)([]);
  const [expandedOutlineItems, setExpandedOutlineItems] = (0, import_react.useState)({});
  const [bookmarks, setBookmarks] = (0, import_react.useState)([]);
  const [activeTab, setActiveTab] = (0, import_react.useState)("outline");
  const [showBookmarksSidebar, setShowBookmarksSidebar] = (0, import_react.useState)(false);
  const [isAddingBookmark, setIsAddingBookmark] = (0, import_react.useState)(false);
  const [newBookmarkTitle, setNewBookmarkTitle] = (0, import_react.useState)("");
  const bookmarksRef = (0, import_react.useRef)(null);
  const [leftPanel, setLeftPanel] = (0, import_react.useState)(0);
  const [leftPanelWidth, setLeftPanelWidth] = (0, import_react.useState)(220);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const resizeDividerRef = (0, import_react.useRef)(null);
  const startXRef = (0, import_react.useRef)(0);
  const startWidthRef = (0, import_react.useRef)(0);
  const [annotations, setAnnotations] = (0, import_react.useState)([]);
  const [isAddingAnnotation, setIsAddingAnnotation] = (0, import_react.useState)(false);
  const [annotationType, setAnnotationType] = (0, import_react.useState)("note");
  const [annotationColor, setAnnotationColor] = (0, import_react.useState)("#ffeb3b");
  const [selectedAnnotation, setSelectedAnnotation] = (0, import_react.useState)(null);
  const [newAnnotationContent, setNewAnnotationContent] = (0, import_react.useState)("");
  const [isDrawing, setIsDrawing] = (0, import_react.useState)(false);
  const [currentDrawingPoints, setCurrentDrawingPoints] = (0, import_react.useState)([]);
  const [showAnnotationsSidebar, setShowAnnotationsSidebar] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const savedLocale = localStorage.getItem("userLocale");
    if (savedLocale) {
      handleChangeLocale(savedLocale);
    } else {
      const activeLocale = localization == null ? void 0 : localization.find((item) => item.active);
      const localeToUse = activeLocale ? activeLocale.locale : "en";
      handleChangeLocale(localeToUse);
    }
  }, []);
  function handleChangeLocale(locale2) {
    return __async(this, null, function* () {
      setLocale(locale2);
      try {
        const localeData = yield globImport_locales_json(`./locales/${locale2}.json`);
        setLocalizationData(localeData);
        localStorage.setItem("userLocale", locale2);
      } catch (error) {
        console.error(`Failed to load locale: ${locale2}`, error);
        if (locale2 !== "en") {
          console.warn(`Falling back to default locale 'en'`);
        }
      }
    });
  }
  function getLocaleData(key, defaultValue) {
    const keys = key.split(".");
    let data2 = localizationData;
    if (!data2 || !data2.default) {
      return defaultValue;
    }
    let current = data2.default;
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        return defaultValue;
      }
    }
    return current !== void 0 ? current : defaultValue;
  }
  (0, import_react.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < ((responsive == null ? void 0 : responsive.mobileBreakpoint) || 768));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [responsive == null ? void 0 : responsive.mobileBreakpoint]);
  (0, import_react.useEffect)(() => {
    if (isMobile && (responsive == null ? void 0 : responsive.hideSidebarOnMobile)) {
      setSidebar(false);
      setShowSearchSidebar(false);
      setShowBookmarksSidebar(false);
    } else {
      setSidebar(showSidebar || false);
    }
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startXRef.current;
      let newWidth = startWidthRef.current + deltaX;
      newWidth = Math.max(210, Math.min(400, newWidth));
      setLeftPanelWidth(newWidth);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile, responsive == null ? void 0 : responsive.hideSidebarOnMobile, showSidebar, isDragging, showAnnotationsSidebar]);
  const startResize = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
    startWidthRef.current = leftPanelWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };
  (0, import_react.useEffect)(() => {
    if (defaultValues.fullscreen && viewerRef.current && document.fullscreenElement === null) {
      const timer = setTimeout(() => {
        var _a2;
        (_a2 = viewerRef.current) == null ? void 0 : _a2.requestFullscreen().catch((err) => {
          console.warn("Couldn't enter fullscreen mode:", err);
        });
        setFullScreenView(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [defaultValues.fullscreen]);
  (0, import_react.useEffect)(() => {
    let retryTimer = null;
    const fetchPdfBlob = () => __async(void 0, null, function* () {
      try {
        const response = yield fetch(data == null ? void 0 : data.url);
        if (!response.ok) throw new Error("Failed to fetch PDF");
        const blob = yield response.blob();
        const url = URL.createObjectURL(blob);
        setPdfBlobUrl(url);
        setRetryCount(0);
        if (retryTimer) {
          clearTimeout(retryTimer);
          retryTimer = null;
        }
      } catch (error) {
        console.error(`Failed to load PDF (Attempt ${retryCount + 1}):`, error);
        if (retryCount < maxRetries) {
          retryTimer = setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, retryTimeoutDelay);
          setRetryTimeoutDelay(retryTimeoutDelay * 2);
        }
      }
    });
    if (data == null ? void 0 : data.url) fetchPdfBlob();
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [data == null ? void 0 : data.url, retryCount]);
  const goToPage = (0, import_react.useCallback)((pageNum) => {
    setPreviewNumber(pageNum);
    setPageNumber(pageNum);
    const pageEl = pageRefs.current[pageNum];
    if (pageEl) {
      pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const extractOutline = (0, import_react.useCallback)((pdf) => __async(void 0, null, function* () {
    try {
      const outline = yield pdf.getOutline();
      if (outline && outline.length > 0) {
        const processedOutline = yield processOutlineItems(outline, pdf);
        setDocumentOutline(processedOutline);
      } else {
        setDocumentOutline([]);
      }
    } catch (error) {
      console.error("Error extracting outline:", error);
      setDocumentOutline([]);
    }
  }), []);
  const processOutlineItems = (0, import_react.useCallback)((items, pdf, level = 0) => __async(void 0, null, function* () {
    const processedItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const id = `outline-${level}-${i}-${Date.now()}`;
      let pageNumber2 = void 0;
      if (item.dest) {
        try {
          if (typeof item.dest === "string") {
            const dest = yield pdf.getDestination(item.dest);
            if (dest) {
              const ref = yield pdf.getPageRef(dest[0]);
              const pageIndex = yield pdf.getPageIndex(ref);
              pageNumber2 = pageIndex + 1;
            }
          } else if (Array.isArray(item.dest)) {
            const ref = item.dest[0];
            if (ref) {
              try {
                const pageIndex = yield pdf.getPageIndex(ref);
                pageNumber2 = pageIndex + 1;
              } catch (error) {
                console.error("Error getting page index from ref:", error);
              }
            }
          }
        } catch (error) {
          console.error("Error resolving destination:", error);
        }
      }
      const processedItem = {
        title: item.title,
        dest: item.dest,
        pageNumber: pageNumber2,
        id,
        expanded: level < 1
        // Expand only the first level by default
      };
      if (item.items && item.items.length > 0) {
        processedItem.items = yield processOutlineItems(item.items, pdf, level + 1);
      }
      processedItems.push(processedItem);
    }
    return processedItems;
  }), []);
  function onDocumentLoadSuccess(pdf) {
    return __async(this, null, function* () {
      setNumPages(pdf.numPages);
      setPdfDocument(pdf);
      const meta = yield pdf.getMetadata();
      setMetadata(meta.info);
      yield extractOutline(pdf);
      if (defaultValues.page && defaultValues.page > 1 && defaultValues.page <= pdf.numPages) {
        goToPage(defaultValues.page);
      }
    });
  }
  const toggleOutlineItem = (0, import_react.useCallback)((itemId) => {
    setExpandedOutlineItems((prev) => __spreadProps(__spreadValues({}, prev), {
      [itemId]: !prev[itemId]
    }));
  }, []);
  const navigateToOutlineItem = (0, import_react.useCallback)(
    (item) => __async(void 0, null, function* () {
      if (item.pageNumber) {
        goToPage(item.pageNumber);
      } else if (item.dest && pdfDocument) {
        try {
          let pageNumber2 = void 0;
          if (typeof item.dest === "string") {
            const dest = yield pdfDocument.getDestination(item.dest);
            if (dest) {
              const ref = yield pdfDocument.getPageRef(dest[0]);
              const pageIndex = yield pdfDocument.getPageIndex(ref);
              pageNumber2 = pageIndex + 1;
            }
          } else if (Array.isArray(item.dest)) {
            const ref = item.dest[0];
            if (ref) {
              try {
                const pageIndex = yield pdfDocument.getPageIndex(ref);
                pageNumber2 = pageIndex + 1;
              } catch (error) {
                console.error("Error getting page index from ref:", error);
              }
            }
          }
          if (pageNumber2) {
            goToPage(pageNumber2);
          }
        } catch (error) {
          console.error("Error navigating to outline item:", error);
        }
      }
    }),
    [goToPage, pdfDocument]
  );
  const addBookmark = (0, import_react.useCallback)(() => {
    if (!newBookmarkTitle.trim()) return;
    const newBookmark = {
      id: `bookmark-${Date.now()}`,
      title: newBookmarkTitle.trim(),
      pageNumber,
      createdAt: Date.now()
    };
    setBookmarks((prev) => [...prev, newBookmark]);
    setNewBookmarkTitle("");
    setIsAddingBookmark(false);
    localStorage.setItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`, JSON.stringify([...bookmarks, newBookmark]));
  }, [newBookmarkTitle, pageNumber, bookmarks, data == null ? void 0 : data.url]);
  const deleteBookmark = (0, import_react.useCallback)(
    (id) => {
      setBookmarks((prev) => {
        const updatedBookmarks = prev.filter((bookmark) => bookmark.id !== id);
        localStorage.setItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`, JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      });
    },
    [data == null ? void 0 : data.url]
  );
  const navigateToBookmark = (0, import_react.useCallback)(
    (bookmark) => {
      goToPage(bookmark.pageNumber);
    },
    [goToPage]
  );
  (0, import_react.useEffect)(() => {
    if (data == null ? void 0 : data.url) {
      const savedBookmarks = localStorage.getItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`);
      if (savedBookmarks) {
        try {
          setBookmarks(JSON.parse(savedBookmarks));
        } catch (error) {
          console.error("Error parsing saved bookmarks:", error);
        }
      }
    }
  }, [data == null ? void 0 : data.url]);
  const toggleBookmarksSidebar = (0, import_react.useCallback)(() => {
    setLeftPanel(2);
    setSidebar(true);
    setShowBookmarksSidebar((prev) => !prev);
    if (!showBookmarksSidebar) {
      setActiveTab("outline");
    }
  }, [showBookmarksSidebar]);
  const toggleAnnotationsSidebar = (0, import_react.useCallback)(() => {
    setLeftPanel(3);
    setSidebar(true);
    setShowAnnotationsSidebar((prev) => !prev);
  }, [showAnnotationsSidebar]);
  function updatePage(__page) {
    if (__page > 0 && numPages !== null && __page <= numPages) {
      goToPage(__page);
    } else {
      setPreviewNumber(pageNumber);
    }
  }
  function updatePDFPage(e) {
    const __page = Number(e.target.value);
    setPreviewNumber(__page);
    debounce(() => updatePage(__page), 500);
  }
  const toggleFullscreen = () => {
    var _a2;
    if (!document.fullscreenElement) {
      setFullScreenView(true);
      (_a2 = viewerRef.current) == null ? void 0 : _a2.requestFullscreen().catch((err) => {
        console.warn("Couldn't enter fullscreen mode:", err);
      });
    } else {
      setFullScreenView(false);
      document.exitFullscreen().catch((err) => {
        console.warn("Couldn't exit fullscreen mode:", err);
      });
    }
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      if (!previewRef.current) return;
      let closestPage = pageNumber;
      Object.entries(pageRefs.current).forEach(([pageNum, pageEl]) => {
        if (pageEl instanceof HTMLElement) {
          const { top, bottom } = pageEl.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= 0) {
            closestPage = Number(pageNum);
          }
        }
      });
      setPreviewNumber(closestPage);
      setPageNumber(closestPage);
    };
    const debouncedHandleScroll = debounce(handleScroll, 500);
    const scrollContainer = previewRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", debouncedHandleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", debouncedHandleScroll);
      }
    };
  }, [pageNumber, numPages]);
  (0, import_react.useEffect)(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && fullScreenView) {
        setFullScreenView(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [fullScreenView]);
  const rotatePage = (pageNum, clockwise = true) => {
    setPageRotations((prev) => {
      const currentRotation = prev[pageNum] || 0;
      const newRotation = (currentRotation + (clockwise ? 90 : -90)) % 360;
      return __spreadProps(__spreadValues({}, prev), { [pageNum]: newRotation < 0 ? newRotation + 360 : newRotation });
    });
  };
  (0, import_react.useEffect)(() => {
    setIsTextLayerEnabled(Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy));
  }, [textOptions == null ? void 0 : textOptions.enableSelection, textOptions == null ? void 0 : textOptions.enableCopy]);
  const documentOptions = (0, import_react.useMemo)(
    () => ({
      cMapUrl: "https://unpkg.com/pdfjs-dist@3.4.120/cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/"
    }),
    []
  );
  const onDocumentLoadError = (0, import_react.useCallback)(() => {
    console.error(`Failed to load PDF (Attempt ${retryCount + 1})`);
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
    }
  }, [retryCount, maxRetries]);
  const handlePrint = (0, import_react.useCallback)(() => {
    printPdf();
  }, []);
  const printPdf = (0, import_react.useCallback)(() => {
    try {
      setOriginalZoom(scale);
      setScale(1);
      setIsPrinting(true);
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          setIsPrinting(false);
          if (originalZoom !== null) {
            setScale(originalZoom);
            setOriginalZoom(null);
          }
        }, 1e3);
      }, 300);
    } catch (error) {
      console.error("Error in print function:", error);
      setIsPrinting(false);
      if (originalZoom !== null) {
        setScale(originalZoom);
        setOriginalZoom(null);
      }
      alert("An error occurred while trying to print. Please try again.");
    }
  }, [originalZoom, scale]);
  (0, import_react.useEffect)(() => {
    if (isPrinting) {
      const style = document.createElement("style");
      style.id = "adex-print-styles";
      style.innerHTML = `
        @media print {
          body * {
            visibility: hidden;
          }
          .adex-viewer, .adex-viewer * {
            visibility: visible;
          }
          .adex-viewer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
          }
          .adex-topbar, .adex-power-row, .adex-preview-thumbs, .adex-preview-search, .adex-preview-bookmarks, .adex-pdf-meta-info,.adex-left-col,.adex-preview-annotations {
            display: none !important;
          }
          .adex-preview-panel {
            display: block !important;
            grid-template-columns: auto !important;
          }
          .adex-preview {
            max-height: none !important;
            overflow: visible !important;
            padding: 0 !important;
          }
          .adex-page {
            page-break-after: always;
            margin: 0 !important;
            box-shadow: none !important;
            width: 100% !important;
            height: auto !important;
          }
          .adex-page canvas {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
          }
        }
      `;
      document.head.appendChild(style);
      return () => {
        const styleElement = document.getElementById("adex-print-styles");
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, [isPrinting]);
  const toggleSearch = (0, import_react.useCallback)(() => {
    setLeftPanel(1);
    setSidebar(true);
    setShowSearch((prev) => {
      const newState = !prev;
      if (newState && searchInputRef.current) {
        setTimeout(() => {
          var _a2;
          (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
        }, 100);
      }
      return newState;
    });
    if (showSearch) {
      setSearchQuery("");
      setSearchResults([]);
      setCurrentSearchResult(-1);
      setShowSearchSidebar(false);
    }
  }, [showSearch]);
  const getContextAroundMatch = (text, matchIndex, matchLength, contextLength = 30) => {
    const startIndex = Math.max(0, matchIndex - contextLength);
    const endIndex = Math.min(text.length, matchIndex + matchLength + contextLength);
    let context = text.substring(startIndex, endIndex);
    if (startIndex > 0) context = "..." + context;
    if (endIndex < text.length) context = context + "...";
    return context;
  };
  const handleSearchChange = (0, import_react.useCallback)((e) => {
    setSearchQuery(e.target.value);
  }, []);
  const navigateToSearchResult = (0, import_react.useCallback)(
    (result) => {
      if (!result) return;
      goToPage(result.pageIndex + 1);
      setTimeout(() => {
        const pageElement = pageRefs.current[result.pageIndex + 1];
        if (!pageElement) return;
        const textLayer = pageElement.querySelector(".react-pdf__Page__textContent");
        if (!textLayer) return;
        document.querySelectorAll(".adex-search-highlight").forEach((el) => {
          el.remove();
        });
        const textSpans = textLayer.querySelectorAll("span");
        if (!textSpans || textSpans.length === 0) return;
        const searchLower = searchQuery.toLowerCase();
        let foundCurrentResult = false;
        let highlightElement = null;
        for (let i = 0; i < textSpans.length; i++) {
          const span = textSpans[i];
          const text = span.textContent || "";
          const textLower = text.toLowerCase();
          let startIndex = 0;
          let index;
          while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
            const highlight = document.createElement("div");
            highlight.className = "adex-search-highlight";
            const rect = span.getBoundingClientRect();
            const textLayerRect = textLayer.getBoundingClientRect();
            const left = rect.left - textLayerRect.left;
            const top = rect.top - textLayerRect.top;
            highlight.style.left = `${left}px`;
            highlight.style.top = `${top}px`;
            highlight.style.width = `${rect.width}px`;
            highlight.style.height = `${rect.height}px`;
            const resultId = `search-highlight-${result.matchIndex}-${i}-${index}`;
            highlight.id = resultId;
            if (!foundCurrentResult && result.text.toLowerCase() === searchLower) {
              highlight.classList.add("current");
              highlightElement = highlight;
              foundCurrentResult = true;
            }
            textLayer.appendChild(highlight);
            startIndex = index + searchLower.length;
          }
        }
        if (highlightElement) {
          highlightElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
        if (searchResultsRef.current) {
          const resultElement = searchResultsRef.current.querySelector(`#search-result-${result.matchIndex}`);
          if (resultElement) {
            searchResultsRef.current.querySelectorAll(".adex-search-result-item").forEach((el) => {
              el.classList.remove("active");
            });
            resultElement.classList.add("active");
            resultElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      }, 300);
    },
    [goToPage, searchQuery]
  );
  const performSearch = (0, import_react.useCallback)(() => __async(void 0, null, function* () {
    if (!searchQuery.trim() || !pdfDocument) {
      return;
    }
    setIsSearching(true);
    setSearchResults([]);
    setCurrentSearchResult(-1);
    try {
      const results = [];
      if (!pdfDocument || !pdfDocument.numPages) {
        throw new Error("PDF document is not available or fully loaded");
      }
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        try {
          const page = yield pdfDocument.getPage(i);
          if (!page) {
            console.warn(`Page ${i} could not be loaded, skipping`);
            continue;
          }
          const textContent = yield page.getTextContent();
          const viewport = page.getViewport({ scale: 1 });
          const pageText = textContent.items.map((item) => item.str).join(" ");
          const searchRegex = new RegExp(searchQuery, "gi");
          let match;
          while ((match = searchRegex.exec(pageText)) !== null) {
            const context = getContextAroundMatch(pageText, match.index, searchQuery.length);
            results.push({
              pageIndex: i - 1,
              matchIndex: results.length,
              text: match[0],
              context,
              position: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }
            });
          }
        } catch (pageError) {
          console.warn(`Error processing page ${i} during search:`, pageError);
          continue;
        }
      }
      setSearchResults(results);
      if (results.length > 0) {
        setCurrentSearchResult(0);
        navigateToSearchResult(results[0]);
        setShowSearchSidebar(true);
      }
    } catch (error) {
      console.error("Error searching PDF:", error);
      alert(getLocaleData("search.incompleteDocumentError", "There was an error while searching. Please try again after the document is fully loaded."));
    } finally {
      setIsSearching(false);
    }
  }), [searchQuery, pdfDocument, navigateToSearchResult]);
  const handleSearchKeyDown = (0, import_react.useCallback)(
    (e) => {
      if (e.key === "Enter") {
        if (!pdfDocument || !pdfDocument.numPages) {
          alert(getLocaleData("search.waitLoading", "Please wait for the document to fully load before searching."));
          return;
        }
        performSearch();
      }
    },
    [pdfDocument, performSearch]
  );
  const nextSearchResult = (0, import_react.useCallback)(() => {
    if (searchResults.length === 0) return;
    const nextIndex = (currentSearchResult + 1) % searchResults.length;
    setCurrentSearchResult(nextIndex);
    navigateToSearchResult(searchResults[nextIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const prevSearchResult = (0, import_react.useCallback)(() => {
    if (searchResults.length === 0) return;
    const prevIndex = (currentSearchResult - 1 + searchResults.length) % searchResults.length;
    setCurrentSearchResult(prevIndex);
    navigateToSearchResult(searchResults[prevIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const highlightAllResultsOnPage = (0, import_react.useCallback)(
    (pageIndex) => {
      const pageElement = pageRefs.current[pageIndex + 1];
      if (!pageElement) return;
      const textLayer = pageElement.querySelector(".react-pdf__Page__textContent");
      if (!textLayer) return;
      pageElement.querySelectorAll(".adex-search-highlight").forEach((el) => el.remove());
      if (!searchQuery || searchResults.length === 0) return;
      const textSpans = textLayer.querySelectorAll("span");
      if (!textSpans || textSpans.length === 0) return;
      const searchLower = searchQuery.toLowerCase();
      for (let i = 0; i < textSpans.length; i++) {
        const span = textSpans[i];
        const text = span.textContent || "";
        const textLower = text.toLowerCase();
        let startIndex = 0;
        let index;
        while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
          const highlight = document.createElement("div");
          highlight.className = "adex-search-highlight";
          const rect = span.getBoundingClientRect();
          const textLayerRect = textLayer.getBoundingClientRect();
          const left = rect.left - textLayerRect.left;
          const top = rect.top - textLayerRect.top;
          highlight.style.left = `${left}px`;
          highlight.style.top = `${top}px`;
          highlight.style.width = `${rect.width}px`;
          highlight.style.height = `${rect.height}px`;
          const isCurrentResult = searchResults.some(
            (result) => result.pageIndex === pageIndex && result.matchIndex === currentSearchResult && result.text.toLowerCase() === text.substring(index, index + searchLower.length).toLowerCase()
          );
          if (isCurrentResult) {
            highlight.classList.add("current");
          }
          textLayer.appendChild(highlight);
          startIndex = index + searchLower.length;
        }
      }
    },
    [searchQuery, searchResults, currentSearchResult]
  );
  (0, import_react.useEffect)(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      highlightAllResultsOnPage(pageNumber - 1);
    }
  }, [pageNumber, searchResults, highlightAllResultsOnPage]);
  (0, import_react.useEffect)(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      const timer = setTimeout(() => {
        highlightAllResultsOnPage(pageNumber - 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scale, pageNumber, searchResults, highlightAllResultsOnPage]);
  const searchHighlightStyles = `
.adex-search-highlight {
  position: absolute;
  background-color: rgba(255, 255, 0, 0.4);
  border-radius: 2px;
  z-index: 10;
  pointer-events: none;
}

.adex-search-highlight.current {
  background-color: rgba(255, 165, 0, 0.6);
  box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.8);
  z-index: 11;
}
`;
  (0, import_react.useEffect)(() => {
    if (documentOutline.length > 0) {
      const initialExpandedState = {};
      const initializeExpandedState = (items, level) => {
        items.forEach((item) => {
          initialExpandedState[item.id] = level === 0;
          if (item.items && item.items.length > 0) {
            initializeExpandedState(item.items, level + 1);
          }
        });
      };
      initializeExpandedState(documentOutline, 0);
      setExpandedOutlineItems(initialExpandedState);
    }
  }, [documentOutline]);
  const renderOutlineItems = (items) => {
    return items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-outline-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-outline-item-content", children: [
        item.items && item.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: "adex-outline-toggle",
            onClick: () => toggleOutlineItem(item.id),
            "aria-label": expandedOutlineItems[item.id] ? "Collapse" : "Expand",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                style: {
                  transform: expandedOutlineItems[item.id] ? "rotate(90deg)" : "rotate(0deg)"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })
              }
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-outline-toggle", style: { width: "20px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            className: "adex-outline-link",
            onClick: () => navigateToOutlineItem(item),
            disabled: !item.pageNumber && !item.dest,
            children: [
              item.title,
              item.pageNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-outline-page", children: [
                "p. ",
                item.pageNumber
              ] })
            ]
          }
        )
      ] }),
      item.items && item.items.length > 0 && expandedOutlineItems[item.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-children", style: { marginLeft: "20px" }, children: renderOutlineItems(item.items) })
    ] }, item.id));
  };
  const startAddingAnnotation = (0, import_react.useCallback)((type) => {
    setIsAddingAnnotation(true);
    setAnnotationType(type);
    setNewAnnotationContent("");
  }, []);
  const cancelAddingAnnotation = (0, import_react.useCallback)(() => {
    setIsAddingAnnotation(false);
    setCurrentDrawingPoints([]);
  }, []);
  const addAnnotation = (0, import_react.useCallback)(
    (pageNumber2, position) => {
      if (annotationType === "drawing" && currentDrawingPoints.length < 2) {
        return;
      }
      const newAnnotation = {
        id: `annotation-${Date.now()}`,
        pageNumber: pageNumber2,
        type: annotationType,
        content: newAnnotationContent,
        color: annotationColor,
        position,
        points: annotationType === "drawing" ? currentDrawingPoints : void 0,
        createdAt: Date.now()
      };
      setAnnotations((prev) => {
        const updatedAnnotations = [...prev, newAnnotation];
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      setIsAddingAnnotation(false);
      setCurrentDrawingPoints([]);
      setNewAnnotationContent("");
    },
    [annotationType, newAnnotationContent, annotationColor, currentDrawingPoints, data == null ? void 0 : data.url]
  );
  const deleteAnnotation = (0, import_react.useCallback)(
    (id) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.filter((annotation) => annotation.id !== id);
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      if ((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === id) {
        setSelectedAnnotation(null);
      }
    },
    [selectedAnnotation, data == null ? void 0 : data.url]
  );
  const updateAnnotation = (0, import_react.useCallback)(
    (id, updates) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.map(
          (annotation) => annotation.id === id ? __spreadValues(__spreadValues({}, annotation), updates) : annotation
        );
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      if ((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === id) {
        setSelectedAnnotation((prev) => prev ? __spreadValues(__spreadValues({}, prev), updates) : null);
      }
    },
    [selectedAnnotation, data == null ? void 0 : data.url]
  );
  const handleDrawingMouseDown = (0, import_react.useCallback)(
    (e, pageNumber2) => {
      if (isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(true);
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        setCurrentDrawingPoints([{ x, y }]);
      }
    },
    [isAddingAnnotation, annotationType, scale]
  );
  const handleDrawingMouseMove = (0, import_react.useCallback)(
    (e) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        setCurrentDrawingPoints((prev) => [...prev, { x, y }]);
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, scale]
  );
  const handleDrawingMouseUp = (0, import_react.useCallback)(
    (e, pageNumber2) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(false);
        if (currentDrawingPoints.length < 2) {
          return;
        }
        const minX = Math.min(...currentDrawingPoints.map((p) => p.x));
        const minY = Math.min(...currentDrawingPoints.map((p) => p.y));
        const maxX = Math.max(...currentDrawingPoints.map((p) => p.x));
        const maxY = Math.max(...currentDrawingPoints.map((p) => p.y));
        const width = Math.max(maxX - minX, 1);
        const height = Math.max(maxY - minY, 1);
        const adjustedPoints = currentDrawingPoints.map((point) => ({
          x: point.x - minX,
          y: point.y - minY
        }));
        const newAnnotation = {
          id: `annotation-${Date.now()}`,
          pageNumber: pageNumber2,
          type: "drawing",
          content: "",
          color: annotationColor,
          position: {
            x: minX,
            y: minY,
            width,
            height
          },
          points: adjustedPoints,
          createdAt: Date.now()
        };
        setAnnotations((prev) => {
          const updatedAnnotations = [...prev, newAnnotation];
          localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
          return updatedAnnotations;
        });
        setIsAddingAnnotation(false);
        setCurrentDrawingPoints([]);
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, currentDrawingPoints, annotationColor, data == null ? void 0 : data.url]
  );
  const handlePageClick = (0, import_react.useCallback)(
    (e, pageNumber2) => {
      if (isAddingAnnotation && annotationType === "note") {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        addAnnotation(pageNumber2, { x, y });
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation]
  );
  const handleTextSelection = (0, import_react.useCallback)(
    (pageNumber2) => {
      if (isAddingAnnotation && annotationType === "highlight") {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        const rects = range.getClientRects();
        if (rects.length === 0) return;
        const pageElement = pageRefs.current[pageNumber2];
        if (!pageElement) return;
        const pageRect = pageElement.getBoundingClientRect();
        const firstRect = rects[0];
        const lastRect = rects[rects.length - 1];
        const x = (firstRect.left - pageRect.left) / scale;
        const y = (firstRect.top - pageRect.top) / scale;
        const width = (lastRect.right - firstRect.left) / scale;
        const height = Math.max(...Array.from(rects).map((r) => r.height)) / scale;
        addAnnotation(pageNumber2, { x, y, width, height });
        selection.removeAllRanges();
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation]
  );
  (0, import_react.useEffect)(() => {
    if (data == null ? void 0 : data.url) {
      const savedAnnotations = localStorage.getItem(`pdf-annotations-${data == null ? void 0 : data.url}`);
      if (savedAnnotations) {
        try {
          setAnnotations(JSON.parse(savedAnnotations));
        } catch (error) {
          console.error("Error parsing saved annotations:", error);
        }
      }
    }
  }, [data == null ? void 0 : data.url]);
  const renderAnnotations = (0, import_react.useCallback)(
    (pageNumber2) => {
      const pageAnnotations = annotations.filter((a) => a.pageNumber === pageNumber2);
      return pageAnnotations.map((annotation) => {
        const { id, type, position, color, content, points } = annotation;
        if (type === "note") {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              "data-id": id,
              className: "adex-annotation adex-note-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                zIndex: 100,
                cursor: "pointer",
                background: color
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" }) })
            },
            id
          );
        }
        if (type === "highlight") {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              "data-id": id,
              className: "adex-annotation adex-highlight-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                backgroundColor: color,
                opacity: 0.3,
                zIndex: 50,
                pointerEvents: "none"
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              }
            },
            id
          );
        }
        if (type === "drawing" && points && points.length > 1) {
          const pathData = points.reduce((path, point, index) => {
            return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
          }, "");
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "svg",
            {
              "data-id": id,
              className: "adex-annotation adex-drawing-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                zIndex: 75,
                pointerEvents: "auto",
                // Change from "none" to "auto" to make it clickable
                cursor: "pointer"
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "path",
                {
                  d: pathData,
                  stroke: color,
                  strokeWidth: "2",
                  fill: "none",
                  vectorEffect: "non-scaling-stroke",
                  transform: `scale(${scale})`
                }
              )
            },
            id
          );
        }
        return null;
      });
    },
    [annotations, scale]
  );
  const renderCurrentDrawing = (0, import_react.useCallback)(() => {
    if (!isDrawing || currentDrawingPoints.length < 2) return null;
    const pathData = currentDrawingPoints.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
    }, "");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "svg",
      {
        className: "adex-current-drawing",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 75,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: pathData,
            stroke: annotationColor,
            strokeWidth: "3",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    );
  }, [isDrawing, currentDrawingPoints, annotationColor]);
  const renderAnnotationDetail = (0, import_react.useCallback)(
    (annotation) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-detail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-annotation-detail-header", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-annotation-detail-actions" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-detail-content", children: [
          (annotation.type === "note" || annotation.type === "highlight") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-annotation-content-editor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "textarea",
            {
              value: annotation.content || "",
              onChange: (e) => updateAnnotation(annotation.id, { content: e.target.value }),
              placeholder: getLocaleData("annotations.addNoteHint", "Add a note..."),
              onClick: (e) => e.stopPropagation()
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-color-picker", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-color-options", children: ["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                className: `adex-color-option ${annotation.color === color ? "active" : ""}`,
                style: { backgroundColor: color },
                onClick: (e) => {
                  e.stopPropagation();
                  updateAnnotation(annotation.id, { color });
                },
                "aria-label": `${getLocaleData("annotations.colorSetTo", "Set color to")} ${color}`,
                title: `${getLocaleData("annotations.colorSetTo", "Set color to")} ${color}`
              },
              color
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                className: "adex-annotation-delete",
                onClick: (e) => {
                  e.stopPropagation();
                  deleteAnnotation(annotation.id);
                },
                "aria-label": getLocaleData("annotations.delete", "Delete annotation"),
                title: getLocaleData("annotations.delete", "Delete annotation"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-page", children: [
            "Page ",
            annotation.pageNumber,
            " - ",
            new Date(annotation.createdAt).toLocaleString()
          ] })
        ] })
      ] });
    },
    [deleteAnnotation, updateAnnotation]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: viewerRef,
      className: `PDFViewer adex-viewer ${fullScreenView ? "fullScreenView" : ""} ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} dev-abhishekbagul ${isMobile ? "adex-mobile" : ""} ${!textOptions.enableSelection ? "disable-text-selection" : ""} ${isPrinting ? "adex-printing" : ""}`,
      children: [
        showToolbar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-topbar", children: [
          (showControls == null ? void 0 : showControls.navigation) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-page", children: [
            (showControls == null ? void 0 : showControls.sidebarButton) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setSidebar(!sidebar), "aria-label": "Toggle sidebar", title: "Toggle sidebar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-layout-text-sidebar-reverse",
                viewBox: "0 0 16 16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z" })
                ]
              }
            ) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: pageNumber <= 1, onClick: () => goToPage(pageNumber - 1), "aria-label": getLocaleData("navigation.previousPage", "Previous page"), title: getLocaleData("navigation.previousPage", "Previous page"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-chevron-up",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  className: "page-number",
                  type: "number",
                  onChange: updatePDFPage,
                  value: previewNumber,
                  "aria-label": getLocaleData("search.page", "Page"),
                  title: getLocaleData("search.page", "Page")
                }
              ),
              " ",
              "/ ",
              numPages || "?"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                disabled: numPages === null || pageNumber >= numPages,
                onClick: () => goToPage(pageNumber + 1),
                "aria-label": getLocaleData("navigation.nextPage", "Next page"),
                title: getLocaleData("navigation.nextPage", "Next page"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-chevron-down",
                    viewBox: "0 0 16 16",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          (showControls == null ? void 0 : showControls.zoom) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-zoom", children: [
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => rotatePage(pageNumber, false),
                "aria-label": getLocaleData("toolbar.rotateCounterclockwise", "Rotate counterclockwise"),
                title: getLocaleData("toolbar.rotateCounterclockwise", "Rotate counterclockwise"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { onChange: (e) => setScale(+e.target.value), value: scale, "aria-label": getLocaleData("toolbar.zoomLevel", "Zoom level"), title: getLocaleData("toolbar.zoomLevel", "Zoom level"), children: scaleSets.map((scaleLevel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: scaleLevel, children: [
              (scaleLevel * 100).toFixed(0),
              "%"
            ] }, scaleLevel)) }),
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => rotatePage(pageNumber, true),
                "aria-label": getLocaleData("toolbar.rotateClockwise", "Rotate clockwise"),
                title: getLocaleData("toolbar.rotateClockwise", "Rotate clockwise"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-options", children: [
            (showControls == null ? void 0 : showControls.print) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: handlePrint, "aria-label": getLocaleData("toolbar.print", "Print document"), title: getLocaleData("toolbar.print", "Print document"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" })
            ] }) }),
            (showControls == null ? void 0 : showControls.fullscreen) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: toggleFullscreen, "aria-label": fullScreenView ? getLocaleData("toolbar.exitFullscreen", "Exit fullscreen") : getLocaleData("toolbar.fullscreen", "Enter fullscreen"), title: fullScreenView ? getLocaleData("toolbar.exitFullscreen", "Exit fullscreen") : getLocaleData("toolbar.fullscreen", "Enter fullscreen"), children: !fullScreenView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-arrows-fullscreen",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                  }
                )
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-fullscreen-exit",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" })
              }
            ) }),
            (showControls == null ? void 0 : showControls.download) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "a",
              {
                href: data == null ? void 0 : data.url,
                download: "document.pdf",
                className: "open-link-btn",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": getLocaleData("toolbar.download", "Download PDF"),
                title: getLocaleData("toolbar.download", "Download PDF"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-box-arrow-down",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-panel", style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-left-col", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => {
                  setLeftPanel(0), setSidebar(true);
                },
                "aria-label": getLocaleData("leftPanel.previews", "Page Previews"),
                title: getLocaleData("leftPanel.previews", "Page Previews"),
                className: leftPanel == 0 ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" })
                ] })
              }
            ),
            (showControls == null ? void 0 : showControls.search) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: toggleSearch,
                "aria-label": getLocaleData("leftPanel.search", "Search document"),
                title: getLocaleData("leftPanel.search", "Search document"),
                className: leftPanel == 1 ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }) })
              }
            ),
            (showControls == null ? void 0 : showControls.bookmarks) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: toggleBookmarksSidebar,
                "aria-label": getLocaleData("leftPanel.bookmarks", "Bookmarks and outline"),
                title: getLocaleData("leftPanel.bookmarks", "Bookmarks and outline"),
                className: leftPanel == 2 ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" })
                ] })
              }
            ),
            (showControls == null ? void 0 : showControls.annotations) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => toggleAnnotationsSidebar(),
                "aria-label": getLocaleData("leftPanel.annotations", "Annotations"),
                title: getLocaleData("leftPanel.annotations", "Annotations"),
                className: leftPanel == 3 ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) })
              }
            ),
            (showControls == null ? void 0 : showControls.localization) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => {
                  setShowLocaleOption(!showLocaleOption);
                  setShowInfo(false);
                },
                "aria-label": getLocaleData("locale.selectLanguage", "Select Language"),
                title: getLocaleData("locale.selectLanguage", "Select Language"),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "adex-left-panel",
              style: {
                width: sidebar ? `${leftPanelWidth}px` : "0px",
                flexShrink: 0,
                transition: isDragging ? "none" : "0.2s width ease",
                overflow: "hidden",
                position: "relative"
              },
              children: [
                leftPanel == 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-thumbs", children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_react_pdf.Document,
                  {
                    file: pdfBlobUrl,
                    loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-thumb-loader", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                    ] }),
                    onLoadSuccess: onDocumentLoadSuccess,
                    onLoadError: onDocumentLoadError,
                    children: [
                      !pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-thumb-loader", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                      ] }),
                      numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-page-thumb ${pageNumber === index + 1 ? "active" : ""}`,
                          onClick: () => goToPage(index + 1),
                          "aria-label": `${getLocaleData("search.page", "Page")} ${index + 1}`,
                          title: `${getLocaleData("search.page", "Page")} ${index + 1}`,
                          "aria-current": pageNumber === index + 1 ? "page" : void 0,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            import_react_pdf.Page,
                            {
                              scale: 0.2,
                              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-thumb-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }) }),
                              pageNumber: index + 1,
                              width: 600,
                              rotate: pageRotations[index + 1] || 0
                            }
                          )
                        },
                        `thumb-${index}`
                      ))
                    ]
                  }
                ) }),
                leftPanel == 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-search", ref: searchResultsRef, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-bar", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-results-header", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: getLocaleData("search.title", "Search") }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-search-results-count", children: [
                          searchResults.length,
                          " ",
                          getLocaleData("search.matches", "matches")
                        ] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-controls", children: searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-navigation", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            className: "adex-search-prev",
                            onClick: prevSearchResult,
                            disabled: searchResults.length <= 1,
                            "aria-label": getLocaleData("search.previousResult", "Previous result"),
                            title: getLocaleData("search.previousResult", "Previous result"),
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" }) })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            className: "adex-search-next",
                            onClick: nextSearchResult,
                            disabled: searchResults.length <= 1,
                            "aria-label": getLocaleData("search.nextResult", "Next result"),
                            title: getLocaleData("search.nextResult", "Next result"),
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" }) })
                          }
                        )
                      ] }) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-input-container", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "input",
                        {
                          ref: searchInputRef,
                          type: "text",
                          className: "adex-search-input",
                          placeholder: getLocaleData("search.placeholder", "Search in document..."),
                          value: searchQuery,
                          onChange: handleSearchChange,
                          onKeyDown: handleSearchKeyDown,
                          "aria-label": getLocaleData("search.placeholder", "Search in document..."),
                          title: getLocaleData("search.placeholder", "Search in document...")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: "adex-search-button",
                          onClick: performSearch,
                          disabled: isSearching || !searchQuery.trim() || !pdfDocument || !pdfDocument.numPages,
                          "aria-label": getLocaleData("search.title", "Search"),
                          title: getLocaleData("search.title", "Search"),
                          children: isSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-search-loading" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
                            }
                          )
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-results-list", children: searchResults.length > 0 ? searchResults.map((result, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      id: `search-result-${result.matchIndex}`,
                      className: `adex-search-result-item ${currentSearchResult === result.matchIndex ? "active" : ""}`,
                      onClick: () => {
                        setCurrentSearchResult(result.matchIndex);
                        navigateToSearchResult(result);
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-result-page", children: [
                          getLocaleData("search.page", "Page"),
                          " ",
                          result.pageIndex + 1
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-result-context", children: result.context.split(new RegExp(`(${searchQuery})`, "i")).map(
                          (part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-search-result-highlight", children: part }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i)
                        ) })
                      ]
                    },
                    `search-result-${index}`
                  )) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-no-results", children: isSearching ? getLocaleData("search.searching", "Searching...") : getLocaleData("search.noResults", "No results found") }) })
                ] }),
                leftPanel == 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-bookmarks", ref: bookmarksRef, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-header", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmarks-tabs", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "outline" ? "active" : ""}`,
                        onClick: () => setActiveTab("outline"),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" })
                          ] }),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getLocaleData("bookmarks.outline", "Outline") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "bookmarks" ? "active" : ""}`,
                        onClick: () => setActiveTab("bookmarks"),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8" }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getLocaleData("bookmarks.bookmarks", "Bookmarks") })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-content", children: activeTab === "outline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-container", children: documentOutline.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-list", children: renderOutlineItems(documentOutline) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-no-outline", children: getLocaleData("bookmarks.noBookmarks", "No bookmarks added yet") }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmarks-container", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-actions", children: isAddingBookmark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-add-bookmark-form", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "input",
                        {
                          type: "text",
                          className: "adex-bookmark-title-input",
                          placeholder: getLocaleData("bookmarks.bookmarkTitle", "Bookmark title"),
                          value: newBookmarkTitle,
                          onChange: (e) => setNewBookmarkTitle(e.target.value),
                          autoFocus: true,
                          onKeyDown: (e) => {
                            if (e.key === "Enter") addBookmark();
                            if (e.key === "Escape") setIsAddingBookmark(false);
                          }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmark-form-actions", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            className: "adex-bookmark-save",
                            onClick: addBookmark,
                            "aria-label": getLocaleData("bookmarks.save", "Save bookmark"),
                            title: getLocaleData("bookmarks.save", "Save bookmark"),
                            disabled: !newBookmarkTitle.trim(),
                            children: getLocaleData("bookmarks.save", "Save")
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            className: "adex-bookmark-cancel",
                            "aria-label": getLocaleData("bookmarks.cancel", "Cancel"),
                            title: getLocaleData("bookmarks.cancel", "Cancel"),
                            onClick: () => setIsAddingBookmark(false),
                            children: getLocaleData("bookmarks.cancel", "Cancel")
                          }
                        )
                      ] })
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        className: "adex-add-bookmark-btn",
                        "aria-label": getLocaleData("bookmarks.addBookmark", "Add Bookmark"),
                        title: getLocaleData("bookmarks.addBookmark", "Add Bookmark"),
                        onClick: () => setIsAddingBookmark(true),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4" })
                          ] }),
                          getLocaleData("bookmarks.addBookmark", "Add Bookmark")
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-list", children: bookmarks.length > 0 ? bookmarks.sort((a, b) => a.pageNumber - b.pageNumber).map((bookmark) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmark-item", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "adex-bookmark-link", onClick: () => navigateToBookmark(bookmark), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-bookmark-title", children: bookmark.title }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-bookmark-page", children: [
                          "p. ",
                          bookmark.pageNumber
                        ] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: "adex-bookmark-delete",
                          onClick: () => deleteBookmark(bookmark.id),
                          "aria-label": `${getLocaleData("bookmarks.deleteBookmark", "Delete bookmark:")} ${bookmark.title}`,
                          title: `${getLocaleData("bookmarks.deleteBookmark", "Delete bookmark:")} ${bookmark.title}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "12",
                              height: "12",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "path",
                                  {
                                    fillRule: "evenodd",
                                    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  }
                                )
                              ]
                            }
                          )
                        }
                      )
                    ] }, bookmark.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-no-bookmarks", children: getLocaleData("bookmarks.noBookmarks", "No bookmarks added yet") }) })
                  ] }) })
                ] }),
                leftPanel == 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-annotations", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotations-header", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: getLocaleData("annotations.title", "Annotations") }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotations-tools", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "note" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "note" ? cancelAddingAnnotation() : startAddingAnnotation("note"),
                          "aria-label": getLocaleData("annotations.addNote", "Add note"),
                          title: getLocaleData("annotations.addNote", "Add note"),
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) })
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "highlight" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "highlight" ? cancelAddingAnnotation() : startAddingAnnotation("highlight"),
                          "aria-label": getLocaleData("annotations.addHighlight", "Add highlight"),
                          title: getLocaleData("annotations.addHighlight", "Add highlight"),
                          disabled: !textOptions.enableSelection,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z" }) })
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "drawing" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "drawing" ? cancelAddingAnnotation() : startAddingAnnotation("drawing"),
                          "aria-label": getLocaleData("annotations.addDrawing", "Add drawing"),
                          title: getLocaleData("annotations.addDrawing", "Add drawing"),
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })
                            }
                          )
                        }
                      )
                    ] }),
                    isAddingAnnotation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-color-picker", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-color-options", children: ["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-color-option ${annotationColor === color ? "active" : ""}`,
                          style: { backgroundColor: color },
                          onClick: () => setAnnotationColor(color),
                          "aria-label": `${getLocaleData("annotations.colorSetTo", "Set color to")} ${color}`,
                          title: `${getLocaleData("annotations.colorSetTo", "Set color to")} ${color}`
                        },
                        color
                      )) }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "adex-cancel-annotation", onClick: cancelAddingAnnotation, "aria-label": getLocaleData("annotations.cancel", "Cancel"), children: getLocaleData("annotations.cancel", "Cancel") })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-annotations-list", children: annotations.length > 0 ? annotations.sort((a, b) => b.createdAt - a.createdAt).map((annotation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: `adex-annotation-item ${(selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id ? "active" : ""}`,
                      onClick: () => {
                        setSelectedAnnotation((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id ? null : annotation);
                        goToPage(annotation.pageNumber);
                        setTimeout(() => {
                          const pageElement = pageRefs.current[annotation.pageNumber];
                          if (pageElement) {
                            const annotationElements = pageElement.querySelectorAll(
                              `.adex-annotation[data-id="${annotation.id}"]`
                            );
                            if (annotationElements.length > 0) {
                              annotationElements[0].scrollIntoView({ behavior: "smooth", block: "center" });
                            }
                          }
                        }, 300);
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-list-item", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-icon", style: { background: annotation.color }, children: [
                            annotation.type === "note" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) }),
                            annotation.type === "highlight" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", d: "M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z" }) }),
                            annotation.type === "drawing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                viewBox: "0 0 16 16",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-content", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-annotation-title", children: [
                              annotation.type.charAt(0).toUpperCase() + annotation.type.slice(1),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-annotation-page", children: [
                                getLocaleData("annotations.page", "Page"),
                                " ",
                                annotation.pageNumber
                              ] })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-annotation-preview", children: annotation.content ? annotation.content.substring(0, 50) + (annotation.content.length > 50 ? "..." : "") : getLocaleData("annotations.noContent", "No content") })
                          ] })
                        ] }),
                        (selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id && renderAnnotationDetail(annotation)
                      ]
                    },
                    annotation.id
                  )) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-no-annotations", children: getLocaleData("annotations.noAnnotations", "No annotations added yet. Use the tools above to add annotations to your document.") }) })
                ] })
              ]
            }
          ),
          sidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              ref: resizeDividerRef,
              style: {
                width: "8px",
                cursor: "col-resize",
                background: "rgba(0, 0, 0, 0.05)",
                flexShrink: 0,
                zIndex: 10,
                position: "relative"
              },
              onMouseDown: startResize,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "4px",
                    height: "30px",
                    borderRadius: "2px",
                    background: "rgba(0, 0, 0, 0.2)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: previewRef, className: "adex-preview", style: { flex: 1, overflow: "auto" }, children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_react_pdf.Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-loader", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" })
              ] }),
              onLoadSuccess: onDocumentLoadSuccess,
              onLoadError: onDocumentLoadError,
              options: documentOptions,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-loader", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    ref: (el) => pageRefs.current[index + 1] = el,
                    className: "adex-page",
                    "aria-label": `Page ${index + 1} content`,
                    title: `Page ${index + 1} content`,
                    onClick: (e) => handlePageClick(e, index + 1),
                    onMouseDown: (e) => handleDrawingMouseDown(e, index + 1),
                    onMouseMove: handleDrawingMouseMove,
                    onMouseUp: (e) => {
                      handleDrawingMouseUp(e, index + 1), handleTextSelection(index + 1);
                    },
                    onMouseLeave: (e) => isDrawing && handleDrawingMouseUp(e, index + 1),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        import_react_pdf.Page,
                        {
                          loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }) }),
                          scale,
                          pageNumber: index + 1,
                          width: 600,
                          rotate: pageRotations[index + 1] || 0,
                          renderTextLayer: isTextLayerEnabled,
                          renderAnnotationLayer: isTextLayerEnabled,
                          canvasBackground: "white"
                        }
                      ),
                      renderAnnotations(index + 1),
                      isDrawing && index + 1 === pageNumber && renderCurrentDrawing()
                    ]
                  },
                  `page-${index}`
                ))
              ]
            }
          ) }),
          showInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-meta-panel", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-pdf-meta-info-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-info-square",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                    ]
                  }
                ),
                " ",
                getLocaleData("info.title", "Info"),
                ": ",
                (metadata == null ? void 0 : metadata.Title) || "N/A"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: () => {
                    setShowInfo(false);
                  },
                  "aria-label": getLocaleData("info.close", "Close Info Panel"),
                  title: getLocaleData("info.close", "Close Info Panel"),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-x-square",
                      viewBox: "0 0 16 16",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info-content", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "adex-pdf-meta-info-list", children: (_a = Object == null ? void 0 : Object.entries(metadata || {})) == null ? void 0 : _a.map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "adex-pdf-meta-info-item", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
                key,
                ":"
              ] }),
              " ",
              typeof value === "object" ? JSON.stringify(value) : value
            ] }, key)) }) })
          ] }) }),
          showLocaleOption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info adex-locales-panel", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-meta-panel", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-pdf-meta-info-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" })
                ] }),
                "  ",
                " ",
                getLocaleData("locale.selectLanguage", "Select Language")
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: () => {
                    setShowLocaleOption(false);
                  },
                  "aria-label": getLocaleData("annotations.cancel", "Cancel"),
                  title: getLocaleData("annotations.cancel", "Cancel"),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-x-square",
                      viewBox: "0 0 16 16",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info-content", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "adex-language-list", "aria-label": getLocaleData("locale.selectLanguage", "Select Language"), children: localization == null ? void 0 : localization.map((language) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: `adex-language-option ${language.locale == locale ? "active-lang" : ""}`, onClick: (e) => handleChangeLocale(language.locale), "aria-label": `${getLocaleData("locale.changeTo", "Change language to")} ${language == null ? void 0 : language.title}`, title: `${getLocaleData("locale.changeTo", "Change language to")} ${language == null ? void 0 : language.title}`, children: language.title }, language == null ? void 0 : language.title)) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-power-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-left-option", children: (showControls == null ? void 0 : showControls.info) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => {
                setShowInfo(!showInfo);
                setShowLocaleOption(false);
              },
              "aria-label": "Show document information",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  className: "bi bi-info-square",
                  viewBox: "0 0 16 16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                  ]
                }
              )
            }
          ) }),
          showCredits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            getLocaleData("credits.createdWith", "Created with"),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2665" }),
            " ",
            getLocaleData("credits.by", "by"),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/abhibagul/", target: "_blank", rel: "noreferrer", children: "Abhishek" })
          ] })
        ] })
      ]
    }
  );
};
var AdexViewer_default = AdexViewer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdexViewer
});
//# sourceMappingURL=index.js.map