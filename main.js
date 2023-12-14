var b
var a=[]
var x=[]
var size=parseInt(prompt("Enter the size of the array"))
for(i=0;i<size;i++){
    a[i]=parseInt(prompt("Enter the "+(i+1)+"value : "))
}
document.write("The given array is : "+a+"<br>")

    for(i=0;i<a.length;i++){
        var temp=a[i]
        var c=0
        while(a[i]>0){
        
        b=a[i]%10
        a[i]=parseInt (a[i]/10)
        c=c*10+b
       
        }
         console.log(c)
        if(temp==c){
            x.push(temp)
           
        }
    }
 document.write("The palindrome number in the given array is : "+x)