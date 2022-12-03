let sexcode='f';
let nationalitycode='1';
if(sexcode=='M'||sexcode=='m'&&nationalitycode==1)
	{
		document.write(950);
	}
else if(sexcode=='M'||sexcode=='m'&&nationalitycode==2)
	{
		document.write(600);
	}
else if(sexcode=='F'||sexcode=='f'&&nationalitycode==1)
	{
		document.write(850);
	}
else if(sexcode=='F'||sexcode=='f'&&nationalitycode==1)
	{
		document.write(500);
	}
else
	{
		document.write("invalid input");
	}
