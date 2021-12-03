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


def part2ox(lst, repeat=0):
    count = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    oxygen_generator = lst

    for i in range(len(lst)):
        if lines[i][repeat] == '0':
            count[repeat][0] += 1
        if lines[i][repeat] == '1':
            count[repeat][1] += 1

    for i in range(len(count)):
        if count[i][0] > count[i][1]:
            for j in range(len(oxygen_generator)):
                if oxygen_generator[j][repeat] != '0':
                    oxygen_generator.pop(j)
        else:
            for j in range(len(oxygen_generator)):
                print(j, len(oxygen_generator), i, len(count))
                if oxygen_generator[j][repeat] != '1':
                    oxygen_generator.pop(j)

    if len(lst) == 1:
        return lst
    else:
        return part2ox(oxygen_generator, repeat + 1)


def part2co(lst, repeat=0):
    count = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    co2_scrubber_rating = lst

    for i in range(len(lst)):
        if lines[i][repeat] == '0':
            count[repeat][0] += 1
        if lines[i][repeat] == '1':
            count[repeat][1] += 1

    for i in range(len(count)):
        if count[i][0] > count[i][1]:
            for j in range(len(co2_scrubber_rating)):
                if co2_scrubber_rating[j][repeat] != '1':
                    co2_scrubber_rating.pop(j)
        else:
            for j in range(len(co2_scrubber_rating)):
                if co2_scrubber_rating[j][repeat] != '0':
                    co2_scrubber_rating.pop(j)

    if len(lst) == 1:
        return lst
    else:
        return part2co(co2_scrubber_rating, repeat + 1)


print(part2ox(lines, 0), part2co(lines, 0))
# life_support_rating = oxygen_generator_rating * C02_scrubber_rating
