   document.addEventListener("DOMContentLoaded", () => {
       const hamburger = document.querySelector(".hamburger");
       const sidebar = document.getElementById("sidebar");

       hamburger.addEventListener("click", () => {
           sidebar.classList.toggle("active"); // Toggle the "active" class
       });

       const closeBtn = document.querySelector(".close-btn");
       closeBtn.addEventListener("click", () => {
           sidebar.classList.remove("active"); // Remove the "active" class
       });
   });

  document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector('.search-icon');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeOverlayBtn = document.querySelector('.close-overlay');

  // Show overlay on icon click
  searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active');
  });

  // Hide overlay on close button click
  closeOverlayBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
  });
});
  const searchIcon = document.querySelector('.search-icon');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeBtn = document.querySelector('.close-overlay');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const buttons = document.querySelectorAll('.Tags button');

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const buttons = document.querySelectorAll('.Tags button');
  const imageLinks = document.querySelectorAll('a[data-post]');


  const forumPosts = {
    creatives: `   
      <article class="forum-post">
        <h3>Exploring Vincentia's Hidden Gems</h3>
        <p>Has anyone discovered any art places in Vincentia? My friends and I are beginners and looking for new experiences</p>
        <span class="post-meta">Posted by User123 on June 10, 2024</span>

        <div class="comments-section">
          <h4>Comments</h4>
          <ul>
            <li><strong>User456:</strong> I want to try a cool artwork that looks like the beach.</li>
            <li><strong>TravelerX:</strong> I'm thinking of teaching again, I'll send our newsletter out soon.</li>
          </ul>
          <form class="comment-form">
            <label for="comment-input">Add Comment:</label>
            <textarea id="comment-input" placeholder="Write your comment here..." required></textarea>
            <button type="submit">Post Comment</button>
          </form>

        </div>
      </article>`,
    campaign: `
      <article class="forum-post">
        <h3>Vincentia Cadets</h3>
        <p>I want to join the Vincentia Cadets, they have been really proactive in saving the ocean through ocean clean-ups, I can't seem to find where to get in touch with them though!</p>
        <span class="post-meta">Posted by User123 on June 10, 2024</span>

        <div class="comments-section">
          <h4>Comments</h4>
          <ul>
            <li><strong>VincentiaCadets:</strong> No problem, we will get a flier ready by 7th Dec.</li>
            <li><strong>TravelerX:</strong> Ooo, I want to join too, I'd love to put it in my resume and enjoy Vincentia too</li>
          </ul>
          <form class="comment-form">
            <label for="comment-input">Add Comment:</label>
            <textarea id="comment-input" placeholder="Write your comment here..." required></textarea>
            <button type="submit">Post Comment</button>
          </form>

        </div>
      </article>`,
    environment:       
      `<article class="forum-post">
        <h3>White sand beaches, everything is beautiful!</h3>
        <p>The white sands are so beautiful!! Post here a collage of the 100 beaches challenge!</p>
        <span class="post-meta">Posted by Booderee on November 9, 2025</span>

        <div class="comments-section">
          <h4>Comments</h4>
          <ul>
            <li><strong>RedRuby:</strong> What a cool idea!</li>
          </ul>
          <form class="comment-form">
            <label for="comment-input">Add Comment:</label>
            <textarea id="comment-input" placeholder="Write your comment here..." required></textarea>
            <button type="submit">Post Comment</button>
          </form>

        </div>
      </article>`,
    indigenous: 
    `<article class="forum-post">
        <h3>Upcoming Smoke Ceremony</h3>
        <p>Booderee Indigenous Park is holding and Aboriginal Smoking Ceremony on 29th Novemeber, All are welcome to join, meet by the kids playground.</p>
        <span class="post-meta">Posted by User123 on June 10, 2024</span>

        <div class="comments-section">
          <h4>Comments</h4>
          <ul>
            <li><strong>Hello123:</strong> Will be there!</li>
            <li><strong>JaneGibson:</strong>I've never been to one! Is there anything I should do to prepare, like specific clothes?</li>
          </ul>
          <form class="comment-form">
            <label for="comment-input">Add Comment:</label>
            <textarea id="comment-input" placeholder="Write your comment here..." required></textarea>
            <button type="submit">Post Comment</button>
          </form>

        </div>
      </article>`,
      Addpost: `
        <form class="add-post-form">
        <h3>Add New Post</h3>
        <label for="new-title">Title:</label>
        <input type="text" id="new-title" required>
        <label for="new-content">Content:</label>
        <textarea id="new-content" required></textarea>
        <button type="submit">Submit Post</button>
        </form> `
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const postKey = button.getAttribute('data-post');
      if (forumPosts[postKey]) {
        modalBody.innerHTML = forumPosts[postKey];
        modalOverlay.classList.remove('hidden');
      }
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    modalBody.innerHTML = '';
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
      modalBody.innerHTML = '';
    }
  });
  

  // Button clicks
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const postKey = button.getAttribute('data-post');
      if (forumPosts[postKey]) {
        modalBody.innerHTML = forumPosts[postKey];
        modalOverlay.classList.remove('hidden');
      }
    });
  });

  // Image clicks
  imageLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const postKey = link.getAttribute('data-post');
      if (forumPosts[postKey]) {
        modalBody.innerHTML = forumPosts[postKey];
        modalOverlay.classList.remove('hidden');
      }
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    modalBody.innerHTML = '';
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
      modalBody.innerHTML = '';
    }
  
  });
  
});


