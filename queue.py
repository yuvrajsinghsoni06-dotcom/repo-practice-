class Queue:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
            self.items = self.items[1:]  # Remove the first item
        else:
            raise IndexError("Dequeue from an empty queue")

    def size(self):
        return len(self.items)
    
# Example usage:
if __name__ == "__main__":  
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    
    print(q.dequeue())  # Output: 1
    q.dequeue()
    q.dequeue()
    print(q.size())     # Output: 0
    print(q.is_empty()) # Output: True
    print(q.items)      # Output: []