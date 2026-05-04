/******************************************************************************

Write a C program to replace all prime numbers with -1, 
then delete all negative numbers: {7, 12, 13, 18, 11, 20, 9}

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={7, 12, 13, 18, 11, 20, 9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,isPrime=1;
    
    printf("The OG Array is: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);
    
    for(i=0;i<n;i++){
    if(arr[i]<2){
       isPrime=1;
       continue; 
    }else{
        for(j=2;j<arr[i]/2;j++){
            if(arr[i]%j==0){
                isPrime=0;
                break;
            }
        }
    }
    
    if(isPrime==1){
      arr[i]=-1;
        }
        
    }
    
    //delete the -1 numbers in array
      for(i=0;i<n;i++){
         if(arr[i]<0){
             for(j=i;j<n-1;j++){
                 arr[j]=arr[j+1];
             }
             n--;
             i--;
         } 
      }
      
        printf("\nThe Prime Number Removed Array is: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);
      
    return 0;
}
