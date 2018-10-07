module.exports = function solveSudoku(matrix) {


 
    // Функция проходит один раз по всем эл-м, вставляет возмоэные однозначные и возвращет массив вариантов
  function enter_the_unambiguous(){
    var number_options= new Array();
    for (let i = 0; i < matrix.length; i++) {
      number_options[i]=new Array();
      for (let j = 0; j < matrix[i].length; j++) {
        number_options[i][j]=new Array();
      }
    }
    //     // Проходим по всем эл-м и если есть однозначные варианты вписываем
    for (let i = 0; i < matrix.length; i++) {
    
    for (let j = 0; j < matrix[i].length; j++) {
    var what_insert=[1,2,3,4,5,6,7,8,9];   
    if (matrix[i][j]==0) {
    //Первый квадрант
    if ( i < 3 && j < 3 ) {
      //Проходим по строкам и столбцам
      for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
      
        //Проходим по квадранту
      for (let k = 0; k < 3; k++) {
        for (let p = 0; p < 3; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
      continue;  
    }
    //Второй квадрант
    if (i < 3 && j < 6) {
      //Проходим по строкам и столбцам
      for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 0; k < 3; k++) {
        for (let p = 3; p < 6; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
      continue;  
    }
    //Третий квадрант      
    if (i < 3 && j < 9) {
      //Проходим по строкам и столбцам
      for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 0; k < 3; k++) {
        for (let p = 6; p < 9; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
    
    
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {      
        matrix[i][j]=number_options[i][j][0];
      }
      
    }
    //Четвёртый квадрант    
    if (i < 6 && j < 3) {
        //Проходим по строкам и столбцам
        for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 3; k < 6; k++) {
        for (let p = 0; p < 3; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
      continue;     
    }
    //Пятый квадрант
    if (i < 6 && j < 6) {
        //Проходим по строкам и столбцам
        for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 3; k < 6; k++) {
        for (let p = 3; p < 6; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
      continue;      
    }
    //Шестой квадрант
    if (i < 6 && j < 9) {
        //Проходим по строкам и столбцам
        for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 3; k < 6; k++) {
        for (let p = 6; p < 9; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
      continue;  
              
    }
    //Седьмой квадрант
    if (i < 9 && j < 3) {
      //Проходим по строкам и столбцам
      for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 6; k < 9; k++) {
        for (let p = 0; p < 3; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
              continue;   
    }
    //Восьмой квадрант
    if (i < 9 && j < 6) {
        //Проходим по строкам и столбцам
        for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 6; k < 9; k++) {
        for (let p = 3; p < 6; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
                
    }
    //Девятый квадрант
    if (i < 9 && j < 9) {
        //Проходим по строкам и столбцам
        for (let k = 0; k < matrix.length; k++) {
        for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[i][k] == what_insert[m] || matrix[k][j] == what_insert[m] ) {
            what_insert[m]=0;
          }
          }
      }
        //Проходим по квадранту
      for (let k = 6; k < 9; k++) {
        for (let p = 6; p < 9; p++) {
          for (let m = 0; m < what_insert.length; m++) {
          if ( matrix[k][p] == what_insert[m] ) {
            what_insert[m]=0;
            }
          }
        }
      }
      //Записываем варианты
      for (let k = 0; k < what_insert.length; k++) {
        if (what_insert[k]!=0) {
          number_options[i][j].push(what_insert[k]);
        }
        
      }
      //Записываем если он единственный
      if ( number_options[i][j].length==1) {
        matrix[i][j]=number_options[i][j][0];
      }
            continue;  
    }
    } 
    
    }
    
    }
    return number_options;
  }
    // Функция проходит по массиву вариантов и находит число с мин количеством, возвращает строку , колонку, массив эл-в
 function whille(){
    var min_var;
    var number_of_zeros=0, 
          number_of_zeros_last=0,
          row,
          column;
          var number_optionss= new Array();
          for (let i = 0; i < matrix.length; i++) {
            number_optionss[i]=new Array();
            for (let j = 0; j < matrix[i].length; j++) {
              number_optionss[i][j]=new Array();
            }
          }

    while(1)  {
      number_optionss = enter_the_unambiguous();
        //  Считаем количество нулей
      for (let i = 0; i <  number_optionss.length; i++) {
        for (let j = 0; j < number_optionss.length; j++) {
          if (matrix[i][j]==0) {
            number_of_zeros++;
          }
        }
      }

      if (number_of_zeros==0 ) {
        function sudoku_check(){
          namb=0;
          //     // Проходим по всем эл-м и если есть однозначные варианты вписываем
          for (let i = 0; i < matrix.length; i++) { 
          for (let j = 0; j < matrix[i].length; j++) {
          var number_of_meetings=0;   
          //Первый квадрант
          if ( i < 3 && j < 3 ) {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Второй квадрант
          if (i < 3 && j < 6) {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Третий квадрант      
          if (i < 3 && j < 9) {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Четвёртый квадрант    
          if (i < 6 && j < 3)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Пятый квадрант
          if (i < 6 && j < 6)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Шестой квадрант
          if (i < 6 && j < 9)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Седьмой квадрант
          if (i < 9 && j < 3)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Восьмой квадрант
          if (i < 9 && j < 6)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          }
          //Девятый квадрант
          if (i < 9 && j < 9)  {
            //Проходим по строкам и столбцам
            for (let k = 0; k < matrix.length; k++) {
                if ( matrix[i][k] == matrix[i][j]) {
                  number_of_meetings++;
                }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            for (let k = 0; k < matrix.length; k++) {
              if ( matrix[k][j] == matrix[i][j] ) {
                number_of_meetings++;
              }
          }
          if (number_of_meetings!=1) {
            return 10;
          }
          number_of_meetings=0;
              //Проходим по квадранту
            for (let k = 0; k < 3; k++) {
              for (let p = 0; p < 3; p++) {
                if ( matrix[k][p] == matrix[i][j] ) {
                  number_of_meetings++; 
                }
              }
            }
            if (number_of_meetings!=1) {
              return 10;
            }
            number_of_meetings=0;
            //Записываем варианты
            continue;  
          } 
          } 
         }
          return namb;
         }
        if (sudoku_check()==10) {
          row=10;
          column=10;
          min_var=[10,10];
      break;
        }
        else{
        row=11;
            column=11;
            min_var=[11,11];
        break;
        }
      }
      //  Сравниваем количество нулей с предыдущей итерацией подстановок , если они равны находим клетку с минемальным числом вариантов
      if (number_of_zeros_last = number_of_zeros) {
        var r=0;

        // Проверка на наличие вариантов
        for (let i = 0; i <  number_optionss.length; i++) {
          for (let j = 0; j < number_optionss.length; j++) {
            if (number_optionss[i][j].length > 1) {
              r++;
            }
          }
        }
        if (r==0 && number_of_zeros!=0 ) {
          // console.log('Решений нет');
            row=10;
            column=10;
            min_var=[10,10]
            break;
        }

        // поиск числа с минемальным количеством вариантов 
        var o=0;
        for (let i = 0; i <  number_optionss.length; i++) {
        
          for (let j = 0; j < number_optionss.length; j++) {

            if (number_optionss[i][j].length > 1 && o==0) {
              min_var=number_optionss[i][j];
              row=i;
              column=j;
              number_of_zeros=0;
              number_of_zeros_last=0; 
              o++;             
              
            }
            if (o>0 && min_var.length > number_optionss[i][j].length && number_optionss[i][j].length >1 ) {
              min_var=number_optionss[i][j];
              row=i;
              column=j;

            }
          }
          
        }
        break;
        
        }


        number_of_zeros_last = number_of_zeros;
    } 
    return[row, column,min_var];
   }
function chargeg(){
 var mass=whille(),
 matrix_lates=new Array();
 for (let yy = 0; yy < matrix.length; yy++) {
  matrix_lates[yy] = new Array();
   
 }
  var row=mass[0], column=mass[1],min_var=mass[2],z;
  if (typeof min_var == 'undefined')
   {
    return ;
  }
  if (row==10) {
    
    return ;
  }
  if (row==11) {
    return 11;
  }
  for (let ww = 0; ww < matrix.length; ww++) {
    for (let ss = 0; ss < matrix.length; ss++) {
      matrix_lates[ww][ss] = matrix[ww][ss];
    }
  }
  for (let w = 0; w < min_var.length; w++) {

    for (let ww = 0; ww < matrix.length; ww++) {
      for (let ss = 0; ss < matrix.length; ss++) {
        matrix[ww][ss]=matrix_lates[ww][ss];
      }
    }

    matrix[row][column]=min_var[w];
    z=chargeg();
    if (z==11 ) {
      return 11 ;
    }
    if (z==10 ) {
      return 10;
    }
  }
}

chargeg();
return matrix;
}
