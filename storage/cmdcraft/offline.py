from javascript import On, require
from time import sleep
from os import system as cmd
v = require('vec3')
mineflayer = require('mineflayer')
#pathfinder = require('mineflayer-pathfinder')
data = 0
x = 0
y = 0
z = 0
print('Ваш ник:')
nick = input('>')
print('Сервер:')
host = input('>')
player = mineflayer.createBot({
    'host':host,
    'username':nick,
    'version':False
})
#player.loadPlugin(pathfinder)
#mcData = require('minecraft-data')(player.version)
#movements = pathfinder.Movements(player, mcData)
print('Добро пожаловать в CMDCraft!')
@On(player, 'chat')
def handleMsg(this, sender, message, *args):
    if not sender == nick:
      print('[',sender,'] ',message)

@On(player, 'end')
def end(*args):
    print('Вы вышли из игры или вас кикнули')

cmd('cls')
while True:
  print('-------------------------')
  print('C - Пообщаться с игроками')
  print('PD - Полностью информация')
  print('G - Стоит на земле?')
  print('CD - Координаты игрока')
  print('X - Выйти')
  print('W - Идти по координатам')
  print('-------------------------')
  data = input('>')
  if data == 'C':
    print('Chat with players!')
    player.chat(input('>'))
  if data == 'PD':
    print(player)
  if data == 'G':
    print(player.entity.onGround)
  if data == 'CD':
    print(player.entity.position)
  if data == 'X':
    print('Причина выхода:')
    datos = input('>')
    f = open('C:\\Users\sapbot\AppData\Local\Temp\SCSDATA\exits.log' , 'a')
    f.write(datos)
    f.close()
    player.quit(datos)
    print('Вы вышли из игры по причине: ', datos)
    break
    
  if data == 'W':
    print('Какие нужны вам координаты?')
    x = input('X >')
    y = input('Y >')
    z = input('Z >')
    print('Это пока не работает')
    #player.pathfinder.setMovements(movements)
    #player.pathfinder.goto(v(x, y, z))
  sleep(1)
  cmd('cls')
  
  
