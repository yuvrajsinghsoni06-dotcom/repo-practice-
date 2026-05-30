# arr = [4,2,5,9,7,5,8,1,3,6]
def search(arr, x):
    n = len(arr)
    
    # Iterate over the array in order to
    # find the key x
    for i in range(n):
        if (arr[i] == x):
            return i
    return -1

if __name__ == "__main__":
    arr = ["art", "is", "fun", "to", "learn"]
    x = "art"

    result = search(arr, x)
    if(result == -1):
        print("Element is not present in array")
    else:
        print("Element is present at index", result)