import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijyrkkidltbkjajuuvzn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeXJra2lkbHRia2phanV1dnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NzE0MzcsImV4cCI6MjAxNjE0NzQzN30.cFkICDAUjnK5h9jKmL982Hhv6Dqk9NDKpRq3Mp7C5lA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;