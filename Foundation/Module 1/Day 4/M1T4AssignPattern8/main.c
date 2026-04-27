/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
  
int col =2;
  for(int i=1;i<=3;i++){
      for(int j=1;j<=i;j++){
    for(int k=1;k<=col*i;k++){
        printf("* ");
        
    }
    printf("\n");
      }
      if(i==3)break;
          for(int k=1;k<=3;k++){
              printf("*\n");
          }
      
  }
  return 0;
}