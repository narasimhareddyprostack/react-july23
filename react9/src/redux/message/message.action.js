const GM ='GM'
const GN='GN'
let gmAction = ()=>{
    console.log("User Clicked - GM Button")
    return { type:GM }
}
let gnAction = ()=>{
    return {type:GN}
}

export {gmAction,gnAction,GM,GN}