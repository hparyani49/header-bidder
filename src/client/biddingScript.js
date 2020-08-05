(function () {
  const _SITEIDS = ['placementid_100', 'placementid_101'];
  const _BIDDERS = [1, 2, 3, 4, 5];
  var bids = [];
  const getBid = (bidderId) => {
    fetch(`http://18.219.5.251/api/getBids?bidderId=${bidderId}&size=400,100`)
      .then(res => {
        if (res) {
          return res.json()
        } else {
          return {};
        }
      })
      .then(finalRes => bids.push(finalRes))
  }
  _BIDDERS.forEach((val) => {
    getBid(val);
  });

  //After a certain time, the result from all the bidders will be analysed.
  //If some bidder is taking long, we can ignore the request or if the bidder might
  //be high paying, we can increase the timeout
  setTimeout(() => {
    let adPlaced = 0, highest = secondHighest = { cpi: 0 };
    let finalArr = [...bids];
    for (let i = 0; i < finalArr.length; i++) {
      if (Number(finalArr[i].cpi) > Number(highest.cpi)) {
        secondHighest = highest;
        highest = finalArr[i];
      } else if (Number(finalArr[i].cpi) > Number(secondHighest.cpi) && Number(finalArr[i].cpi) != Number(highest.cpi)) {
        secondHighest = finalArr[i];
      }
    }
    while (adPlaced < _SITEIDS.length) {
      if (finalArr[adPlaced]) {
        var element = document.getElementById(_SITEIDS[adPlaced]);
        element.innerHTML = [highest, secondHighest][adPlaced].html;
        element.onclick = (e) => {
          let bidderId = e.target.dataset.bidderid;
          var oldCount = window.localStorage.getItem(bidderId) || 0;
          window.localStorage.setItem(bidderId, ++oldCount); //maintaining the click count in localstorage
        }
        adPlaced++;
      } else {
        break;
      }
    }
  }, 500);
})()