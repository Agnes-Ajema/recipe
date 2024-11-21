import SectionAtom from "./components/Atoms/SectionAtom";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex gap-[350px] text-[20px] ml-[100px] mt-[20px]  (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
        <div className ="text-yellow-500 italic">
          <p>FoodHouse</p>
        </div>
        <div className="flex gap-[80px] text-zinc-600 ">
          <Link href={"/Home"} className="font-semibold text-yellow-500">HOME</Link>
          <Link href={"/Restaurant"}>RESTAURANT</Link>
          <Link href={"Services"}>SERVICES</Link>
          <Link href={"Cart"}>CART</Link>
        </div>
        <div className="mx-[120px] text-zinc-600">
          <p>Sign In</p>
        </div>
      </nav>
      <div className=" flex gap-[70px] flex justify-center mt-40">
        <div>
          <h1 className="text-6xl">Enjoy Delicious <br/> Food in <b className="text-amber-500 justify-center ">Healthy Life</b></h1>
          <p className="text-[25px] font-light text-zinc-550">Tandoori masala is an Indian spice blend consisting of a <br/>variety of spices Tandoori masala is an indian blend<br/>consisting of a variety of spices</p>
          <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">ORDER NOW</button>
        </div>
        <div>
          <img src="/Images/chicken.png" className="justify-center object-cover rounded-full mt-[130px]" ></img>
          <div className="inline-flex mr-10">
          <img src="/Images/eggs.png" className="w-17 h-24 "></img>
          <img src="/Images/chicken.png" className="w-17 h-24"></img>
          <img src="/Images/pic2.png" className="w-15 h-20 mt-3"></img>
          </div>
        </div>
      </div>
      <div>
        <h3>Online Store</h3>
        <h1>POPULAR FOODS</h1>
      </div>
      <div className="inline-flex flex justify-evenly justify-center">
      <img src="/Images/roasted.png" className="w-17 h-24  rounded-full"></img>
      <figcaption>Fruit dish</figcaption>
      <figcaption>Dinko Food</figcaption>
      <figcaption>&#11088; &#11088; &#11088; &#11088; &#11088;</figcaption>
      <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">Add to Cart $696</button>
      
      <img src="/Images/mixed.png" className=" w-15 h-24  rounded-full"></img>
      <figcaption>Fruit dish</figcaption>
      <figcaption>Dinko Food</figcaption>
      <figcaption>&#11088; &#11088; &#11088; &#11088; &#11088;</figcaption>
      <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">Add to Cart $696</button>

      <img src="/Images/three.png" className=" w-17 h-30 rounded-full"></img>
      <figcaption>Sea fish dish</figcaption>
      <figcaption>Dinko Food</figcaption>
      <figcaption>&#11088; &#11088; &#11088; &#11088; &#11088;</figcaption>
      <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">Add to Cart $696</button>

      <img src="/Images/pizza.png" className="w-17 h-24  rounded-full"></img>
      <figcaption>Pizza</figcaption>
      <figcaption>Dinko Food</figcaption>
      <figcaption>&#11088; &#11088; &#11088; &#11088; &#11088;</figcaption>
      <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">Add to Cart $696</button>
      </div>
      <div className="inline-flex ">
        <div>
          <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-200">+50%</button>
          <h1>Our Special Offer</h1>
          <p>Best cooks and best delivery guys all at your <br/>service.Hot fasty food will reach you in 60 minutes.</p>
          <button className="rounded-2xl p-2.5 text-slate-100 bg-amber-500">See All Menu &#x27A9;</button>
        </div>
        <div>
          <img src="/Images/onion.png"></img>
        </div>
      </div>
      <div>
        <p>Quality Food&#129295;</p>
        <h1 className="text-4xl">Get The Best Offers</h1>
        <p>The food at your doorstep.Why starve when you have us.You hunger <br/>partner.Straight out of the oven to your doorstep.</p>
      </div>
      <div className="inline-flex ">
        <div>
          <h1>Any day <br/>Offers</h1>
          <p>New phenomenon <br/>Burger taste</p>
          <p>$12.90</p>
        </div>
        <div>
          <img src="/Images/hamburger.png"></img>
        </div>
        <div>
          <h1>Other <br/>flavours</h1>
          <p>save room.We <br/>made salats</p>
          <p>$12.90</p>
        </div>
        <div>
          <img src="/Images/okra.png"></img>
        </div>
        <div>Find a poco<br/>store near <br/>you</div>
        <div><img src="/Images/location.png" alt="" /></div>
      </div>
      <div>
        <h1>Our Service</h1>
      </div>
      <div className="inline-flex " >
      <div>
        <img src="/Images/hone.png"></img>
        <figcaption>55+ Restaurants</figcaption>
      </div>
      <div>
        <img src="/Images/quality.png"></img>
        <figcaption>Good Quality</figcaption>
      </div>
      <div>
      <img src="/Images/car.png"></img>
        <figcaption>Discount System</figcaption>
      </div>
      <div>
      <img src="/Images/motorcycle.png"></img>
        <figcaption>Fast Delivery</figcaption>
      </div>
      </div>
      <div>
        <p>Testimonial</p>
        <h1>What Our Clients Say</h1>
        <i>&#10078;</i>
        <p>Lorem ipsum dolor sit amet, consectetur apidiscing elit, sed do eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud incididunt <br/>ullamco laboris nisi ut aliquip ex ea commodo<br/></p>
        <div className="inline-flex ">
          <img src="/Images/person.png"></img>
          <img src="/Images/person2.png"></img>
          <img src="/Images/person1.png"></img>
          <img src="/Images/person4.png"></img>
          <img src="/Images/images.jpeg"></img>
        </div>
        <h3>Mitchell Marsh</h3>
        <p>CEO, Bexon Agency</p>
        <i>&#10094; &#10097;</i>
      </div>
      <div className="inline-flex " >
        <div>
          <img src="/Images/phone.png"></img>
        </div>
        <div>
          <h3>Downlod Our App</h3>
          <h1>It's all here. <br/>All in one app.</h1>
          <p>Discover local, on-demand delivery or pickup from <br/>restaurants, nearby grocery and conveniences stores, <br/>and more.</p>
           <div>
           <img src="/Images/apple.png"></img>
           <img src="/Images/google.png"></img>
           </div>
        </div>
      </div>
      <div className="inline-flex">
      <div>
        <h1>Subscribe Our Newsletter</h1>
        <p>Subscribe on our newsletter to get our <br/>news</p>
      </div>
      <p>Your email address...</p>
      <button className="inline-flex rounded-2xl p-2.5 text-slate-100 bg-amber-500" >Subscribe<img src="/Images/arrow-.png"/></button>
      </div>
      <div className="bg-black  gap-[90px] text-slate-200  inline-flex  gap-80 ">
        <div className="scroll-ml-1.5">
          <h1>FoodHouse.</h1>
          <p>Best cooks and best delivery guy s all <br/>at your service.Hot tasty food will <br/>reach you in 60 minutes.</p>
          <div>
            <img src="/Images/icons.png"></img>
          </div>
        </div>
        <div className="inline-flex gap-[190px] mr-0 ">
          <div>
            <h1 className="font-bold text-2xl">Company</h1>
            <p>Career</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Press Info</p>
            <p>Features</p>
          </div>
          <div>
          <h1 className="font-bold text-2xl">Fudo</h1>
            <p>Why Fudo</p>
            <p>How it Works</p>
            <p>Why Choose Us</p>
            <p>Client Stories</p>
            <p>Gallery</p>
          </div>
          <div>
          <h1 className="font-bold text-2xl">Menu</h1>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
            <p>Fast Foods</p>
            <p>Drinks</p>
          </div>
        </div>
      </div>
      <div className="flex bg-yellow-600 h-16 place-center-center grid grid-cols-4 gap-2 place-items-center  text-[20px] mr-0 ">
  <div className="text-white">
    Copyright 2023 Besnik All rights reserved
  </div >
  <div className="text-white">Terms</div>
  <div className="text-white">Privacy</div>
  <div className="text-white">Policy</div>
</div>
    </main>
  );
}
