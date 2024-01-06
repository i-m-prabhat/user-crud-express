import { ApiError } from "../helpers/ApiError.js";
import { ApiResponse } from "../helpers/ApiResponse.js";
import { User } from "../models/user.model.js";

const getHello = async (req, res) =>
{
    try
    {
        ApiResponse.success(res, null, 'Namaste Duniya!', 200);
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to create user', 400);
    }
};



const createUser = async (req, res) =>
{
    try
    {
        // {
        //     "name": "John Doe",
        //     "email": "john@example.com",
        //     "age": 25
        // }
        const user = new User(req.body);
        await user.save();
        ApiResponse.success(res, user, 'User created successfully', 201);
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to create user', 400);
    }
};

// Get all users
const getAllUsers = async (req, res) =>
{
    try
    {
        const users = await User.find();
        ApiResponse.success(res, users, 'Users fetched successfully');
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to fetch users');
    }
};

// Get user by ID
const getUserByID = async (req, res) =>
{
    try
    {
        const user = await User.findById(req.params.id);
        if (!user)
        {
            throw new ApiError(404, 'User not found');
        }
        ApiResponse.success(res, user, 'User fetched successfully');
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to fetch user');
    }
};

// Update user by ID
const updateUserByID = async (req, res) =>
{
    try
    {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user)
        {
            throw new ApiError(404, 'User not found');
        }
        ApiResponse.success(res, user, 'User updated successfully');
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to update user', 400);
    }
};

// Delete user by ID
const deleteUserById = async (req, res) =>
{
    try
    {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
        {
            throw new ApiError(404, 'User not found');
        }
        ApiResponse.success(res, user, 'User deleted successfully');
    } catch (error)
    {
        ApiResponse.error(res, error, 'Failed to delete user');
    }
};


export
{
    getHello,
    createUser,
    getAllUsers,
    getUserByID,
    updateUserByID,
    deleteUserById
}