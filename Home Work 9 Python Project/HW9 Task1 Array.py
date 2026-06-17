

my_array = [4, 4, 8, 3, 3, 3, 2, 4, 4]
print("Масив містить такі елементи")
for element in my_array:
    print(element)
print("   ")

print("Перші 3 елементи масиву")
for index in range(3):
    print(my_array[index])
print("   ")

print("Сума усіх елементів масиву")
print(sum(my_array))
print("   ")

print("Сума усіх елементів масиву окрім елементів що = 4")
a=0
for element in my_array:
    if element != 4:
        a = a + element
print(a)

