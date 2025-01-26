import React from 'react'
import Cart from './Cart'

function ProductDetails() {
  return (
    <>
        <div className="product-details">
                <div className="pro-name">Shoes Reebok Zig Kinetica 3</div>

                <div className="pro-price">$199.00</div>

                <div className="pro-color">
                    <label>Color:</label>
                    <img src="grey.jpg" alt="green img"/>
                </div>

                <div className="pro-size">
                    <label>Size:</label>

                    <div className="size-button">
                        <button>38</button>
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                    </div>

                    <div className="size-button">
                        <button>43</button>
                        <button>44</button>
                        <button>45</button>
                        <button>46</button>
                        <button>47</button>
                    </div>

                    <Cart/>

                    <div className="add-to-cart">
                        <button>Add to Cart</button>
                    </div>

                    <div className="free-delivery">
                        <p>Free delivery on orders over $130.00</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProductDetails