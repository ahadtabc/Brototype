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
    int position;
    int newElement;

    printf("The Array is : ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    printf("\nEnter any New Position: ");
    scanf("%d",&position);

    printf("\nEnter the New Element to add: ");
    scanf("%d",&newElement);

    for(int i=size-1;i>=position-1;i--){
        arr[i+1]=arr[i];
    }  
        arr[position-1]=newElement;
      

         printf("\nUpdated new with custom Array is : ");

    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    return 0;
}

