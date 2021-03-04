var $iconUK = $('#icon-uk');
var $iconCoins = $('#icon-coins');
var $iconPlot = $('#icon-plot');
var $allotFruit = $('#allot-fruit');
var $bush = $('#bush');
var $bushList = $('#bush-list');
var $rhubarb = $('.rhubarb');
var $raspberry = $('.raspberry');
var $strawberry = $('.strawberry');
var $pear = $('.pear');
var $blkcurrants = $('.blkcurrants');
var $gooseberry = $('.gooseberry');
var $cherry = $('.cherry');
var $blueberry = $('.blueberry');
var $apple = $('.apple');
var $blkberry = $('.blkberry');
var $plums = $('.plums');
var $none = $('.none');
var $animalsAllowed = $('#animals-allowed');
var $aniAllP = $('#animals-allowed-p');
var $iconHen = $('#icon-hen');
var $egg1 = $('#egg1');
var $egg2 = $('#egg2');
var $egg3 = $('#egg3');
var $egg4 = $('#egg4');
var $egg5 = $('#egg5');
var $iconRooster = $('#icon-rooster');
var $notAllowed =$('.not-allowed');
var $iconPig = $('#icon-pig');
var $pigEar = $('.pig-ear');
var $iconBee = $('#icon-beehive');
var $honey = $('.honey-drip');
var $iconRabbit = $('#icon-rabbit');
var $rabbitEar = $('.rabbit-ear');
var $iconHaz = $('#icon-hazard');
var $excalamtion = $('.excalamtion');
var $waitlist = $('#waitlist');
var $waitlistP1 = $('#waitlist-p1');
var $waitlistP2 = $('#waitlist-p2');
var $waitlistP3 = $('#waitlist-p3');
var $graph = $('#graph');
var $allPop = $('#all-pop');
var $pop1 = $('#pop1');
var $pop2 = $('#pop2');
var $pop3 = $('#pop3');
var $pop4 = $('#pop4');
var $benefits = $('#benefits');
var $benef1 = $('#benef1');
var $benef2 = $('#benef2');
var $benef3 = $('#benef3');
var $benef4 = $('#benef4');
var $benef5 = $('#benef5');
var $benef6 = $('#benef6');

$iconUK.waypoint(function (direction) {
  if (direction == 'down') {
    $iconUK.addClass('pop_in');
  } else {
    $iconUK.removeClass('pop_in');
  }
}, { offset: '70%' });

$iconCoins.waypoint(function (direction) {
  if (direction == 'down') {
    $iconCoins.addClass('pop_in');
  } else {
    $iconCoins.removeClass('pop_in');
  }
}, { offset: '70%' });

$iconPlot.waypoint(function (direction) {
  if (direction == 'down') {
    $iconPlot.addClass('pop_in');
  } else {
    $iconPlot.removeClass('pop_in');
  }
}, { offset: '70%' });

$allotFruit.waypoint(function (direction) {
  if (direction == 'down') {
    $allotFruit.addClass('visible');
  } else {
    $allotFruit.removeClass('visible');
  }
}, { offset: '70%' });

$bush.waypoint(function (direction) {
  if (direction == 'down') {
    $bush.addClass('pop_in');

    $rhubarb.delay(300).queue(function () {
      $(this).addClass('rhubarb_in').dequeue();
    });

    $raspberry.delay(2000).queue(function () {
      $(this).addClass('raspberry_in').dequeue();
    });

    $strawberry.delay(1400).queue(function () {
      $(this).addClass('strawberry_in').dequeue();
    });

    $pear.delay(2200).queue(function () {
      $(this).addClass('pear_in').dequeue();
    });

    $blkcurrants.delay(400).queue(function () {
      $(this).addClass('blkcurrants_in').dequeue();
    });

    $gooseberry.delay(1600).queue(function () {
      $(this).addClass('gooseberry_in').dequeue();
    });

    $cherry.delay(600).queue(function () {
      $(this).addClass('cherry_in').dequeue();
    });

    $blueberry.delay(1000).queue(function () {
      $(this).addClass('blueberry_in').dequeue();
    });

    $apple.delay(2400).queue(function () {
      $(this).addClass('apple_in').dequeue();
    });

    $blkberry.delay(1200).queue(function () {
      $(this).addClass('blkberry_in').dequeue();
    });

    $plums.delay(800).queue(function () {
      $(this).addClass('plums_in').dequeue();
    });

    $none.delay(1800).queue(function () {
      $(this).addClass('none_in').dequeue();
    });
  } else {
    $bush.removeClass('pop_in');
    $rhubarb.removeClass('rhubarb_in');
    $raspberry.removeClass('raspberry_in');
    $strawberry.removeClass('strawberry_in');
    $pear.removeClass('pear_in');
    $blkcurrants.removeClass('blkcurrants_in');
    $gooseberry.removeClass('gooseberry_in');
    $cherry.removeClass('cherry_in');
    $blueberry.removeClass('blueberry_in');
    $apple.removeClass('apple_in');
    $blkberry.removeClass('blkberry_in');
    $plums.removeClass('plums_in');
    $none.removeClass('none_in');
  }
}, { offset: '70%' });

$animalsAllowed.waypoint(function (direction) {
  if (direction == 'down') {
    $animalsAllowed.addClass('visible');

    $aniAllP.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });
  } else {
    $animalsAllowed.removeClass('visible');
    $aniAllP.removeClass('visible');
  }
}, { offset: '70%' });

