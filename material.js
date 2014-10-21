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


/** @type {string|number} */
MaterialConfig.prototype.id;


/** @type {string} */
MaterialConfig.prototype.content;


/** @type {string} */
MaterialConfig.prototype.classNames;



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
 * A list of items to create an UI.
 * @typedef {Array.<MaterialUIItem>}
 */
var MaterialUIList;
