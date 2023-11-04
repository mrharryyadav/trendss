function extractTrendData() {
    const trendCards = document.querySelectorAll('.trend-card');
    const trendData = [];
  
    trendCards.forEach((card) => {
      const timestamp = card.querySelector('.trend-card__time').getAttribute('data-timestamp');
      const timeAgo = card.querySelector('.trend-card__time').textContent;
      const trends = [];
      
      const trendItems = card.querySelectorAll('.trend-card__list li');
      trendItems.forEach((item) => {
        const title = item.getAttribute('title');
        const hashtag = item.querySelector('a').textContent;
        const tweetCount = item.querySelector('.tweet-count');
  
        const trend = {
          title,
          hashtag,
          tweetCount: tweetCount ? tweetCount.textContent : null,
        };
  
        trends.push(trend);
      });
  
      const cardData = {
        timestamp,
        timeAgo,
        trends,
      };
  
      trendData.push(cardData);
    });
  
    return JSON.stringify(trendData, null, 2);
  }
  
  // Call the function to get the JSON data
  const jsonData = extractTrendData();
  console.log(jsonData);
  