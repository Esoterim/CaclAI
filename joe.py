import random

a = []

for i in range (6):
    a.append(random.randint(0, 9))

print (a)

import random

def generate_6_digit_seed():
    return random.randint(100000, 999999)

# Example usage
if __name__ == "__main__":
    seed = generate_6_digit_seed()
    print("Generated 6-digit seed:", seed)