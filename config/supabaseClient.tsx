
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hfftqzzqlrbltzrzfjjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZnRxenpxbHJibHR6cnpmampoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NTg1MTYsImV4cCI6MjAyMDAzNDUxNn0.7CuCbopeb4n_DzxlCyD0uyRz9nOPbrWx56qqImERfeA '
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase; 