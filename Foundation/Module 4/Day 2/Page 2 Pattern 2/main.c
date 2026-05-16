/******************************************************************************

     A
    ABA
   ABCBA
  ABCDCBA
 ABCDEDCBA


*******************************************************************************/
#include <stdio.h>

int main()
{
    int i,j,k,n=5;
    char alpha='@';
    for(i=1; i<=n; i++){
        for(k=i; k<=n; k++){
            printf(" ");
        }
    
    for(j=1; j<=i; j++){
        printf("%c",alpha+j);
    }
    
     for(j=i; j>1; j--){
        printf("%c",63+j);
    }
    printf("\n");
    }
    
    return 0;
}