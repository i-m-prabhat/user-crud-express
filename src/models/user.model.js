const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value)
        {
            if (value < 0)
            {
                throw new Error('Age must be a positive number');
            }
        },
    },
});

// Create User model
export const User = mongoose.model('User', userSchema);