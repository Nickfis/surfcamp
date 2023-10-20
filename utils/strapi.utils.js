import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processInfoBlocks(data) {
  const infoBlocksRaw = data.attributes.info_blocks.data;
  return infoBlocksRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
    id: infoBlock.id,
  }));
}
