var imgsli =document.getElementById('imgsli');
    var images = new Array (
        'images/NPTEL C.jpg',
        'images/NPTEL Java.jpg',
        'images/NPTEL PDA.jpg',
        'images/NPTEL SS.jpg',
        'images/NPTEL IoT.jpg',
        'images/NPTEL DBMS.jpg',
        'images/django.png',
        'images/reactjs.png',
        'images/github.png',
        'images/pfull.png',
        'images/pbase.png',
        'images/pds.png',
        'images/pweb.png',
        'images/pdb.png',
        'images/pcap.png',
        'images/tcs.png',
        'images/hpel.png',
        'images/hppd.png',
        'images/infelearn.png',
        'images/AA.png',
        'images/codegnan.jpg',
        'images/stcpp.png',
        'images/stc.png',
        'images/stiot.png',
        'images/PS-AI-INTERNSHIP-2075.jpg'

    );

    var len =images.length;
    var i=0;
    function back(){
        
        i=i-1
        if(i<0){
            i=len-1
        }
        imgsli.src = images[i];
        document.getElementById("num").innerHTML =i+1+'/'+(len);
    }
    function front(){
        
        i=i+1
        if(i>len-1){
            i=0
        }
        imgsli.src = images[i];
        document.getElementById("num").innerHTML =i+1+'/'+(len);
    }