const getCourse=function (course={}){
    const defaultcourse ={
        courseName:"default name", courseDuation:"default duration",
courseOwner:"default owner"
    }
    Object.assign(defaultcourse,course);
    console.log(`courseName equal ${defaultcourse.courseName}, courseDuation equal ${defaultcourse.courseDuation}
 and courseOwner equal ${defaultcourse.courseOwner}.`)
}
getCourse();


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  
    return response.json();
})
.then(users => {
    createTabs(users);
})
.catch(error => {
    console.error('Error fetching users:', error);
});

function createTabs(users) {
    const tabsContainer = document.getElementById('userTabs');
    users.forEach(user => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = user.name;
        tab.dataset.userId = user.id;
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            fetchUserPosts(user.id);
        });
        tabsContainer.appendChild(tab);
    });
}


async function fetchUserPosts(userId) {
    const postsContainer = document.getElementById('userPosts');
    postsContainer.innerHTML = '<p>Loading posts...</p>';
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        postsContainer.innerHTML = '<p>Error loading posts.</p>';
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('userPosts');
    postsContainer.innerHTML = '';
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available for this user.</p>';
        return;
    }
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.textContent = post.title;
        postsContainer.appendChild(postDiv);
    });
}