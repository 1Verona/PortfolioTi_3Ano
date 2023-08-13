#mesma ideia do anterior mas com Combinaçoes

def calcular_combinacoes(n, r):
    if n < r:
        return "Erro: o número de elementos não pode ser menor que o número de seleções.
    else:
        fatorial_n = 1
        fatorial_r = 1
        fatorial_nr = 1

        for i in range(1, n+1):
            fatorial_n *= i

        for i in range(1, r+1):
            fatorial_r *= i

        for i in range(1, n-r+1):
            fatorial_nr *= i

        combinacoes = fatorial_n / (fatorial_r * fatorial_nr)
        return combinacoes

numero_elementos = int(input("Digite o número de elementos: "))
numero_selecoes = int(input("Digite o número de seleções: "))

resultado = calcular_combinacoes(numero_elementos, numero_selecoes)

print(f"O número de combinações de {numero_elementos} elementos, escolhendo {numero_selecoes}, é {resultado}.")