$iconHen.waypoint(function (direction) {
  if (direction == 'down') {
    $iconHen.addClass('visible');

    $egg1.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });

    $egg2.delay(400).queue(function () {
      $(this).addClass('visible').dequeue();
    });

    $egg3.delay(500).queue(function () {
      $(this).addClass('visible').dequeue();
    });

    $egg4.delay(600).queue(function () {
      $(this).addClass('visible').dequeue();
    });

    $egg5.delay(700).queue(function () {
      $(this).addClass('visible').dequeue();
    });
  } else {
    $iconHen.removeClass('visible');
    $egg1.removeClass('visible');
    $egg2.removeClass('visible');
    $egg3.removeClass('visible');
    $egg4.removeClass('visible');
    $egg5.removeClass('visible');
  }
}, { offset: '70%' });

$iconRooster.waypoint(function (direction) {
  if (direction == 'down') {
    $iconRooster.addClass('visible');

    $notAllowed.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });
  } else {
    $iconRooster.removeClass('visible');
    $notAllowed.removeClass('visible');
  }
}, { offset: '70%' });

$iconPig.waypoint(function (direction) {
  if (direction == 'down') {
    $iconPig.addClass('visible');

    $pigEar.delay(200).queue(function () {
      $(this).addClass('ear-wiggle').dequeue();
    });
  } else {
    $iconPig.removeClass('visible');
    $pigEar.removeClass('ear-wiggle');
  }
}, { offset: '70%' });

$iconBee.waypoint(function (direction) {
  if (direction == 'down') {
    $iconBee.addClass('visible');

    $honey.delay(300).queue(function () {
      $(this).addClass('drip').dequeue();
    });
  } else {
    $iconBee.removeClass('visible');
    $honey.removeClass('drip');
  }
}, { offset: '70%' });

$iconRabbit.waypoint(function (direction) {
  if (direction == 'down') {
    $iconRabbit.addClass('visible');

    $rabbitEar.delay(200).queue(function () {
      $(this).addClass('ear-wiggle').dequeue();
    });
  } else {
    $iconRabbit.removeClass('visible');
    $rabbitEar.removeClass('ear-wiggle');
  }
}, { offset: '70%' });

$iconHaz.waypoint(function (direction) {
  if (direction == 'down') {
    $iconHaz.addClass('visible');

    $excalamtion.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });
  } else {
    $iconHaz.removeClass('visible');
    $excalamtion.removeClass('visible');
  }
}, { offset: '70%' });

$waitlist.waypoint(function (direction) {
  if (direction == 'down') {
    $waitlist.addClass('visible');

    $waitlistP1.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });
    $waitlistP2.delay(300).queue(function () {
      $(this).addClass('visible').dequeue();
    });
  } else {
    $waitlist.removeClass('visible');
    $waitlistP1.removeClass('visible');
    $waitlistP2.removeClass('visible');
  }
}, { offset: '70%' });

$graph.waypoint(function (direction) {
  if (direction == 'down') {
    $graph.addClass('pop_in');
    $waitlistP3.addClass('visible');
  } else {
    $graph.removeClass('pop_in');
    $waitlistP3.removeClass('visible');
  }
}, { offset: '50%' });

$allPop.waypoint(function (direction) {
  if (direction == 'down') {
    $allPop.addClass('visible');

    $pop1.delay(200).queue(function () {
      $(this).addClass('pop_in').dequeue();
    });

    $pop2.delay(300).queue(function () {
      $(this).addClass('pop_in').dequeue();
    });

    $pop3.delay(400).queue(function () {
      $(this).addClass('pop_in').dequeue();
    });

    $pop4.delay(500).queue(function () {
      $(this).addClass('pop_in').dequeue();
    });
  } else {
    $allPop.removeClass('visible');
    $pop1.removeClass('pop_in');
    $pop2.removeClass('pop_in');
    $pop3.removeClass('pop_in');
    $pop4.removeClass('pop_in');
  }
}, { offset: '70%' });

$benefits.waypoint(function (direction) {
  if (direction == 'down') {
    $benefits.addClass('visible');
  } else {
    $benefits.removeClass('visible');
  }
}, { offset: '70%' });

$benef1.waypoint(function (direction) {
  if (direction == 'down') {
    $benef1.addClass('pop_in');
  } else {
    $benef1.removeClass('pop_in');
  }
}, { offset: '70%' });

$benef2.waypoint(function (direction) {
  if (direction == 'down') {
    $benef2.addClass('pop_in');
  } else {
    $benef2.removeClass('pop_in');
  }
}, { offset: '70%' });

$benef3.waypoint(function (direction) {
  if (direction == 'down') {
    $benef3.addClass('pop_in');
  } else {
    $benef3.removeClass('pop_in');
  }
}, { offset: '70%' });

$benef4.waypoint(function (direction) {
  if (direction == 'down') {
    $benef4.addClass('pop_in');
  } else {
    $benef4.removeClass('pop_in');
  }
}, { offset: '70%' });

$benef5.waypoint(function (direction) {
  if (direction == 'down') {
    $benef5.addClass('pop_in');
  } else {
    $benef5.removeClass('pop_in');
  }
}, { offset: '70%' });

$benef6.waypoint(function (direction) {
  if (direction == 'down') {
    $benef6.addClass('pop_in');
  } else {
    $benef6.removeClass('pop_in');
  }
}, { offset: '70%' });
