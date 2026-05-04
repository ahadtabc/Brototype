/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 8, 20, 7, 25, 12, 30};
    int length=sizeof(arr)/sizeof(arr[0]);
    int i;

    printf("The Array is : ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
    
            
    printf("\n Skip One elements after every even number in Array is :");
    for(i=0;i<length;i++){
        if(arr[i]%2==0){
            printf("%d ",arr[i]);
            i+=1;
            
        }else{
            printf("%d ",arr[i]);
        }
    }

    return 0;
}
