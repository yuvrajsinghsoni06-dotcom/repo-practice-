from xml.dom.minidom import Node


class Nodes:
    def __init__(self, data):
        self.data = data
        self.next = None
head = Node("Head")
first = Nodes(10)
second = Nodes(20)
third = Nodes(30)

head.next = first
first.next = second
second.next = third

temp = head
while temp:
    print(temp.data, end="--->")
    temp = temp.next
print("Null")
