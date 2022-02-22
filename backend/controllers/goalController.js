const goalModel = require('../models/goalModel')

module.exports = {

    getGoal: (request, response) => {
        const goal = goalModel.find({}, (error, result) => {
            if (error) {
                response.json(error)
            } 
            else {
                response.json(result)
            }
        })

        // response.status(200).json(goal)
        // response.status(200).json({ message: "Get goals now please" })
    },

    createGoal: async (request, response) => {
        const goal = request.body
        const newGoal = new goalModel(goal);
        await newGoal.save();
        console.log("A goal has been added")

        response.json(goal)

        // response.status(200).json(goal)
        // response.status(200).json({ message: "Create goals now please" })
    },

    updateGoal: async (request, response) => {
        const goal = await goalModel.findById(request.params.id)
    
        if(!goal) {
            response.status(400)
            throw new Error("Goal not found")
        }
    
        const updatedGoal = await goalModel.findByIdAndUpdate({_id: request.params.id}, request.body, {
            new: true, 
        })
    
        response.status(200).json(updatedGoal)

        /// response.status(200).json({ message: `Update goal ${request.params.id}` })
        
    },

    deleteGoal: async (request, response) => {
        
        const goal = await goalModel.findById(request.params.id)
    
        if(!goal) {
            response.status(400)
            throw new Error("Goal not found")
        }
    
        await goal.remove()
    
        response.status(200).json( { id: request.params.id })

        // response.status(200).json({ message: `Delete goal ${request.params.id}` })
    }
    
}
    
    




        

