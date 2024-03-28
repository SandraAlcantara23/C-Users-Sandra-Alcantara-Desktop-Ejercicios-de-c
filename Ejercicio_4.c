#include <stdio.h>
#include <stdbool.h>

bool esPrimo(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

int main() {
    int limite = 20;
    printf("Números primos hasta %d:\n", limite);
    for (int i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            printf("%d ", i);
        }
    }
    printf("\n");
    return 0;
}
