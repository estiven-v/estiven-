import type { NextApiRequest,NextApiResponse } from "next";

//crear la ruta de hello 
export default function handler (req: NextApiRequest, res:NextApiResponse){
    res.status(200).json({message: "hola te esoy saludamdo desde la rura hello "}) 
}//crear la ruta de hello 