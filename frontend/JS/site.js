
$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));
    alert("HELLO");
    $('#name').text(d.name);
    $('#college').text(d.college);
    $('#regno').text(d.regno);
});
