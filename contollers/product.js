const Product = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products) {
      return res.status(200).json({ products: products });
    } else {
      return res.status(404).json({ message: "No products found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const category = async (req,res)=>{
    const type = req.params.category;
    console.log(type);
    let obj = [];
    try{
        const products = await Product.find();
        // console.log(products[0].category.includes(type));
        if(products){
            products.forEach(product => {
              if(product.category.includes(type)){
                obj.push(product);
              }
              
            });
            return res.status(200).json({message:"Found all products",products:obj});
        }
        else{
            return res.status(404).json({message:"Cannot find the data"});
        }

    }catch(err){
        return res.status(500).json({message:err});
    }
}

const getAProduct = async (req,res)=>{
  try{
    const productName = req.params.productName;
    const product = await Product.findOne({name:productName});
    if(product){
      return res.status(200).json({message:"Found",product:product});
    }else{
      return res.status(404).json({message:"Cannot find the product"});
    }

  }catch(err){
    return res.status(500).json({message:err})
  }

}

exports.getProducts = getProducts;
exports.category = category;
exports.getAProduct = getAProduct;
