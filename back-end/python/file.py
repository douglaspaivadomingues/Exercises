with open('arquivo.txt', 'w') as file:
    file.write('nome idade\n')
    file.write('Maria 69\n')
    file.write('Douglas 37\n')
    print(file.closed)
print(file.closed)


with open('arquivo.txt', 'a') as file:
    print("Túlio 22", file=file)

with open('arquivo.txt', 'r') as file:
    content = file.read()
    print(content)