# ProShop - A full-fledged eCommerce Website built with the MERN stack & Redux.
# Please click 
## features
1. integrated PayPal API to facilitate and secure the checkout process
2. A product review and rating system
3. Admin mode that can manage users, products and orders
4. Product pagination & search feature


##layout
### register/Profile page
1. show all the details of users and their orders

### Home page
1. Navbar includes: search space, cart link, sign-in link
2. carousel where shows the top rated products
3. show the latest products

### product page
1. detail information about the product
2. cart area: can select the quantity of product and add to cart
3. review area: show the latest reviews; can upload your own review after sign-in


### Cart page
1. show all the products you added in the shopping cart (still available to modify)
2. a link to checkout

### checkout 
1. it includes 4 steps: Sign in - Shipping - Payment - Place Order
2. all the information in Sign in & Shipping stages will be saved in localstorage automatically
3. Payment stage: it implement Paypal API and show the summary of the order 

### admin mode
1. can check and modify the user's control mode (normal/admin)
2. can check and modify the details of products
3. can check and modify the details of orders
