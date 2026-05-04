/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
     int size=5;
     int arr[100]={10,20,30,40,50};
     int position,i;
     
     printf("The Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    printf("\nEnter a element in this arry were (1 to %d) : ",size);
    scanf("%d",&position);
    
    for(i=0;i<size;i++){
        if(position <1 || position > size){
        printf("\n Error ! Please select (1 to %d) ",size);
        break;
        }else{
        
    for(i=position-1;i<size-1;i++){
        arr[i]=arr[i+1];
    }
    
    size--;
        }
    printf("The Updated Array is : ");{
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    }
    return 0;
}
}
