// function createcard(title, cname, views, monthsold, duration, thumbnail ){
//     // finish the function
// }

// // sample card
// createcard("Introduction to backend | Signma web dev video #2", "CodeWithHarry", 56000, 7, "31:32", "link")

// // need to use styles on the container

function createcard(title, cname, views, monthsold, duration, thumbnail) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create and append thumbnail
    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = title;
    card.appendChild(img);

    // Create and append title
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    // Create and append channel name
    const channelName = document.createElement('p');
    channelName.textContent = `Channel: ${cname}`;
    card.appendChild(channelName);

    // Create and append views
    const viewCount = document.createElement('p');
    viewCount.textContent = `Views: ${views}`;
    card.appendChild(viewCount);

    // Create and append months old
    const age = document.createElement('p');
    age.textContent = `Months Old: ${monthsold}`;
    card.appendChild(age);

    // Create and append duration
    const videoDuration = document.createElement('p');
    videoDuration.textContent = `Duration: ${duration}`;
    card.appendChild(videoDuration);

    // Append card to container
    document.querySelector('.container').appendChild(card);
}

// Sample card
createcard("Introduction to backend | Signma web dev video #2", "CodeWithHarry", 56000, 7, "31:32", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");