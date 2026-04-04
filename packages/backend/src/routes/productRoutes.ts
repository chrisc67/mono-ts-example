import { productListSchema, productSchema } from "../schemas/productSchema.js";
import {
  getAllProducts,
  getProductById,
} from "../database/product/productReposity.js";
import { errorSchema } from "../schemas/errorSchema.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { BAD_REQUEST, NOT_AUTHORIZED, NOT_FOUND, SUCCESS } from "../constants/messages.js";
import { loadProducts } from "../database/product/loadProducts.js";
import { Product } from "../database/product/productTable.js";

export const getAllProductsRoute = {
  method: "GET",
  url: "/api/products",
  handler: async () => {
    let products: Product[] = [];
    
    products = await getAllProducts();  

    return { products: products };
  },
};

export const getProductRoute = {
  method: "GET",
  url: "/api/products/:id",
  schema: {
    response: {
      200: productSchema,
      400: errorSchema,
      404: errorSchema,
    },
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = <{ id: string }>request.params;

    try {
      const productId = parseInt(id);
      let foundProduct;
      foundProduct = await getProductById(productId);

      if (!foundProduct) {
        reply.code(404).send({ message: NOT_FOUND });
      }

      reply.code(200).send(foundProduct);
    } catch (err) {
      reply.code(400).send({ message: BAD_REQUEST });
    }
  },
};


export const postLoadAllProductsRoute = {
  method: "POST",
  url: "/api/products",
  schema: {
    response: {
      200: productListSchema,
      400: errorSchema,
      404: errorSchema,
    },
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      if (request.user.is_admin) {
        await loadProducts();
      } else  {
        reply.code(401).send({ message: NOT_AUTHORIZED });  
      }

      reply.code(200).send(SUCCESS);
    } catch (err) {
      reply.code(400).send({ message: BAD_REQUEST });
    }
  },
};
