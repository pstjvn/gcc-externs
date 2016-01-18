/**
 * Provides the InputSetting JSON typed object for constructing an input
 * element imperatively from the server.
 */



/**
 * Provides the basic configuration for an element, includes the layout options
 * should the element need to be configured from the server.
 * @constructor
 */
function MaterialConfig() {}


/** @type {string} */
MaterialConfig.prototype.content;


/** @type {string} */
MaterialConfig.prototype.classNames;


/** @type {boolean} */
MaterialConfig.prototype.raised;


/** @type {boolean} */
MaterialConfig.prototype.disabled;


/** @type {boolean} */
MaterialConfig.prototype.usePointer;


/** @type {boolean} */
MaterialConfig.prototype.useScroll;


/** @type {string} */
MaterialConfig.prototype.type;


/** @type {boolean} */
MaterialConfig.prototype.checked;

/** @type {pstj.autogen.icons.names} */
MaterialConfig.prototype.icon;


// function MaterialFormElementConfig() {}
// MaterialFormElementConfig.prototype.name;
// MaterialFormElementConfig.prototype.type;
// MaterialFormElementConfig.prototype.label;
// MaterialFormElementConfig.prototype.value;
// MaterialFormElementConfig.prototype.pattern;
// MaterialFormElementConfig.prototype.required;
// MaterialFormElementConfig.prototype.errorText;
// MaterialFormElementConfig.prototype.values;
// MaterialFormElementConfig.prototype.labels;



/**
 * The material setup object
 * @constructor
 * @extends {MaterialConfig}
 */
function MaterialInputConfig() {}


/** @type {string} */
MaterialInputConfig.prototype.name;


/** @type {string} */
MaterialInputConfig.prototype.type;


/** @type {string} */
MaterialInputConfig.prototype.label;


/** @type {string} */
MaterialInputConfig.prototype.value;


/** @type {string} */
MaterialInputConfig.prototype.pattern;


/** @type {boolean} */
MaterialInputConfig.prototype.required;


/** @type {string} */
MaterialInputConfig.prototype.errorText;



/**
 * The material toggle button config
 * @constructor
 * @extends {MaterialConfig}
 */
function ToggleButtonConfig() {}


/** @type {string} */
ToggleButtonConfig.prototype.name;


/** @type {number} */
ToggleButtonConfig.prototype.value;



/**
 * Provides the radiogroup options.
 * @constructor
 * @extends {MaterialConfig}
 */
function RadioGroupConfig() {}


/** @type {string} */
RadioGroupConfig.prototype.value;


/** @type {string} */
RadioGroupConfig.prototype.values;


/** @type {string} */
RadioGroupConfig.prototype.name;


/** @type {string} */
RadioGroupConfig.prototype.labels;


/**
 * Combination of all possible material configurations
 * @typedef {RadioGroupConfig | ToggleButtonConfig | MaterialInputConfig |
 *    MaterialConfig}
 */
var MaterialUIConfig;

/**
 * @constructor
 * @extends {MaterialConfig}
 */
function MaterialUIModel() {};


/** @type {number|string} */
MaterialUIModel.prototype.id;


/**
 * Provides the material UI config options - a tree of nested elements to
 * build UI from.
 * @constructor
 */
function MaterialUIItem() {}


/**
 * Reference to the name of the element - the name is used to determine
 * which UI component to be used to create the element.
 * @type {string}
 */
MaterialUIItem.prototype.type;


/**
 * Reference to the configuration / model for the current element to be
 * created.
 * @type {MaterialUIConfig}
 */
MaterialUIItem.prototype.config;


/**
 * List of children elements to be created. Note that not all type of
 * elements support this!
 * @type {MaterialUIList}
 */
MaterialUIItem.prototype.elements;


/**
 * Contains the model definition for the element. Can be pretty much
 * anything depending on the usage, but the general case would be
 * for inputs and it would contain all of the possible settings plus
 * an unique ID to be used with external model bindings.
 * @type {MaterialUIModel}
 */
MaterialUIItem.prototype.model;


/**
 * A list of items to create an UI.
 * @typedef {Array.<MaterialUIItem>}
 */
var MaterialUIList;
