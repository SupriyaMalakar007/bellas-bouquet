const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

// =====================
// GET ALL PRODUCTS
// =====================
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// =====================
// ADD PRODUCT
// =====================
router.post("/", async (req, res) => {

  const {
    name,
    price,
    category,
    description,
    image
  } = req.body;

  try {

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price,
          category,
          description,
          image
        }
      ])
      .select();

    if (error) {
      return res.status(500).json({
        success:false,
        message:error.message
      });
    }

    res.status(201).json({
      success:true,
      message:"Bouquet Added Successfully 🌸",
      product:data[0]
    });

  } catch(err){

    res.status(500).json({
      success:false,
      message:err.message
    });

  }
});


// =====================
// DELETE PRODUCT
// =====================
router.delete("/:id", async(req,res)=>{

  try{

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", req.params.id);


    if(error){
      return res.status(500).json({
        success:false,
        message:error.message
      });
    }


    res.json({
      success:true,
      message:"Product deleted successfully"
    });


  }catch(err){

    res.status(500).json({
      success:false,
      message:err.message
    });

  }

});


// =====================
// UPDATE PRODUCT
// =====================
router.put("/:id", async(req,res)=>{

  const {
    name,
    price,
    category,
    description,
    image
  } = req.body;


  try{

    const { data, error } = await supabase
      .from("products")
      .update({
        name,
        price,
        category,
        description,
        image
      })
      .eq("id", req.params.id)
      .select();


    if(error){
      return res.status(500).json({
        success:false,
        message:error.message
      });
    }


    res.json({
      success:true,
      message:"Product updated successfully",
      product:data[0]
    });


  }catch(err){

    res.status(500).json({
      success:false,
      message:err.message
    });

  }

});


module.exports = router;