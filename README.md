To Run Front: npm i => npm run dev
To Run Back: npm i => npm run start

environment variables: PORT = 3000, PIXABAY_API="https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736"


Things i wasnt sure when you say:

1. Before the App.js render you need to make a server call to the URL:

I wasn't sure if you wanted me to fetch the photos from the server before rendering App.js in main.tsx or if you preferred using useEffect. I know that React doesn't recommend making requests before rendering, so I assumed you wanted me to use useEffect. I do know a way to achieve this using Next.js with server-side rendering, and I also found a way to do it with Redux Thunk.

2. Sorting function on the images by id or date.

You mentioned sorting the images by their ID, but you didn't specify how the user would interact with this API route. As a solution, I added a button that retrieves the images sorted by ID and renders them on the screen. Additionally, I included a console.log to display the sorted images in the browser's dev tools console. However, I wanted to note that some API providers offer query parameters that allow users to specify the sorting order, but I assumed you wanted me to implement the sorting logic myself, so that's what I did.

Project Structure:
Front End:

components:
     
    PhotoGrid: This component is responsible for displaying the photos in a 3x3 grid format and handling the functionality of the previous and next buttons.
            
    PhotoInformationModal: This component is responsible for displaying a modal when a photo is clicked. It shows detailed information about the specific photo that was clicked.
            
    SelectType: This component is responsible for displaying a modal when the "Select Photo Type" button is clicked. It allows the user to choose a specific photo type, and based on the selection, it updates the  
    state of the photos accordingly.


