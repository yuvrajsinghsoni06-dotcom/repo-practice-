# # # # # # # arr = [9,3,7,5,6,4,8,2]
# # # # # # # def Merge_sort(arr):
# # # # # # #     if len(arr) <= 1:
# # # # # # #         return arr
# # # # # # #     mid = len(arr) // 2
# # # # # # #     left = arr[:mid]
# # # # # # #     right = arr[mid:]
# # # # # # #     left = Merge_sort(left)
# # # # # # #     right = Merge_sort(right)
# # # # # # #     return Merge(left,right)

# # # # # # # def Merge(left,right):
# # # # # # #     new = []
# # # # # # #     i,j = 0,0
# # # # # # #     while i < len(left) and j < len(right):
# # # # # # #         if left[i] < right[j]:
# # # # # # #             new.append(left[i])
# # # # # # #             i += 1
# # # # # # #         else:
# # # # # # #             new.append(right[j])
# # # # # # #             j += 1

# # # # # # #     new.extend(left[i:])
# # # # # # #     new.extend(right[j:])

# # # # # # #     return new

# # # # # # # print(Merge_sort(arr))


# # # # # # ## quick sort Algoritm


# # # # # # def quick_sort(arr):
# # # # # #     # Base case: arrays with 0 or 1 element are already sorted
# # # # # #     if len(arr) <= 1:
# # # # # #         return arr
    
# # # # # #     # Choose the middle element as the pivot
# # # # # #     pivot = arr[len(arr) // 2]
    
# # # # # #     # Partition the array into three parts
# # # # # #     left = [x for x in arr if x < pivot]    # Elements smaller than pivot
# # # # # #     middle = [x for x in arr if x == pivot] # Elements equal to pivot
# # # # # #     right = [x for x in arr if x > pivot]   # Elements larger than pivot
    
# # # # # #     # Recursively sort the left and right parts, then combine
# # # # # #     return quick_sort(left) + middle + quick_sort(right)

# # # # # # # Test it out
# # # # # # my_array = [9, 3, 7, 5, 6, 4, 8, 2]
# # # # # # sorted_array = quick_sort(my_array)
# # # # # # print(sorted_array)


# # # # # # insertion at the begining
# # # # # class Node:
# # # # #     def __init__(self, data):
# # # # #         self.data = data
# # # # #         self.next = None  # Pointer to the next node, initially None

# # # # # class LinkedList:
# # # # #     def __init__(self):
# # # # #         self.head = None  # The list starts empty

# # # # #     # Method to insert a new node at the beginning
# # # # #     def insert_at_beginning(self, new_data):
# # # # #         # Step 1: Create the new node
# # # # #         new_node = Node(new_data)
        
# # # # #         # Step 2: Point the new node's 'next' to the current head
# # # # #         new_node.next = self.head
        
# # # # #         # Step 3: Update the head to be the new node
# # # # #         self.head = new_node

# # # # #     # Helper method to print the linked list
# # # # #     def display(self):
# # # # #         current = self.head
# # # # #         elements = []
# # # # #         while current:
# # # # #             elements.append(str(current.data))
# # # # #             current = current.next
# # # # #         elements.append("None")
# # # # #         print(" -> ".join(elements))


# # # # # # --- Testing the Code ---
# # # # # if __name__ == "__main__":
# # # # #     my_list = LinkedList()
    
# # # # #     print("Starting with an empty list:")
# # # # #     my_list.display()
    
# # # # #     print("\nInserting 10 at the beginning:")
# # # # #     my_list.insert_at_beginning(10)
# # # # #     my_list.display()
    
# # # # #     print("\nInserting 20 at the beginning:")
# # # # #     my_list.insert_at_beginning(20)
# # # # #     my_list.display()
    
# # # # #     print("\nInserting 30 at the beginning:")
# # # # #     my_list.insert_at_beginning(30)
# # # # #     # my_list.display()

# # # # class Node:
# # # #     def __init__(self, data):
# # # #         self.data = data
# # # #         self.next = None

# # # # class LinkList:
# # # #     def __init__(self):
# # # #         self.head = None

# # # #     # Adding an element at the beginning
# # # #     def insertion_at_beginning(self, new_data):
# # # #         # 1. Create the new node using the data passed
# # # #         new_node = Node(new_data)
        
# # # #         # 2. Point the new node's 'next' to the current head
# # # #         new_node.next = self.head
        
# # # #         # 3. Update the head to be the new node
# # # #         self.head = new_node

# # # #     # Helper method to print the list and see our results
# # # #     def print_list(self):
# # # #         current_node = self.head
# # # #         while current_node:
# # # #             print(current_node.data, end=" -> ")
# # # #             current_node = current_node.next
# # # #         print("None")


# # # # # --- Testing the Implementation ---

# # # # # Initialize the linked list
# # # # llist = LinkList()

# # # # # Insert elements at the beginning
# # # # # Because we are always adding to the front, they will appear in reverse order!
# # # # llist.insertion_at_beginning(10)
# # # # llist.insertion_at_beginning(20)
# # # # llist.insertion_at_beginning(30)
# # # # llist.insertion_at_beginning(40)

# # # # # Display the list
# # # # print("Current Linked List:")
# # # # llist.print_list()



# # # class Node:
# # #     """A basic building block containing data and a pointer to the next node."""
# # #     def __init__(self, data):
# # #         self.data = data
# # #         self.next = None


# # # class LinkedList:
# # #     """The manager class that handles all list operations."""
# # #     def __init__(self):
# # #         self.head = None

# # #     # 1. Addition at the Beginning
# # #     def insert_at_beginning(self, data):
# # #         new_node = Node(data)
# # #         new_node.next = self.head
# # #         self.head = new_node

# # #     # 2. Addition at the End
# # #     def insert_at_end(self, data):
# # #         new_node = Node(data)
        
# # #         if self.head is None:
# # #             self.head = new_node
# # #             return

# # #         last_node = self.head
# # #         while last_node.next:
# # #             last_node = last_node.next
            
# # #         last_node.next = new_node

# # #     # 3. Addition in the Middle (at a specific index position)
# # #     def insert_at_position(self, position, data):
# # #         # If inserting at the very front, reuse the existing method
# # #         if position == 0:
# # #             self.insert_at_beginning(data)
# # #             return
            
# # #         new_node = Node(data)
# # #         current_node = self.head
# # #         current_position = 0
        
# # #         # Traverse to the node exactly BEFORE the desired position
# # #         while current_node is not None and current_position < position - 1:
# # #             current_node = current_node.next
# # #             current_position += 1
            
# # #         # If position is out of bounds
# # #         if current_node is None:
# # #             print(f"Position {position} is out of bounds. Node not inserted.")
# # #             return
            
# # #         # Insert the new node
# # #         new_node.next = current_node.next
# # #         current_node.next = new_node

# # #     # 4. Deletion at Any Position
# # #     def delete_at_position(self, position):
# # #         if self.head is None:
# # #             print("The list is empty. Nothing to delete.")
# # #             return

# # #         current_node = self.head

# # #         # Case 1: Deleting the head node (Position 0)
# # #         if position == 0:
# # #             self.head = current_node.next
# # #             current_node = None
# # #             return

# # #         # Case 2: Deleting a node in the middle or end
# # #         current_position = 0
# # #         prev_node = None
        
# # #         # Traverse to the exact position
# # #         while current_node is not None and current_position < position:
# # #             prev_node = current_node
# # #             current_node = current_node.next
# # #             current_position += 1

# # #         # If the position is greater than the number of nodes
# # #         if current_node is None:
# # #             print(f"Position {position} is out of bounds. Nothing to delete.")
# # #             return

# # #         # Unlink the node
# # #         prev_node.next = current_node.next
# # #         current_node = None

# # #     # Helper method to print the list
# # #     def display(self):
# # #         current_node = self.head
# # #         if not current_node:
# # #             print("The list is empty.")
# # #             return
            
# # #         while current_node:
# # #             print(current_node.data, end=" -> ")
# # #             current_node = current_node.next
# # #         print("None")


# # # # --- Testing the Implementation ---
# # # if __name__ == "__main__":
# # #     llist = LinkedList()
    
# # #     print("1. Insert at Beginning:")
# # #     llist.insert_at_beginning(10)
# # #     llist.insert_at_beginning(5)
# # #     llist.display()  # Expected: 5 -> 10 -> None
    
# # #     print("\n2. Insert at End:")
# # #     llist.insert_at_end(30)
# # #     llist.insert_at_end(40)
# # #     llist.display()  # Expected: 5 -> 10 -> 30 -> 40 -> None
    
# # #     print("\n3. Insert in Middle (at position 2):")
# # #     llist.insert_at_position(2, 20)
# # #     llist.display()  # Expected: 5 -> 10 -> 20 -> 30 -> 40 -> None
    
# # #     print("\n4. Delete at Any Position (position 3):")
# # #     llist.delete_at_position(3)
# # #     llist.display()  # Expected: 5 -> 10 -> 20 -> 40 -> None
    
# # #     print("\n5. Delete at Position 0 (Head):")
# # #     llist.delete_at_position(0)
# # #     llist.display()  # Expected: 10 -> 20 -> 40 -> None


# # class Node:
# #     def __init__(self, data):
# #         self.data = data
# #         self.next = None

# # class LinkedList:
# #     def __init__(self):
# #         self.head = None

# #     def Insertion_at_beg(self,data):
# #         new_node = Node(data)
# #         new_node.next = self.head
# #         self.head = new_node

# #     def display(self):
# #         current = self.head
# #         while current != None:
# #             print(current.data,end=" -> ")
# #             current = current.next

    
# #     def insertion_at_mid(self,position,data):
# #         # 1. Handle edge case: Inserting at the very front (Position 0)
# #         if position == 0:
# #             self.insertion_at_beg(data)
# #             return

# #         new_node = Node(data)
# #         current = self.head
# #         current_pos = 0

# #         # 2. Traverse the list to find the node exactly BEFORE the desired position
# #         # We stop at position - 1
# #         while current != None and current_pos < position - 1:
# #             current = current.next
# #             current_pos += 1

# #         # 3. Handle edge case: The position is larger than the list size
# #         if current == None:
# #             print(f"Index {position} is out of bounds! Node not inserted.")
# #             return

# #         # 4. Insert the node! (Order is crucial here)
# #         # First, connect the new node to the rest of the chain
# #         new_node.next = current.next 
        
# #         # Second, connect the current node to the new node
# #         current.next = new_node






# # # ele = LinkedList()
# # # ele.Insertion_at_beg(39)
# # # ele.Insertion_at_beg(59)
# # # ele.Insertion_at_beg(69)
# # # ele.insertion_at_mid(2,49)
# # # print(ele.display())


# # class Queues:
# #     def __init__(self, items):
# #         self.items = items

#     # Add an item to the back of the queue
# #     def enqueue(self, item):
# #         self.items.append(item)
# #         return self.items
    
# #     # Remove an item from the front of the queue (No arguments needed!)
# #     def dequeue(self):
# #         if len(self.items) == 0:
# #             print("Queue Underflow! The queue is empty.")
# #             return None
        
# #         # Capture the front item and slice the rest of the list
# #         self.items = self.items[1:]
# #         return self.items
    
# #     # Helper method to cleanly print our queue state
# #     def display(self):
# #         print("Front ->", self.items, "<- Rear")


# # # --- Execution and Verification ---

# # # Initialize with an empty list
# # queue = Queues([])

# # # Enqueue elements
# # queue.enqueue(10)
# # queue.enqueue(20)
# # queue.enqueue(30)

# # print("Queue after Enqueues:")
# # queue.display()  # Output: Front -> [10, 20, 30] <- Rear

# # # Dequeue an element
# # queue.dequeue()

# # print("\nQueue after one Dequeue:")
# # queue.display()  # Output: Front -> [20, 30] <- Rear


