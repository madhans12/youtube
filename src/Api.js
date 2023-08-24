import axios from 'axios';
import { useEffect } from 'react';

function Api(){


const  FetchApi1= async()=>{
    try{const request= 
    await axios.get( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyA2oG-vdClnu80S7fo_LzrMm5xW0YZTSIE`

);
    console.log(request.data);
} catch(error){
    console.error(error);
}





// const options = {
//   method: 'GET',
//   url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
//   params: {
//     query: 'cat',
//     geo: 'US',
//     lang: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1a56e44e25msh7f71c87626941a7p137cf0jsndffe8e6591ea',
//     'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//   }
// };
// const FetchApi1=async()=>{
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// }
useEffect(() => {
    FetchApi1();
  }, []);

return( 
    <div>hai
    </div>

)
}
}
export default Api;