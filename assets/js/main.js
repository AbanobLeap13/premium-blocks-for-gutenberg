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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/banner/index.js":
/*!************************************!*\
  !*** ./src/blocks/banner/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    PanelBody = _wp$components.PanelBody,\n    PanelColor = _wp$components.PanelColor,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl,\n    TextControl = _wp$components.TextControl,\n    CheckBoxControl = _wp$components.CheckBoxControl;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    ColorPalette = _wp$editor.ColorPalette,\n    URLInput = _wp$editor.URLInput;\nregisterBlockType('premium/banner', {\n  title: __('Banner'),\n  icon: 'admin-page',\n  category: 'premium-blocks',\n  edit: function edit(props) {},\n  save: function save(props) {}\n});\n\n//# sourceURL=webpack:///./src/blocks/banner/index.js?");

/***/ }),

/***/ "./src/blocks/dual-heading/index.js":
/*!******************************************!*\
  !*** ./src/blocks/dual-heading/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    PanelBody = _wp$components.PanelBody,\n    PanelColor = _wp$components.PanelColor,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl,\n    RangeControl = _wp$components.RangeControl,\n    CheckboxControl = _wp$components.CheckboxControl;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    RichText = _wp$editor.RichText,\n    ColorPalette = _wp$editor.ColorPalette,\n    URLInput = _wp$editor.URLInput;\nregisterBlockType('premium/dheading-block', {\n  title: __('Dual Heading'),\n  icon: 'editor-paragraph',\n  category: 'premium-blocks',\n  attributes: {\n    contentAlign: {\n      type: 'string',\n      default: 'center'\n    },\n    firstHeading: {\n      type: 'array',\n      source: 'children',\n      default: 'Premium ',\n      selector: '.premium-dheading-block__first'\n    },\n    secondHeading: {\n      type: 'array',\n      source: 'children',\n      default: 'Blocks',\n      selector: '.premium-dheading-block__second'\n    },\n    titleTag: {\n      type: 'string',\n      default: 'h1'\n    },\n    display: {\n      type: 'string',\n      default: 'inline'\n    },\n    firstColor: {\n      type: 'string',\n      default: '#6ec1e4'\n    },\n    firstSize: {\n      type: 'number',\n      default: '20'\n    },\n    firstBackground: {\n      type: 'string'\n    },\n    firstBorderType: {\n      type: 'string',\n      default: 'none'\n    },\n    firstBorderWidth: {\n      type: 'number',\n      default: '1'\n    },\n    firstBorderRadius: {\n      type: 'number',\n      default: '0'\n    },\n    firstBorderColor: {\n      type: 'string'\n    },\n    firstMarginR: {\n      type: 'number',\n      default: '0'\n    },\n    firstMarginL: {\n      type: 'number',\n      default: '0'\n    },\n    firstPadding: {\n      type: 'number',\n      default: '0'\n    },\n    firstClip: {\n      type: 'boolean',\n      default: false\n    },\n    firstAnim: {\n      type: 'boolean',\n      default: false\n    },\n    firstClipColor: {\n      type: 'string',\n      default: '#54595f'\n    },\n    secondColor: {\n      type: 'string',\n      default: '#54595f'\n    },\n    secondSize: {\n      type: 'number',\n      default: '20'\n    },\n    secondBackground: {\n      type: 'string'\n    },\n    secondBorderType: {\n      type: 'string',\n      default: 'none'\n    },\n    secondBorderWidth: {\n      type: 'number',\n      default: '1'\n    },\n    secondBorderRadius: {\n      type: 'number',\n      default: '0'\n    },\n    secondBorderColor: {\n      type: 'string'\n    },\n    secondMarginR: {\n      type: 'number',\n      default: '0'\n    },\n    secondMarginL: {\n      type: 'number',\n      default: '0'\n    },\n    secondPadding: {\n      type: 'number',\n      default: '0'\n    },\n    secondClip: {\n      type: 'boolean',\n      default: false\n    },\n    secondAnim: {\n      type: 'boolean',\n      default: false\n    },\n    secondClipColor: {\n      type: 'string',\n      default: '#6ec1e4'\n    },\n    link: {\n      type: 'boolean',\n      default: false\n    },\n    target: {\n      type: 'boolean',\n      default: false\n    },\n    headingURL: {\n      type: 'string'\n    }\n  },\n  edit: function edit(props) {\n    var setAttributes = props.setAttributes,\n        isSelected = props.isSelected,\n        className = props.className;\n    var _props$attributes = props.attributes,\n        contentAlign = _props$attributes.contentAlign,\n        firstHeading = _props$attributes.firstHeading,\n        secondHeading = _props$attributes.secondHeading,\n        titleTag = _props$attributes.titleTag,\n        display = _props$attributes.display,\n        firstColor = _props$attributes.firstColor,\n        firstBackground = _props$attributes.firstBackground,\n        firstSize = _props$attributes.firstSize,\n        firstBorderType = _props$attributes.firstBorderType,\n        firstBorderWidth = _props$attributes.firstBorderWidth,\n        firstBorderRadius = _props$attributes.firstBorderRadius,\n        firstBorderColor = _props$attributes.firstBorderColor,\n        firstPadding = _props$attributes.firstPadding,\n        firstMarginR = _props$attributes.firstMarginR,\n        firstMarginL = _props$attributes.firstMarginL,\n        firstClip = _props$attributes.firstClip,\n        firstAnim = _props$attributes.firstAnim,\n        firstClipColor = _props$attributes.firstClipColor,\n        secondColor = _props$attributes.secondColor,\n        secondBackground = _props$attributes.secondBackground,\n        secondSize = _props$attributes.secondSize,\n        secondBorderType = _props$attributes.secondBorderType,\n        secondBorderWidth = _props$attributes.secondBorderWidth,\n        secondBorderRadius = _props$attributes.secondBorderRadius,\n        secondBorderColor = _props$attributes.secondBorderColor,\n        secondPadding = _props$attributes.secondPadding,\n        secondMarginL = _props$attributes.secondMarginL,\n        secondMarginR = _props$attributes.secondMarginR,\n        secondClip = _props$attributes.secondClip,\n        secondAnim = _props$attributes.secondAnim,\n        secondClipColor = _props$attributes.secondClipColor,\n        link = _props$attributes.link,\n        target = _props$attributes.target,\n        headingURL = _props$attributes.headingURL;\n    var DISPLAY = [{\n      value: \"inline\",\n      label: \"Inline\"\n    }, {\n      value: \"block\",\n      label: \"Block\"\n    }];\n    var BORDER = [{\n      value: \"none\",\n      label: \"None\"\n    }, {\n      value: \"solid\",\n      label: \"Solid\"\n    }, {\n      value: \"double\",\n      label: \"Double\"\n    }, {\n      value: \"dotted\",\n      label: \"Dotted\"\n    }, {\n      value: \"dashed\",\n      label: \"Dashed\"\n    }, {\n      value: \"groove\",\n      label: \"Groove\"\n    }];\n    var blockClass = className.replace('wp-block-', '');\n    return [isSelected && wp.element.createElement(BlockControls, {\n      key: \"controls\"\n    }, wp.element.createElement(AlignmentToolbar, {\n      value: contentAlign,\n      onChange: function onChange(newAlign) {\n        return setAttributes({\n          contentAlign: newAlign\n        });\n      }\n    })), isSelected && wp.element.createElement(InspectorControls, {\n      key: \"inspector\"\n    }, wp.element.createElement(PanelBody, {\n      title: __(\"General Settings\"),\n      initialOpen: false\n    }, wp.element.createElement(TextControl, {\n      label: __('First Heading'),\n      type: \"url\",\n      value: firstHeading,\n      onChange: function onChange(value) {\n        return setAttributes({\n          firstHeading: value\n        });\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Second Heading'),\n      type: \"url\",\n      value: secondHeading,\n      onChange: function onChange(value) {\n        return setAttributes({\n          secondHeading: value\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('HTML Tag')), wp.element.createElement(SelectControl, {\n      label: __('Display'),\n      value: display,\n      options: DISPLAY,\n      onChange: function onChange(value) {\n        return setAttributes({\n          display: value\n        });\n      }\n    }), wp.element.createElement(CheckboxControl, {\n      label: __('Link'),\n      checked: link,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          link: newValue\n        });\n      }\n    }), link && wp.element.createElement(CheckboxControl, {\n      label: __('Open link in new tab'),\n      checked: target,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          target: newValue\n        });\n      }\n    })), wp.element.createElement(PanelBody, {\n      title: __('First Heading'),\n      initialOpen: false\n    }, wp.element.createElement(CheckboxControl, {\n      label: __('Clipped'),\n      checked: firstClip,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          firstClip: newValue\n        });\n      }\n    }), firstClip && wp.element.createElement(CheckboxControl, {\n      label: __('Animated'),\n      checked: firstAnim,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          firstAnim: newValue\n        });\n      }\n    }), wp.element.createElement(PanelColor, {\n      title: __('Color'),\n      colorValue: firstColor\n    }, wp.element.createElement(ColorPalette, {\n      value: firstColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          firstColor: newColor\n        });\n      }\n    })), wp.element.createElement(\"p\", null, __('Font Size (PX)')), wp.element.createElement(RangeControl, {\n      value: firstSize,\n      min: '10',\n      max: '80',\n      onChange: function onChange(newSize) {\n        return setAttributes({\n          firstSize: newSize\n        });\n      }\n    }), !firstClip && wp.element.createElement(PanelColor, {\n      title: __('Background Color'),\n      colorValue: firstBackground\n    }, wp.element.createElement(ColorPalette, {\n      value: firstBackground,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          firstBackground: newColor\n        });\n      }\n    })), firstClip && wp.element.createElement(PanelColor, {\n      title: __('Second Color'),\n      colorValue: firstClipColor\n    }, wp.element.createElement(ColorPalette, {\n      value: firstClipColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          firstClipColor: newColor\n        });\n      }\n    })), wp.element.createElement(SelectControl, {\n      label: __('Border Type'),\n      options: BORDER,\n      value: firstBorderType,\n      onChange: function onChange(newType) {\n        return setAttributes({\n          firstBorderType: newType\n        });\n      }\n    }), wp.element.createElement(\"p\", null, 'none' != firstBorderType && __('Border Width')), 'none' != firstBorderType && wp.element.createElement(RangeControl, {\n      value: firstBorderWidth,\n      min: '0',\n      max: '50',\n      onChange: function onChange(newWidth) {\n        return setAttributes({\n          firstBorderWidth: newWidth\n        });\n      }\n    }), 'none' != firstBorderType && wp.element.createElement(PanelColor, {\n      title: __('Border Color'),\n      colorValue: firstBorderColor\n    }, wp.element.createElement(ColorPalette, {\n      value: firstBorderColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          firstBorderColor: newColor\n        });\n      }\n    })), wp.element.createElement(\"p\", null, __('Border Radius')), wp.element.createElement(RangeControl, {\n      value: firstBorderRadius,\n      min: '0',\n      max: '150',\n      onChange: function onChange(newRadius) {\n        return setAttributes({\n          firstBorderRadius: newRadius\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Margin Left')), wp.element.createElement(RangeControl, {\n      value: firstMarginL,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newMargin) {\n        return setAttributes({\n          firstMarginL: newMargin\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Margin Right')), wp.element.createElement(RangeControl, {\n      value: firstMarginR,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newMargin) {\n        return setAttributes({\n          firstMarginR: newMargin\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Padding')), wp.element.createElement(RangeControl, {\n      value: firstPadding,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newPadding) {\n        return setAttributes({\n          firstPadding: newPadding\n        });\n      }\n    })), wp.element.createElement(PanelBody, {\n      title: __('Second Heading'),\n      initialOpen: false\n    }, wp.element.createElement(CheckboxControl, {\n      label: __('Clipped'),\n      checked: secondClip,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          secondClip: newValue\n        });\n      }\n    }), secondClip && wp.element.createElement(CheckboxControl, {\n      label: __('Animated'),\n      checked: secondAnim,\n      onChange: function onChange(newValue) {\n        return setAttributes({\n          secondAnim: newValue\n        });\n      }\n    }), wp.element.createElement(PanelColor, {\n      title: __('Color'),\n      colorValue: secondColor\n    }, wp.element.createElement(ColorPalette, {\n      value: secondColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          secondColor: newColor\n        });\n      }\n    })), wp.element.createElement(\"p\", null, __('Font Size (PX)')), wp.element.createElement(RangeControl, {\n      min: '10',\n      max: '80',\n      value: secondSize,\n      onChange: function onChange(newSize) {\n        return setAttributes({\n          secondSize: newSize\n        });\n      }\n    }), !secondClip && wp.element.createElement(PanelColor, {\n      title: __('Background Color'),\n      colorValue: secondBackground\n    }, wp.element.createElement(ColorPalette, {\n      value: secondBackground,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          secondBackground: newColor\n        });\n      }\n    })), secondClip && wp.element.createElement(PanelColor, {\n      title: __('Second Color'),\n      colorValue: secondClipColor\n    }, wp.element.createElement(ColorPalette, {\n      value: secondClipColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          secondClipColor: newColor\n        });\n      }\n    })), wp.element.createElement(SelectControl, {\n      label: __('Border Type'),\n      options: BORDER,\n      value: secondBorderType,\n      onChange: function onChange(newType) {\n        return setAttributes({\n          secondBorderType: newType\n        });\n      }\n    }), wp.element.createElement(\"p\", null, 'none' != secondBorderType && __('Border Width')), 'none' != secondBorderType && wp.element.createElement(RangeControl, {\n      value: secondBorderWidth,\n      min: '0',\n      max: '50',\n      onChange: function onChange(newWidth) {\n        return setAttributes({\n          secondBorderWidth: newWidth\n        });\n      }\n    }), 'none' != secondBorderType && wp.element.createElement(PanelColor, {\n      title: __('Border Color'),\n      colorValue: secondBorderColor\n    }, wp.element.createElement(ColorPalette, {\n      value: secondBorderColor,\n      onChange: function onChange(newColor) {\n        return setAttributes({\n          secondBorderColor: newColor\n        });\n      }\n    })), wp.element.createElement(\"p\", null, __('Border Radius')), wp.element.createElement(RangeControl, {\n      value: secondBorderRadius,\n      min: '0',\n      max: '150',\n      onChange: function onChange(newRadius) {\n        return setAttributes({\n          secondBorderRadius: newRadius\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Margin Left')), wp.element.createElement(RangeControl, {\n      value: secondMarginL,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newMargin) {\n        return setAttributes({\n          secondMarginL: newMargin\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Margin Right')), wp.element.createElement(RangeControl, {\n      value: secondMarginR,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newMargin) {\n        return setAttributes({\n          secondMarginR: newMargin\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('Padding')), wp.element.createElement(RangeControl, {\n      value: secondPadding,\n      min: '0',\n      max: '100',\n      onChange: function onChange(newPadding) {\n        return setAttributes({\n          secondPadding: newPadding\n        });\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: \"\".concat(blockClass, \"__container\"),\n      style: {\n        textAlign: contentAlign\n      }\n    }, link && isSelected && wp.element.createElement(URLInput, {\n      value: headingURL,\n      onChange: function onChange(newUrl) {\n        return setAttributes({\n          headingURL: newUrl\n        });\n      }\n    }), wp.element.createElement(\"h2\", {\n      className: \"\".concat(blockClass, \"__title\")\n    }, wp.element.createElement(\"span\", {\n      className: \"\".concat(blockClass, \"__first premium-headingc-\").concat(firstClip, \" premium-headinga-\").concat(firstAnim),\n      style: {\n        display: display,\n        color: firstColor,\n        backgroundColor: firstClip ? 'none' : firstBackground,\n        backgroundImage: firstClip ? \"linear-gradient(to left, \".concat(firstColor, \", \").concat(firstClipColor, \")\") : 'none',\n        fontSize: firstSize + 'px',\n        border: firstBorderType,\n        borderWidth: firstBorderWidth + 'px',\n        borderRadius: firstBorderRadius + 'px',\n        borderColor: firstBorderColor,\n        padding: firstPadding + 'px',\n        marginLeft: firstMarginL + 'px',\n        marginRight: firstMarginR + 'px'\n      }\n    }, firstHeading), wp.element.createElement(\"span\", {\n      className: \"\".concat(blockClass, \"__second premium-headingc-\").concat(secondClip, \" premium-headinga-\").concat(secondAnim),\n      style: {\n        display: display,\n        color: secondColor,\n        backgroundColor: secondClip ? 'none' : secondBackground,\n        backgroundImage: secondClip ? \"linear-gradient(to left, \".concat(secondColor, \", \").concat(secondClipColor, \")\") : 'none',\n        fontSize: secondSize + 'px',\n        border: secondBorderType,\n        borderWidth: secondBorderWidth + 'px',\n        borderRadius: secondBorderRadius + 'px',\n        borderColor: secondBorderColor,\n        padding: secondPadding + 'px',\n        marginLeft: secondMarginL + 'px',\n        marginRight: secondMarginR + 'px'\n      }\n    }, secondHeading)))];\n  },\n  save: function save(props) {\n    var className = props.className,\n        _props$attributes2 = props.attributes,\n        contentAlign = _props$attributes2.contentAlign,\n        firstHeading = _props$attributes2.firstHeading,\n        secondHeading = _props$attributes2.secondHeading,\n        titleTag = _props$attributes2.titleTag,\n        display = _props$attributes2.display,\n        firstColor = _props$attributes2.firstColor,\n        firstBackground = _props$attributes2.firstBackground,\n        firstSize = _props$attributes2.firstSize,\n        firstBorderType = _props$attributes2.firstBorderType,\n        firstBorderWidth = _props$attributes2.firstBorderWidth,\n        firstBorderRadius = _props$attributes2.firstBorderRadius,\n        firstBorderColor = _props$attributes2.firstBorderColor,\n        firstPadding = _props$attributes2.firstPadding,\n        firstMargin = _props$attributes2.firstMargin,\n        firstClip = _props$attributes2.firstClip,\n        firstAnim = _props$attributes2.firstAnim,\n        firstClipColor = _props$attributes2.firstClipColor,\n        secondColor = _props$attributes2.secondColor,\n        secondBackground = _props$attributes2.secondBackground,\n        secondSize = _props$attributes2.secondSize,\n        secondBorderType = _props$attributes2.secondBorderType,\n        secondBorderWidth = _props$attributes2.secondBorderWidth,\n        secondBorderRadius = _props$attributes2.secondBorderRadius,\n        secondBorderColor = _props$attributes2.secondBorderColor,\n        secondPadding = _props$attributes2.secondPadding,\n        secondMargin = _props$attributes2.secondMargin,\n        secondClip = _props$attributes2.secondClip,\n        secondAnim = _props$attributes2.secondAnim,\n        secondClipColor = _props$attributes2.secondClipColor,\n        link = _props$attributes2.link,\n        target = _props$attributes2.target,\n        headingURL = _props$attributes2.headingURL;\n    var blockClass = 'premium-dheading-block';\n    return wp.element.createElement(\"a\", {\n      className: \"\".concat(blockClass, \"__link\"),\n      href: link && headingURL,\n      target: target && '_blank'\n    }, wp.element.createElement(\"div\", {\n      className: \"\".concat(blockClass, \"__container\"),\n      style: {\n        textAlign: contentAlign\n      }\n    }, wp.element.createElement(\"h2\", {\n      className: \"\".concat(blockClass, \"__title\")\n    }, wp.element.createElement(\"span\", {\n      className: \"\".concat(blockClass, \"__first premium-headingc-\").concat(firstClip, \" premium-headinga-\").concat(firstAnim),\n      style: {\n        display: display,\n        color: firstColor,\n        backgroundColor: firstClip ? 'none' : firstBackground,\n        backgroundImage: firstClip ? \"linear-gradient(to left, \".concat(firstColor, \", \").concat(firstClipColor, \")\") : 'none',\n        fontSize: firstSize + 'px',\n        border: firstBorderType,\n        borderWidth: firstBorderWidth + 'px',\n        borderRadius: firstBorderRadius + 'px',\n        borderColor: firstBorderColor,\n        padding: firstPadding + 'px',\n        margin: firstMargin + 'px'\n      }\n    }, firstHeading), wp.element.createElement(\"span\", {\n      className: \"\".concat(blockClass, \"__second premium-headingc-\").concat(secondClip, \" premium-headinga-\").concat(secondAnim),\n      style: {\n        display: display,\n        color: secondColor,\n        backgroundColor: secondClip ? 'none' : secondBackground,\n        backgroundImage: secondClip ? \"linear-gradient(to left, \".concat(secondColor, \", \").concat(secondClipColor, \")\") : 'none',\n        fontSize: secondSize + 'px',\n        border: secondBorderType,\n        borderWidth: secondBorderWidth + 'px',\n        borderRadius: secondBorderRadius + 'px',\n        borderColor: secondBorderColor,\n        padding: secondPadding + 'px',\n        margin: secondMargin + 'px'\n      }\n    }, secondHeading))));\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/dual-heading/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/dual-heading */ \"./src/blocks/dual-heading/index.js\");\n/* harmony import */ var _blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/banner */ \"./src/blocks/banner/index.js\");\n/* harmony import */ var _blocks_banner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_banner__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });