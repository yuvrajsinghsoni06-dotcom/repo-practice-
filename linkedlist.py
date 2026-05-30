class Node:

    def __init__(self, value):
        self.value = value
        self.next = None # so bydefault they would have no refence 

class Linkedlist:

    def __init__(self):
        self.head = None

    def append(self,value):
        if self.head is None:
            self.head = Node(value)
        else:
            last = self.head
            while last.next:
                last = last.next
                last.next = Node(value)
    

    def prepend(self):
        pass

    def pop(self,index):
        pass

    def get(self,value,index):
        pass

    def insert(self,value,index):
        pass

    def __repr__(self)

