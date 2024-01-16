
function getid(url) {
    // Regular expression to match YouTube video URL or embed code
    const regex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Test the URL against the regex
    const match = url.match(regex);

    // If a match is found, return the video ID (captured in the first capturing group)
    if (match) {
        return match[1];
    } else {
        // If no match is found, return null or handle the error accordingly
        return null;
    }
}
function generate(){
  let input = document.getElementById('url').value
let url = getid(input)
  console.log('hi'+input)
  console.log(url)
  document.getElementById('output').style.display = "block"
document.getElementById('output').value='https://clipit.ambersys.app/v/?'+url
  }