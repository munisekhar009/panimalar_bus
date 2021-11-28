var full_data={  "103": ["103","ARCOT","PARESKUMAR",9551113746],
                 "162": ["162","VANDAVASI","ANBAZHAGAN",9791349536],
                 "163": ["163","KANCHEEPURAM","SATHIYA MOORTHY",8056126856],
                 "165": ["165","KANCHEEPURAM (VIA ORGADAM)","RAMESH",9445766029],
                 "144": ["144","TIRUVALLUR, VELLAVDEU","MURUGESAN",9176909197],
                 "113": ["113","CHEKKADU, TIRUVALLUR","BARANIDHARAN",9840626971],
                 "111": ["111","ARAKONAM","RAMU",9026632097],
                 "131": ["131","TIRUTTANI","RAVICHANDRAN",9042661282],
                 "160": ["160","UTHUKOTTAI","RAJA",9952944110],
                 "117": ["117","TRIPLICANE","PALANI KUMAR",9840494649],
                 "135": ["135","MMDA, ARUMBAKKAM, MADURAVOYAL","VINAYAGA MOORTHY",9840135864],
                 "136": ["136","ETPS, ERANAVUR","KRISHNA MOORTHY",8015337014],
                 "124": ["124","MAHARANI, PURASAIWAKKAM","TAMILSELVAN",8939428342],
                  "65": ["65","ANNANAGAR, MADURAVOYAL","DHANASEKAR",9791099474],
                  "75": ["75","KODAMBAKKAM, 100 FEET ROAD","ANANATHAN L",9884923192],
                 "104": ["104","V G P, ADAYAR","SELVAM M",7338984688],
                 "109": ["109","T NAGAR, GUINDY","IRUSAPPAN",9791184795],
                  "97": ["97","PERAMBUR","UTHIRAKUMAR",9080534078],
                 "126": ["126","M K B NAGAR","PANDIYAN",9551128288],
                  "77": ["77","AYNAVARAM","RAGHU",9962467823],
                 "137": ["137","MANALI, WEST DEPOT","VENKATESAN V",9042744359],
                  "86": ["86","PONNERI, MINJUR","VIJAYAN",9790316144],
                 "121": ["121","WAVIN","KUMARAN",9840503450],
                  "83": ["83","WAVIN","MOTHIBABA",8056191463],
                  "67": ["67","AMBATTUR","NISHARBASHA",9566177329],
                 "152": ["152","REDHIILS","NAGARAJ S ",9551195045],
                 "150": ["150","MUTHAPUDUPET, AVADI","KARTHIKEYAN",9551026799],
                 "151": ["151","VEERAPURAM, AVADI","VEERARAGHAVA N",9841859526],
                  "99": ["99","CHINMAYANAGAR, VALASARAVAKKAM","RAJENDRAN S",9940522460],
                  "82": ["82","WEST SAIDAPET","ANANATHAN J",9940564439],
                  "87": ["87","WEST MAMBALAM","MOHAN",9884840842],
                 "128": ["128","RAJAKIZHPAKKAM, NANGANALLUR","PUSHPARAJ",9786361536],
                 "118": ["118","CAMP ROAD, CHROMEPET","GNANASEKAR",9789966473],
                 "109": ["109","PADAPPAI","DHARMENDRAN",9789966477],
                  "80": ["80","MEDAVAKKAM, MADIPAKKAM","SENTHURAPANDIAN",9025407629],
                 "170": ["170","MADHURANTHAGAM","BABU",9444141739],
                 "148": ["148","CHENGALPET, TAMBARAM","ARUL",9787084724],
                  "94": ["94","AMARAMBEDU, KUNDRATHUR, MANGADU","SIVAPRAKASAM",9176373715],
                  "69": ["69","BAIKADI, PORUR","KARUNANIDHI",8056133523],
                  "71": ["71","PORUR, IYYAPANTHANGAL, KATTUPAKKAM","UDAYAKUMAR",9677064975],
                  "64": ["64","AYYAPAKKAM","MOORTHY",9962939034]
               }

var busname=sessionStorage.getItem('Data1');
var res=[]
var i = 0
for(var key in full_data) {
   if(full_data[key][1]===busname){
     res=key;
     break;
   }
}

  document.getElementById('result1').innerHTML = res;
  document.getElementById('result2').innerHTML = full_data[res][2];
  document.getElementById('result3').innerHTML = full_data[res][1];
  document.getElementById('result4').innerHTML = full_data[res][3];
