# Find average of N integer numbers in Python

try:
    number = int(input("Enter the number of elements to be inserted: ")) # number of elements
    total_sum = 0 # sum of all numbers

    for i in range(number): # loop to iterate over all numbers
        total_sum += int(input("Enter Number : ")) # input numbers and add them to total_sum

    average = total_sum/number # calculate average

    print(f"Average of {number} numbers is : {average}")
except ValueError: # if input is not a number
    print("Invalid Input")
except ZeroDivisionError: # if number of elements is 0
    print("Cannot divide by 0")
