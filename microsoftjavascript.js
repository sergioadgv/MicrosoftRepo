    

// Sentiment Analysis

     $( document ).ready(function() {

            var inputtext = {
                                "documents": [
                                    {
                                    "language": "en",
                                    "id": "1",
                                    "text": ""
                                    }
                                ]
                            }

            

            $( "#submit-text" ).click(function() {
                
                inputtext.documents[0].text = $("#inputtext").val();

                console.log(JSON.stringify(inputtext));

                $.ajax({
                method: "POST",
                url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases",
                headers: {"Ocp-Apim-Subscription-Key": "acf2f4025b4f48488c0d13ad50f295f5"},
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(inputtext)
                })
                .done(function( msg ) {
                    var text ="";
                    for (var i = 0; i < msg.documents[0].keyPhrases.length; i++) { 
                        text += msg.documents[0].keyPhrases[i] + "<br>";
                    }
                    $("#keyphrasesresponse").text("The key phrases are: " + text);
                });
            });
        });



 $( document ).ready(function() {

            var inputtext = {
                                "documents": [
                                    {
                                    "language": "en",
                                    "id": "1",
                                    "text": ""
                                    },
                                    {
                                    "language": "en",
                                    "id": "2",
                                    "text": ""
                                    },
                                    {
                                    "language": "en",
                                    "id": "3",
                                    "text": ""
                                    }
                                ]
                            }

            

            $( "#submit-text" ).click(function() {
                
                inputtext.documents[0].text = $("#inputtext").val();

                console.log(JSON.stringify(inputtext));

                $.ajax({
                method: "POST",
                url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
                headers: {"Ocp-Apim-Subscription-Key": "7eaf0a6c25f449a29581c1a86a536057"},
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(inputtext)
                })
                .done(function( msg ) {
                    $("#sentimentresponse").text("The sentiment of this speech is:" + msg.documents[0].score);
                });
            });
        });





