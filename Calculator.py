numbers=[20]
value=None
find=None
num=None
i=0
value=input("how many numbers do you want /n")
for value in numbers:
    input("/nwrite the number/n",num)
    numbers.append(num)
input("/ntell me the number you want to find",find)
for i in numbers:
    if(find==numbers[i]):
        print("the nunber is found")
