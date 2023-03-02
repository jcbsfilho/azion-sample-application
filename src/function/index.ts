import { Request, Response } from "node-fetch";
import { router } from "./routes";

export interface Args {
  MY_ARG: string;
}

async function handleRequest(request: Request, args: Args) {
  
  if(!receiveRoutes[request.method]){
    return new Response(
      `{"message": "Ops... please check, something wrong with your request"}`,
      {
        headers: {
          "content-type": "application/json",
        },
        status: 405,
      }
    );
  }

  let status = 200;
  let result = {
    result: {
      message: "Ops... please check, something wrong with your request",
    },
  };

  const body = await receiveRoutes[request.method](request);

  result = await router(request, body, {
    myvar: args.MY_ARG,
  });

  return new Response(JSON.stringify(result), {
    headers: {
      "content-type": "application/json",
    },
    status: status,
  });
}

const receiveGet = async (request: Request): Promise<any> => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  return Promise.resolve({
    key: search,
    value: "",
  });
};

const receivePost = async (request: Request): Promise<any> => {
  const { message } = await request.json();
  return Promise.resolve({
    message
  });
};

const receiveRoutes: any = {
  GET: receiveGet,
  POST: receivePost,
};

export { handleRequest };
