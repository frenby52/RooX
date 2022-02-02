const getUserById = (props, users) => {
  const userId = Number(props.match.params.id);

  return users.find((user) => user.id === userId);
};

export {getUserById};
