/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   int arr[6]={5,12,18,7,25,30};

    printf("The Greaterthan 10: ");
    
    for(int i=0;i<6;i++){
        if(arr[i]>10){
            printf("%d ",arr[i]);
        }
    }
    
     printf("\nThe Even Numbers: "); 
    for(int i=0;i<6;i++){
        if(arr[i]%2==0){
            printf("%d ",arr[i]);
        }
    }
    

    return 0;
}
