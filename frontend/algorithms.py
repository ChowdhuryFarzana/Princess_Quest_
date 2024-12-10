def greedy_algorithm(data):
    """
    Implements the Greedy Algorithm to minimize the number of friends needed
    to cover all required skills.
    """
    required_skills = set(data['required_skills'])
    friends = data['friends']
    selected_friends = []
    
    while required_skills:
        # Find the friend who covers the most remaining skills
        best_friend = max(friends, key=lambda friend: len(set(friend['skills']) & required_skills))
        selected_friends.append(best_friend['name'])
        required_skills -= set(best_friend['skills'])
        friends.remove(best_friend)
    
    return selected_friends

def brute_force_algorithm(data):
    """
    Implements the Brute Force Algorithm to find the optimal solution.
    """
    from itertools import combinations
    
    required_skills = set(data['required_skills'])
    friends = data['friends']
    
    for i in range(1, len(friends) + 1):
        for combo in combinations(friends, i):
            skills_covered = set(skill for friend in combo for skill in friend['skills'])
            if skills_covered >= required_skills:
                return [friend['name'] for friend in combo]
    
    return []
