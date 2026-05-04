/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int  arr[5]={10,25,30,45,50};
    int i;
    
    for(i=0;i<5;i++){
        
        if(arr[i]>20){
            printf("%d ",arr[i]);
        }
    }
   
    
    return 0;
}
