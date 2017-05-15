$(document).ready(function(){
    function Desk(){
        var n = 9;
        var m = 9;
        var mas = [];

        function colorDesk(){
            var a ='';
            var masABC = ['A','B','C','D','E','F','G','H'];
            var masСhess = ['Ладья','Конь','Слон','К-ва','К-ль','Слон','Конь','Ладья'];
            for(i = 0; i < 9; i++){
                for(j = 0; j < 9; j++){
                    if(i == 0 && j != 0){
                        a = '<div class="item" style="background: white">' + masABC[j-1] + '</div>';
                    }
                    else if(mas[i][j] != 0){
                        a = '<div class="item" style="background: white">' + mas[i][j] + '</div>';
                    }
                    else{
                        if(i == 1 || i == 8){
                            if(i%2 == 0 && j%2 == 0 && i!=0){
                                a = '<div class="item" style="background: black; color: white;">'+ masСhess[j-1] +'</div>';
                            }else if(i%2 != 0 && j%2 != 0){
                                a = '<div class="item" style="background: black; color: white;">'+ masСhess[j-1] +'</div>';
                            }else{
                                a = '<div class="item" style="background: white">'+ masСhess[j-1] +'</div>';
                            }
                        }
                        else if(i == 2 || i == 7){
                            if(i%2 == 0 && j%2 == 0 && i!=0){
                                a = '<div class="item" style="background: black; color: white;">Пешка</div>';
                            }else if(i%2 != 0 && j%2 != 0){
                                a = '<div class="item" style="background: black; color: white;">Пешка</div>';
                            }else{
                                a = '<div class="item" style="background: white">Пешка</div>';
                            }
                        }else if(i%2 == 0 && j%2 == 0 && i!=0){
                            a = '<div class="item" style="background: black"></div>';
                        }else if(i%2 != 0 && j%2 != 0){
                            a = '<div class="item" style="background: black"></div>';
                        }else{
                            a = '<div class="item" style="background: white"></div>';
                        }
                    }
                    $(".desk").append(a);
                }
            }
            $(".main").css("display","block");
        }
        this.createDesk = function(){
            for(var i = 0; i < m; i++){
                mas[i] = [];
                for(var j = 0; j < n; j++){
                    if(j == 0 && i != 0)
                        mas[i][j] = i;
                    else
                        mas[i][j] = 0;
                }
            }
            colorDesk();
        }

    }

    $(".add").click(function () {
        var Chess = new Desk();
        Chess.createDesk();

    })
})
