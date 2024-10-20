// Homepage
function showHome() {
    const content = document.getElementById('content');
    content.className = 'home-content';
    content.innerHTML = `
        <h1 class="home">Welcome to Mami Market</h1><br><br>
        <p>Your One-Stop Shop for Fresh Groceries and Delicious Food Items.</p><br>
        <p>At Mami Market, we believe in bringing the freshest and finest quality groceries and food items directly to your doorstep. Whether you're looking for farm-<br><br>fresh produce, pantry staples, or ready-to-eat meals, Mami Market has got you covered.</p><br><br>
        <h2>Why Shop with Us?</h2><br>
        <p><b>1. Freshness Guaranteed:</b><br><br>We source our products from trusted local farmers and suppliers to ensure that you receive only the freshest items. Our rigorous quality control processes mean that every product you purchase meets the highest standards of quality and taste.</p><br>
        <p><b>2. Wide Variety of Products:</b><br><br>From fresh fruits and vegetables to dairy products, meats, and bakery items, our extensive selection ensures you find everything you need. We also offer a variety of organic and specialty products to cater to all your dietary needs and preferences.</p><br>
        <p><b>3. Convenient Shopping Experience:</b><br><br>Our user-friendly app makes shopping for groceries a breeze. With easy navigation and a seamless checkout process, you can quickly find what you're looking for and place your order in just a few clicks.</p><br>
        <p><b>4. Fast and Reliable Delivery:</b><br><br>We understand that your time is valuable. That’s why we offer fast and reliable delivery services, ensuring that your order reaches you on time and in perfect condition. Choose from a variety of delivery slots to fit your schedule.</p><br>
        <p><b>5. Excellent Customer Service:</b><br><br>Our dedicated customer service team is here to assist you with any questions or concerns you may have. We are committed to providing you with a positive shopping experience, from start to finish.</p><br>
        <h2>Featured Products</h2><br>
        <p><b>Fresh Fruits & Vegetables:</b> Handpicked daily to ensure the highest quality.</p><br>
        <p><b>Dairy & Eggs:</b> Sourced from the best farms for a rich and wholesome taste.</p><br>
        <p><b>Meats & Seafood:</b> Fresh, tender, and perfect for any meal.</p><br>
        <p><b>Bakery Items:</b> Enjoy our selection of freshly baked bread, cakes, and pastries.</p><br>
        <p><b>Pantry Staples:</b> Stock up on grains, spices, and everything you need for your kitchen.</p><br>
    `;
}
// function to display the home page
document.getElementById('home').addEventListener('click', () => {
    showHome()
});


function showAbout() {
    const content = document.getElementById('content');
    content.className = 'about-content';
    content.innerHTML = `
        <h1 class="abt">About Us</h1><br><br>
        <p>Mami Market is committed to providing the freshest groceries and food items directly to your home.<br><br> Our mission is to ensure a convenient and enjoyable shopping experience for all our customers.</p>`;
}
document.getElementById('about').addEventListener('click', () => {
    showAbout()
});

function showSignUp() {
    const content = document.getElementById('content');
    content.className = 'signup-content';
    content.innerHTML = `
        <h1 class="sign">Sign Up</h1><br>
        <form id="myForm" onsubmit="submit_handler(event)">
            <label for="Name">Name:</label>
            <input type="text" id="Name" name="name">
            <span id="nameError" class="error"></span><br><br>
            
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="email">
            <span id="emailError" class="error"></span><br><br>
            
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="password">
            <span id="passwordError" class="error"></span><br><br>
            
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword"><br>
            <span id="confirmPasswordError" class="error"></span><br><br>
            
            Do you want receive emails on our latest products?  
            <input type="radio" name="upd" id="update" value="yes" onclick="Update()">
            <label for="update">Yes</label>
            <input type="radio" name="upd" id="update1" value="no">
            <label for="update">No</label><br><br><br>
            
            <button type="submit" id="but">Register</button>
        </form>
    `;
}

function Update() {
    const content = document.getElementById('update');
    content.style.color = 'blue'
}

// resets the form field after submission
function reset_field(elem) { 
    elem.textContent = ' ';
}
//form validation
function check_field(field_name, error_name) {
    let field_text = document.getElementById(field_name).value;
    let err_string = '';
    let is_ok = true;

    if (field_text.trim().length == 0) {
        err_string = field_name + ' is required';
        is_ok = false;
    }
    
    document.getElementById(error_name).textContent = err_string;
    return is_ok;
}

function check_password_match() {
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    }
    
    confirmPasswordError.textContent = '';
    return true;
}

function submit_handler(event) {
    event.preventDefault();

    reset_field(document.getElementById('nameError'));
    reset_field(document.getElementById('emailError'));
    reset_field(document.getElementById('passwordError'));
    reset_field(document.getElementById('confirmPasswordError'));

    let is_ok = true;
    is_ok &= check_field("Name", "nameError");
    is_ok &= check_field("Email", "emailError");
    is_ok &= check_field("Password", "passwordError");
    is_ok &= check_password_match();

    if (is_ok) {
        alert("Form submitted successfully");
        // Form can be submitted here if needed
    }
}
document.getElementById('btn').addEventListener('click', () => {
    showSignUp()
});
// contact us page
function showContactUs() {
    const content = document.getElementById('content');
    content.className = 'contactus-content';
    content.innerHTML = `
    <h3 class="contact">Contact Us:</h3><br>
    <p>Have questions or need assistance? Our friendly support team is here to help.<br> Contact us at support@mami-market.com or call us at 123-456-7890.</p><br>
    <hr> <br>
    <h2>Join the Mami Market Community</h2><br>
    <p>Stay updated with the latest offers, new arrivals, and healthy recipes by joining our newsletter. Follow us on social media for exclusive deals and tips on making the most out of your groceries.</p><br>
    <p><a href="#" id="dwnld">Download the Mami Market App Today!</a></p><br>
    <p>Experience the convenience of shopping for your groceries online. Download our app from the App Store or Google Play and start your journey towards a healthier, hassle-free lifestyle.</p><br>
    <p>We look forward to serving you and making your grocery shopping experience delightful and convenient.</p><br><hr><br>
    `
}
document.getElementById('contact').addEventListener('click', () => {
    showContactUs()
});
// Products page
function showOurProducts() {
    const content = document.getElementById('content');
    content.className = 'products-content';
    content.innerHTML = `
    <div id="cont">
        <h2 class="op">Our Products</h2>
        <div id="fresh">
            <h3>Fresh Fruits & Vegetables</h3>
            <img src="./asset/f4.1.png" alt="mg"><br><br>
        </div>

        <div id="images">
            <h3>Dairy & Eggs</h3><br>
            <img src="./asset/f5.png" alt="img">
        </div>

        <div id="images">
            <h3>Meats & Seafood</h3>
            <img src="./asset/f6.png" alt="img">
        </div>
        <div id="images">
            <h3>Bakery Items</h3>
            <img src="./asset/f7.png" alt="img">
        </div>
        <div id="images">
            <h3>Pantry Staples</h3>
            <img src="./asset/f8.png" alt="img">
        </div>

    </div>
    `
}
document.getElementById('ourproducts').addEventListener('click', () => {
    showOurProducts()
});

