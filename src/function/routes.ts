import { Request } from "node-fetch";
import { ItemProps, routerGet, routerPost, ConfigProps} from '../lib/index';



type Router = {
    [x: string]: (props: ItemProps, args: ConfigProps) => Promise<any>
}

const routes: Router = {
    'GET': routerGet,
    'POST': routerPost
}

export async function router(request: Request, body: ItemProps, args: ConfigProps): Promise<any> {
    try {
      
      const result = await routes[request.method](body, args);
      
      return result;

    } catch (error) {
      return { result: "fail router", error: true };
    }
}




