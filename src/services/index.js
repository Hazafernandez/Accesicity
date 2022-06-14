export const getAllIssuesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/issues`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleIssueService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/issue/${id}`);

  const json = await response.json();

  if (response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerUserService = async ({ username, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendIssueService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/issue`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const updateIssueService = async ({ id, token, status }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/issue/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ status }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// OBTENER CIUDADES:

export const getCitiesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/cities`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// OBTENER BARRIOS:

export const getHoodsByCityService = async (city) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/hoods/?city=${city}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
