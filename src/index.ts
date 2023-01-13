/**
 * @param args List up classNames as strings and objects
 */
function cn(...args :any[]){
    args = args.map(s=> {
        if(typeof s === 'object'){
            return Object.keys(s).map(k=> !!s[k] ? k : undefined)
        }
        return s;
    })
    return args.flat().filter(s=> s).join(' ')
}

export default cn;