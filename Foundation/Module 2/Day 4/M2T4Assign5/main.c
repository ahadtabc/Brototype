/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[] = {4, 5, 4, 6, 6, 7, 8};
    int length=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp,uniqCount;
    
    printf("The Array is : ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
        
        for(i=0; i<length-1; i++){
            
            for(j=0; j<length-i-1; j++){
                 
                if(arr[j]> arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    
    if(length>0){
        uniqCount=1;
    }else{
        uniqCount=0;
    }
    for (i = 1; i < length; i++) {
        if(arr[i]!=arr[i-1]){
            uniqCount++;
        }
        }

       printf("\nThe Sorted Array is : ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
 

    printf("\nNo: of Unique elements: %d", uniqCount);
    
    return 0;
}

