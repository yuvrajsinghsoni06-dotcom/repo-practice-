import PropTypes from 'prop-types';
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
    <b><h1 className="category">{category}</h1></b>
    <br></br>
    <ol className="items">{ListItems}</ol>
    </>)
}
List.defaultProps = {
    category: "Category",
    items: [],
}
List.propsTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayof(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                             calorie: PropTypes.number}))
}
export default List;