const defaultOpts = {
    prefix: null,
    suppressTrace: false
};
process.env.DEBUG=true;
module.exports = (opts=defaultOpts) => {
    const bright = "\x1b[1m";
    const reset = "\x1b[0m";
    const colorMap = {
        debug: `\x1b[35m${bright}`,  // magenta
        info: `\x1b[36m${bright}`,   // cyan
        warn: `\x1b[33m${bright}`,   // yellow
        error: `\x1b[31m${bright}`   // red
    };
    const levelPrint = level => `${colorMap[level]}${level.toUpperCase()}${reset}`;

    const log = level => {
        return (...messages) => {
            if (level === 'debug' && !/true/ig.test(process.env.DEBUG)) return;

            const outputStart = messages.length > 1 ? '\n' : '';
            const output = messages.reduce((acc, m, idx) => {
                let formattedObject = null;
                if (typeof m === 'object') formattedObject = JSON.stringify(m, true, 4);
                if (m instanceof Error) formattedObject = (`${opts.suppressTrace?m.message:m.stack}`);
                return acc + (formattedObject || m) + (idx !== messages.length-1 ? '\n' : '');
            }, outputStart);

            console[level](`[${new Date().toISOString()}]${opts.prefix?`[${opts.prefix}]`:''} ${levelPrint(level)}`, output);
        }
    }

    return Object.keys(colorMap).reduce((a,c)=>{a[c]=log(c);return a;},{});
};