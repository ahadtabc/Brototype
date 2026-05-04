/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
     int arr[]={10, 15, 10, 20, 15, 30};
     int n=sizeof(arr)/sizeof(arr[0]);
     int i,j,isUnique=0;
     float sum,avg;
     
     printf("The Array is : ");
     for(i=0;i<n;i++){
         printf("%d ",arr[i]);
     }
     
     printf("\nUnique elements found: ");
     for(i=0;i<n;i++){
        int count=0;
        
            for(j=0;j<n;j++){
                if(arr[i]==arr[j]){
                    count++;
                }
            }
            
        if(count==1){
            printf("%d ",arr[i]);
            sum+=arr[i];
            isUnique++;
        }
     }
     
     if(isUnique>0){
         avg=sum/isUnique;
         printf("\nSum of Unique elements: %.2f",sum);
         printf("\nAverage of Unique elements: %.2f",avg);
         
     }else{
         printf("Not Unique elements Found");
     }

    return 0;
}