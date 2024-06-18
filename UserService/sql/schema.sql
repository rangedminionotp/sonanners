-- Drop existing tables if they exist
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Ability CASCADE;
DROP TABLE IF EXISTS AbilityTips CASCADE;

-- Create Users table
CREATE TABLE Users (
    id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(),
    data JSONB
);