function sommaele(myArr, indI, indF) {
	var s=0;
	var i;
	for(i=indI; i<=indF; i++) {
		s = s + myArr[i];
		};
	return s;}

function prob(dadi,facce,risult){
	var P1 = [];
	var i;
	var k;
	
	for (i=0; i<facce; i++)                 {P1[i]=0;};
	for (i=facce; i<2*facce; i++)           {P1[i]=1;};
	for (i=2*facce; i<(dadi+1)*facce; i++)  {P1[i]=0;};
	
	var Pt = P1;
	var Pold;
	
	for (k=2;k<=dadi;k++) {
	
		Pold = Pt;
		for (i=0; i<facce; i++)                 {Pt[i]=0;};
		for (i=facce; i<(dadi+1)*facce; i++)    {Pt[i]=sommaele(Pold, i-facce, i-1); };
	}
	
	
	for (i=0; i<Pt.length; i++) {Pt[i] = Pt[i]/Math.pow(facce, dadi);};
	
	console.log("P1: ", P1);
	console.log("Pold: ", Pold);
	console.log("Pt: ",Pt);
	return 0;}

	prob(3,6,0)
	
	
