// @desc  Register user 
// @route POST /api/goals
//@access Public
const registerUser = (req , res ) =>{
    res.json({ message : 'Register user'})
}

module.exports = {
    registerUser,
}