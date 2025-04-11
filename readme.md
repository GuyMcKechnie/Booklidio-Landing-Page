# Booklidio E-Commerce Store

## Overview

Booklidio is a modern e-commerce web application for buying and selling books online. It is built using React, Vite, and Tailwind CSS, offering a responsive and user-friendly experience.

## Features

*   **Browse Books:** Users can browse a wide selection of books.
*   **Product Details:** Detailed information about each book, including description, author, and price.
*   **Shopping Cart:** Add books to a shopping cart for purchase.
*   **User Authentication:** Secure user registration and login.
*   **Responsive Design:** Optimized for various screen sizes and devices.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A build tool that provides a fast and efficient development experience.
*   **Tailwind CSS:** A utility-first CSS framework for styling the application.
*   **Flowbite:** Open-source UI component library based on Tailwind CSS.
*   **Google Analytics:** For tracking user behavior and website traffic.

## Getting Started

### Prerequisites

*   Node.js (version >=18)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd booklidio-ecom-store
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the URL provided by Vite).

### Building for Production

1.  Build the application for production:

    ```bash
    npm run build
    # or
    yarn build
    ```

2.  The production-ready files will be in the `dist` directory.

## Google Analytics

This project uses Google Analytics to track user behavior. The Google Analytics tracking code is included in the `index.html` file:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y1BEQGFMCR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y1BEQGFMCR');
</script>
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is licensed under the [MIT License](LICENSE).