# class CircularQueue:
#     def __init__(self, size):
#         self.size = size
#         # Initialize the queue with None values of a fixed size
#         self.queue = [None] * size
#         self.front = -1
#         self.rear = -1

#     # Insert an element into the circular queue
#     def enqueue(self, data):
#         # Condition for queue being full
#         if ((self.rear + 1) % self.size == self.front):
#             print("Queue Overflow! The queue is completely full.")
#             return

#         # Condition for inserting the very first element
#         elif (self.front == -1):
#             self.front = 0
#             self.rear = 0
#             self.queue[self.rear] = data
#         else:
#             # Circularly increment rear pointer
#             self.rear = (self.rear + 1) % self.size
#             self.queue[self.rear] = data

#     # Delete an element from the circular queue
#     def dequeue(self):
#         # Condition for queue being empty
#         if (self.front == -1):
#             print("Queue Underflow! The queue is empty.")
#             return None

#         # Capture the data to return it
#         removed_data = self.queue[self.front]
#         self.queue[self.front] = None  # Clear the slot

#         # Condition if the queue had only one element left
#         if (self.front == self.rear):
#             self.front = -1
#             self.rear = -1
#         else:
#             # Circularly increment front pointer
#             self.front = (self.front + 1) % self.size

#         return removed_data

#     # Display the current state of the queue
#     def display(self):
#         if self.front == -1:
#             print("The queue is empty.")
#             return

#         print("\n--- Current Queue Status ---")
#         print("Raw Array Layout:", self.queue)
#         print(f"Front Index: {self.front} | Rear Index: {self.rear}")
        
#         # Traverse circularly from front to rear to print the logical order
#         print("Logical Queue Order: ", end="")
#         if self.rear >= self.front:
#             for i in range(self.front, self.rear + 1):
#                 print(self.queue[i], end=" <- ")
#         else:
#             for i in range(self.front, self.size):
#                 print(self.queue[i], end=" <- ")
#             for i in range(0, self.rear + 1):
#                 print(self.queue[i], end=" <- ")
#         print("End")


# # --- Execution Walkthrough ---
# if __name__ == "__main__":
#     # Create a Circular Queue of size 5
#     cq = CircularQueue(5)

#     print("1. Filling up the queue:")
#     cq.enqueue(10)
#     cq.enqueue(20)
#     cq.enqueue(30)
#     cq.enqueue(40)
#     cq.enqueue(50)
#     cq.display()

#     print("\n2. Trying to force an overflow:")
#     cq.enqueue(60) # Should say Full

#     print("\n3. Dequeuing two items (Creating space at the front):")
#     print("Dequeued:", cq.dequeue()) # Removes 10
#     print("Dequeued:", cq.dequeue()) # Removes 20
#     cq.display()

#     print("\n4. Enqueuing new items (Watch them wrap around to indices 0 and 1!):")
#     cq.enqueue(60)
#     cq.enqueue(70)
#     cq.display()

    




def partition_last_element(arr, low, high):
    """
    Takes the last element as pivot, places the pivot element at its 
    correct sorted position, and places all smaller elements to its left 
    and all greater elements to its right.
    """
    pivot = arr[high]  # Selecting the last element as pivot
    i = low - 1        # Index of the smaller element boundary

    for j in range(low, high):
        # If the current element is smaller than or equal to the pivot
        if arr[j] <= pivot:
            i += 1     # Increment index of smaller element
            arr[i], arr[j] = arr[j], arr[i]  # Swap them

    # Finally, place the pivot in its correct position (at i + 1)
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    
    # Return the index of the pivot
    return i + 1


def quick_sort(arr, low, high):
    """
    Main Quick Sort function that recursively sorts the partitions.
    """
    if low < high:
        # pi is the partitioning index, arr[pi] is now at the right place
        pi = partition_last_element(arr, low, high)

        # Recursively sort elements before and after the partition
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)


# --- Execution Example ---
if __name__ == "__main__":
    # Using the same test data
    data = [35, 10, 50, 25, 5, 40, 15]
    print("Original Array:", data)
    
    quick_sort(data, 0, len(data) - 1)
    print("Sorted Array:  ", data)