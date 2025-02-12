// function createcard(title, cname, views, monthsold, duration, thumbnail ){
//     // finish the function
// }

// // sample card
// createcard("Introduction to backend | Signma web dev video #2", "CodeWithHarry", 56000, 7, "31:32", "link")

// // need to use styles on the container

function createCard(title, cname, views, monthsold, duration, thumb){
    let viewnum
    if(views<1000000){
        viewnum = views/1000 + "K";
    }
    else if(views>1000000){
        viewnum = views/1000000 + "M";
    }
    else{
        viewnum = views/1000 + "K";
    }
    let html =  `<div class="card">
        <div class="image">
          <img
            src="${thumb}"
            alt=""
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cname} . ${viewnum} views . ${monthsold} Months ago</p>
        </div>
      </div>`

      document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000, 8, "24:12", "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw")