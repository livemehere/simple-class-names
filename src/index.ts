
function cn(...rest:any[]){
    let classes:string[] = []
    rest.forEach(r => {
        if (Array.isArray(r)) {
            if(r.length){
                const inner = cn.apply(null,r)
                classes.push(inner)
            }
        } else if(typeof r === 'object'){
            Object.entries(r).forEach(([k,v])=>{
                if(v){
                    classes.push(k)
                }
            })
        } else{
            classes.push(r)
        }
    })
    return classes.join(' ');
}

export default cn;