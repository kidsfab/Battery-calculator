jQuery('document').ready(function(){
    jQuery('input').on('keyup', function(){
        
        //declare variables
        var motorVolt, motorCurr, motorNum, motorPerc, 
        sensVolt, sensCurr, contrVolt, contrCurr, regulLoss, 
        battVolt,battMah, battNum, powerTotal, minbattVolt, 
        motorIdleTime, minTime, typTime
        
        //read input
        motorVolt = jQuery('#motorVolt').val();
        motorCurr = jQuery('#motorCurr').val();
        motorNum = jQuery('#motorNum').val();
        motorPerc = jQuery('#motorPerc').val();
        sensVolt = jQuery('#sensVolt').val();
        sensCurr = jQuery('#sensCurr').val();
        contrVolt = jQuery('#contrVolt').val();
        contrCurr = jQuery('#contrCurr').val();
        regulLoss = jQuery('#regulLoss').val();
        battVolt = jQuery('#battVolt').val();
        battMah = jQuery('#battMah').val();
        battNum = jQuery('#battNum').val();
		
		//translate to Float
        motorVolt = parseFloat(motorVolt);
        motorCurr = parseFloat(motorCurr);
        motorNum = parseFloat(motorNum);
        motorPerc = parseFloat(motorPerc);
        sensVolt = parseFloat(sensVolt);
        sensCurr = parseFloat(sensCurr);
        contrVolt = parseFloat(contrVolt);
        contrCurr = parseFloat(contrCurr);
        regulLoss = parseFloat(regulLoss);
        battVolt = parseFloat(battVolt);
        battMah = parseFloat(battMah);
        battNum = parseFloat(battNum);
        
        //calculate 
        minbattVolt = Math.max(motorVolt, sensVolt, contrVolt) + regulLoss;
        powerTotal = Math.round(((battVolt * motorCurr * motorNum * motorPerc / 100) + (battVolt * sensCurr) + (battVolt * contrCurr))*100)/100; 
        motorIdleTime = Math.round(((battMah * battNum * .001)/(sensCurr + contrCurr))*100) / 100;
        minTime = Math.round(((battMah * battNum * .001)/((motorCurr * motorNum) + sensCurr + contrCurr))*100)/100;
        typTime = Math.round(((battMah * battNum * .001)/((motorCurr * motorNum * motorPerc / 100) + sensCurr + contrCurr))*100)/100;
        
        //write
        jQuery('#minbattVolt').html(minbattVolt);
		jQuery('#powerTotal').html(powerTotal);
		jQuery('#motorIdleTime').html(motorIdleTime);
		jQuery('#minTime').html(minTime);
		jQuery('#typTime').html(typTime);
    });
});
