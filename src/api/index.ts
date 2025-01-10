import axios from "axios";
import { IChild } from "../interfaces/child.interface";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const groupId = import.meta.env.VITE_GROUP_ID;
const institutionId = import.meta.env.VITE_INSTITUTION_ID;
const daycareGroupApiUrl = import.meta.env.VITE_DAYCARE_GROUP_API_URL;

const params = new URLSearchParams({
  accessToken,
  groupId,
  institutionId,
});

const jsonHeaders = { "Content-Type": "application/json; charset=UTF-8" };

export const fetchChildren = async (): Promise<IChild[]> => {
  const response = await axios.get(daycareGroupApiUrl, {
    params,
  });

  return response.data.children;
};

export const checkinChild = async (childId: string, pickupTime: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_FAMLY_CHILDREN_API_BASE_URL}${childId}/checkins`,
    {
      pickupTime,
      accessToken,
    },
    {
      headers: jsonHeaders,
    }
  );

  return response.data;
};

export const checkoutChild = async (childId: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_FAMLY_CHILDREN_API_BASE_URL}${childId}/checkout`,
    {
      accessToken,
    },
    {
      headers: jsonHeaders,
    }
  );

  return response.data;
};
