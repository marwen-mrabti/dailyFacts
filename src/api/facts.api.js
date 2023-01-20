import { supabaseClient } from "./supabase.config";

let SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4d3NvaXhhZnd0bHhwbXdjb3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4Nzk3NjcsImV4cCI6MTk4OTQ1NTc2N30.B_VUgRq-4h3ePvX6k6s6nDIOG1Z3yecbJN7ybLTf3t8";

export const getFacts = async (category) => {
  let query = supabaseClient.from("facts").select("*");
  if (category !== "all") {
    query = query.eq("category", category);
  }
  const { data } = await query.order("votesInteresting", { ascending: false }).limit(100);
  return data;
};

export const addNewFact = async (newFact) => {
  const { data } = await supabaseClient.from("facts").insert([{ ...newFact }]);
  return data;
};

export const updateFact = async ({ fact, voteType }) => {
  const { data: updatedFact, error } = await supabaseClient
    .from("facts")
    .update({ [voteType]: fact[voteType] + 1 })
    .eq("id", fact.id)
    .select("*");
  return updatedFact[0];
};
