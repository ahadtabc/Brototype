/******************************************************************************

Write a C program to count even numbers 
and count prime numbers in an array: {10, 7, 13, 18, 11, 20, 9}

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 7, 13, 18, 11, 20, 9};
    int size=sizeof(arr)/sizeof(arr[0]);
    int i,j,isPrime=1,primeCount=0,evenCount=0;
    
    printf("The OG Array is :");
    for(i=0;i<size;i++)
    printf("%d ",arr[i]);
    
    
     for(i=0;i<size;i++){
        if(arr[i]%2==0){
            evenCount++;
        }
        
        if(arr[i]<2){
            continue;
           
        }
         isPrime=1;
            for(j=2;j<=arr[i]/2;j++){
                if(arr[i]%j==0){
                isPrime=0;
                break;
            }
     }
      
      if(isPrime==1){
          primeCount++;
      }  
     }
   
    
    printf("\nThe Prime No of count is = %d ",primeCount);
    printf("\n The Even No of count is = %d ",evenCount);

    return 0;
}
