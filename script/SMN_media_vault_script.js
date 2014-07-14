     <script type="text/javascript">
        Cufon.replace('h1',{ fontFamily: "Cufon" });
        Cufon.replace('h2',{ fontFamily: "Cufon" });
        Cufon.replace('h3',{ fontFamily: "Cufon" });
        Cufon.replace('#mainNav',{ fontFamily: "Courier New" });
        Cufon.replace('#siteDescription',{ fontFamily: "Courier" });
     </script>

<script>
     $(function() {
        var search = $("#txtSearch").val();
        var placeholder = "Search...";
        var fadeToOpacity = 0.4;
        $("#txtSearch").fadeTo("normal", fadeToOpacity);
        if (search == "") {
     $("#txtSearch").val(placeholder);
     }
     $("#txtSearch").blur(function() {
        search = $("#txtSearch").val();
        if (!(search != "" && search != placeholder)) {
        $("#txtSearch").val(placeholder);
     }
     $("#txtSearch").fadeTo("normal", fadeToOpacity);
     });
     $("#txtSearch").focus(function() {
        search = $("#txtSearch").val();
        if (search == placeholder) {
        $("#txtSearch").val("");
     }
     $("#txtSearch").fadeTo("normal", 1);
     });
     $("#btnSearch").click(function() {
     $("#frmSearch").slideToggle("normal");
     $(this).toggleClass("active");
 //  $("#txtSearch").focus();
     });
     });
</script>
