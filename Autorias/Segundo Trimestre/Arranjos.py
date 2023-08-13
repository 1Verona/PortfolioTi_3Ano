#a ideia desse código é calcular Arranjos (analise combinatoria) usando Inputs do usuario no Terminal

def calcular_arranjos(n, r):
    if n < r:
        return "Erro: o número de elementos não pode ser menor que o número de posições."
    else:
        fatorial_n = 1
        fatorial_nr = 1

        for i in range(1, n+1):
            fatorial_n *= i

        for i in range(1, n-r+1):
            fatorial_nr *= i

        arranjos = fatorial_n / fatorial_nr
        return arranjos

numero_elementos = int(input("Digite o número de elementos: "))
numero_posicoes = int(input("Digite o número de posições: "))

resultado = calcular_arranjos(numero_elementos, numero_posicoes)
print(f"O número de arranjos de {numero_elementos} elementos, escolhendo {numero_posicoes} posições, é {resultado}.")
