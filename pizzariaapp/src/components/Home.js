import { Link } from "react-router-dom";

function Home() {

return(

<div>

{/* HERO SECTION */}

<div
className="container-fluid py-5"
style={{
background:
"linear-gradient(to right,#ff9966,#ff5e62)"
}}
>

<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h1
style={{
fontSize:"55px",
fontWeight:"bold",
color:"white"
}}
>

Delicious Pizza Delivered Fast 🍕

</h1>

<p
style={{
fontSize:"18px",
color:"white"
}}
>

Customize your favourite pizza and
enjoy fresh ingredients delivered
to your doorstep.

</p>

<Link
to="/order"
className="btn btn-warning me-3"
>

Order Now

</Link>

<Link
to="/build"
className="btn btn-dark"
>

Build Pizza

</Link>

</div>

<div className="col-md-6 text-center">

<img
src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
alt=""
width="80%"
style={{

borderRadius:"20px",
boxShadow:
"0px 5px 15px gray"

}}
/>

</div>

</div>

</div>

</div>


{/* OUR STORY */}

<div className="container py-5">

<div className="row align-items-center">

<div className="col-md-6">

<img
src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5"
width="100%"
alt=""
style={{

borderRadius:"20px"

}}
/>

</div>

<div className="col-md-6">

<h1>

Our Story

</h1>

<p>

We believe great pizza starts
with fresh ingredients and
passionate chefs. Every pizza
is prepared with care and served
with love.

</p>

</div>

</div>

</div>


{/* INGREDIENTS */}

<div
className="container py-5"
>

<div className="row align-items-center">

<div className="col-md-6">

<h1>

Fresh Ingredients

</h1>

<p>

We carefully select vegetables,
cheese and toppings to ensure
every bite tastes delicious.

</p>

</div>

<div className="col-md-6">

<img
src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
width="100%"
alt=""
style={{

borderRadius:"20px"

}}
/>

</div>

</div>

</div>


{/* CHEFS */}

<div
className="container py-5"
>

<div className="row align-items-center">

<div className="col-md-6">

<img
src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
width="100%"
alt=""
style={{

borderRadius:"20px"

}}
/>

</div>

<div className="col-md-6">

<h1>

Our Chefs

</h1>

<p>

Our experienced chefs prepare
every pizza with passion and
attention to detail.

</p>

</div>

</div>

</div>


{/* DELIVERY */}

<div
className="container py-5"
>

<div className="row align-items-center">

<div className="col-md-6">

<h1>

45 Minute Delivery ⏱️

</h1>

<p>

Hot and fresh pizzas delivered
straight to your door quickly
and safely.

</p>

</div>

<div className="col-md-6">

<img
src="https://images.unsplash.com/photo-1526367790999-0150786686a2"
width="100%"
alt=""
style={{

borderRadius:"20px"

}}
/>

</div>

</div>

</div>

<footer
className="text-center py-4"
>

<small
style={{
color:"orange"
}}
>

Copyright © 2026
Pizzaria.
All rights reserved.

</small>

</footer>

</div>

);

}

export default Home;