import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-rate-limit");
        if(!success){
            return
        }

    } catch (error) {
        console.log("RATE LIMIT ERROR", error)
        next(error)
    }
}