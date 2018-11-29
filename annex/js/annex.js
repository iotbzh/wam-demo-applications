function getMessage(a,b){var c=b||"";if(window.chrome&&window.chrome.i18n&&window.chrome.i18n.getMessage)c=chrome.i18n.getMessage(a);else{if("undefined"==typeof this.messages)try{var d=new XMLHttpRequest;d.open("GET","_locales/en/messages.json",!1),d.send();var e=d.responseText;this.messages=window.eval(e)}catch(f){return c}this.messages&&this.messages.hasOwnProperty(a)&&this.messages[a].hasOwnProperty("message")&&(c=this.messages[a].message)}return c}function registerEventHandlers(){$("body").on("selectstart",function(){return!1}).on("dragstart",function(){return!1}).on("click","#open1",function(){World.playSound("snd_navclick"),World.init(1)}).on("mouseover","#open1",function(){$("#open_text_bg_4").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","#open1",function(){$("#open_text_bg_4").addClass("display_none")}).on("click","#open2",function(){World.playSound("snd_navclick"),World.init(2)}).on("mouseover","#open2",function(){$("#open_text_bg_3").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","#open2",function(){$("#open_text_bg_3").addClass("display_none")}).on("click","#open_help",function(){World.showHelp()}).on("mouseover","#open_help",function(){$("#open_text_bg_2").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","#open_help",function(){$("#open_text_bg_2").addClass("display_none")}).on("click","#open_exit",function(){window.close()}).on("mouseover","#open_exit",function(){$("#open_text_bg_1").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","#open_exit",function(){$("#open_text_bg_1").addClass("display_none")}).on("click","#help_exit",function(){World.exitHelp()}).on("mouseover","#help_exit",function(){$("img.help_exit_img").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","#help_exit",function(){$("img.help_exit_img").addClass("display_none")}).on("click","#licensebtnl",function(){World.showLicense("license","open")})}var World=function(){var a={0:{0:100,1:-50,2:40,3:30,4:30,5:40,6:-50,7:100},1:{0:-50,1:-30,2:5,3:1,4:1,5:5,6:-30,7:-50},2:{0:40,1:5,2:20,3:10,4:10,5:20,6:5,7:40},3:{0:30,1:1,2:10,3:0,4:0,5:10,6:1,7:30},4:{0:30,1:1,2:10,3:0,4:0,5:10,6:1,7:30},5:{0:40,1:5,2:20,3:10,4:10,5:20,6:5,7:40},6:{0:-50,1:-30,2:5,3:1,4:1,5:5,6:-30,7:-50},7:{0:100,1:-50,2:40,3:30,4:30,5:40,6:-50,7:100}},b={boardTexture:{board:"images/game_014_board.png",black:"images/game_002_blackpc.png",white:"images/game_003_whitepc.png",leftPieces:"images/game_004_pcleftside.png",rightPieces:"images/game_005_pcrightside.png",hidePieces:"images/game_015_pcside.png",p1Image:"images/game_011_settings1p.png",p2Image:"images/game_010_settings2p.png"},board:[[],[],[],[],[],[],[],[]],bounder:8,boardview:"board",blackResultView:"black_result",whiteResultView:"white_result",leftPiecesView:"left_pieces",rightPiecesView:"right_pieces",messageview:"message",result:"result",isEnd:!1,endMessage:"",isUserTurn:!0,isDrawing:!1,isLock:!1,isInit:!1,isConfigure:!1,isResult:!1,level:3,hasHelp:!1,hasInit:!1,playerNum:1,currentColor:"black",step:4,point:[],directs:[[1,0],[1,1],[1,-1],[0,1],[0,-1],[-1,0],[-1,1],[-1,-1]],heap:{nextLevel:{}},soundSource:{snd_hint:{src:"audio/Hint.ogg"},snd_navclick:{src:"audio/NavClick.ogg"},snd_navmove:{src:"audio/NavMove.ogg"},snd_settingsclick:{src:"audio/SettingsClick.ogg"},snd_theme:{src:"audio/Theme.ogg"},snd_tileflip:{src:"audio/TileFlip.ogg"},snd_tileplace:{src:"audio/TilePlace.ogg"},snd_victoryhorns:{src:"audio/VictoryHorns.ogg"}},showWorld:function(){this.hasInit||($("#view").html('<div class="play1_lable"></div><div class="play1_score" id="black_result" align="center">0</div><div class="play1_pieces_lable"></div><div class="play2_lable"></div><div class="play2_score" id="white_result" align="center">0</div><div class="play2_pieces_lable"></div><div class="stone_selected"><img id="message" /><span id="turn"></span></div><div class="left_pieces" id="left_pieces"></div><div class="right_pieces" id="right_pieces"></div><a class="configure"><img src="images/game_006_settingsbtn.png"></a><div class="configure_panel display_none"><div class="configure_panel_func"><div class="configure_panel_startover"><div class="configure_panel_text"></div></div><div class="configure_panel_newgame"><div class="configure_panel_text"></div></div><div class="configure_panel_help"><div class="configure_panel_text"></div></div><div class="configure_panel_exit"><div class="configure_panel_text"></div></div></div><img class="configure_panel_arrow" src="images/game_013_settingsarrow.png" /></div><div id="board"></div><div id="result" class="result result_wood display_none"><div class="result_win_text" align="center"></div><img class="result_new_p1_rollover display_none" src="images/winner_004_rollover.png" /><img class="result_new_p2_rollover display_none" src="images/winner_004_rollover.png" /><img class="result_exit_rollover display_none" src="images/winner_005_exitrollover.png" /><a class="result_new_p1"></a><a class="result_new_p2"></a><a class="result_exit"></a><div class="result_quit"></div></div>').on("click","a.configure",function(){World.configure()}).on("click","a.result_new_p1",function(){World.playSound("snd_navclick"),World.init(1)}).on("mouseover","a.result_new_p1",function(){$("img.result_new_p1_rollover").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","a.result_new_p1",function(){$("img.result_new_p1_rollover").addClass("display_none")}).on("click","a.result_new_p2",function(){World.playSound("snd_navclick"),World.init(2)}).on("mouseover","a.result_new_p2",function(){$("img.result_new_p2_rollover").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","a.result_new_p2",function(){$("img.result_new_p2_rollover").addClass("display_none")}).on("click","a.result_exit",function(){window.close()}).on("mouseover","a.result_exit",function(){$("img.result_exit_rollover").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","a.result_exit",function(){$("img.result_exit_rollover").addClass("display_none")}).on("click","div.result_quit",function(){World.closeResult()}),$(".play1_pieces_lable").html(getMessage("pieces","pieces")),$(".play2_pieces_lable").html(getMessage("pieces","pieces")),$("#turn").html(getMessage("turn","'s Turn")),$(".result_new_p1").html(getMessage("newOneGame","New 1P Game")),$(".result_new_p2").html(getMessage("newTwoGame","New 2P Game")),$(".result_exit").html(getMessage("exit","Exit")),$(".configure_panel_startover").click(function(){World.startOver()}).on("mouseover",function(){$(this).css("background-color","#222222"),World.playSound("snd_navmove")}).on("mouseout",function(){$(this).css("background-color","#000000")}).find(".configure_panel_text").html(getMessage("startover","Start over")),$(".configure_panel_newgame").on("mouseover",function(a){$(this).css("background-color","#222222"),World.playSound("snd_navmove")}).on("mouseout",function(a){$(this).css("background-color","#000000")}).click(function(){var a=1;$(this).hasClass("configure_panel_new2game")&&(a=2),World.playSound("snd_navclick"),World.init(a)}),$(".configure_panel_help").click(function(){World.showHelp()}).on("mouseover",function(){$(this).css("background-color","#222222"),World.playSound("snd_navmove")}).on("mouseout",function(){$(this).css("background-color","#000000")}).find(".configure_panel_text").html(getMessage("rules","Rules")),$(".configure_panel_exit").click(function(){window.close()}).on("mouseover",function(){$(this).css("background-color","#222222"),World.playSound("snd_navmove")}).on("mouseout",function(){$(this).css("background-color","#000000")}).find(".configure_panel_text").html(getMessage("exit","Exit")),this.hasInit=!0)},init:function(a){this.showWorld(),this.playerNum=a||1;for(var b in this.board)for(var c=0;c<this.bounder;c++)this.board[b][c]="board";this.board[3][3]="black",this.board[4][4]="black",this.board[3][4]="white",this.board[4][3]="white",this.isUserTurn=!0,this.isLock=!1,this.isConfigure=!1,this.isResult=!1,this.currentColor="white",this.step=4,this.level=3,this.point=[],this.heap={nextLevel:{}};for(var d="",e="",b=0;32>b;b++)d+='<img src="'+this.boardTexture.leftPieces+'" class="pieces" id="pc0'+b+'" />',e+='<img src="'+this.boardTexture.rightPieces+'" class="pieces" id="pc1'+b+'" />';$("#"+this.leftPiecesView).html(d),$("#"+this.rightPiecesView).html(e),$("#pc00").attr("src",this.boardTexture.hidePieces),$("#pc01").attr("src",this.boardTexture.hidePieces),$("#pc10").attr("src",this.boardTexture.hidePieces),$("#pc11").attr("src",this.boardTexture.hidePieces),$("#"+this.result).addClass("display_none"),$("div.configure_panel").addClass("display_none");var f=1==this.playerNum?2:1;$(".configure_panel_newgame").removeClass("configure_panel_new"+this.playerNum+"game").addClass("configure_panel_new"+f+"game").find(".configure_panel_text").html(getMessage(f+"PlayerGame",f+" Player Game")),$(".play1_lable").html(getMessage("player","player")+'<span style="font-size:48pt;">1</span>'),2==this.playerNum?$(".play2_lable").html(getMessage("player","player")+'<span style="font-size:48pt;">2</span>'):$(".play2_lable").html(getMessage("computer","comp.")),this.isInit=!0,document.getElementById("open").style.display="none",document.getElementById("view").style.display="block",this.endConfigure(),this.drawBoard()},configure:function(){(!this.isLock||this.isEnd&&this.isLock&&!this.isResult)&&(this.playSound("snd_settingsclick"),this.isConfigure?this.endConfigure():(this.isConfigure=!0,$("a.configure img").attr("src","images/game_007_settingsbtnrollover.png"),$("div.configure_panel").removeClass("display_none")))},endConfigure:function(){this.isConfigure=!1,$("div.configure_panel").addClass("display_none"),$("a.configure img").attr("src","images/game_006_settingsbtn.png")},startOver:function(){this.playSound("snd_navclick"),this.init(this.playerNum),this.endConfigure()},showHelp:function(){this.playSound("snd_navclick"),this.endConfigure(),this.hasHelp||(this.hasHelp=!0,$("#help").html('<div class="help_text" align="center"><div class="help_title"></div><div class="help_contain"></div></div><img class="help_exit_img display_none" src="images/rules_002_rollover.png" /><a class="help_exit"></a>').on("click","a.help_exit",function(){World.exitHelp()}).on("mouseover","a.help_exit",function(){$("img.help_exit_img").removeClass("display_none"),World.playSound("snd_navmove")}).on("mouseout","a.help_exit",function(){$("img.help_exit_img").addClass("display_none")}),$(".help_title").html(getMessage("howtoPlay","How to Play")),$(".help_contain").html(getMessage("help","Play a piece on the board so that one or more of your opponent’s pieces are between two of your pieces. All of the opponent’s pieces between your own turn over and become your color.<br>The player with the most pieces on the board at the end of the game wins!")),$(".help_exit").html(getMessage("goBack","Go Back"))),$("#help").removeClass("display_none")},exitHelp:function(){this.playSound("snd_navclick"),$("#help").addClass("display_none")},getSoundSource:function(a){var b;if("undefined"!=typeof this.soundSource[a]&&"undefined"!=typeof this.soundSource[a].audio){var c=this.soundSource[a];b=c.audio}else{var d=this.soundSource[a].src;b=new Audio(d),this.soundSource[a].audio=b}return b},playSound:function(a){var b=this.getSoundSource(a);0==b.paused&&b.pause(),b.play()},actionAtPoint:function(a,b){var c=[];if(this.heap=this.heap.nextLevel[String(a[0])+String(a[1])]||{},"undefined"!=typeof this.heap.value&&this.heap.color==b)c=this.heap.path;else{var d=this.getRevertPath(a,b);c=d.path,this.heap={color:b,path:c,place:a,nextLevel:{}}}this.clearTips(),$("#pc"+this.step%2+Math.floor(this.step/2)).attr("src",this.boardTexture.hidePieces),this.step+=1,this.step>=55?this.level+=2:this.step>=50&&(this.level+=1),this.playSound("snd_tileplace"),this.setPoint(a,b),this.setBorder(a),this.drawPath(c,b)},setPoint:function(a,b){this.board[a[0]][a[1]]=b,this.drawPoint(a,b)},drawPoint:function(a,b){$("img#a"+a[0]+a[1]).attr("src",this.boardTexture[b]).removeClass("tip"),$("a#l"+a[0]+a[1]).off("mouseover")},drawPath:function(a,b){this.isDrawing=!0;for(var c=0;c<a.length;c++){this.board[a[c][0]][a[c][1]]=b;var d="World.drawPoint(["+a[c][0]+","+a[c][1]+"],'"+b+"')";setTimeout(d,100*(c+1))}setTimeout("World.drawMessage()",100*(a.length+1))},setBorder:function(a){this.point.length>0&&($("img#a"+this.point[0]+this.point[1]).removeClass("img_board_select"),$("img#a"+this.point[0]+this.point[1]).addClass("img_board")),$("img#a"+a[0]+a[1]).removeClass("img_board"),$("img#a"+a[0]+a[1]).addClass("img_board_select"),this.point=a},drawMessage:function(){var a=0,b=0;if("undefined"!=typeof this.heap.value)a=parseInt(this.heap.black),b=parseInt(this.heap.white);else{for(var c={black:0,white:0},d=0;d<this.bounder;d++)for(var e=0;e<this.bounder;e++)c[this.board[d][e]]+=parseInt(1);a=c.black,b=c.white}$("#"+this.blackResultView).html(a),$("#"+this.whiteResultView).html(b);var f,g;if("undefined"!=typeof this.heap.value&&this.heap.color==this.currentColor?"white"==this.heap.color?(f=this.heap.upossible,g=this.heap.cpossible):(g=this.heap.upossible,f=this.heap.cpossible):(g=this.possiblePlace("white"),f=this.possiblePlace("black")),this.isEnd=0==f.length&&0==g.length||64==this.step,this.isEnd){var h=getMessage("player","player"),i=getMessage("win","Wins");a>b?$(".result_win_text").html(h+" 1 "+i+"!"):a==b?$(".result_win_text").html(getMessage("winDraw","Draw!")):2==this.playerNum?$(".result_win_text").html(h+" 2 "+i+"!"):$(".result_win_text").html(getMessage("winComputer","Computer Wins!")),this.playSound("snd_victoryhorns"),$("#"+this.result).removeClass("display_none"),this.isLock=!0,this.isResult=!0}else{var j=f;"black"==this.currentColor?g.length>0&&(this.currentColor="white",j=g):f.length>0?this.currentColor="black":tpossilbe=g,$("#"+this.messageview).attr("src",this.boardTexture[this.currentColor]),this.possible=j,this.setTips(this.currentColor),1==this.playerNum&&"white"==this.currentColor?(this.isUserTurn=!1,this.computerTurn()):this.isUserTurn=!0}this.isDrawing=!1},closeResult:function(){$("#"+this.result).addClass("display_none"),this.isResult=!1},setTips:function(a){var b=this.boardTexture[a],c=this.boardTexture.board,d=function(a,b){return function(){$("#"+a+" img").attr("src",b).addClass("tip")}},e=function(a,b){return function(){$("#"+a+" img").attr("src",b).removeClass("tip")}};for(var f in this.possible){var g=this.possible[f];if("board"==this.board[g[0]][g[1]]){var h="l"+g[0]+g[1];$("#"+h).on("mouseover",d(h,b)).on("mouseout",e(h,c))}}},clearTips:function(){var a=this.possible;for(var b in a){var c=a[b],d=this.boardTexture[this.board[c[0]][c[1]]],e="l"+c[0]+c[1];$("#"+e).off("mouseover").off("mouseout").find("img").attr("src",d).removeClass("tip")}},drawBoard:function(){for(var a=$("#"+this.boardview),b=function(a,b){return function(){World.click(a,b)}},c="",d=0;d<this.bounder;d++){c+="<div>";for(var e=0;e<this.bounder;e++){var f=""+d+e,g="l"+f,h="a"+f;c+='<span><a id="'+g+'" class="img_style"><img id="'+h+'" src="'+this.boardTexture[this.board[d][e]]+'" class="img_board" /></a></span>',a.on("click","#"+h,b(d,e))}c+="</div>"}a.html(c),this.drawMessage()},click:function(a,b){"board"!==this.board[a][b]||this.isEnd||!this.isUserTurn||this.isDrawing||this.isLock||this.isConfigure?(this.isConfigure&&!this.isEnd&&!this.isDrawing&&!this.isLock||this.isConfigure&&this.isEnd&&!this.isDrawing&&this.isLock&&!this.isResult)&&this.endConfigure():this.canRevert([a,b],this.currentColor)?(this.actionAtPoint([a,b],this.currentColor),1==this.playerNum&&(this.isUserTurn=!1)):this.playSound("snd_hint")},computerTurn:function(){if(this.isDrawing)return void setTimeout("World.computerTurn()",500);var a;a="undefined"!=typeof this.heap.value?"white"==this.heap.color?this.heap.cpossible:this.heap.upossible:this.possiblePlace("white");var b=this.bestPlace(a);a.length>0&&b.length>0&&this.actionAtPoint(b,"white")},isContain:function(a,b){for(var c=b||[],d=0;d<c.length;d++)if(c[d][0]==a[0]&&c[d][1]==a[1])return!0;return!1},possiblePlace:function(a,b){for(var c=[],d="white"==a?"black":"white",e=b||this.board,f=0;f<this.bounder;f++)for(var g=0;g<this.bounder;g++)if(e[f][g]===d)for(var h=this.directs,i=0;i<h.length;i++){var j=f+parseInt(h[i][0]),k=g+parseInt(h[i][1]);j>=0&&j<this.bounder&&k>=0&&k<this.bounder&&"board"===e[j][k]&&this.canRevert([j,k],a,e)&&!this.isContain([j,k],c)&&c.push([parseInt(j),parseInt(k)])}return c},canRevert:function(a,b,c){for(var d=parseInt(a[0]),e=parseInt(a[1]),f="white"==b?"black":"white",g=c||this.board,h=this.directs,i=0;i<h.length;i++)for(var j=parseInt(h[i][0]),k=parseInt(h[i][1]),l=d+j,m=e+k;l>=0&&l<this.bounder&&m>=0&&m<this.bounder&&g[l][m]===f;)if(l+=j,m+=k,l>=0&&l<this.bounder&&m>=0&&m<this.bounder&&g[l][m]===b)return!0;return!1},getClone:function(a){for(var b=[[],[],[],[],[],[],[],[]],c=0;c<this.bounder;c++)for(var d=0;d<this.bounder;d++)b[c][d]=a[c][d];return b},getRevertPath:function(a,b,c){for(var d=parseInt(a[0]),e=parseInt(a[1]),f="white"==b?"black":"white",g=c||this.board,h=[],i=this.directs,j=0;j<i.length;j++)for(var k=d+parseInt(i[j][0]),l=e+parseInt(i[j][1]),m=[];k>=0&&k<this.bounder&&l>=0&&l<this.bounder&&g[k][l]===f;)m.push([k,l]),k+=parseInt(i[j][0]),l+=parseInt(i[j][1]),k>=0&&k<this.bounder&&l>=0&&l<this.bounder&&g[k][l]===b&&(h=h.concat(m));return{place:a,path:h,color:b}},doRevert:function(a,b){var c=a.color,d=b||this.board,e=a.path;for(var f in e)d[e[f][0]][e[f][1]]=c;return d},getValue:function(b,c){var d=(c||this.board,parseInt(b[0])),e=parseInt(b[1]);return parseInt(a[d][e])},evaluate:function(a,b,c,d,e){var f=-1e5,g=d||this.level,h=e||this.heap;"undefined"==typeof h.nextLevel[String(a[0])+String(a[1])]&&(h.nextLevel[String(a[0])+String(a[1])]={}),h=h.nextLevel[String(a[0])+String(a[1])],g=parseInt(g);var i=64-parseInt(this.step);g=g>i?i:g;var j=0,k=b||"white",l=c||this.board;l=this.getClone(l);var m="white"==k?"black":"white",n="white"==k?1:-1;l[a[0]][a[1]]=k;var o,p,q;if("undefined"!=typeof h.value)o=h.path,f=h.value,p=h.cpossible,q=h.upossible,l=this.doRevert(h,l);else{var r=this.getRevertPath(a,k,l);h.path=r.path,h.color=k,h.place=a,l=this.doRevert(h,l),p=this.possiblePlace(k,l),q=this.possiblePlace(m,l);for(var s=0,t=0,u=0,v=0,w=0;w<this.bounder;w++)for(var x=0;x<this.bounder;x++)l[w][x]===k?(s+=this.getValue([w,x],l),u++):l[w][x]===m&&(t+=this.getValue([w,x],l),v++);f=10*(p.length-q.length),f+=2*(s-t),0==q.length&&p.length>0&&(f=1e5),h.value=f,h.nextLevel={},h.cpossible=p,h.upossible=q,h[k]=u,h[m]=v}if(g>1&&(q.length>0||p.length>0)){0==q.length&&(q=p,m=k),q=this.getBestPlaceSet(q);for(var y=0;y<q.length;y++)j+=this.evaluate(q[y],m,l,g-1,h);q.length>0&&(j/=q.length,f=Math.round(.5*f+.5*j))}return f*n},getBestPlaceSet:function(a){var b=[],c=[],d=[];for(var e in a){var f=this.getValue(a[e]);100==f?b.push(a[e]):f>=0&&c.push(a[e])}return d=b.length>0?b:c.length>0?c:a},bestPlace:function(a){0==a.length&&console.log("Error: No possible places?!!!"),a=this.getBestPlaceSet(a);var b=[];if(a.length>0){b=a[0];for(var c=this.evaluate(b),d=1;d<a.length;d++){var e=this.evaluate(a[d]);e>c&&(c=e,b=a[d])}}else console.log("Error: No Setting place for Computer");return b},showLicense:function(a,b){var c,d,e=(document.getElementById(a+"btnl"),document.getElementById(a+"page")),f=document.getElementById(b),g=document.getElementById(a+"scroll"),h=document.getElementById(a+"btnq");g=document.getElementById(a+"scroll"),c=document.getElementById(a+"text");var i=2,j=0,k=1e3;g.style.top="0px",f.style.display="none",e.style.display="block";var l=g.clientHeight-c.clientHeight;d=setInterval(function(){var a=(new Date).getTime(),b=0==j?20:a-j;if(j=a,k-=b,!(k>0)){var c=Math.abs(parseInt(g.style.top))+b/40*i;c>0?g.style.top=-1*c+"px":g.style.top="0px",c>=l?(k=5e3,i=-20):0>=c&&(k=5e3,i=2)}},40),h.onclick=function(){f.style.display="block",e.style.display="none",clearInterval(d)}}};return b}();window.onload=function(){var a=getMessage("locale","en");if("en"!=a){var b=$("head").q,c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.href="css/i18n.css",b.appendChild(c)}$("title").html(getMessage("name","Annex")),$("#open1").html(getMessage("1PlayerGame","1 Player Game")),$("#open2").html(getMessage("2PlayerGame","2 Player Game")),$("#open_help").html(getMessage("howtoPlay","How to Play")),$("#open_exit").html(getMessage("exit","Exit")),registerEventHandlers(),scaleBody(document.getElementsByTagName("body")[0],720),World.playSound("snd_theme")};