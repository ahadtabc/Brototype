/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    int count = 0;
    float average,sum = 0;
    
    for(int i=1;i<5;i++){
        sum+=arr[i];
    }
    average=sum/5;
    
    for(int i=1;i<5;i++){
        if(arr[i]>average){
            count++;
        }
    }
    printf("The Average of all elements is %.2f\n",average);
    printf("Number of element that greaterthan average is %d",count);
    return 0;
}
