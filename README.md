# FoodReviews — A Dynamic Food Review Platform

**FoodReviews** is an interactive platform where users can explore, review, and rate their favorite foods from various restaurants. Users can share their experiences, read others' reviews, and manage their own review profiles.

The platform includes dynamic reviews, a favorite system, authentication with Firebase, and a smooth user interface designed for responsiveness across all devices.

---
## 🔗 **Live **

* live:[https://local-food-lovers-networks.netlify.app/](#)


---

## 🌐 **Main Features**

* **Hero Section**: A dynamic slider showcasing food-related banners and CTA buttons.
* **Featured Reviews**: Display top-rated reviews with details of food, restaurant, location, and reviewer.
* **Dynamic Sections**: Customizable sections that match the purpose of the website.
* **User Authentication**: Firebase authentication via Email/Password and Google.
* **Review System**: Users can add, edit, delete, and view reviews.
* **Favorites System**: Users can mark reviews as favorites and view them on a separate page.
* **CRUD Operations**: Reviews are stored in MongoDB and can be managed by the user.
* **Responsive Design**: Mobile, tablet, and desktop views supported.

---

## 📝 **Features and Sections**

### **1. Navbar**

* Logo or website name.
* Links to other pages (Home, Reviews, etc.).
* **Login/Register** button. If the user is logged in, their profile image will appear, with a dropdown offering:

  * Add Review
  * My Reviews
  * Logout

### **2. Footer**

* Standard footer with website name/logo.
* Links to other pages and social media icons.

### **3. Homepage Hero Section**

* **Dynamic Food Banner**: Display food-related images and text with optional CTA buttons.

### **4. Featured Reviews**

* **Top 6 Reviews**: Display the most recent reviews with:

  * Food Name
  * Restaurant Name and Location
  * Reviewer Name & Rating
  * View Details button to see full review.
  * Show All button to navigate to All Reviews page.

### **5. Additional Sections**

* Create two additional static or dynamic sections, such as food blogs, tips, or new restaurant highlights.

---

## 🔑 **Authentication**

### **1. Register Page**

* **Fields**: Name, Email, Photo URL, Password, Confirm Password
* **Password Requirements**: Must include uppercase, lowercase, and be at least 6 characters.
* Success/Failure toast messages.
* **Google Login**: Use Firebase for Google authentication.

### **2. Login Page**

* **Fields**: Email and Password
* On success, navigate to the home page or intended route.
* On failure, display a toast message.
* **Google Login**: Add a "Continue with Google" button.

---

## 🧠 **Core Functionality (CRUD)**

### **1. Add Review (Protected)**

* Form for users to submit reviews including:

  * Food Name
  * Food Image
  * Restaurant Name
  * Location
  * Rating (Star)
  * Review Text
* Data is sent to MongoDB along with the current user’s email and submission date.

### **2. All Reviews (Public)**

* Display all user-submitted reviews sorted by the most recent.
* Users can view reviews with food and restaurant details.

### **3. My Reviews (Protected)**

* **Tabular Layout**: Display reviews submitted by the logged-in user with:

  * Food Image
  * Food Name
  * Restaurant Name
  * Posted Date
  * Edit and Delete buttons.
* **Delete**: Show a modal with Confirm and Cancel buttons.
* **Edit**: Redirect to an edit form with pre-filled review details.

---

## 💡 **Additional Features**

### **1. Loading Indicators**

* Display a **loading spinner** or **skeleton loader** when fetching data.

### **2. Error Pages**

* Display a **404 Error Page** with a fun image and a "Back to Home" button.

### **3. Clean & Unique UI Design**

* Focus on a food-related aesthetic with easy readability and visually appealing design.

---

## 💪 **Challenge Requirement: Favorite System**

### **1. Favorites**

* On the **All Reviews page**, add a **Heart button** to mark reviews as favorites.
* **Favorites Collection**: Store favorite reviews in a separate MongoDB collection for the logged-in user.

### **2. My Favorites Page**

* Display a list of the user's favorite reviews in either:

  * **Tabular format** or **Card format**, depending on your design preference.

### **3. User Profile Dropdown**

* Add "My Favorites" to the user profile dropdown for quick access.

---

## 🛠 **Tech Stack**

* **Frontend**: React.js, Tailwind CSS, Firebase Authentication
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: Firebase (Email/Password + Google)
* **Deployment**: Heroku/Netlify (Frontend)

---

## 🧑‍🎤 **Author**

**Md Shibli Ahmed**

* Email: [shibliahmed444@gmail.com](mailto:shibliahmed444@gmail.com)
* GitHub: [shibli790](https://github.com/shibli790)


