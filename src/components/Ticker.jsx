function Ticker() {

const items=[
"Loaded Fries",
"Ice Cream Shakes",
"Grilled Sandwiches",
"Crispy Fried Chicken",
"Gourmet Burgers",
"Artisan Pizzas",
"Fresh Wraps & Rolls"
];

return(

<div className="ticker">

<div className="ticker-track">

{[...items,...items].map((item,index)=>

<span key={index}>
● {item}
</span>

)}

</div>

</div>

);

}

export default Ticker;