class StackList:
    def __init__(self):
        self.stack = []

    # Push: Add an element to the top of the stack
    def push(self, item):
        self.stack.append(item)

    # Pop: Remove and return the top element
    def pop(self):
        if self.is_empty():
            return "Stack Underflow! The stack is empty."
        return self.stack.pop()

    # Peek / Top: View the top element without removing it
    def peek(self):
        if self.is_empty():
            return "Stack is empty."
        return self.stack[-1]

    # Check if the stack is empty
    def is_empty(self):
        return len(self.stack) == 0

    # Clean display
    def display(self):
        print("Stack (Bottom -> Top):", self.stack)


# --- Testing the List Stack ---
s = StackList()
s.push(10)
s.push(20)
s.push(30)
s.display()  # Output: [10, 20, 30]

print("Popped element:", s.pop())  # Output: 30
print("Top element (Peek):", s.peek())  # Output: 20
s.display()  # Output: [10, 20]