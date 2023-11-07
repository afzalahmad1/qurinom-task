import { Product } from "../models/Product.js";


const product = async (req, res) => {
    const productBody = req.body;
    // console.log(productBody);
   try {
    if(!productBody.name || !productBody.catagory || !productBody.price || !productBody.rating ){
        res.send({
            status:400,
            message:"All Fields Are Mandatory"
        });
        return;
    }

    const colors = ['red','blue','black','white'];
    const sizes = ['S','M','XL','L']


    const productObj = new Product({
        name: productBody.name,
        catagory: productBody.catagory,
        price: productBody.price,
        rating: productBody.rating,
        color: colors,
        size: sizes
      });
    //   console.log(productObj);

      await productObj.save();

      res.status(201).json({
        status:201,
        message:"Product has been created!"
    });

   } catch (error) {
    console.log(error);
    res.send({
        message: "Inernal server error",
        error: error
    })
   }
  };

  const getAllProducts =async (req,res)=> {
    try {
        const products =await Product.find({})
        // console.log(products);
        res.send({products})
    } catch (error) {
        console.log(error);
        res.send({message: "server error",
    error:error})
    }
  }
  
  export { product ,getAllProducts};