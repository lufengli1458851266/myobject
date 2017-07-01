var Card =require('./Card');
//----------取一定范围内的随机数-----
function rd(n,m){
	var c = m-n+1; 
	return Math.floor(Math.random() * c + n);
}
//----------洗牌-------------------

function shuffle(){
		//1.产生54张牌
		var tempArr=[];
		for(var style=0;style<4;style++){
			for(var code=3;code<14;code++){
				card = new Card(style,code,code);
				tempArr.push(card);
			}
			card = new Card(style,1,14);
			tempArr.push(card);
			card = new Card(style,2,15);
			tempArr.push(card);
		}
		card = new Card(4,-1,16);	//小猫
		tempArr.push(card);
		card = new Card(5,-2,17);	//大猫
		tempArr.push(card);
		//2.创建另一数组，包含54个元素
		var cardArr = [];
		//3.随机取出，放入另一数组
		right=53;
		for(i=0;i<54;i++){
			rand = rd(0,right);
			cardArr.push(tempArr[rand]);
			tempArr.splice(rand,1);
			right--;
		}
		rand = rd(0,50);
		cardArr[rand].owner=1;		//地主牌
		return cardArr;
}
function Combat(){
	this.deal=function(seats){		//发牌
		seats[0].paiArr=[];
		seats[1].paiArr=[];
		seats[2].paiArr=[];
		cardArr = shuffle();	//拿到洗好的牌
		token = rd(0,2);			//找出起始发牌人
		for(i=0;i<51;i++){
			seats[token].paiArr.push(cardArr[i]);
			//-----判断谁拿到地主牌 ---------
			if(cardArr[i].owner==1){
				seats['token']=token;			// 人身上的令牌
			}
			token++;
			if(token==3){
				token=0;
			}
		}
	}
}

module.exports=Combat;

//--------发牌--------------------
//function(){
	//54张牌,底牌留三张
	
//}
//--------令牌--------------------

//--------出牌-------------------

//--------不要------------------

//--------出净------------------
