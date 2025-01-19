import SpecialtyRouter from "../modules/specialtyModule/specialty.routes.js"

export const bootstrap =(app)=>{

    app.use('/api/v1/specialty',SpecialtyRouter)


}