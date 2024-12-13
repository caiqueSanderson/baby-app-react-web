import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rppgprltockotrjwqbrd.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGdwcmx0b2Nrb3RyandxYnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNjE1MjIsImV4cCI6MjA0ODgzNzUyMn0.7Yr5c3_aySYdUrYa9GGqWA9BCziGrp5TzTAuwZ-_tzk'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
