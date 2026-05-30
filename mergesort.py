def mergesort(a):
    if len(a) <= 1:
        return a

    mid = len(a)//2
    left = mergesort(a[:mid])
    right = mergesort(a[mid:])

    return merge(left, right)

def merge(l, r):
    result = []
    i = j = 0

    while i < len(l) and j < len(r):
        if l[i] < r[j]:
            result.append(l[i])
            i += 1
        else:
            result.append(r[j])
            j += 1

    result.extend(l[i:])
    result.extend(r[j:])
    return result

print(mergesort([5,2,4,7,1,3]))