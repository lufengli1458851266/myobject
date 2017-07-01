import axios from 'axios';

export function axPost(url,formObj,sucFun,failFun=function(err){}){
	axios.post(url,formObj)
		    .then(function(res){
		        sucFun(res);
		    })
		    .catch(function(err){
		        failFun(err);
		    });
}

export async function axGetAsync(url,formObj=null){
	let res = await axios.get(url,formObj);
	return res
		    
}

export function axGet(url,formObj,sucFun,failFun=function(err){}){
	axios.get(url,formObj)
		    .then(function(res){
		        sucFun(res);
		    })
		    .catch(function(err){
		        failFun(err);
		    });
}