import {User} from "./types";

const getUserById = (props: any, users: User[]): User => {
  const userId = Number(props.match.params.id);

  return users.find((user) => user.id === userId);
};

export {getUserById};
