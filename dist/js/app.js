
function showBalance(acc){
  if(acc) alert(numeral(acc.balance).divide(1e18).format("0,0.00")+ " ETH");
}

(function(){

  var accounts = null;
  var $checkForm = $("#ether-checker");

  $checkForm.submit(function(e){
    e.preventDefault();
    var addr = $checkForm.find("input[name=address]").val();
    if(!addr) return;
    if (addr.slice(0,2) == "0x"){
      addr = addr.slice(2)
    }
    addr = addr.toLowerCase();
    if (accounts == null){
      $.getJSON( "/images/mainnet.json", function( data ) {
        accounts = data.alloc;
        showBalance(accounts[addr]);
      });
    }else{
      showBalance(accounts[addr]);
    }

  });
})()
;$(document).ready(function() {
    $('.home-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    animate();

    $(document).on("mousewheel", function() {
        animate();
    });

    function animate() {
        var structure = $('#structure');
        var offset = $(document).scrollTop();
        var offsetStructure = structure[0].offsetTop * 0.7;

        if (offset > offsetStructure) {
            structure.find('.title').addClass('show');
            structure.find('.description').addClass('show');
        } else {
            structure.find('.title').removeClass('show');
            structure.find('.description').removeClass('show');
        }

        if (offset > offsetStructure * 1.4) {
            structure.find('img').addClass('show');
        } else {
            structure.find('img').removeClass('show');
        }

        var projects = $('#projects');
        var offsetProjects = projects[0].offsetTop * 0.8;

        if (offset > offsetProjects) {
            projects.find('.title').addClass('show');
        } else {
            projects.find('.title').removeClass('show');
        }

        if (offset > offsetProjects * 1.1) {
            projects.find('.row:first-child .col-md-6').addClass('show');
        } else {
            projects.find('.row:first-child .col-md-6').removeClass('show');
        }

        if (offset > offsetProjects * 1.25) {
            projects.find('.row:last-child .col-md-6').addClass('show');
        } else {
            projects.find('.row:last-child .col-md-6').removeClass('show');
        }
    }
});

