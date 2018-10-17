            function addnewimage() {
                var element = document.getElementById("add-new-image-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addImageOverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewImageClose() {
                var element = document.getElementById("add-new-image-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addImageOverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }


            function addnewViedo() {
                var element = document.getElementById("add-new-viedo-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addViedoOverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewViedoClose() {
                var element = document.getElementById("add-new-viedo-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addViedoOverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }


            function addnewForm() {
                var element = document.getElementById("add-new-form-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addFormOverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewFormClose() {
                var element = document.getElementById("add-new-form-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addFormOverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }

            function addnewDD() {
                var element = document.getElementById("add-new-DD-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addDDOverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewDDClose() {
                var element = document.getElementById("add-new-DD-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addDDOverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }

            function addnewSurvey() {
                var element = document.getElementById("add-new-Survey-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addSurveyOverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewSurveyClose() {
                var element = document.getElementById("add-new-Survey-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addSurveyOverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }

            function addnewAR() {
                var element = document.getElementById("add-new-AR-slide");
                element.classList.add("add-image-slide");
                document.getElementById("addAROverlay").style.display = "block";
                document.getElementById("k-body").style.overflow = "hidden";

            }

            function addnewARClose() {
                var element = document.getElementById("add-new-AR-slide");
                element.classList.remove("add-image-slide");
                document.getElementById("addAROverlay").style.display = "none";
                document.getElementById("k-body").style.overflow = "auto";
                
            }

            $(document).ready(function(){
                $("#v-table").click(function(){
                    $(".video-card").hide();
                    $(".video-table").show();
                });
                $("#v-card").click(function(){
                    $(".video-table").hide();
                    $(".video-card").show();
                });
            });

            Dropzone.options.dropzoneForm = {
                paramName: "file", // The name that will be used to transfer the file
                maxFilesize: 2, // MB
                dictDefaultMessage: "<strong class=\"dropzone-title\"><img src=\"icons/upload.svg\" /><br>Drag an image here or <span class=\"text-blue\">browse</span></br> for an image to upload</strong>"
            };
    
            $(document).ready(function(){
    
                var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
                    lineNumbers: true,
                    matchBrackets: true
                });
    
                var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
                    lineNumbers: true,
                    matchBrackets: true
                });
    
                var editor_two = CodeMirror.fromTextArea(document.getElementById("code3"), {
                    lineNumbers: true,
                    matchBrackets: true
                });
    
           });