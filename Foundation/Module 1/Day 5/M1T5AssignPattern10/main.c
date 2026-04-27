/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
 

 for(int i=9;i>=3;i-=2){
     for(int j=1;j<=i;j++){
         printf("%d ",j);
     }
      printf("\n");
      
     if(i>3)
     for(int k=1;k<i;k+=2){
         printf("%d %d\n",k,k+1);
     }
     }

return 0;
}