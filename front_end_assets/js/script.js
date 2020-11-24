// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code

var html_download = '<a href="#top" class="btn btn-dark rounded-pill" style="font-size:13px; z-index:100; position: fixed; bottom:10px; right:10px;"><i class="fa fa-hand-o-up"></i></a>';
$('body').prepend(html_download);
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if




    
}); 
// jquery end
