/******************************************************************************

  A       E 
    B   D 
      C 
    B   D 
  A       E 



*******************************************************************************/

#include <stdio.h>

int main() {
    
    int i,j,k,n=3;
    char alpha ='A';
    for(i=1; i<=n; i++){
        for(k=1; k<=2*i; k++){
            printf(" ");
        }
      
      int new=(n-i)*2;
        for(j=0; j<=new; j++){
       if (j==0 || j==new){
             printf("%c ",64+i+j);
       }else{
           printf("  ");
       }
        }
   printf("\n");
    }
    
     for(i=n-1; i>=1; i--){
        for(k=1; k<=2*i; k++){
            printf(" ");
        }
      
      int new=(n-i)*2;
        for(j=0; j<=new; j++){
       if (j==0 || j==new){
             printf("%c ",64+i+j);
       }else{
           printf("  ");
       }
        }
   printf("\n");
    }
  

    return 0;
}