/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/

#include <stdio.h>

int main()
{
    int n=5;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i;j++){
            printf("  ");
        }
        for(int k=0;k<(2*i-1);k++){
            if((i+k)%2==0){
                printf("0 ");
            }else{
                printf("1 ");
            }
        }
            printf("\n");
    }
      for(int i=n-1;i>=1;i--){
        for(int j=1;j<=n-i;j++){
            printf("  ");
        }
        for(int k=0;k<(2*i-1);k++){
                  if((i+k)%2==0){
                printf("0 ");
            }else{
                printf("1 ");
                
            }
        }
            printf("\n");
    }


    return 0;
}