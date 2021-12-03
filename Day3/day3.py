with open("input.txt") as file:
    lines = file.readlines()
    lines = [line.rstrip() for line in lines]


def part1():
    count = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    gamma_rate = ''
    epsilon_rate = ''
    for i in range(len(lines)):
        for j in range(12):
            if lines[i][j] == '0':
                count[j][0] += 1
            if lines[i][j] == '1':
                count[j][1] += 1

    for i in range(len(count)):
        if count[i][0] > count[i][1]:
            gamma_rate += '0'
            epsilon_rate += '1'
        else:
            gamma_rate += '1'
            epsilon_rate += '0'
    return [int(gamma_rate, 2), int(epsilon_rate, 2)]


power_consumption = part1()[0] * part1()[1]
print(power_consumption)


def oxygen_generator_rating(lst, repeat=0):
    count = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    for i in range(len(lst)):
        if lst[i][repeat] == '0':
            count[repeat][0] += 1
        if lst[i][repeat] == '1':
            count[repeat][1] += 1

    if count[repeat][0] > count[repeat][1]:
        for bit in lst[:]:
            if bit[repeat] == '1':
                lst.remove(bit)
    else:
        for bit in lst[:]:
            if bit[repeat] == '0':
                lst.remove(bit)

    if repeat == 11 or len(lst) == 1:
        return lst
    else:
        return oxygen_generator_rating(lst, repeat + 1)


def co2_scrubber_rating(lst, repeat=0):
    count = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    for i in range(len(lst)):
        if lst[i][repeat] == '0':
            count[repeat][0] += 1
        if lst[i][repeat] == '1':
            count[repeat][1] += 1

    if count[repeat][1] >= count[repeat][0]:
        for bit in lst[:]:
            if bit[repeat] == '1':
                lst.remove(bit)
    else:
        for bit in lst[:]:
            if bit[repeat] == '0':
                lst.remove(bit)

    if repeat == 11 or len(lst) == 1:
        return lst
    else:
        return co2_scrubber_rating(lst, repeat + 1)


def co2():
    return int(co2_scrubber_rating(lines, 0)[0], 2)


def oxy():
    return int(oxygen_generator_rating(lines, 0)[0], 2)


# For some reason python won't print these files at the same time so you need to comment one out to get the right answer
print(oxy())
print(1696 * 3995)
