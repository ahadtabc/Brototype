/******************************************************************************

Assignment 2.5
Write a C program to delete all repeating elements from 
an array (keep only elements that appear once): {10, 15, 10, 20, 15, 30, 10}.

The OG Array is: 10 15 10 20 15 30 10 
Updated Array is: 20 30
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 10};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    int freq[100]={0};
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        freq[arr[i]]++;
    }
    
    
    for(i=0; i<n; i++){
        if( freq[arr[i]] > 1){
        for(j=i; j<n-1; j++){
            arr[j]=arr[j+1];
        }
        n--;
        i--;
        }
    }

    printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    return 0;
}


    

    
//     // Step 1: Count the occurrences of all elements
//     for(i = 0; i < n; i++) {
//         freq[arr[i]]++;
//     }

//     // Step 2: Loop and delete elements that repeat (frequency > 1)
//     for(i = 0; i < n; i++) {
//         if(freq[arr[i]] > 1) { // Found a repeating element!
            
//             // Shift elements to the left to delete it
//             for(j = i; j < n - 1; j++) {
//                 arr[j] = arr[j + 1];
//             }
            
//             n--; // Reduce the array size counter
//             i--; // Recheck the current position for the newly shifted element
//         }
//     }
    
//     printf("\nUpdated Array is: ");
//     for(i = 0; i < n; i++) {
//         printf("%d ", arr[i]);
//     }
    
//     printf("\n");
//     return 0;
// }