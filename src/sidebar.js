

                          $(document).ready(function () {
                              $(".sub > a").click(function() {
                                var ul = $(this).next(),
                                    clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                                    height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
                                clone.remove();
                                ul.animate({"height":height});
                                return false;
                              });
                                   $('.mini-menu > ul > li > a').click(function(){
                                 $('.mini-menu > ul > li > a, .sub a').removeClass('active');
                                 $(this).addClass('active');
                              }),
                                 $('.sub ul li a').click(function(){
                                 $('.sub ul li a').removeClass('active');
                                 $(this).addClass('active');
                              });
                            });
