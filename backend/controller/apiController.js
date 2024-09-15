import apiModel from "../model/model.js";
import axios from "axios";

const getApiResponse=async()=>{
    try {
    const response=await axios.get('https://api.wazirx.com/api/v2/tickers');
    const sortedProducts = Object.values(response.data)
    .sort((a, b) => parseFloat(b.last) - parseFloat(a.last)).slice(0, 10); 
    const topProducts=sortedProducts.map((item)=>{
        return {
            name:item.name,
            last:item.last,
            buy:item.buy,
            sell:item.sell,
            volume:item.volume,
            base_unit:item.base_unit
        }
       
      })
      await apiModel.deleteMany({});
      await apiModel.insertMany(topProducts);
     console.log('Data Saved successfully');
      
      

    } catch (error) {
       console.log("Error while getting Data from api"); 
    }
}

const getTicketInfo=async(req,res)=>{
  try {
    const response=await apiModel.find({}).limit(10);
    res.json({success:true,data:response})
  } catch (error) {
    res.json({success:false,message:"Error while sending data"})
  }
}

export {getApiResponse,getTicketInfo};

