from itertools import combinations

def greedy_selection(abilities_needed, friends):
    selected_friends = []
    remaining_abilities = abilities_needed.copy()

    while remaining_abilities:
        best_friend = max(friends, key=lambda friend: len(friends[friend] & remaining_abilities))
        selected_friends.append(best_friend)
        remaining_abilities -= friends[best_friend]
        del friends[best_friend]

    return selected_friends

def brute_force_selection(abilities_needed, friends):
    all_friends = list(friends.keys())
    min_selection = None

    for i in range(1, len(all_friends) + 1):
        for combination in combinations(all_friends, i):
            combined_abilities = set()
            for friend in combination:
                combined_abilities.update(friends[friend])
            if abilities_needed.issubset(combined_abilities):
                if min_selection is None or len(combination) < len(min_selection):
                    min_selection = combination

    return list(min_selection)
