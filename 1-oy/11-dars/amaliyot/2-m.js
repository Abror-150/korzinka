let arr = ['Asad','karl','jones']

function remove(user=[],item){
   if(user.includes(item)){
    user.splice(user.indexOf(item),1)
    console.log(user);
   } else{
    console.log(user);
   }
}
remove(arr,'Asad')