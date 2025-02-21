// script.js

// Get all video elements
const videoGrid = document.querySelector('.video-grid');

// Get all category links
const allCategoryLink = document.getElementById('all-category');
const helenLink = document.getElementById('helen');
const studentsLink = document.getElementById('students');

// Define video directories
const videoDirectories = {
  'all-category': ['videos/helen', 'videos/students'],
  'helen': ['videos/helen'],
  'students': ['videos/students'],
};

// Function to populate video grid
function populateVideoGrid(category) {
  // Clear existing video grid
  videoGrid.innerHTML = '';

  // Get video files based on category
  const videoFiles = getVideoFiles(videoDirectories[category]);

  // Check if video files exist
  if (videoFiles.length === 0) {
    // Display a message if no videos are found
    const noVideosMessage = document.createElement('p');
    noVideosMessage.textContent = 'No videos found in this category.';
    videoGrid.appendChild(noVideosMessage);
    return;
  }

  // Populate video grid
  videoFiles.forEach((videoFile) => {
    const videoContainer = document.createElement('div');
    const video = document.createElement('video');
    const title = document.createElement('h3');

    video.src = videoFile.src;
    video.controls = true;
    title.textContent = videoFile.title;

    videoContainer.appendChild(video);
    videoContainer.appendChild(title);
    videoGrid.appendChild(videoContainer);
  });
}

// Function to get video files from directories
function getVideoFiles(directories) {
  const videoFiles = [];

  directories.forEach((directory) => {
    const files = getFiles(directory);

    files.forEach((file) => {
      if (file.endsWith('.mp4')) {
        const title = file.replace('.mp4', '');
        const src = `${directory}/${file}`;

        // Check if file exists
        if (fileExists(src)) {
          videoFiles.push({ title, src });
        }
      }
    });
  });

  return videoFiles;
}

// Function to get files from a directory
function getFiles(directory) {
  // This function assumes that the files are in the same directory as the HTML file
  // If the files are in a different directory, you'll need to adjust this function accordingly
  return [
    'wow body.mp4',
    'kibir letikur kula.mp4',
    'litbalik ethio.mp4',
    'helen emso.mp4',
    'wesibegn.mp4',
    'ethio sex.mp4',
    'ethio sex 2.mp4',
    'bidugn helen.mp4',
    'kite helen.mp4',
    'helen emso bidugn.mp4',
    'helen emse.mp4',
    'oromo sex.mp4',
    'emsen ishit.mp4',
    'bidit argegn.mp4',
    'fuck me.mp4',
    'ethio ladies.mp4',
    'bidugn.mp4',
    'online sex.mp4',
    'ethiopian.mp4',
    'imsam.mp4',
    'sex tarik.mp4',
    '4_5778473666035587804.mp4',
    '4_5796264537267118453.MP4',
    '4_5796315471284279481.MP4',
    '4_5801089658146264764.mp4',
    '4_5810100598317520663.mp4',
    '4_5818726580570035553.mp4',
    '4_5818726580570035556.mp4',
    '4_5818726580570035560.mp4',
    '4_5818726580570035561.mp4',
    '4_5818790296409874204.mp4',
    '4_5832181343013836969.mp4',
    '4_5832489511212291104.mp4',
    '4_5852950430467759477.mp4',
    '4_5852950430467759486.mp4',
    // Add more files as needed
  ];
}

// Function to check if a file exists
function fileExists(src) {
  const xhr = new XMLHttpRequest();
  xhr.open('HEAD', src, false);
  xhr.send();

  return xhr.status !== 404;
}

// Event listeners for category links
allCategoryLink.addEventListener('click', () => {
  populateVideoGrid('all-category');
});

helenLink.addEventListener('click', () => {
  populateVideoGrid('helen');
});

studentsLink.addEventListener('click', () => {
  populateVideoGrid('students');
});

// Populate video grid on page load
populateVideoGrid('all-category');