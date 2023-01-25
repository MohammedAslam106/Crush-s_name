
check=()=>{
    let l1=document.getElementById('lover1')
    let l2=document.getElementById('lover2')
    localStorage.setItem(JSON.stringify(l1.value),JSON.stringify(l2.value))
}
// let l1=document.getElementById('lover1')
// let l2=document.getElementById('lover2')
// let key=l1.value
// let value=l2.value
// localStorage.setItem('key','value')
