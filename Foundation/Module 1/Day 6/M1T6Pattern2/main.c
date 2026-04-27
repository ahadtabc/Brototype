/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {

  int rows=13;
  for(int i=1;i<=rows;i++){
    int stars;
    if(i%2==1){
        stars=14-i;
    }else{
    stars=(i/2)+1;
    }
    for(int k=1;k<=stars;k++){
        printf("*");
    }
    printf("\n");
  }
    return 0;
}
