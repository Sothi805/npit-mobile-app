const mongoose = require('mongoose');
const bycrpt = require('bcryptjs');

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    { 
        timestamps: true 
    },
);

UserSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        return next();
    }

    const salt = await bycrpt.genSalt(10);
    this.password = await bycrpt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bycrpt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);