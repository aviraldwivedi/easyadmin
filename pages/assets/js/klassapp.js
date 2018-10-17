
            $( ".navbar-minimalize" ).click(function() {
                $( "#logout" ).toggleClass( "small-lout" );
            });
        
      
            function calender_new_event() {
                var element = document.getElementById("calender_new_event_slide");
                element.classList.add("event-creator-desk");
                document.getElementById("overlay2").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function calender_new_event_close() {
                var element = document.getElementById("calender_new_event_slide");
                element.classList.remove("event-creator-desk");
                document.getElementById("overlay2").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }


    
            // $(document).ready(function() {
            //     $("#new-e-btn").click(function() {
            //         $("#page-nav").addClass("fix-nav-sm");
            //     });
            // });
        

        
            function talking_session() {
                var element = document.getElementById("taliking_session_slide");
                element.classList.add("event-creator-desk");
                document.getElementById("talking-overlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function talking_session_close() {
                var element = document.getElementById("taliking_session_slide");
                element.classList.remove("event-creator-desk");
                document.getElementById("talking-overlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
            }
       
        
            $(document).ready(function() {
                $("#my-overlay").click(function() {
                    $("#overlay").toggle();
                });
                $("#overlay").click(function() {
                    $("#overlay").toggle();
                    $("#right-sidebar").removeClass("sidebar-open");
                });
            });
        


       
            $(".pace-done").scroll(function() {
                $("#.profile-view").css({
                    "margin-top": "0px"
                });
            });
       


       
            function openNav() {
                document.getElementById("mySidenav").style.width = "130px";
                document.getElementById("wrapper").style.marginLeft = "130px";
                document.getElementById("logout").style.position = "absolute";
            }

            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("wrapper").style.marginLeft = "0";
                document.getElementById("logout").style.position = "fixed";
            }
        

        
            function fullProfile() {
                document.getElementById("profile-view-slide").style.width = "370px";
                document.getElementById("overlay2").style.display = "block";

            }

            function fullProfilecClose() {
                document.getElementById("profile-view-slide").style.width = "0";
                document.getElementById("overlay2").style.display = "none";
            }


    
        