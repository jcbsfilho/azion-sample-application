export interface ItemProps {
  message: string;
}

export interface ConfigProps {
  myvar: string;
}

export const routerGet = (props: ItemProps, config: ConfigProps) => {
  return Promise.resolve({
    hello: 'edge',
    message: config.myvar,
  });
};

export const routerPost = (props: ItemProps, config: ConfigProps) => {
  return Promise.resolve({
    hello: 'edge',
    message: config.myvar,
  });
};
