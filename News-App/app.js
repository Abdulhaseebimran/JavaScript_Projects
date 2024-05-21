// News App using newsdata.io API

const searchBtn = document.getElementById("search-btn");
const newsContainer = document.getElementById("newsContainer");
const searchNews = document.getElementById("searchNews");


const fetchAndDisplayNews = (query) => {
  fetch(
    `https://newsdata.io/api/1/latest?apikey=pub_44571d0af5d0687e5f0339698664f01022947&q=${query}&language=en`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Data:", data);
      if (data.results && data.results.length > 0) {
        searchNews.innerHTML = `Showing results for "${query}"`;
        displayNewsCards(data.results);
      } else {
        searchNews.innerHTML = `No results found for "${query}"`;
        newsContainer.innerHTML = ""; 
      }
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      searchNews.innerHTML = `Error: Unable to fetch news`;
      newsContainer.innerHTML = ""; 
    });
};


const displayNewsCards = (newsArray) => {
  newsContainer.innerHTML = "";
  newsArray.forEach((newsItem) => {
    const title = newsItem.title || "Title not available";
    const description = newsItem.description || "Description not available";
    const image = newsItem.image_url || "./images/news_images.jpeg";
    const sourceUrl = newsItem.source_url || "#";
    const trunateDescription =
      description.length > 100
        ? `${description.substring(0, 100)}...`
        : description;
    const truncateTitle =
      title.length > 50 ? `${title.substring(0, 50)}...` : title;

    newsContainer.innerHTML += `0
    <div class="card position-relative">
    <img src="${image}" class="card-img-top" alt="${truncateTitle}">
    <div class="card-body">
      <h5 class="card-title">${truncateTitle}</h5>
      <p class="card-text">${trunateDescription}</p>
      <a href="${sourceUrl}" class="btn btn-primary" target="_blank">Visit Website</a>
    </div>
  </div>`;
  });
};

searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput.trim() !== "") {
    fetchAndDisplayNews(searchInput);
  } else {
    alert("Please enter a search query");
  }
});


fetchAndDisplayNews("pakistan");
