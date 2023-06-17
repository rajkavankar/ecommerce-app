export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Estore API",
    description: "Ecommerce API for electronic gadget store",
    contact: {
      name: "Raj kavankar",
      url: "https://www.twitter.com/Rajkavankar",
      email: "rajkavankar@gmail.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Development server",
    },
  ],
  components: {
    // Security stratergies
    securitySchemes: {
      // Bearer auth start
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      // Bearer auth end
      // |------------------------|
      // Cookie auth start
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "token",
      },
      // Cookie auth end
    },

    // Database models
    schemas: {
      // User model start
      User: {
        type: "object",
        required: ["_id", "name", "email", "password", "isAdmin"],
        properties: {
          _id: {
            type: "string",
            format: "ObjectId",
          },
          name: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
            format: "password",
          },
          isAdmin: {
            type: "boolean",
            example: false,
          },
        },
      },
      // User model end
      // |------------------------|
      // Product model start
      Product: {
        type: "object",
        required: [
          "_id",
          "user",
          "name",
          "image",
          "brand",
          "category",
          "description",
          "rating",
          "numReviews",
          "price",
          "countInStock",
        ],
        properties: {
          _id: {
            type: "string",
            format: "ObjectId",
          },
          user: {
            type: "string",
            format: "ObjectId",
          },
          name: {
            type: "string",
          },
          image: {
            type: "string",
            format: "URL",
          },
          brand: {
            type: "string",
          },
          category: {
            type: "string",
          },
          description: {
            type: "string",
          },
          reviews: {
            type: "array",
            items: {
              type: "object",
              required: ["user", "name", "rating", "comment"],
              properties: {
                user: {
                  type: "string",
                  format: "ObjectId",
                },
                name: {
                  type: "string",
                },
                rating: {
                  type: "number",
                },
                comment: {
                  type: "string",
                },
              },
            },
          },
          rating: {
            type: "number",
          },
          numReviews: {
            type: "number",
          },
          price: {
            type: "number",
          },
          countInStock: {
            type: "number",
          },
        },
      },
      // Product model end
      // |------------------------|
      // Order model start
      Order: {
        type: "object",
        required: [
          "user",
          "orderItems",
          "shippingAddress",
          "paymentMethod",
          "paymentResults",
          "itemsPrice",
          "taxPrice",
          "shippingPrice",
          "totalPrice",
          "isPaid",
          "paidAt",
          "isDelivered",
          "deliveredAt",
        ],
        properties: {
          user: {
            type: "string",
            format: "ObjectId",
          },
          orderItems: {
            type: "array",
            items: {
              type: "object",
              required: ["name", "qty", "image", "price", "product"],
              properties: {
                name: {
                  type: "string",
                },
                qty: {
                  type: "number",
                },
                image: {
                  type: "string",
                  format: "URL",
                },
                price: {
                  type: "number",
                },
                product: {
                  type: "string",
                  format: "ObjectId",
                },
              },
            },
          },
          shippingAddress: {
            type: "object",
            required: ["address", "city", "postalCode", "country"],
            properties: {
              address: {
                type: "string",
              },
              city: {
                type: "string",
              },
              postalCode: {
                type: "string",
              },
              country: {
                type: "string",
              },
            },
          },
          paymentMethod: {
            type: "string",
          },
          paymentResults: {
            type: "object",
            required: ["id", "status", "update_time", "email_address"],
            properties: {
              id: {
                type: "string",
              },
              status: {
                type: "string",
              },
              update_time: {
                type: "string",
              },
              email_address: {
                type: "string",
                format: "email",
              },
            },
          },
          itemsPrice: {
            type: "number",
          },
          taxPrice: {
            type: "number",
          },
          shippingPrice: {
            type: "number",
          },
          totalPrice: {
            type: "number",
          },
          isPaid: {
            type: "boolean",
            example: false,
          },
          paidAt: {
            type: "date-time",
          },
          isDelivered: {
            type: "boolean",
            example: false,
          },
          deliveredAt: {
            type: "date-time",
          },
        },
      },
      // Order model end
      // |------------------------|
    },
  },

  paths: {
    "/products": {
      get: {
        tags: ["Product"],
        security: [
          {
            bearerAuth: [],
            cookieAuth: [],
          },
        ],
        summary: "Get all products",
        description: "Getting all products in database",
        responses: {
          200: {
            description: "A List of all products",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Product",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/products/{id}": {
      get: {
        tags: ["Product"],
        security: [
          {
            bearerAuth: [],
            cookieAuth: [],
          },
        ],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        summary: "Get a single product",
        description: "Getting a single product by id",
        responses: {
          200: {
            description: "Getting a single product by id",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
        },
      },
    },
  },
}
