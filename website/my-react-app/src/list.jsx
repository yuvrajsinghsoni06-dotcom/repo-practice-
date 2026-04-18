function List() {
    const fruits = [
        { id: 1, name: "apple", calorie: 95 },
        { id: 2, name: "orange", calorie: 45 },
        { id: 3, name: "banana", calorie: 105 },
        { id: 4, name: "coconut", calorie: 159 },
        { id: 5, name: "pineapple", calorie: 37 }
    ];

    // fruits.sort((a,b) =>a.name.localeCompare(b.name));  // Sort Alphabetically
    // fruits.sort((a,b) =>b.name.localeCompare(a.name));  // Sort reverse Alphabetically
    // fruits.sort((a,b) => a.calorie - b.calorie)  // Ascending order
    // fruits.sort((a,b) => b.calorie - a.calorie)    // Descending order

    // const lowCalFruit = fruits.filter(fruit => fruit.calorie < 100);
    const HighCalFruit = fruits.filter(fruit => fruit.calorie > 100);

    // FIXED: Accessing properties on the 'fruit' item, not the array
    const Listitems = HighCalFruit.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calorie}</b>
        </li>
    ));

    return <ol>{Listitems}</ol>;
}

export default List;