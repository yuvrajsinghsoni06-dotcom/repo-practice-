// FIXED 1: Added 'props' as an argument
function List(props) {
    
    // fruits.sort((a,b) =>a.name.localeCompare(b.name));  // Sort Alphabetically
    // fruits.sort((a,b) =>b.name.localeCompare(a.name));  // Sort reverse Alphabetically
    // fruits.sort((a,b) => a.calorie - b.calorie)  // Ascending order
    // fruits.sort((a,b) => b.calorie - a.calorie)    // Descending order

    // const lowCalFruit = fruits.filter(fruit => fruit.calorie < 100);
    // const HighCalFruit = fruits.filter(fruit => fruit.calorie > 100);

    const category = props.category;
    const itemlist = props.items;
    
    const ListItems = itemlist.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calorie}</b>
        </li>
    ));

    // FIXED 2: Matched the exact spelling and capitalization of 'ListItems'
    return(<>
    <ol>{ListItems}</ol>
    <h3>{category}</h3>
    </>)
}

export default List;