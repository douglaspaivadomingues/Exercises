name_user = input('Digite seu nome ')

def vertical_name(name_user):
    for name in range(len(name_user), 0,-1):
        print(name_user[:name])

vertical_name(name_user)
