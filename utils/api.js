export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://monkeetv-backend.herokuapp.com"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getRunningtexts() {
  const runningtexts = await fetchAPI("/runningtexts");
  return runningtexts;
}

export async function getRunningtext(slug) {
  const runningtexts = await fetchAPI(`/runningtexts?slug=${slug}`);
  return runningtexts?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}

export async function getSignatures() {
  const signatures = await fetchAPI("/signatures");
  return signatures;
}

export async function getSignature(slug) {
  const signatures = await fetchAPI(`/signatures?slug=${slug}`);
  return signatures?.[0];
}

export async function getTeas() {
  const teas = await fetchAPI("/teas");
  return teas;
}

export async function getTea(slug) {
  const teas = await fetchAPI(`/teas?slug=${slug}`);
  return teas?.[0];
}
export async function getEspressos() {
  const espressos = await fetchAPI("/espressos");
  return espressos;
}

export async function getEspresso(slug) {
  const espressos = await fetchAPI(`/espressos?slug=${slug}`);
  return espressos?.[0];
}
export async function getTraditionals() {
  const traditionals = await fetchAPI("/traditionals");
  return traditionals;
}

export async function getTraditional(slug) {
  const traditionals = await fetchAPI(`/traditionals?slug=${slug}`);
  return traditionals?.[0];
}

export async function getNoncoffees() {
  const noncoffees = await fetchAPI("/noncoffees");
  return noncoffees;
}

export async function getNoncoffee(slug) {
  const noncoffees = await fetchAPI(`/noncoffees?slug=${slug}`);
  return noncoffees?.[0];
}