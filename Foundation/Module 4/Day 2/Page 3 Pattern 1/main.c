/******************************************************************************
 
A       A
 *     * 
  B   B  
   * *   
    C    
   * *   
  B   B  
 *     * 
A       A

*******************************************************************************/

#include <stdio.h>

int main() {
   int i,j,n=9;
   char alpha='A';
   for(i=1; i<=n; i++){

       for(j=1; j<=n; j++){
           
           if(j==i|| j==n-i+1){
               (i%2==0)? printf("*"):printf("%c",alpha);
              
               }else{
                   printf(" ");
               }
           }
       
           if(i%2!=0)
               (i>=5)? alpha-- :alpha++;
       
    printf("\n");
    }

    return 0;
}


