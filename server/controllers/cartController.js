import userModel from "../models/userModel.js";


const addToCart = async(req,res)=>{
  try {
    const {userId,itemId,size} = req.body;
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1
        } else{
            cartData[itemId][size] = 1
        }
    } else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }
   
   
    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({
        success:true,
        message:"Added To Cart"
    })
  } catch (error) {
    console.log(error)
    res.json({
        success:false,
        message:error.message
    })
  }
}

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    // 1️⃣ Get user from DB
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = userData.cartData || {};

    // 2️⃣ If quantity is greater than 0 → update it
    if (quantity > 0) {
      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }
      cartData[itemId][size] = quantity;
    } 
    // 3️⃣ If quantity is 0 → remove this size
    else {
      if (cartData[itemId] && cartData[itemId][size]) {
        delete cartData[itemId][size];

        // If no sizes left for this item → remove the item completely
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    }

    // 4️⃣ Save changes to DB
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "Cart updated successfully",
      cartData
    });

  } catch (error) {
    console.error("Error in updateCart:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};






const getUserCart = async(req,res)=>{
 try {
    const {userId} = req.body;
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    res.json({
        success:true,
        cartData
    })
 } catch (error) {
     console.log(error)
    res.json({
        success:false,
        message:error.message
    })
 }

}
export {addToCart,updateCart,getUserCart}