# @dillonstreator/litelogger

0 dependency, super lightweight logging utility providing log levels, colors, and formatted JSON.

# Installation
`npm install @dillonstreator/litelogger`

# Usage
```Javascript
const logger = require('@dillonstreator/litelogger')();

logger.debug('debugging something...'); // process.env.DEBUG = true
logger.info('informative log here...');
logger.warn('warning... warning...');
logger.error('Error has occurred');

//outputs...
```
![Basic Output](https://github.com/DillonStreator/litelogger/blob/assets/images/output-basic.PNG "output-basic")


# Config (optional)
| property | type | values | default | description |
|----------|------|--------|-------------|-------|
| prefix   | string | any | null | insert this string value after the output's date and before the log value (example below) |
| suppressTrace | boolean | true/false | false | specifies whether or not the logger should output the stack trace of any **Error** object that is passed (example below) |

# Levels
| level | color | description |
|---|---|---|
|`debug`|magenta|`process.env.DEBUG` **MUST** be set to `true` for logging at this level |
|`info`|cyan|n/a|
|`warn`|yellow|n/a|
|`error`|red|n/a|


# Usage cont.

### prefixing
```Javascript
const prefixedLogger = require('@dillonstreator/litelogger')({prefix:'Ima Prefix'});

prefixedLogger.info('information with a prefix');

// outputs...
```
![Prefixed Output](https://github.com/DillonStreator/litelogger/blob/assets/images/output-prefixed.PNG "output-prefixed")
___
### suppressTrace
```Javascript
const suppressedLogger = require('@dillonstreator/litelogger')({suppressTrace:true});
const nonSuppressedLogger = require('@dillonstreator/litelogger')();

const error = new Error('big failure!');

suppressedLogger.error(error);
nonSuppressedLogger.error(error);

// outputs...
```
![Supressed Output](https://github.com/DillonStreator/litelogger/blob/assets/images/output-suppression.PNG "output-suppression")
___
### pretty printing
```Javascript
const logger = require('@dillonstreator/litelogger')();

logger.debug(
    'Thing one', { 'thing': 'one' },
    'Thing two', { 'works with': { 'nested': 'objects' } },
    'Thing three', { 'works with': { 'arrays': [1, 2, 3] } }
);

// outputs...
```
![Object Output](https://github.com/DillonStreator/litelogger/blob/assets/images/output-objects.PNG "output-objects")


