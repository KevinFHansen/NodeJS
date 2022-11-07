import {Router} from "express";

import {main} from "../util/sendEmail.js";


const router = Router()


router.post("/api/contact", (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const message = req.body.message
    const email = req.body.email

    main(name, email, message)
        .then(() => {
            res.send({
                data: `Message sent successfully: ${message}`
            })
        })
        .catch(errorMessage => {
            res.send({data: `${errorMessage}`})
        })
})

export default router



























// import { Router } from "express";
// import {main} from "../util/sendEmail.js"
// const router = Router();

// router.post("/api/contact", (req, res) => {
//     const name = req.body.name
//     const message = req.body.message
//     const email = req.body.message
    
//     main(name, email, message)
//     .then(asynch () => {
//         await res.send({
//             data: "message senbt succesfully: ${message}"
//         })
//     })
//     .catch(errorMessage => {
//         res.send({data: errorMessage})
//     })

// });

// export default router;





