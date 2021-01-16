<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
if(navigator.appName == "Netscape")
{
        setTimeout(function(){ $("img[src*='plus.gif']:visible").parent().click() }, 2000);
}
else
{
        setTimeout(function(){ $("img[src='/_layouts/images/plus.gif']").parent().click() }, 2000);
} 
});
</script>