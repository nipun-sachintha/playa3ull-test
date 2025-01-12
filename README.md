This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Instructions to run the application locally:

Setting up Saleor.[Ecommerce platform]

1. Go to https://cloud.saleor.io/ . This is a Ecommerce platform and used as a store which contains products of different categories

2. Signin and create organization and Then create Project.

3. Loginto Organization then to project and go to dashboard.

4. Add Collections and assign products.

5. Under the availability make visible those channels[default channel].

6. When you click the project you can identify the domain name.

Clone this github project and create .env file

Add Following environmental variables to .env file

    NEXT_PUBLIC_SALEOR_API_URL= DOMAIN NAME of your project which is in saleor cloud
    NEXT_PUBLIC_STOREFRONT_URL= http://localhost:3000

Start the local server using following.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Deployed in Vercel. You can access to production through below URL

https://playa3ull-test.vercel.app/

## Thought process and any architectural decisions

This project integrates a **Saleor Cloud Store** (similar to Shopify) with a **Next.js** application to build a robust e-commerce platform.

## **Features**

- **Product Management**: Display products fetched from the Saleor cloud store.
- **Categories**: Used categories as filters to organize and navigate products. Designed to be scalable for future enhancements.
- **Product Details**: Detailed view of individual products with comprehensive information.
- **Search Functionality**: Integrated a search bar to quickly find products.
- **Cart Management**: Added functionality for adding and removing items in the cart.

## **Component Design**

- **Single Responsibility Principle**:  
  Separated main components based on specific functionalities to achieve clear modularity.
- **Reusable Components**:  
  Developed common UI components to enhance reusability and reduce redundant code.
- **Small, Meaningful Child Components**:  
  Avoided creating large components by dividing functionality into smaller, focused child components.

## **Integration with Saleor**

- **GraphQL Queries**:  
  Used GraphQL queries to fetch data (products, categories, etc.) from the Saleor cloud store for seamless integration.

## **Development Best Practices**

- Followed clean code principles to ensure scalability and maintainability.
- Modularized code for better readability and flexibility for future improvements.
