import { client } from "../client";

export const sendQuery = async(payload:any) =>{
    const sendResponse = await client("POST","http://localhost:8080/courses/send-query",payload);
    return {status:sendResponse?.status,data:sendResponse?.data}
}