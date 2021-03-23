// 10. Write a function which returns the n rows by n columns identity matrix.
debugger;
function matrix(n) {

    let i;
    let j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);
