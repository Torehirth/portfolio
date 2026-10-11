interface FetchApiTypes<T> {
  url: string;
  method: string;
  formData: T;
}

export const fetchApi = async <T>({ url, method, formData }: FetchApiTypes<T>) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Something went wrong with the request");
  }
};
