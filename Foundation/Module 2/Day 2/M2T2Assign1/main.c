#include <stdio.h>

int main()
{
    int size=5;
    int arr[]={10,20,30,40,50};
    int newValue;

    printf("The Array is : ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    printf("\nEnter to insert new value: ");
    scanf("%d",&newValue);

    for(int i=size;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=newValue;
    size++;

    printf("\nThe Update Array is :");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    return 0;
}
