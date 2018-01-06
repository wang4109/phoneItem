window.onload = function(){
	
	adapt();
	
	function adapt(){
		var dpr = window.devicePixelRatio;//获取设备像素比
		var sca = dpr>1 ? 1/dpr:1;//动态改变viewport的缩放比例
		var meta = document.createElement("meta");
		meta.name = "viewport";
		//viewport的内容动态缩放
		meta.content = "width=device-width,user-scalable=no,initial-scale="+sca;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(meta);
		
		//设置html的字体大小,求rem的基准值，默认设置100px(其他值也行)
		var winWidth = document.documentElement.clientWidth;
		var html = document.getElementsByTagName('html')[0];
		var remRoot = winWidth*100/720;//720为设计稿尺寸，100为自定义的比例
		html.style.fontSize  = remRoot+"px";
		}
		window.onresize = function(){
			adapt();
		}
		
		
		
}

//	var EventUtil = {
//				addHander: function(obj,type,fn,bool){
//					if(obj.addEventListener){
//						obj.addEventListener(type,fn,bool);
//					}else{
//						obj.attachEvent("on"+type,fn);
//					}
//				},
//				removeHander:function(obj,type,fn,bool){
//					if(obj.removeEventListener){
//						obj.removeEventListener(type,fn,bool);
//					}else{
//						obj.detachEvent("on"+type,fn);
//					}
//				}
//		}
		var ul = document.getElementById('ulone');
		var lis = ul.getElementsByTagName('li');
		var len = lis.length;
		
		//手指碰触事件
		for(var i=0;i<len;i++){
			lis[i].index = i;
			lis[i].onclick = function(){
				for(var j=0;j<len;j++){
					lis[j].style.color = '#a7a7a7';
					lis[j].style.borderColor = "transparent";
				}
				lis[this.index].style.color = '#d25e67';
				lis[this.index].style.borderColor = "#d25e67";
			}
		}
	

			//启动swiper
			new Swiper('.swiper-container',{
				direction:'horizontal',
				loop:true,
				speed:500,
				autoplay:{
					delay:1000,
					disableOnInteraction: false

				},
				pagination:{
					el:".swiper-pagination",
					clickable:true
				},
				navigation:{
					prevEl:'.swiper-button-prev',
					nextEl:'.swiper-button-next'
				},
				scrollbar:{
					el:'.swiper-scrollbar'
				}
			})
