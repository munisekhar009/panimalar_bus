var buses=["103","162","163","165","144","113","111","131","160","117","135","136","124","65","75","104","109","97","126",
          "77","137","86","121","83","67","152","150","151","99","82","87","128","118","109","80","170","148","94","69","71","64"];
var streets=["ARCOT","VANDAVASI","KANCHEEPURAM","KANCHEEPURAM (VIA ORGADAM)","TIRUVALLUR, VELLAVDEU","CHEKKADU, TIRUVALLUR",
"ARAKONAM","TIRUTTANI","UTHUKOTTAI","TRIPLICANE","MMDA, ARUMBAKKAM, MADURAVOYAL","ETPS, ERANAVUR","MAHARANI, PURASAIWAKKAM",
"ANNANAGAR, MADURAVOYAL","KODAMBAKKAM, 100 FEET ROAD","V G P, ADAYAR","T NAGAR, GUINDY","PERAMBUR","M K B NAGAR","AYNAVARAM",
"MANALI, WEST DEPOT","PONNERI, MINJUR","WAVIN","AMBATTUR","REDHIILLS","MUTHAPUDUPET, AVADI","VEERAPURAM, AVADI",
"CHINMAYANAGAR, VALASARAVAKKAM","WEST SAIDAPET","WEST MAMBALAM","RAJAKIZHPAKKAM, NANGANALLUR", "CAMP ROAD, CHROMEPET",
"PADAPPAI","MEDAVAKKAM, MADIPAKKAM", "MADHURANTHAGAM","CHENGALPET, TAMBARAM","AMARAMBEDU, KUNDRATHUR, MANGADU",
"BAIKADI, PORUR","PORUR, IYYAPANTHANGAL, KATTUPAKKAM","AYYAPAKKAM"];
$("#bus").autocomplete({source:buses});
$("#pickup").autocomplete({source:streets},{minLength:3});



document.getElementById('id1').onclick = function(){
  var buss = document.getElementById('bus').value;
  sessionStorage.setItem('Data',buss);

  if(buses.includes(buss)){
    window.open("busno.html",'_self');

    //checks value exist in list
  }
  else if (buss==="") {
      document.getElementById('msg1').innerHTML = "* Required Field";
      msg1.style.visibility="visible";
      return false;
      //check if value is empty
    }
    else if(buss !=""){

      document.getElementById('msg1').innerHTML = "* Bus Number doesn't exist";
      msg1.style.visibility="visible";
      //check if value is not empty but not in list
        return false;
      }
}



document.getElementById('id2').onclick = function(){
  var pickup = document.getElementById('pickup').value;
  sessionStorage.setItem('Data1',pickup);
  if(streets.includes(pickup)){
     window.open("pickup.html",'_self');
     return true;
    //checks value exist in list
  }
  else if (pickup==="") {
      document.getElementById('msg2').innerHTML = "* Required Field";
      msg2.style.visibility="visible";
      //check if value is empty

      return false;
    }
    else if(pickup !=""){

      document.getElementById('msg2').innerHTML = "* Bus Name doesn't exist";
      msg2.style.visibility="visible";
      //check if value is not empty but not in list
        return false;
      }
}
