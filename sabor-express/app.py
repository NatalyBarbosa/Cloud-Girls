import os #biblioteca que limpa o cod anterior

restaurantes = [{'nome':'Praça', 'categoria': 'Japonesa', 'ativo': False},
                {'nome':'Pizza', 'categoria': 'Italiana', 'ativo' : True},
                {'nome':'Cantina', 'categoria': 'Brasileira', 'ativo': False}]

def exibir_nome_programa():
    print("""
▄▀█ █░░ █▀█ █░█ █ █▀▄▀█ █ ▄▀█   █▀▀ █░█ █░░ █ █▄░█ ▄▀█ █▀█ █ ▄▀█
█▀█ █▄▄ ▀▀█ █▄█ █ █░▀░█ █ █▀█   █▄▄ █▄█ █▄▄ █ █░▀█ █▀█ █▀▄ █ █▀█\n""")

def exibir_opcoes():
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Alternar estado do restaurante')
    print('4. Sair\n')

def finalizar_app():
    exibir_subtitulo('Finalizando o app')

def exibir_subtitulo(texto):
    os.system('cls')
    linha = '*' * (len(texto) + 4)
    print(linha)
    print(texto)
    print(linha)
    print() #\n

def opcao_invalida():
    print('Opção inválida!\n')
    voltar_ao_menu_principal()

def cadastrar_restaurantes():

    '''Essa função é responsável por cadastrar um novo restaurante

    Inputs:

    - Nome do restaurante
    - categoria

    Outputs:
    -Adiciona um novo restaurante a lista de restaurantes
    
    '''

    exibir_subtitulo('Cadastrando restaurantes')

    nome_do_restaurante = input('Insira o nome do restaurante que deseja cadastrar: ')

    categoria = input(f'Digite o nome da categoria do restaurante {nome_do_restaurante}: ')

    dados_do_restaurante = {'nome': nome_do_restaurante, 'categoria': categoria, 'ativo': False}

    restaurantes.append(nome_do_restaurante) #coloca nomes na lista

    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!\nInsira uma tecla para voltar ao menu principal\n')

    voltar_ao_menu_principal()

def voltar_ao_menu_principal():
    input('\nInsira uma tecla para voltar ao menu principal\n')
    main()

def listar_restaurantes():

    exibir_subtitulo('Listando restaurantes')

    print(f'{"Nome do restaurante".ljust(22)} | {"Categoria".ljust(20)} | Status')

    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = 'ativado' if restaurante['ativo'] else 'desativado'
        print(f' - {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | {ativo} ')
        
    voltar_ao_menu_principal()

def escolher_opcao():
    try:
        opcao_escolhida= int(input('Escolha uma opção: '))
        print('Você escolheu a opção ', opcao_escolhida)

        if opcao_escolhida == 1:
            cadastrar_restaurantes()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()            
    except:
        opcao_invalida()

def alternar_estado_restaurante():

    exibir_subtitulo('Alternando estado do restaurante')

    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')

    restaurante_encontrado = False

    for restaurante in restaurantes:

        if nome_restaurante == restaurante['nome']:
            
            restaurante_encontrado = True
            
            restaurante['ativo'] = not restaurante['ativo'] #não importa o estado que esteja, no fim fica verdadeiro
            
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'

            print(mensagem)
        
    if not restaurante_encontrado:

        print('O restaurante não foi encontrado')

    voltar_ao_menu_principal()

def main():
    os.system('cls')
    exibir_nome_programa()
    exibir_opcoes()
    escolher_opcao()


if __name__ == '__main__':
    main()