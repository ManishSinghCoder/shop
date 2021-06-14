import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shopcreate } from '../action/shopauth'
import './logn.css'
function Shopcontentcreate () {
  const shopd = useSelector(state => (state.auth))
  const { isAuthenticated } = shopd
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const handelData = e => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("price", price);
    uploadData.append("quantity", quantity);
    uploadData.append("photo", photo);
    uploadData.append("user", isAuthenticated.id);
    dispatch(shopcreate(uploadData));
  }
  return (
   
      <div className="myCard">
        <div className="col-md-6">
          <div className="myReftCtn">
            <form class="myForm text-center" onSubmit={handelData}  >
              <header>Create Shop Item</header>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                  class="myInput"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Product Name"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                  class="myInput"
                  type="text"
                  name="price"

                  value={price}
                  placeholder="Product Price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                  class="myInput"
                  type="text"
                  name="quantity"
                  value={quantity}
                  placeholder="Product Quantity in kg or gram or unit"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                  class="myInput"
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  required
                />
              </div>
              <button type="submit" class="butt"  >Create Product</button>
            </form>
          </div>
        </div>
      </div>
    
  );
}
export default (Shopcontentcreate)