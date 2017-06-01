var express = require('express');
var router = express.Router();
SphinxClient = require ("sphinxapi");
var sequelize =require('../models/ModelHeader')();

/* GET home page. */
router.get('/goods', function(req, res, next) {
	 console.log("访问goods"); 

	keywords = req.query.keywords;
	kwArr = keywords.split(' ');
	len =kwArr.length;
	keyword='';
	for(i=0;i<len;i++){
		
		if(kwArr[i]!=''){
			keyword  += kwArr[i]+'|';
		}
	}
	var cl = new SphinxClient();
	cl.SetServer('localhost', 9312);
	cl.SetMatchMode(SphinxClient.SPH_MATCH_ANY);		//或运算
	cl.Query(keywords,'goods',function(err, result) {
	        if(err){
	        	console.log(err);
	        	console.log('-------有错-----------');
	        	res.send(err);
	        	return;
	        }
	        total = result.total;
	        console.log(result.total);//记录有多少条记录
	       // console.log(result);
	        sql ='select s.id as shopid, g.id as goodsid,s.shopname,s.lng,s.lat,g.goodsname,g.goodsimg,g.goodsintro,g.price,g.praise from goods g,shops s where g.id=? and g.shopid=s.id ';
	         goodsRs=[];
	           console.log("ccccccccccc");
	           ii=0;
	        for(var key in result['matches']){ //循环查出的id
				//console.log(key+':==='+result['matches'][key].id);
				goodsid = result['matches'][key].id;
				 sequelize.query(sql,{replacements:[goodsid],type: sequelize.QueryTypes.QUERY}).then(function(rs){	
                    rsjson= JSON.parse(JSON.stringify(rs[0]));
                      goodsRs.push(rsjson[0]);
                      ii++;
                    if(ii>=total){
                    res.locals.loginbean = req.session.loginbean;
                   res.render('home/searchgoods',{goodsRs:goodsRs,keywords:keywords});
                  }
				 });

			}
			
	}); 
});

module.exports = router;
