export default (newsList, id) => {
    // console.log(newsList);
    // console.log(id);
    id = parseInt(id);
    if (newsList && id !== undefined && id !== null){
        return newsList.filter((news) => {
            // console.log("news.source.id::" + news.source.id + "  Type::" + typeof news.source.id);
            // console.log("id::" + id + "  Type::" + typeof id);
            // console.log(news.source.id === id);
            const idMatch = news.source.id === id;
        
            return idMatch;
        });
    } else {
        return false;
    }   
  };