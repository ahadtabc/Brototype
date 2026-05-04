/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdbool.h>

int main() {
    int arr[5] = {15,23,8,42,17};
    int search=42;
    bool found=false;
    
    for(int i=0;i<5;i++){
        if(arr[i]==search){
            found=true;
         printf("Number = %d \nFound at position : %d ",search,i+1);
        }
    }
    if(found!=true){
 
        printf(" %d is Not Found",search);
    }
    
    
    
   

    return 0;
}
