/*******************************************************************************/
/************************* Global Variables and List ***************************/
/*******************************************************************************/
// Storing the data for every league table for the last 5 seasons 
var season_16_17 = [
	["Chelsea", 38, 30, 3, 5, 85, 33],
	["Tottenham Hotspur", 38, 26, 8, 4, 86, 26],
	["Manchester City", 38, 23, 9, 6, 80, 39],
	["Liverpool", 38, 22, 10, 6, 78, 42],
	["Arsenal", 38, 23, 6, 9, 77, 44],
	["Manchester United", 38, 18, 15, 5, 54, 29],
	["Everton", 38, 17, 10, 11, 62, 44],
	["Southampton", 38, 12, 10, 16, 41, 48],
	["Bournemouth", 38, 12, 10, 16, 55, 67],
	["West Bromwich Albion", 38, 12, 9, 17, 43, 51],
	["West Ham United", 38, 12, 9, 17, 47, 64],
	["Leicester City", 38, 12, 8, 18, 48, 63],
	["Stoke City", 38, 11, 11, 16, 41, 56],
	["Crystal Palace", 38, 12, 5, 21, 50, 63],
	["Swansea City", 38, 12, 5, 21, 45, 70],
	["Burnley", 38, 11, 7, 20, 40, 68],
	["Watford", 38, 11, 7, 20, 40, 68],
	["Hull City", 38, 9, 7, 22, 37, 80],
	["Middlesbrough", 38, 5, 13, 20, 27, 53],
	["Sunderland", 38, 6, 6, 26, 29, 69]
];
var season_17_18 = [
	["Manchester City", 38, 32, 4, 2, 106, 27],
	["Manchester United", 38, 25, 6, 7, 68, 28],
	["Tottenham Hotspur", 38, 23, 8, 7, 74, 36],
	["Liverpool", 38, 21, 12, 5, 84, 38],
	["Chelsea", 38, 21, 7, 10, 62, 38],
	["Arsenal", 38, 19, 6, 13, 74, 51],
	["Burnley", 38, 14, 12, 12, 36, 39],
	["Everton", 38, 13, 10, 15, 44, 58],
	["Leicester City", 38, 12, 11, 15, 56, 60],
	["Newcastle United", 38, 12, 8, 18, 39, 47],
	["Crystal Palace", 38, 11, 11, 16, 45, 55],
	["Bournemouth", 38, 11, 11, 16, 45, 61],
	["West Ham United", 38, 10, 12, 16, 37, 56],
	["Watford", 38, 11, 8, 19, 44, 64],
	["Brighton and Hove Albion", 38, 9, 13, 16, 34, 54],
	["Huddersfield Town", 38, 9, 10, 19, 28, 58],
	["Southampton", 38, 7, 15, 16, 37, 56],
	["Swansea City", 38, 8, 9, 21, 28, 56],
	["Stoke City", 38, 7, 12, 19, 35, 68],
	["West Bromwich Albion", 38, 6, 13, 19, 31, 56]
];
var season_18_19 = [
	["Manchester City", 38, 32, 2, 4, 95, 23],
	["Liverpool", 38, 30, 7, 1, 89, 22],
	["Chelsea", 38, 21, 9, 8, 63, 39],
	["Tottenham Hotspur", 38, 23, 2, 13, 67, 39],
	["Arsenal", 38, 21, 7, 10, 73, 51],
	["Manchester United", 38, 19, 9, 10, 65, 54],
	["Wolvehampton Wanderers", 38, 16, 9, 13, 47, 46],
	["Everton", 38, 15, 9, 14, 54, 46],
	["Leicester City", 38, 15, 7, 16, 51, 48],
	["West Ham United", 38, 15, 7, 16, 52, 55],
	["Watford", 38, 14, 8, 16, 52, 59],
	["Crystal Palace", 38, 14, 7, 17, 51, 53],
	["Newcastle United", 38, 12, 9, 17, 42, 48],
	["Bournemouth", 38, 13, 6, 19, 56, 70],
	["Burnley", 38, 11, 7, 20, 45, 68],
	["Southampton", 38, 9, 12, 17, 45, 65],
	["Brighton and Hove Albion", 38, 9, 9, 20, 35, 60],
	["Cardiff City", 38, 10, 4, 24, 34, 69],
	["Fulham", 38, 7, 5, 26, 34, 81],
	["Huddersfield Town", 38, 3, 7, 28, 22, 76]
];
var season_19_20 = [
	["Liverpool", 38, 32, 3, 3, 85, 33],
	["Manchester City", 38, 26, 3, 9, 102, 35],
	["Manchester United", 38, 18, 12, 8, 66, 36],
	["Chelsea", 38, 20, 6, 12, 69, 54],
	["Leicester City", 38, 18, 8, 12, 67, 41],
	["Tottenham Hotspur", 38, 16, 11, 11, 61, 47],
	["Wolverhampton Wanderers", 38, 15, 14, 9, 51, 40],
	["Arsenal", 38, 14, 14, 10, 56, 48],
	["Sheffield United", 38, 14, 12, 12, 39, 39],
	["Burnley", 38, 15, 9, 14, 43, 50],
	["Southampton", 38, 15, 7, 16, 51, 60],
	["Everton", 38, 13, 10, 15, 44, 56],
	["Newcastle United", 38, 11, 11, 16, 38, 58],
	["Crystal Palace", 38, 11, 10, 17, 31, 50],
	["Brighton and Hove Albion", 38, 9, 14, 15, 39, 54],
	["West Ham United", 38, 10, 9, 19, 49, 62],
	["Aston Villa", 38, 9, 8, 21, 41, 67],
	["Bournemouth", 38, 9, 7, 22, 40, 65],
	["Watford", 38, 8, 10, 20, 36, 64],
	["Norwich City", 38, 5, 6, 27, 26, 75]
];
var season_20_21 = [
	["Manchester City", 32, 23, 5, 4, 67, 23],
	["Manchester United", 32, 19, 9, 4, 64, 35],
	["Leicester City", 31, 17, 5, 9, 55, 37],
	["West Ham United", 32, 16, 7, 9, 53, 42],
	["Chelsea", 31, 15, 9, 7, 50, 31],
	["Liverpool", 32, 15, 8, 9, 54, 38],
	["Tottenham Hotspur", 32, 14, 8, 10, 54, 37],
	["Everton", 31, 14, 7, 10, 43, 40],
	["Arsenal", 32, 13, 7, 12, 44, 36],
	["Leeds United", 32, 14, 4, 14, 50, 50],
	["Aston Villa", 30, 13, 5, 12, 43, 33],
	["Wolverhampton Wanderers", 32, 11, 8, 13, 32, 41],
	["Crystal Palace", 31, 10, 8, 13, 33, 52],
	["Southampton", 31, 10, 6, 15, 39, 56],
	["Newcastle United", 32, 9, 8, 15, 35, 53],
	["Brighton and Hove Albion", 31, 7, 12, 12, 33, 38],
	["Burnley", 32, 8, 9, 15, 26, 45],
	["Fulham", 33, 5, 12, 16, 25, 43],
	["West Bromwich Albion", 31, 5, 9, 17, 28, 59],
	["Sheffield United", 32, 4, 2, 26, 17, 56]
];
/*******************************************************************************/
/************************* Table Generation from Data **************************/
/*******************************************************************************/
// Calculate the points of a team based on their wins, losses, and match drew
function calPoints (win, draw, loss) {
	return (win * 3) + (loss * 0) + (draw * 1);
}
// Calculate the goal difference of a team
function calGoalDifference (scored, concived) {
	return scored - concived;
}
// Gives the table representation HTML string for the given season's data
function getLeagueTableString(season) {
	var content = '<thead>';
	content += '<tr>';
	content += '<th>Position</th>';
	content += '<th>Club</th>';
	content += '<th>Played</th>';
	content += '<th>Win</th>';
	content += '<th>Draw</th>';
	content += '<th>Lost</th>';
	content += '<th>GF</th>';
	content += '<th>GA</th>';
	content += '<th>GD</th>';
	content += '<th>Points</th>';
	content += '</tr>';
	content += '</thead>';
	content += '<tbody>';
	for (var i = 0; i < 20; i++) {
		if ( i < 4 )
			content += '<tr class="success">';
		else if ( i > 3 && i < 6 )
			content += '<tr class="info">';
		else if ( i > 16 )
			content += '<tr class="danger">';
		else
			content += '<tr>';
		content += '<td>' + (i + 1) + '</td>';
		content += '<td>' + season[i][0] + '</td>';
		content += '<td>' + season[i][1] + '</td>';
		content += '<td>' + season[i][2] + '</td>';
		content += '<td>' + season[i][3] + '</td>';
		content += '<td>' + season[i][4] + '</td>';
		content += '<td>' + season[i][5] + '</td>';
		content += '<td>' + season[i][6] + '</td>';
		content += '<td>' + calGoalDifference(season[i][5], season[i][6]) + '</td>';
		content += '<td>' + calPoints(season[i][2], season[i][3], season[i][4]) + '</td>';
		content += '</tr>';
	}
	content += '</tbody>';
	return content;
}
/*******************************************************************************/
/********** Function call in the document ready function of JQuery *************/
/*******************************************************************************/
$(document).ready(function(){
	var leagueTableString = getLeagueTableString(season_20_21);
	$('table#leagueTable').append(leagueTableString);
	var selectedSeason = season_20_21;
	$("select#season").change(function() {
		$('table#leagueTable').empty();
		var userSelectedSeason = $(this).children('option:selected').val();
		if ( userSelectedSeason == "2016/17" )
			selectedSeason = season_16_17;
		if ( userSelectedSeason == "2017/18" )
			selectedSeason = season_17_18;
		if ( userSelectedSeason == "2018/19" )
			selectedSeason = season_18_19;
		if ( userSelectedSeason == "2019/20" )
			selectedSeason = season_19_20;
		if ( userSelectedSeason == "2020/21" )
			selectedSeason = season_20_21;
		leagueTableString = getLeagueTableString(selectedSeason);
		$('table#leagueTable').append(leagueTableString);
	});
});

