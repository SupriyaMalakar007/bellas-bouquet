const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

console.log("✅ Connected to Supabase");

module.exports = supabase;