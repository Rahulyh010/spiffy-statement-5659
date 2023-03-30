import React from 'react'
import "../Styles/sidebarprod.css"

export const SideBarProd = () => {
  return (
    <div className='main-sidebar-prod' >
        <div className='sidebar-prod'>
            <h2>Categories</h2>
          <p>Gourmet & World Food</p>
          <p>Pasta,Soup & Noodles</p>
          <p>Snacks % Branded Foods</p>
          <p>Pasta & Vermicelli</p>
          <p>Ready To Cook & Eat</p>
          <p>Snacks & Namkeen</p>
        </div>
<div id="brand" >
    <h3>Brand</h3>
    <input type="text" className='input-sideprod'/><br />
    <input type="checkbox" /> Aashirvaad <br />
    <input type="checkbox" /> Bambino <br />
    <input type="checkbox" /> Blue Bird <br />
    <input type="checkbox" /> Ching'S Secret <br />
    <input type="checkbox" /> Chings <br />
    <input type="checkbox" /> Disano <br />
 
    <input type="checkbox" /> Inchi <br />
    <input type="checkbox" /> Keya <br />
    <input type="checkbox" /> Knorr <br />

</div>

<div>
    <h3>Price</h3>
    <input type="text" className='input-sideprod'/><br />
    <input type="checkbox" /> Less Than 50rs <br />
    <input type="checkbox" /> Rs 50 to Rs 100 <br />
    <input type="checkbox" /> Rs 150 to Rs 200  <br />
    <input type="checkbox" /> Rs 250 to Rs 300 <br />
    <input type="checkbox" />Rs 350 to Rs 400  <br />
    <input type="checkbox" /> Rs 550 to Rs 600  <br />
 
</div>
        <div>
            <h3>Discount</h3>
 <input type="text" className='input-sideprod'/><br />
 <input type="checkbox" /> Up to 5% <br />
    <input type="checkbox" /> Up to 15% <br />
    <input type="checkbox" /> Up to 25%  <br />
    <input type="checkbox" /> Up to 35% <br />
    <input type="checkbox" /> Up to 45%  <br />
    <input type="checkbox" /> Up to 50% <br />
        </div>
    </div>
  )
}
