/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   int size=5;
    int arr[100]={10,20,30,40,50};
    int newElement;

    printf("The Array is : ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    printf("\nEnter the New Element to add: ");
    scanf("%d",&newElement);

        arr[size]=newElement;
        size++;

         printf("\nUpdated new Array is : ");

    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    return 0;
}

