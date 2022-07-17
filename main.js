
// async function getMap(){
//     const ins_api='https://catfact.ninja/fact'

//     try {
//         const respo=await fetch(ins_api)

//         return respo.json()
                
//     } catch (error) {
        
//     }
// }

// getMap().then((res)=>{console.log(res)})


// onload=function printwe(){
//     getMap().then((res)=>{
// for (const key in res) {
 
//     display.innerHTML +=` <h1>${res[key]}</h1>\n`

// }
//     })
// }



// const numbers = [21, 32, 20, 14, 355];
// numbers.sort((a, b) => b-a);
// console.log(numbers);



// function retProm(one,two=[]){

//     return new Promise((resolve,reject)=>{

// two.forEach(item => {
   
//     if(one==item){
            
//         resolve("good")
//     }
    

// });

// reject("noooo")


        
//     }).then((res)=>{
//         console.log(res)
//     })

//     .catch((err)=>{
//         console.log(err)
//     })
// }


// retProm(5,[4,5,6,7,8,9])


// async function getApi(){
//     try {
//          await fetch("https://moviesmern.herokuapp.com/movies/all")
        
//     } catch (error) {
        
//     }
// }

// getApi().then(res=>console.log(res))


// class course{
// constructor(nameof,isLecther,listGrades,listStudents){
//     this.nameof=nameof;
//     this.isLecther=isLecther;
//     this.listGrades=listGrades;
//     this.listStudents=listStudents;
// }
// }


// const students=["avi","natab","mori","yuam","beni"];

// const grades=[45,100,78,99,56];

// const one=new course("avi",true,grades,students);


// one.listGrades.forEach((item)=>{

//     display.innerText+=item

// })

// const sorete=one.listGrades.sort((a,b)=>a-b)
// console.log(sorete)



let namee="znavo";

let name2=namee.charAt(0).toUpperCase()+namee.slice(1,namee.length-1)+namee.charAt(namee.length-1).toUpperCase();

console.log(name2)