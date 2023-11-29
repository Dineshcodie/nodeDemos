//producer -return promise object

//Sync Method
const calculate=(value)=>{
    return new  Promise((resolve,reject)=>{
        //resolve -success
        //reject -error
        if(value) resolve(value +2);
        else reject("data id undefined")
    }
    )
};

//Method 1
calculate(2)
.then((data)=> console.log(data))
.catch((error)=> console.log(error))
// if resolve it will execute .then callback
// if reject it will execute .catch call back


//Method 2
const asyncfunc=async()=> { //call producer function asynchronously
   try{
    const data=await calculate(); //await for the data
    console.log(data)
   }catch(error){
      console.log(error)
   }
} 
asyncfunc()
