(function(){	
	function movie(date){
		var myKey = "113854b91df9adff54ea56e9e853c86f";
		var myDate = date;
		var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key="+myKey+"&targetDt="+myDate;		
		
		$.ajax({
			method:"GET",
			dataType:"JSON",
			url:url,
			success:jsonParser,
			error:function(e) {
				console.log(e);
			}
		});
	}
	
	function jsonParser(data) {
		var daily = data.boxOfficeResult.dailyBoxOfficeList;
		
		$(daily).each(function(idx, item){
			var dataRow = "<tr>";
			dataRow += "<td>"+item.rank+"</td>";
			dataRow += "<td>"+item.movieNm+"</td>";
			dataRow += "<td>"+item.openDt+"</td>";
			dataRow += "<td>"+item.salesShare+"</td>";
			dataRow += "<td>"+item.audiCnt+"</td>";
			dataRow += "</tr>";			
			$("#result tbody").append(dataRow);
		});
	}
	
	movie("20190507");
})();