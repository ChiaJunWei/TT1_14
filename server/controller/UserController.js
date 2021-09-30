import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import UserModel from "../models/UserModel.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import {SECRET} from "../constants.js"

dotenv.config();

const secret = SECRET

export const signin = async (req,res) => {
    const{ email, password } = req.body;

    try {
        const oldUser = await UserModel.findOne({ email });

        if(!oldUser) {
            return res.status(404).send({message: "User does not exist."});
        }

        const isPasswordValid = await bcrypt.compare(password, oldUser.password);

        if(!isPasswordValid) {
            return res.status(404).send({message: "Invalid credentials."}); 
        }

        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "3h"});

        res.status(201).json({result:oldUser, token});

    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const signup = async (req,res) => {
    
    console.log("REQ:", req);
    const{ username, password, first_name, last_name, postal_code, gender, created_at } = req.body;
    
    try {
        const oldUser = await UserModel.findOne({ email });
        if(oldUser) {
            console.log("email already exists");
            return res.status(200).send( {message: `${email} already exists.`});
        }

        const hPassword = await bcrypt.hash(password,12);
        const result = await UserModel.create({
            username : username, 
            password: hPassword, 
            name : `${first_name} ${last_name}`,
            first_name : first_name,
            last_name : last_name,
            postal_code: postal_code,
            gender : gender ? gender : null,
            created_at : created_at ? created_at : new Date(),
        });

        const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "3h"});

        res.status(201).json({ result, token});
    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}

export const initUsers = async (req,res) => {
    
    const{ username, password, first_name, last_name, postal_code, gender, created_at } = req;
    
    try {
        const oldUser = await UserModel.findOne({ username });
        if(oldUser) {
            console.log("email already exists");
            return res.status(200).send( {message: `${username} already exists.`});
        }

        const hPassword = await bcrypt.hash(password,12);
        const result = await UserModel.create({
            username : username, 
            password: hPassword, 
            name : `${first_name} ${last_name}`,
            first_name : first_name,
            last_name : last_name,
            postal_code: postal_code,
            gender : gender ? gender : null,
            created_at : created_at ? created_at : new Date(),
        });

        const token = jwt.sign({email: result.username, id: result._id}, secret, {expiresIn: "3h"});

        res.status(201).json({ result, token});
    } catch (error) {
        res.status(500).send({ message: "Unknown error occurred. Please try again."});
        console.log(error);
    }
}