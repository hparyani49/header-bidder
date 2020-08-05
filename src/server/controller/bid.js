const ads = [{
    imageUrl: "https://pbs.twimg.com/media/Do0ScXNXsAELRhK.jpg",
    redirectTo: "https://www.twitter.com",
    cpi: 200
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSATXlSaUsUTj-TNkh_ktjGLSPy0hiz3qLVwg&usqp=CAU",
    redirectTo: "https://www.google.com",
    cpi: 300
},{
    imageUrl: "https://i.ytimg.com/vi/IFtknR7Ag1Q/maxresdefault.jpg",
    redirectTo: "https://www.netflix.com",
    cpi: 450
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiZpkn5JFba01allYV45i3zkdAIhC-Nr3m_A&usqp=CAU",
    redirectTo: "https://www.linkedin.com",
    cpi: 250
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRypgQMHnByq5RW2DGx-8RCg_yYO7MkMVfJcg&usqp=CAU",
    redirectTo: "https://www.flipkart.com",
    cpi: 421
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC0HPwa60oYKArzf1JzeZDTkfkvqFoF47F6g&usqp=CAU",
    redirectTo: "https://www.amazon.in",
    cpi: 120
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe25vOYxZKHuMW9Sr6bWP6N2KNSEk3UChyAQ&usqp=CAU",
    redirectTo: "https://www.facebook.com",
    cpi: 60
},{
    imageUrl: "https://image.slidesharecdn.com/abunchofrandomfactsaboutfacebookads-140130185304-phpapp02/95/a-bunch-of-random-facts-about-facebook-ads-3-638.jpg?cb=1391109308",
    redirectTo: "https://www.geekforgeeks.com",
    cpi: 100
},{
    imageUrl: "https://previews.123rf.com/images/christitze/christitze1612/christitze161215315/67689437-random-bronze-plaque-mounted-on-maple-wood-wall-3d-rendered-royalty-free-stock-picture-this-image-ca.jpg",
    redirectTo: "https://www.stackoverflow.com",
    cpi: 460
},{
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe25vOYxZKHuMW9Sr6bWP6N2KNSEk3UChyAQ&usqp=CAU",
    redirectTo: "https://www.youtube.com",
    cpi: 320
}]
module.exports={
    getBidFromBidder(req, res){
        const {bidderId, size} = req.query;
        try{
            const bidVal = ads[Math.floor(Math.random()*10)];
            let dimensions = size.split(',');
            let html = `<a href="${bidVal.redirectTo}" target="_blank"><img data-bidderId=${bidderId} src="${bidVal.imageUrl}" style="max-width:${dimensions[0]}px;max-height:${dimensions[1]}px;" /></a>`
            res.send({
                id: bidderId,
                html: html,
                cpi: bidVal.cpi
            })
        }catch(e){
            let html = `<a href="https://www.youtube.com" target="_blank"><img data-bidderId=${bidderId} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe25vOYxZKHuMW9Sr6bWP6N2KNSEk3UChyAQ&usqp=CAU" style="max-width:${dimensions[0]}px;max-height:${dimensions[1]}px;" /></a>`
            res.send({
                id: bidderId,
                html: html,
                cpi: bidVal.cpi
            })
        }
    }
}