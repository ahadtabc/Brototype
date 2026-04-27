/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int n=9;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(j+i==1+n || j==i){
                int half = (i <= 5) ? i : (n + 1 - i);
                printf("%d", half);
            }else{
                printf("  ");
            }
        }
           printf("\n");
    }
 

    return 0;
}